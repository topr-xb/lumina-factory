import { createAdminClient } from '@/lib/supabase/admin';
import { getConfigNumber } from '@/lib/config';
import type { Resolution, AspectRatio, ThinkingLevel, CostEstimate } from '@/types';

/**
 * Dynamic billing engine.
 * All numbers come from system_configs — no hardcoded prices.
 */

export async function calculateCost(params: {
  resolution: Resolution;
  aspect_ratio: AspectRatio;
  num_images: number;
  thinking_level?: ThinkingLevel;
  enable_web_search?: boolean;
}): Promise<CostEstimate> {
  const { resolution, aspect_ratio, num_images, thinking_level = 'low', enable_web_search = false } = params;

  const baseCost = await getConfigNumber('base_cost_1k', 0.08);

  const multiplierKey = `multiplier_${resolution.toLowerCase().replace('.', '_')}`;
  const resolutionMultiplier = await getConfigNumber(multiplierKey, 1.0);

  const costPerImage = baseCost * resolutionMultiplier;
  const thinkingAddOn = thinking_level === 'high' ? await getConfigNumber('addon_thinking_high', 0.002) : 0;
  const webSearchAddOn = enable_web_search ? await getConfigNumber('addon_web_search', 0.015) : 0;

  const finalCostPerImage = costPerImage + thinkingAddOn + webSearchAddOn;
  const totalCost = finalCostPerImage * Math.max(1, num_images);

  return {
    resolution,
    aspect_ratio,
    num_images: Math.max(1, num_images),
    thinking_level: thinking_level,
    cost_per_image: Number(finalCostPerImage.toFixed(6)),
    total_cost: Number(totalCost.toFixed(6)),
    currency: 'USD',
  };
}

export async function getWallet(userId: string) {
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from('user_wallets')
    .select('*')
    .eq('user_id', userId)
    .single();

  if (error) throw error;
  return data;
}

export async function hasEnoughCredits(userId: string, requiredCredits: number): Promise<boolean> {
  const wallet = await getWallet(userId);
  return Number(wallet.available_credits) >= requiredCredits;
}

export async function spendCredits(
  userId: string,
  amount: number,
  meta?: {
    batchId?: string;
    nodeId?: string;
    description?: string;
    generationParams?: Record<string, unknown>;
  }
): Promise<boolean> {
  const supabase = createAdminClient();
  const { data, error } = await supabase.rpc('spend_credits', {
    p_user_id: userId,
    p_amount: amount,
    p_batch_id: meta?.batchId ?? null,
    p_node_id: meta?.nodeId ?? null,
    p_description: meta?.description ?? 'Generation cost',
    p_generation_params: meta?.generationParams ?? {},
  });

  if (error) {
    console.error('spend_credits error:', error);
    return false;
  }

  return data === true;
}

export async function refundCredits(
  userId: string,
  amount: number,
  meta?: {
    batchId?: string;
    nodeId?: string;
    description?: string;
  }
): Promise<boolean> {
  const supabase = createAdminClient();
  const { data, error } = await supabase.rpc('refund_credits', {
    p_user_id: userId,
    p_amount: amount,
    p_batch_id: meta?.batchId ?? null,
    p_node_id: meta?.nodeId ?? null,
    p_description: meta?.description ?? 'Generation refund',
  });

  if (error) {
    console.error('refund_credits error:', error);
    return false;
  }

  return data === true;
}
