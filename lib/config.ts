import { createAdminClient } from '@/lib/supabase/admin';

/**
 * Centralized, live configuration fetcher.
 * Zero hardcoding: every price, endpoint, and limit is read from system_configs.
 */

const configCache = new Map<string, { value: unknown; expires: number }>();
const CONFIG_TTL_MS = 10_000; // Refresh every 10 seconds for live updates

export async function getConfig<T = unknown>(key: string, defaultValue?: T): Promise<T> {
  const now = Date.now();
  const cached = configCache.get(key);

  if (cached && cached.expires > now) {
    return cached.value as T;
  }

  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from('system_configs')
    .select('config_value')
    .eq('config_key', key)
    .single();

  if (error || !data) {
    if (defaultValue !== undefined) return defaultValue;
    throw new Error(`Missing system config: ${key}`);
  }

  configCache.set(key, { value: data.config_value as T, expires: now + CONFIG_TTL_MS });
  return data.config_value as T;
}

export async function getConfigNumber(key: string, defaultValue: number): Promise<number> {
  const value = await getConfig(key, defaultValue);
  if (typeof value === 'number') return value;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : defaultValue;
}

export async function getConfigString(key: string, defaultValue: string): Promise<string> {
  const value = await getConfig(key, defaultValue);
  if (typeof value === 'string') return value;
  return JSON.stringify(value);
}

export async function getConfigArray<T>(key: string, defaultValue: T[]): Promise<T[]> {
  const value = await getConfig(key, defaultValue);
  if (Array.isArray(value)) return value;
  return defaultValue;
}

export async function setConfig(key: string, value: unknown): Promise<void> {
  const supabase = createAdminClient();
  const { error } = await supabase
    .from('system_configs')
    .upsert({ config_key: key, config_value: value, updated_at: new Date().toISOString() });

  if (error) throw error;
  configCache.delete(key);
}

// Preload common config keys for API routes
export async function preloadConfig(): Promise<{
  falApiEndpoint: string;
  falApiModel: string;
  baseCost1k: number;
  multiplier0_5k: number;
  multiplier1k: number;
  multiplier2k: number;
  multiplier4k: number;
  multiplierThinkingHigh: number;
  maxBatchSize: number;
  maxConcurrentJobs: number;
  defaultAspectRatio: string;
  defaultResolution: string;
  supportedAspectRatios: string[];
  supportedResolutions: string[];
}> {
  const [
    falApiEndpoint,
    falApiModel,
    baseCost1k,
    multiplier0_5k,
    multiplier1k,
    multiplier2k,
    multiplier4k,
    multiplierThinkingHigh,
    maxBatchSize,
    maxConcurrentJobs,
    defaultAspectRatio,
    defaultResolution,
    supportedAspectRatios,
    supportedResolutions,
  ] = await Promise.all([
    getConfigString('fal_api_endpoint', 'https://queue.fal.run/fal-ai/nano-banana-2/edit'),
    getConfigString('fal_api_model', 'fal-ai/nano-banana-2/edit'),
    getConfigNumber('base_cost_1k', 0.08),
    getConfigNumber('multiplier_0_5k', 0.6),
    getConfigNumber('multiplier_1k', 1.0),
    getConfigNumber('multiplier_2k', 1.8),
    getConfigNumber('multiplier_4k', 3.2),
    getConfigNumber('multiplier_thinking_high', 1.5),
    getConfigNumber('max_batch_size', 1000),
    getConfigNumber('max_concurrent_jobs', 4),
    getConfigString('default_aspect_ratio', '1:1'),
    getConfigString('default_resolution', '1K'),
    getConfigArray<string>('supported_aspect_ratios', ['1:1', '4:3', '16:9']),
    getConfigArray<string>('supported_resolutions', ['0.5K', '1K', '2K', '4K']),
  ]);

  return {
    falApiEndpoint,
    falApiModel,
    baseCost1k,
    multiplier0_5k,
    multiplier1k,
    multiplier2k,
    multiplier4k,
    multiplierThinkingHigh,
    maxBatchSize,
    maxConcurrentJobs,
    defaultAspectRatio,
    defaultResolution,
    supportedAspectRatios,
    supportedResolutions,
  };
}
