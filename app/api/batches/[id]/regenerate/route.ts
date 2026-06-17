import { NextResponse } from "next/server";
import { z } from "zod";
import { createAdminClient } from "@/lib/supabase/admin";
import { requireApprovedUser } from "@/lib/auth";
import { hasEnoughCredits, spendCredits } from "@/lib/billing";
import { enqueueBatch } from "@/lib/queue";
import type { Database } from "@/types/database";

const regenerateSchema = z.object({
  node_ids: z.array(z.string().uuid()).min(1),
});

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await requireApprovedUser();
    const { id: batchId } = await params;
    const body = await request.json();
    const { node_ids } = regenerateSchema.parse(body);

    const supabase = createAdminClient();

    // Verify batch ownership
    const { data: batch } = await supabase
      .from("production_batches")
      .select("*")
      .eq("id", batchId)
      .eq("user_id", user.id)
      .single();

    if (!batch) {
      return NextResponse.json({ success: false, error: "Batch not found" }, { status: 404 });
    }

    // Fetch failed nodes
    const { data: nodes } = await supabase
      .from("image_nodes")
      .select("*")
      .in("id", node_ids)
      .eq("batch_id", batchId)
      .eq("user_id", user.id)
      .eq("status", "failed")
      .returns<Database['public']['Tables']['image_nodes']['Row'][]>();

    if (!nodes || nodes.length === 0) {
      return NextResponse.json(
        { success: false, error: "No failed nodes found to regenerate" },
        { status: 400 }
      );
    }

    const totalCost = nodes.reduce((sum, node) => sum + Number(node.cost), 0);

    const hasCredits = await hasEnoughCredits(user.id, totalCost);
    if (!hasCredits) {
      return NextResponse.json(
        { success: false, error: "Insufficient credits for regeneration" },
        { status: 402 }
      );
    }

    const spent = await spendCredits(user.id, totalCost, {
      batchId,
      description: `Regenerate ${nodes.length} failed nodes`,
    });

    if (!spent) {
      return NextResponse.json({ success: false, error: "Could not deduct credits" }, { status: 402 });
    }

    // Reset nodes to pending with new seeds
    const updates = nodes.map((node) => ({
      id: node.id,
      status: "pending",
      error_reason: null,
      seed_used: Math.floor(Math.random() * 1_000_000),
    }));

    const { error: updateError } = await supabase
      .from("image_nodes")
      .upsert(updates as any);

    if (updateError) throw updateError;

    // Update batch status
    await supabase
      .from("production_batches")
      .update({ status: "processing", updated_at: new Date().toISOString() })
      .eq("id", batchId);

    const origin = new URL(request.url).origin;
    await enqueueBatch(batchId, user.id, origin);

    return NextResponse.json({ success: true, regenerated: nodes.length });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
