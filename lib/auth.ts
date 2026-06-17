import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { headers } from 'next/headers';

/**
 * Server-side auth helpers.
 * Supports both cookie-based sessions (browser) and Bearer tokens (programmatic/API tests).
 */

export async function getCurrentUser() {
  const supabase = await createClient();

  // Try cookie-based session first
  const cookieResult = await supabase.auth.getUser();
  if (cookieResult.data.user) {
    return cookieResult.data.user;
  }

  // Fallback to Authorization header (Bearer token)
  const authHeader = (await headers()).get('authorization');
  const token = authHeader?.startsWith('Bearer ') ? authHeader.slice(7) : null;
  if (!token) return null;

  const tokenResult = await supabase.auth.getUser(token);
  if (tokenResult.data.user) {
    return tokenResult.data.user;
  }

  return null;
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
