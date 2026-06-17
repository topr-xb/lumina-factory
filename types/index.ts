export type UserRole = 'user' | 'admin' | 'accountant';
export type ApprovalStatus = 'pending' | 'approved' | 'rejected';
export type BatchStatus = 'pending' | 'processing' | 'completed' | 'partial_error' | 'cancelled';
export type NodeStatus = 'pending' | 'processing' | 'success' | 'failed';
export type Resolution = '0.5K' | '1K' | '2K' | '4K';
export type AspectRatio = '16:9' | '4:3' | '1:1' | '4:5' | '9:16' | '4:1' | '1:4' | '8:1' | '1:8';
export type ThinkingLevel = 'low' | 'high';

export interface SystemConfig {
  config_key: string;
  config_value: unknown;
  updated_at: string;
}

export interface Profile {
  id: string;
  email: string | null;
  full_name: string | null;
  role: UserRole;
  approval_status: ApprovalStatus;
  created_at: string;
  updated_at: string;
}

export interface UserWallet {
  user_id: string;
  available_credits: number;
  created_at: string;
  updated_at: string;
}

export interface DNAProfile {
  id: string;
  user_id: string;
  name: string;
  description: string | null;
  decor_image_url: string;
  logo_url: string | null;
  product_position: string;
  product_scale: number;
  base_prompt: string | null;
  aspect_ratio: string;
  resolution: string;
  is_public: boolean;
  metadata: Record<string, unknown>;
  created_at: string;
  updated_at: string;
}

export interface ProductionBatch {
  id: string;
  user_id: string;
  dna_profile_id: string | null;
  name: string;
  status: BatchStatus;
  total_images: number;
  successful_images: number;
  failed_images: number;
  total_cost: number;
  generation_params: Record<string, unknown>;
  canvas_position: { x: number; y: number };
  created_at: string;
  updated_at: string;
}

export interface ImageNode {
  id: string;
  batch_id: string;
  user_id: string;
  original_image_url: string | null;
  generated_image_url: string | null;
  status: NodeStatus;
  error_reason: string | null;
  seed_used: number | null;
  cost: number;
  canvas_position: { x: number; y: number };
  metadata: Record<string, unknown>;
  created_at: string;
  updated_at: string;
}

export interface AuditLog {
  id: string;
  user_id: string;
  batch_id: string | null;
  node_id: string | null;
  transaction_type: 'debit' | 'credit' | 'refund';
  amount: number;
  balance_after: number | null;
  description: string | null;
  generation_params: Record<string, unknown>;
  created_at: string;
}

export interface GenerationPayload {
  prompt: string;
  image_urls: string[];
  num_images: number;
  resolution?: Resolution;
  aspect_ratio?: AspectRatio;
  seed?: number;
  thinking_level?: 'high' | 'minimal';
  system_prompt?: string;
  enable_web_search?: boolean;
  output_format?: 'jpeg' | 'png' | 'webp';
  safety_tolerance?: string;
  limit_generations?: boolean;
  [key: string]: unknown;
}

export interface CostEstimate {
  resolution: Resolution;
  aspect_ratio: AspectRatio;
  num_images: number;
  thinking_level: ThinkingLevel;
  cost_per_image: number;
  total_cost: number;
  currency: string;
}
