-- ============================================================
-- Lumina Factory - Supabase Schema
-- Version: 1.0.0
-- Principles:
--   * Zero hardcoding — all prices, endpoints, keys live in system_configs
--   * Row Level Security (RLS) enabled on all tenant tables
--   * Usage-based billing with wallet + audit logs
--   * Batch/Node model for Spatial Canvas + Error Jail
-- ============================================================

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ============================================================
-- 1. Centralized Configuration Intelligence Node
-- ============================================================
CREATE TABLE IF NOT EXISTS system_configs (
    config_key VARCHAR(255) PRIMARY KEY,
    config_value JSONB NOT NULL DEFAULT '{}'::jsonb,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE system_configs ENABLE ROW LEVEL SECURITY;

-- Everyone can read system configs (needed by client cost calculators)
DROP POLICY IF EXISTS "Allow public read on system_configs" ON system_configs;
CREATE POLICY "Allow public read on system_configs"
    ON system_configs
    FOR SELECT
    TO PUBLIC
    USING (true);

-- Only service role / admin can write configs (handled by bypass RLS or admin policy)
DROP POLICY IF EXISTS "Allow admin write on system_configs" ON system_configs;
CREATE POLICY "Allow admin write on system_configs"
    ON system_configs
    FOR ALL
    TO authenticated
    USING (auth.jwt() ->> 'role' = 'admin')
    WITH CHECK (auth.jwt() ->> 'role' = 'admin');

-- Helper to fetch a config value with fallback
CREATE OR REPLACE FUNCTION get_config(p_key VARCHAR, p_default JSONB DEFAULT NULL)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    RETURN COALESCE(
        (SELECT config_value FROM system_configs WHERE config_key = p_key),
        p_default
    );
END;
$$;

-- ============================================================
-- 2. User Profiles + Wallets
-- ============================================================
CREATE TABLE IF NOT EXISTS profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT,
    full_name TEXT,
    role TEXT NOT NULL DEFAULT 'user' CHECK (role IN ('user', 'admin', 'accountant')),
    approval_status TEXT NOT NULL DEFAULT 'approved' CHECK (approval_status IN ('pending', 'approved', 'rejected')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can read own profile" ON profiles;
CREATE POLICY "Users can read own profile"
    ON profiles
    FOR SELECT
    TO authenticated
    USING (id = auth.uid());

DROP POLICY IF EXISTS "Admins can manage profiles" ON profiles;
CREATE POLICY "Admins can manage profiles"
    ON profiles
    FOR ALL
    TO authenticated
    USING (auth.jwt() ->> 'role' = 'admin')
    WITH CHECK (auth.jwt() ->> 'role' = 'admin');

-- Wallet: one row per user
CREATE TABLE IF NOT EXISTS user_wallets (
    user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    available_credits NUMERIC(18, 6) NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE user_wallets ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can read own wallet" ON user_wallets;
CREATE POLICY "Users can read own wallet"
    ON user_wallets
    FOR SELECT
    TO authenticated
    USING (user_id = auth.uid());

DROP POLICY IF EXISTS "Service role can update wallets" ON user_wallets;
CREATE POLICY "Service role can update wallets"
    ON user_wallets
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

-- Auto-create profile + wallet on signup
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    INSERT INTO profiles (id, email, full_name, role, approval_status)
    VALUES (
        NEW.id,
        NEW.email,
        COALESCE(NEW.raw_user_meta_data ->> 'full_name', NEW.raw_user_meta_data ->> 'name', ''),
        'user',
        'approved'
    )
    ON CONFLICT (id) DO NOTHING;

    INSERT INTO user_wallets (user_id, available_credits)
    VALUES (NEW.id, COALESCE((get_config('free_signup_credits', '0')::text)::NUMERIC, 0))
    ON CONFLICT (user_id) DO NOTHING;

    RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW
    EXECUTE FUNCTION handle_new_user();

-- ============================================================
-- 3. Visual DNA Profiles (Studio identity cloning)
-- ============================================================
CREATE TABLE IF NOT EXISTS dna_profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    description TEXT,
    decor_image_url TEXT NOT NULL,
    logo_url TEXT,
    product_position TEXT DEFAULT 'center' CHECK (product_position IN ('center', 'left', 'right', 'top', 'bottom')),
    product_scale NUMERIC(3, 2) DEFAULT 0.5 CHECK (product_scale > 0 AND product_scale <= 1),
    base_prompt TEXT,
    aspect_ratio TEXT DEFAULT '1:1',
    resolution TEXT DEFAULT '1K',
    is_public BOOLEAN DEFAULT FALSE,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE dna_profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can CRUD own dna_profiles" ON dna_profiles;
CREATE POLICY "Users can CRUD own dna_profiles"
    ON dna_profiles
    FOR ALL
    TO authenticated
    USING (user_id = auth.uid())
    WITH CHECK (user_id = auth.uid());

DROP POLICY IF EXISTS "Public dna_profiles readable" ON dna_profiles;
CREATE POLICY "Public dna_profiles readable"
    ON dna_profiles
    FOR SELECT
    TO PUBLIC
    USING (is_public = TRUE);

-- ============================================================
-- 4. Production Batches + Image Nodes
-- ============================================================
CREATE TABLE IF NOT EXISTS production_batches (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    dna_profile_id UUID REFERENCES dna_profiles(id) ON DELETE SET NULL,
    name TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'completed', 'partial_error', 'cancelled')),
    total_images INTEGER NOT NULL DEFAULT 0,
    successful_images INTEGER NOT NULL DEFAULT 0,
    failed_images INTEGER NOT NULL DEFAULT 0,
    total_cost NUMERIC(18, 6) DEFAULT 0,
    generation_params JSONB DEFAULT '{}'::jsonb,
    canvas_position JSONB DEFAULT '{"x": 0, "y": 0}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE production_batches ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can CRUD own batches" ON production_batches;
CREATE POLICY "Users can CRUD own batches"
    ON production_batches
    FOR ALL
    TO authenticated
    USING (user_id = auth.uid())
    WITH CHECK (user_id = auth.uid());

CREATE TABLE IF NOT EXISTS image_nodes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    batch_id UUID NOT NULL REFERENCES production_batches(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    original_image_url TEXT,
    generated_image_url TEXT,
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'success', 'failed')),
    error_reason TEXT,
    seed_used INTEGER,
    cost NUMERIC(18, 6) DEFAULT 0,
    canvas_position JSONB DEFAULT '{"x": 0, "y": 0}'::jsonb,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE image_nodes ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can CRUD own image_nodes" ON image_nodes;
CREATE POLICY "Users can CRUD own image_nodes"
    ON image_nodes
    FOR ALL
    TO authenticated
    USING (user_id = auth.uid())
    WITH CHECK (user_id = auth.uid());

-- ============================================================
-- 5. Audit Logs (Financial Transparency)
-- ============================================================
CREATE TABLE IF NOT EXISTS audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    batch_id UUID REFERENCES production_batches(id) ON DELETE SET NULL,
    node_id UUID REFERENCES image_nodes(id) ON DELETE SET NULL,
    transaction_type TEXT NOT NULL CHECK (transaction_type IN ('debit', 'credit', 'refund')),
    amount NUMERIC(18, 6) NOT NULL,
    balance_after NUMERIC(18, 6),
    description TEXT,
    generation_params JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can read own audit_logs" ON audit_logs;
CREATE POLICY "Users can read own audit_logs"
    ON audit_logs
    FOR SELECT
    TO authenticated
    USING (user_id = auth.uid());

-- ============================================================
-- 6. Cost Calculation Engine (Data-driven, no hardcoding)
-- ============================================================
CREATE OR REPLACE FUNCTION calculate_cost(
    p_resolution TEXT,
    p_num_images INTEGER,
    p_thinking_level TEXT DEFAULT 'low',
    p_addons JSONB DEFAULT '{}'::jsonb
)
RETURNS NUMERIC(18, 6)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    base_cost NUMERIC(18, 6);
    multiplier NUMERIC(18, 6);
    thinking_multiplier NUMERIC(18, 6);
    total NUMERIC(18, 6);
BEGIN
    -- Pull base cost from system_configs (e.g. 0.08 for 1K)
    base_cost := COALESCE((get_config('base_cost_1k', '0.08')::text)::NUMERIC, 0.08);

    -- Resolution multiplier
    multiplier := CASE p_resolution
        WHEN '0.5K' THEN COALESCE((get_config('multiplier_0_5k', '0.75')::text)::NUMERIC, 0.75)
        WHEN '1K'  THEN COALESCE((get_config('multiplier_1k', '1.0')::text)::NUMERIC, 1.0)
        WHEN '2K'  THEN COALESCE((get_config('multiplier_2k', '1.5')::text)::NUMERIC, 1.5)
        WHEN '4K'  THEN COALESCE((get_config('multiplier_4k', '2.0')::text)::NUMERIC, 2.0)
        ELSE 1.0
    END;

    -- Thinking level add-on
    thinking_multiplier := CASE p_thinking_level
        WHEN 'high' THEN COALESCE((get_config('addon_thinking_high', '0.002')::text)::NUMERIC, 0.002)
        ELSE 0
    END;

    total := base_cost * multiplier * thinking_multiplier * GREATEST(p_num_images, 1);

    RETURN ROUND(total, 6);
END;
$$;

-- ============================================================
-- 7. Wallet Spending + Refund (Atomic)
-- ============================================================
CREATE OR REPLACE FUNCTION spend_credits(
    p_user_id UUID,
    p_amount NUMERIC,
    p_batch_id UUID DEFAULT NULL,
    p_node_id UUID DEFAULT NULL,
    p_description TEXT DEFAULT 'Generation cost',
    p_generation_params JSONB DEFAULT '{}'::jsonb
)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    new_balance NUMERIC(18, 6);
BEGIN
    UPDATE user_wallets
    SET available_credits = available_credits - p_amount,
        updated_at = NOW()
    WHERE user_id = p_user_id
      AND available_credits >= p_amount
    RETURNING available_credits INTO new_balance;

    IF new_balance IS NULL THEN
        RETURN FALSE;
    END IF;

    INSERT INTO audit_logs (
        user_id, batch_id, node_id, transaction_type, amount,
        balance_after, description, generation_params
    ) VALUES (
        p_user_id, p_batch_id, p_node_id, 'debit', p_amount,
        new_balance, p_description, p_generation_params
    );

    RETURN TRUE;
END;
$$;

CREATE OR REPLACE FUNCTION refund_credits(
    p_user_id UUID,
    p_amount NUMERIC,
    p_batch_id UUID DEFAULT NULL,
    p_node_id UUID DEFAULT NULL,
    p_description TEXT DEFAULT 'Generation refund'
)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    new_balance NUMERIC(18, 6);
BEGIN
    UPDATE user_wallets
    SET available_credits = available_credits + p_amount,
        updated_at = NOW()
    WHERE user_id = p_user_id
    RETURNING available_credits INTO new_balance;

    IF new_balance IS NULL THEN
        RETURN FALSE;
    END IF;

    INSERT INTO audit_logs (
        user_id, batch_id, node_id, transaction_type, amount,
        balance_after, description
    ) VALUES (
        p_user_id, p_batch_id, p_node_id, 'refund', p_amount,
        new_balance, p_description
    );

    RETURN TRUE;
END;
$$;

-- ============================================================
-- 8. Seed default system configs (can be customized later via admin)
-- ============================================================
INSERT INTO system_configs (config_key, config_value) VALUES
('fal_api_endpoint', '"https://queue.fal.run/fal-ai/nano-banana-2/edit"'::jsonb),
('fal_api_model', '"fal-ai/nano-banana-2/edit"'::jsonb),
('base_cost_1k', '0.08'::jsonb),
('multiplier_0_5k', '0.75'::jsonb),
('multiplier_1k', '1.0'::jsonb),
('multiplier_2k', '1.5'::jsonb),
('multiplier_4k', '2.0'::jsonb),
('addon_thinking_high', '0.002'::jsonb),
('addon_web_search', '0.015'::jsonb),
('safety_tolerance', '4'::jsonb),
('price_per_credit', '0.01'::jsonb),
('max_batch_size', '1000'::jsonb),
('max_concurrent_jobs', '4'::jsonb),
('default_aspect_ratio', '"1:1"'::jsonb),
('default_resolution', '"1K"'::jsonb),
('supported_aspect_ratios', '["16:9","4:3","1:1","4:5","9:16","4:1","1:4","8:1","1:8"]'::jsonb),
('supported_resolutions', '["0.5K","1K","2K","4K"]'::jsonb),
('free_signup_credits', '300'::jsonb)
ON CONFLICT (config_key) DO NOTHING;

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_batches_user_status ON production_batches(user_id, status);
CREATE INDEX IF NOT EXISTS idx_nodes_batch_status ON image_nodes(batch_id, status);
CREATE INDEX IF NOT EXISTS idx_audit_user_created ON audit_logs(user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_dna_profiles_user ON dna_profiles(user_id);
