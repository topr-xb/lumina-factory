import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/admin';

/**
 * Server-side auth helpers.
 */

export async function getCurrentUser() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user) return null;
  return data.user;
}

export async function requireAuth() {
  const user = await getCurrentUser();
  if (!user) {
    throw new Error('Unauthorized');
  }
  return user;
}

export async function requireApprovedUser() {
  const user = await requireAuth();
  const supabase = createAdminClient();

  const { data: profile } = await supabase
    .from('profiles')
    .select('approval_status, role')
    .eq('id', user.id)
    .single();

  if (!profile) {
    throw new Error('Profile not found');
  }

  if (profile.approval_status !== 'approved' && profile.role !== 'admin') {
    throw new Error('Account pending approval');
  }

  return user;
}

export async function requireAdmin() {
  const user = await requireAuth();
  const supabase = createAdminClient();

  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .single();

  if (profile?.role !== 'admin') {
    throw new Error('Forbidden');
  }

  return user;
}
