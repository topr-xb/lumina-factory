import { fal } from '@fal-ai/client';
import { getConfigString, getConfigArray } from '@/lib/config';
import type { GenerationPayload, Resolution, AspectRatio, ThinkingLevel } from '@/types';

/**
 * Dynamic payload constructor for fal.ai Nano Banana 2.
 * No hardcoded endpoints, models, or validation lists.
 */

export function initFalClient() {
  const apiKey = process.env.FAL_KEY;
  if (!apiKey) {
    throw new Error('FAL_KEY environment variable is not set');
  }
  fal.config({ credentials: apiKey });
}

export async function validateGenerationPayload(payload: GenerationPayload): Promise<{
  valid: boolean;
  errors: string[];
}> {
  const errors: string[] = [];

  if (!payload.prompt || payload.prompt.trim().length < 3) {
    errors.push('Prompt must be at least 3 characters');
  }

  if (!Array.isArray(payload.image_urls) || payload.image_urls.length < 2) {
    errors.push('At least 2 image URLs are required (decor + product)');
  }

  if (payload.num_images < 1 || payload.num_images > 4) {
    errors.push('num_images must be between 1 and 4');
  }

  const supportedResolutions = await getConfigArray<string>('supported_resolutions', ['0.5K', '1K', '2K', '4K']);
  if (payload.resolution && !supportedResolutions.includes(payload.resolution)) {
    errors.push(`Unsupported resolution: ${payload.resolution}`);
  }

  const supportedRatios = await getConfigArray<string>(
    'supported_aspect_ratios',
    ['16:9', '4:3', '1:1', '4:5', '9:16', '4:1', '1:4', '8:1', '1:8']
  );
  if (payload.aspect_ratio && !supportedRatios.includes(payload.aspect_ratio)) {
    errors.push(`Unsupported aspect ratio: ${payload.aspect_ratio}`);
  }

  return { valid: errors.length === 0, errors };
}

export async function buildGenerationPayload(params: {
  prompt: string;
  decorImageUrl: string;
  productImageUrl: string;
  numImages: number;
  resolution?: Resolution;
  aspectRatio?: AspectRatio;
  seed?: number;
  thinkingLevel?: ThinkingLevel;
}): Promise<GenerationPayload> {
  const payload: GenerationPayload = {
    prompt: params.prompt,
    image_urls: [params.decorImageUrl, params.productImageUrl],
    num_images: Math.min(4, Math.max(1, params.numImages)),
  };

  if (params.resolution) payload.resolution = params.resolution;
  if (params.aspectRatio) payload.aspect_ratio = params.aspectRatio;
  if (typeof params.seed === 'number') payload.seed = params.seed;
  if (params.thinkingLevel === 'high') {
    payload.thinking_level = 'high';
  }

  // Explicitly request limited generations for predictable outputs
  payload.limit_generations = true;

  return payload;
}

export async function submitGenerationJob(payload: GenerationPayload) {
  initFalClient();

  const endpoint = await getConfigString('fal_api_endpoint', 'https://queue.fal.run/fal-ai/nano-banana-2/edit');
  const model = await getConfigString('fal_api_model', 'fal-ai/nano-banana-2/edit');

  // Prefer model-based queue endpoint if endpoint key is not configured
  const targetEndpoint = endpoint.includes('queue.fal.run')
    ? endpoint
    : `https://queue.fal.run/${model}`;

  const result = await fal.queue.submit(targetEndpoint, {
    input: payload as Record<string, unknown>,
  });

  return result;
}

export async function getJobStatus(requestId: string) {
  initFalClient();
  const endpoint = await getConfigString('fal_api_endpoint', 'https://queue.fal.run/fal-ai/nano-banana-2/edit');
  const model = await getConfigString('fal_api_model', 'fal-ai/nano-banana-2/edit');
  const targetEndpoint = endpoint.includes('queue.fal.run')
    ? endpoint
    : `https://queue.fal.run/${model}`;

  return fal.queue.status(targetEndpoint, { requestId });
}

export async function getJobResult(requestId: string) {
  initFalClient();
  const endpoint = await getConfigString('fal_api_endpoint', 'https://queue.fal.run/fal-ai/nano-banana-2/edit');
  const model = await getConfigString('fal_api_model', 'fal-ai/nano-banana-2/edit');
  const targetEndpoint = endpoint.includes('queue.fal.run')
    ? endpoint
    : `https://queue.fal.run/${model}`;

  return fal.queue.result(targetEndpoint, { requestId });
}
