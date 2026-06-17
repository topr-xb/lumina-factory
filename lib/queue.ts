import { createAdminClient } from '@/lib/supabase/admin';
import { getConfigNumber } from '@/lib/config';
import { refundCredits } from '@/lib/billing';
import {
  buildGenerationPayload,
  submitGenerationJob,
  validateGenerationPayload,
} from '@/lib/fal';
import type { ProductionBatch, DNAProfile, ThinkingLevel } from '@/types';

/**
 * Async generation dispatcher.
 * Submits jobs to fal.ai with a webhook URL so results come back asynchronously.
 * No persistent worker is needed — ideal for serverless deployments.
 */

export interface GenerationContext {
  nodeId: string;
  batchId: string;
  userId: string;
  dnaProfileId?: string;
  productImageUrl: string;
  seed: number;
  cost: number;
  origin: string;
}

export async function enqueueBatch(batchId: string, userId: string, origin?: string): Promise<void> {
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

  if (!dnaProfile) throw new Error('DNA profile not found');

  const { data: nodes } = await supabase
    .from('image_nodes')
    .select('*')
    .eq('batch_id', batchId)
    .eq('status', 'pending');

  if (!nodes || nodes.length === 0) return;

  // Update batch status
  await supabase
    .from('production_batches')
    .update({ status: 'processing', updated_at: new Date().toISOString() })
    .eq('id', batchId);

  // Submit each node to fal.ai with webhook callback
  const concurrency = await getConfigNumber('max_concurrent_jobs', 4);
  for (let i = 0; i < nodes.length; i += concurrency) {
    const chunk = nodes.slice(i, i + concurrency);
    await Promise.all(
      chunk.map((node) =>
        submitGenerationNode({
          nodeId: node.id,
          batchId: batch.id,
          userId,
          dnaProfileId: batch.dna_profile_id,
          productImageUrl: node.original_image_url,
          seed: node.seed_used ?? Math.floor(Math.random() * 1_000_000),
          cost: node.cost,
          origin: origin || process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_APP_URL || 'https://lumina-factory.netlify.app',
        })
      )
    );
  }
}

export async function submitGenerationNode(ctx: GenerationContext) {
  const { nodeId, batchId, userId, dnaProfileId, productImageUrl, seed, cost } = ctx;
  const supabase = createAdminClient();

  const { data: dnaProfile } = await supabase
    .from('dna_profiles')
    .select('*')
    .eq('id', dnaProfileId)
    .single();

  if (!dnaProfile) {
    await failNode(supabase, nodeId, batchId, userId, cost, 'DNA profile not found');
    return;
  }

  const { data: batch } = await supabase
    .from('production_batches')
    .select('*')
    .eq('id', batchId)
    .single();

  const genParams = (batch?.generation_params || {}) as Record<string, unknown>;

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

  await supabase
    .from('image_nodes')
    .update({ status: 'processing', updated_at: new Date().toISOString() })
    .eq('id', nodeId);

  try {
    const webhookUrl = buildWebhookUrl({ nodeId, batchId, userId, cost, origin: ctx.origin });
    await submitGenerationJob(payload, webhookUrl);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    await failNode(supabase, nodeId, batchId, userId, cost, message);
  }
}

function buildWebhookUrl(ctx: { nodeId: string; batchId: string; userId: string; cost: number; origin: string }) {
  const baseUrl = ctx.origin;
  const secret = process.env.FAL_WEBHOOK_SECRET;
  if (!secret) {
    throw new Error('FAL_WEBHOOK_SECRET is not configured');
  }

  const url = new URL('/api/webhooks/fal', baseUrl);
  url.searchParams.set('secret', secret);
  url.searchParams.set('node_id', ctx.nodeId);
  url.searchParams.set('batch_id', ctx.batchId);
  url.searchParams.set('user_id', ctx.userId);
  url.searchParams.set('cost', String(ctx.cost));
  return url.toString();
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
