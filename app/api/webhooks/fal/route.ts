import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { refundCredits } from "@/lib/billing";
import { submitNextPendingNodes } from "@/lib/queue";

/**
 * fal.ai webhook endpoint.
 * Receives generation results and updates image_nodes + batch stats.
 */

export async function POST(request: NextRequest) {
  try {
    // Simple secret check to prevent unauthorized calls
    const secret = request.nextUrl.searchParams.get("secret");
    if (secret !== process.env.FAL_WEBHOOK_SECRET) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    const searchParams = request.nextUrl.searchParams;
    const payload = await request.json();
    const requestId = payload.request_id ?? payload.requestId;
    const nodeId = searchParams.get('node_id') ?? payload.node_id ?? payload.nodeId;
    const batchId = searchParams.get('batch_id') ?? payload.batch_id ?? payload.batchId;
    const userId = searchParams.get('user_id') ?? payload.user_id ?? payload.userId;
    const cost = Number(searchParams.get('cost') ?? payload.cost ?? 0);

    if (!nodeId || !batchId || !userId) {
      return NextResponse.json({ success: false, error: "Missing context" }, { status: 400 });
    }

    const supabase = createAdminClient();

    // fal.ai webhook wraps the result in `payload` (not `data`) and includes status
    const result = payload.data ?? payload.payload;
    const isFailed = payload.status && payload.status !== "OK" && payload.status !== "COMPLETED";

    // Handle fal.ai failure
    if (isFailed || !result || !result.images || result.images.length === 0) {
      const reason = payload.error || payload.detail || payload.message || "Generation failed";
      console.error("fal webhook failure:", { nodeId, reason, payload });
      await failNode(supabase, nodeId, batchId, userId, cost, reason, { payload });

      // A slot just freed up; try to submit the next pending node.
      await submitNextPendingNodes({
        batchId,
        userId,
        origin: request.nextUrl.origin,
      });

      await updateBatchStats(supabase, batchId);
      return NextResponse.json({ success: true, handled: "failure" });
    }

    const imageUrl = result.images[0].url as string;

    await supabase
      .from("image_nodes")
      .update({
        generated_image_url: imageUrl,
        status: "success",
        metadata: {
          ...(result.description ? { description: result.description } : {}),
          request_id: requestId,
        },
        updated_at: new Date().toISOString(),
      })
      .eq("id", nodeId);

    // Keep the queue pipeline full by submitting the next pending node(s).
    await submitNextPendingNodes({
      batchId,
      userId,
      origin: request.nextUrl.origin,
    });

    await updateBatchStats(supabase, batchId);

    return NextResponse.json({ success: true, handled: "success" });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("fal webhook error:", message);
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}

async function failNode(
  supabase: ReturnType<typeof createAdminClient>,
  nodeId: string,
  batchId: string,
  userId: string,
  cost: number,
  reason: string,
  extra?: { payload?: unknown }
) {
  await supabase
    .from("image_nodes")
    .update({
      status: "failed",
      error_reason: reason,
      metadata: extra?.payload ? { fal_payload: extra.payload } : undefined,
      updated_at: new Date().toISOString(),
    })
    .eq("id", nodeId);

  if (cost > 0) {
    await refundCredits(userId, cost, { batchId, nodeId, description: `Refund for failed node: ${reason}` });
  }
}

async function updateBatchStats(supabase: ReturnType<typeof createAdminClient>, batchId: string) {
  const { data: stats } = await supabase.from("image_nodes").select("status").eq("batch_id", batchId);
  if (!stats) return;

  const total = stats.length;
  const success = stats.filter((s) => s.status === "success").length;
  const failed = stats.filter((s) => s.status === "failed").length;
  const processing = stats.filter((s) => s.status === "processing").length;

  const newStatus =
    processing > 0
      ? "processing"
      : failed === 0
      ? "completed"
      : success === 0
      ? "partial_error"
      : "partial_error";

  await supabase
    .from("production_batches")
    .update({
      total_images: total,
      successful_images: success,
      failed_images: failed,
      status: newStatus,
      updated_at: new Date().toISOString(),
    })
    .eq("id", batchId);
}
