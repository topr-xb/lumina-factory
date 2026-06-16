import { Queue, Worker, Job } from 'bullmq';
import { createAdminClient } from '@/lib/supabase/admin';
import { getConfigNumber } from '@/lib/config';
import { refundCredits } from '@/lib/billing';
import {
  buildGenerationPayload,
  submitGenerationJob,
  getJobStatus,
  getJobResult,
  validateGenerationPayload,
} from '@/lib/fal';
import type { ProductionBatch, DNAProfile, ThinkingLevel } from '@/types';

/**
 * BullMQ queue system for async batch processing.
 * Throttled concurrency, Error Jail, and refund-on-failure.
 */

const redisConnection = {
  url: process.env.REDIS_URL || 'redis://localhost:6379',
  maxRetriesPerRequest: null,
};

let generationQueueInstance: Queue<GenerationJobData> | null = null;

export function getGenerationQueue(): Queue<GenerationJobData> {
  if (!generationQueueInstance) {
    generationQueueInstance = new Queue('lumina-generation', {
      connection: redisConnection as any,
      defaultJobOptions: {
        attempts: 3,
        backoff: { type: 'exponential', delay: 5000 },
        removeOnComplete: { count: 100 },
        removeOnFail: { count: 500 },
      },
    });
  }
  return generationQueueInstance;
}

// Backward-compatible export (lazy)
export const generationQueue = new Proxy({} as Queue<GenerationJobData>, {
  get(_target, prop) {
    const queue = getGenerationQueue();
    return (queue as any)[prop];
  },
});

export interface GenerationJobData {
  nodeId: string;
  batchId: string;
  userId: string;
  dnaProfileId?: string;
  productImageUrl: string;
  seed: number;
  index: number;
  cost: number;
}

export async function enqueueBatch(batchId: string, userId: string): Promise<void> {
  const supabase = createAdminClient();

  const { data: batch } = await supabase
    .from('production_batches')
    .select('*')
    .eq('id', batchId)
    .single();

  if (!batch) throw new Error('Batch not found');

  const { data: dnaProfile } = await supabase
    .from('dna_profiles')
    .select('*')
    .eq('id', batch.dna_profile_id)
    .single();

  const { data: nodes } = await supabase
    .from('image_nodes')
    .select('*')
    .eq('batch_id', batchId)
    .eq('status', 'pending');

  if (!nodes || nodes.length === 0) return;

  const concurrency = await getConfigNumber('max_concurrent_jobs', 4);

  const jobs = nodes.map((node, index) => ({
    name: `generate-${node.id}`,
    data: {
      nodeId: node.id,
      batchId: batch.id,
      userId,
      dnaProfileId: batch.dna_profile_id,
      productImageUrl: node.original_image_url,
      seed: node.seed_used ?? Math.floor(Math.random() * 1_000_000),
      index,
      cost: node.cost,
    } satisfies GenerationJobData,
  }));

  await getGenerationQueue().addBulk(jobs);

  // Update batch status
  await supabase
    .from('production_batches')
    .update({ status: 'processing', updated_at: new Date().toISOString() })
    .eq('id', batchId);

  // Spawn worker lazily if not already running (dev mode)
  if (!workerInstance) {
    startWorker(concurrency);
  }
}

let workerInstance: Worker | null = null;

export function startWorker(concurrency = 4) {
  if (workerInstance) return workerInstance;

  workerInstance = new Worker<GenerationJobData>(
    'lumina-generation',
    async (job) => processGenerationJob(job),
    {
      connection: redisConnection as any,
      concurrency,
      limiter: {
        max: 10,
        duration: 60_000, // 10 jobs per minute by default
      },
    }
  );

  workerInstance.on('failed', (job, err) => {
    console.error(`Job ${job?.id} failed:`, err);
  });

  return workerInstance;
}

async function processGenerationJob(job: Job<GenerationJobData>) {
  const { nodeId, batchId, userId, dnaProfileId, productImageUrl, seed, cost } = job.data;
  const supabase = createAdminClient();

  // Fetch DNA profile
  const { data: dnaProfile } = await supabase
    .from('dna_profiles')
    .select('*')
    .eq('id', dnaProfileId)
    .single();

  if (!dnaProfile) {
    await failNode(supabase, nodeId, batchId, userId, cost, 'DNA profile not found');
    return;
  }

  // Fetch batch generation params for accurate billing parity
  const { data: batch } = await supabase
    .from('production_batches')
    .select('*')
    .eq('id', batchId)
    .single();

  const genParams = (batch?.generation_params || {}) as Record<string, unknown>;

  // Build payload
  const payload = await buildGenerationPayload({
    prompt: buildPrompt(dnaProfile),
    systemPrompt: dnaProfile.base_prompt,
    decorImageUrl: dnaProfile.decor_image_url,
    productImageUrl,
    numImages: 1,
    resolution: (genParams.resolution as any) || (dnaProfile.resolution as any),
    aspectRatio: (genParams.aspect_ratio as any) || (dnaProfile.aspect_ratio as any),
    seed,
    thinkingLevel: (genParams.thinking_level as ThinkingLevel) || 'low',
    enableWebSearch: false,
    outputFormat: 'png',
    safetyTolerance: (await getConfigNumber('safety_tolerance', 4)) as any,
  });

  const validation = await validateGenerationPayload(payload);
  if (!validation.valid) {
    await failNode(supabase, nodeId, batchId, userId, cost, validation.errors.join('; '));
    return;
  }

  // Mark node as processing
  await supabase
    .from('image_nodes')
    .update({ status: 'processing', updated_at: new Date().toISOString() })
    .eq('id', nodeId);

  try {
    const submitResult = await submitGenerationJob(payload);
    const requestId = submitResult.request_id;

    // Poll for result with timeout
    const result = (await pollForResult(requestId, 120_000)) as any;

    if (!result || !result.images || result.images.length === 0) {
      throw new Error('No images returned from fal.ai');
    }

    const imageUrl = result.images[0].url as string;

    await supabase
      .from('image_nodes')
      .update({
        generated_image_url: imageUrl,
        status: 'success',
        seed_used: seed,
        updated_at: new Date().toISOString(),
      })
      .eq('id', nodeId);

    await updateBatchStats(supabase, batchId);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    await failNode(supabase, nodeId, batchId, userId, cost, message);
  }
}

async function pollForResult(requestId: string, timeoutMs: number) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    const status = (await getJobStatus(requestId)) as any;
    if (status.status === 'COMPLETED') {
      return getJobResult(requestId);
    }
    if (status.status === 'FAILED') {
      throw new Error('fal.ai job failed');
    }
    await new Promise((r) => setTimeout(r, 3000));
  }
  throw new Error('fal.ai job polling timeout');
}

async function failNode(
  supabase: ReturnType<typeof createAdminClient>,
  nodeId: string,
  batchId: string,
  userId: string,
  cost: number,
  reason: string
) {
  await supabase
    .from('image_nodes')
    .update({
      status: 'failed',
      error_reason: reason,
      updated_at: new Date().toISOString(),
    })
    .eq('id', nodeId);

  // Refund credits for failed generation
  if (cost > 0) {
    await refundCredits(userId, cost, { batchId, nodeId, description: `Refund for failed node: ${reason}` });
  }

  await updateBatchStats(supabase, batchId);
}

async function updateBatchStats(
  supabase: ReturnType<typeof createAdminClient>,
  batchId: string
) {
  const { data: stats } = await supabase
    .from('image_nodes')
    .select('status')
    .eq('batch_id', batchId);

  if (!stats) return;

  const total = stats.length;
  const success = stats.filter((s) => s.status === 'success').length;
  const failed = stats.filter((s) => s.status === 'failed').length;
  const processing = stats.filter((s) => s.status === 'processing').length;

  const newStatus: ProductionBatch['status'] =
    processing > 0 ? 'processing' : failed === 0 ? 'completed' : success === 0 ? 'partial_error' : 'partial_error';

  await supabase
    .from('production_batches')
    .update({
      total_images: total,
      successful_images: success,
      failed_images: failed,
      status: newStatus,
      updated_at: new Date().toISOString(),
    })
    .eq('id', batchId);
}

function buildPrompt(dnaProfile: DNAProfile): string {
  const base = dnaProfile.base_prompt?.trim() || '';
  const position = dnaProfile.product_position;
  const scale = Math.round(dnaProfile.product_scale * 100);

  const extra = [
    `Product placed ${position} of frame, approximately ${scale}% of frame height.`,
    'Match the lighting, shadows, reflections, and mood of the reference studio exactly.',
    'Photorealistic product photography, seamless integration.',
  ].join(' ');

  return base ? `${base}. ${extra}` : extra;
}
