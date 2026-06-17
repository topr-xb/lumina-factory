import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { requireAuth } from "@/lib/auth";

/**
 * Profile API for the current user.
 * GET returns the user's profile row.
 * PUT updates mutable fields (full_name).
 */

export async function GET() {
  try {
    const user = await requireAuth();
    const supabase = createAdminClient();

    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ success: false, error: message }, { status: 401 });
  }
}

export async function PUT(request: Request) {
  try {
    const user = await requireAuth();
    const body = await request.json();
    const { full_name } = body;

    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("profiles")
      .update({ full_name: full_name ?? null, updated_at: new Date().toISOString() })
      .eq("id", user.id)
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ success: false, error: message }, { status: 400 });
  }
}
