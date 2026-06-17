-- Auto-approve new signups so users can test immediately.
-- Align SQL cost defaults with actual Nano Banana 2 pricing.
-- Add free signup credits and advanced generation configs.

ALTER TABLE profiles
    ALTER COLUMN approval_status SET DEFAULT 'approved';

CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    free_credits NUMERIC(18, 6);
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

    free_credits := COALESCE((get_config('free_signup_credits', '0')::text)::NUMERIC, 0);

    INSERT INTO user_wallets (user_id, available_credits)
    VALUES (NEW.id, free_credits)
    ON CONFLICT (user_id) DO NOTHING;

    RETURN NEW;
END;
$$;

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
    thinking_addon NUMERIC(18, 6);
    web_search_addon NUMERIC(18, 6);
    total NUMERIC(18, 6);
BEGIN
    base_cost := COALESCE((get_config('base_cost_1k', '0.08')::text)::NUMERIC, 0.08);

    multiplier := CASE p_resolution
        WHEN '0.5K' THEN COALESCE((get_config('multiplier_0_5k', '0.75')::text)::NUMERIC, 0.75)
        WHEN '1K'  THEN COALESCE((get_config('multiplier_1k', '1.0')::text)::NUMERIC, 1.0)
        WHEN '2K'  THEN COALESCE((get_config('multiplier_2k', '1.5')::text)::NUMERIC, 1.5)
        WHEN '4K'  THEN COALESCE((get_config('multiplier_4k', '2.0')::text)::NUMERIC, 2.0)
        ELSE 1.0
    END;

    thinking_addon := CASE p_thinking_level
        WHEN 'high' THEN COALESCE((get_config('addon_thinking_high', '0.002')::text)::NUMERIC, 0.002)
        ELSE 0
    END;

    web_search_addon := COALESCE((p_addons ->> 'web_search')::NUMERIC, 0);
    IF web_search_addon = 0 AND (p_addons ->> 'enable_web_search')::boolean THEN
        web_search_addon := COALESCE((get_config('addon_web_search', '0.015')::text)::NUMERIC, 0.015);
    END IF;

    total := (base_cost * multiplier + thinking_addon + web_search_addon) * GREATEST(p_num_images, 1);

    RETURN ROUND(total, 6);
END;
$$;

INSERT INTO system_configs (config_key, config_value) VALUES
('addon_thinking_high', '0.002'::jsonb),
('addon_web_search', '0.015'::jsonb),
('safety_tolerance', '4'::jsonb)
ON CONFLICT (config_key) DO NOTHING;
