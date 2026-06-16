export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      system_configs: {
        Row: {
          config_key: string;
          config_value: Json;
          updated_at: string;
        };
        Insert: {
          config_key: string;
          config_value?: Json;
          updated_at?: string;
        };
        Update: {
          config_key?: string;
          config_value?: Json;
          updated_at?: string;
        };
      };
      profiles: {
        Row: {
          id: string;
          email: string | null;
          full_name: string | null;
          role: 'user' | 'admin' | 'accountant';
          approval_status: 'pending' | 'approved' | 'rejected';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email?: string | null;
          full_name?: string | null;
          role?: 'user' | 'admin' | 'accountant';
          approval_status?: 'pending' | 'approved' | 'rejected';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string | null;
          full_name?: string | null;
          role?: 'user' | 'admin' | 'accountant';
          approval_status?: 'pending' | 'approved' | 'rejected';
          created_at?: string;
          updated_at?: string;
        };
      };
      user_wallets: {
        Row: {
          user_id: string;
          available_credits: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          user_id: string;
          available_credits?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          user_id?: string;
          available_credits?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      audit_logs: {
        Row: {
          id: string;
          user_id: string;
          batch_id: string | null;
          node_id: string | null;
          transaction_type: 'debit' | 'credit' | 'refund';
          amount: number;
          balance_after: number | null;
          description: string | null;
          generation_params: Json;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          batch_id?: string | null;
          node_id?: string | null;
          transaction_type: 'debit' | 'credit' | 'refund';
          amount: number;
          balance_after?: number | null;
          description?: string | null;
          generation_params?: Json;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          batch_id?: string | null;
          node_id?: string | null;
          transaction_type?: 'debit' | 'credit' | 'refund';
          amount?: number;
          balance_after?: number | null;
          description?: string | null;
          generation_params?: Json;
          created_at?: string;
        };
      };
      dna_profiles: {
        Row: {
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
          metadata: Json;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          name: string;
          description?: string | null;
          decor_image_url: string;
          logo_url?: string | null;
          product_position?: string;
          product_scale?: number;
          base_prompt?: string | null;
          aspect_ratio?: string;
          resolution?: string;
          is_public?: boolean;
          metadata?: Json;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          name?: string;
          description?: string | null;
          decor_image_url?: string;
          logo_url?: string | null;
          product_position?: string;
          product_scale?: number;
          base_prompt?: string | null;
          aspect_ratio?: string;
          resolution?: string;
          is_public?: boolean;
          metadata?: Json;
          created_at?: string;
          updated_at?: string;
        };
      };
      production_batches: {
        Row: {
          id: string;
          user_id: string;
          dna_profile_id: string | null;
          name: string;
          status: string;
          total_images: number;
          successful_images: number;
          failed_images: number;
          total_cost: number;
          generation_params: Json;
          canvas_position: Json;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          dna_profile_id?: string | null;
          name: string;
          status?: string;
          total_images?: number;
          successful_images?: number;
          failed_images?: number;
          total_cost?: number;
          generation_params?: Json;
          canvas_position?: Json;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          dna_profile_id?: string | null;
          name?: string;
          status?: string;
          total_images?: number;
          successful_images?: number;
          failed_images?: number;
          total_cost?: number;
          generation_params?: Json;
          canvas_position?: Json;
          created_at?: string;
          updated_at?: string;
        };
      };
      image_nodes: {
        Row: {
          id: string;
          batch_id: string;
          user_id: string;
          original_image_url: string | null;
          generated_image_url: string | null;
          status: string;
          error_reason: string | null;
          seed_used: number | null;
          cost: number;
          canvas_position: Json;
          metadata: Json;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          batch_id: string;
          user_id: string;
          original_image_url?: string | null;
          generated_image_url?: string | null;
          status?: string;
          error_reason?: string | null;
          seed_used?: number | null;
          cost?: number;
          canvas_position?: Json;
          metadata?: Json;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          batch_id?: string;
          user_id?: string;
          original_image_url?: string | null;
          generated_image_url?: string | null;
          status?: string;
          error_reason?: string | null;
          seed_used?: number | null;
          cost?: number;
          canvas_position?: Json;
          metadata?: Json;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
    Functions: {
      get_config: {
        Args: { p_key: string; p_default?: Json };
        Returns: Json;
      };
      calculate_cost: {
        Args: { p_resolution: string; p_num_images: number; p_thinking_level?: string; p_addons?: Json };
        Returns: number;
      };
      spend_credits: {
        Args: {
          p_user_id: string;
          p_amount: number;
          p_batch_id?: string;
          p_node_id?: string;
          p_description?: string;
          p_generation_params?: Json;
        };
        Returns: boolean;
      };
      refund_credits: {
        Args: {
          p_user_id: string;
          p_amount: number;
          p_batch_id?: string;
          p_node_id?: string;
          p_description?: string;
        };
        Returns: boolean;
      };
    };
  };
}
