import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { requireApprovedUser } from "@/lib/auth";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await requireApprovedUser();
    const { id } = await params;
    const supabase = createAdminClient();

    const { data: batch, error: batchError } = await supabase
      .from("production_batches")
      .select("*")
      .eq("id", id)
      .eq("user_id", user.id)
      .single();

    if (batchError || !batch) {
      return NextResponse.json({ success: false, error: "Batch not found" }, { status: 404 });
    }

    const { data: nodes, error: nodesError } = await supabase
      .from("image_nodes")
      .select("*")
      .eq("batch_id", id)
      .order("created_at", { ascending: true });

    if (nodesError) throw nodesError;

    return NextResponse.json({ success: true, data: { ...batch, nodes } });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ success: false, error: message }, { status: 401 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await requireApprovedUser();
    const { id } = await params;
    const supabase = createAdminClient();

    // Only allow deletion if batch is not processing
    const { data: batch } = await supabase
      .from("production_batches")
      .select("status")
      .eq("id", id)
      .eq("user_id", user.id)
      .single();

    if (!batch) {
      return NextResponse.json({ success: false, error: "Batch not found" }, { status: 404 });
    }

    if (batch.status === "processing") {
      return NextResponse.json(
        { success: false, error: "Cannot delete a processing batch" },
        { status: 400 }
      );
    }

    const { error } = await supabase.from("production_batches").delete().eq("id", id);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ success: false, error: message }, { status: 400 });
  }
}
