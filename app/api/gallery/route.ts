import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { requireApprovedUser } from "@/lib/auth";

export async function GET() {
  try {
    const user = await requireApprovedUser();
    const supabase = createAdminClient();

    const { data, error } = await supabase
      .from("image_nodes")
      .select(
        "*, production_batches!inner(name)"
      )
      .eq("user_id", user.id)
      .eq("status", "success")
      .order("created_at", { ascending: false });

    if (error) throw error;

    const normalized = data.map((node) => ({
      ...node,
      batch_name: node.production_batches?.name,
    }));

    return NextResponse.json({ success: true, data: normalized });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ success: false, error: message }, { status: 401 });
  }
}
