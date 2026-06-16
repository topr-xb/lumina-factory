import { createClient, type SupabaseClient } from '@supabase/supabase-js';

// Service-role client for backend/admin operations only.
// Never expose this client to the browser.
export function createAdminClient(): SupabaseClient<any> {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );
}
