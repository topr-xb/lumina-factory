import { NextResponse } from "next/server";
import { z } from "zod";
import { createAdminClient } from "@/lib/supabase/admin";
import { requireApprovedUser } from "@/lib/auth";
import { calculateCost, hasEnoughCredits, spendCredits, refundCredits } from "@/lib/billing";
import { getConfigNumber } from "@/lib/config";
import { enqueueBatch } from "@/lib/queue";
import type { Resolution, AspectRatio, ThinkingLevel } from "@/types";

const createBatchSchema = z.object({
  name: z.string().min(1).max(200),
  dna_profile_id: z.string().uuid(),
  product_image_urls: z.array(z.string().url()).min(1),
  resolution: z.enum(["0.5K", "1K", "2K", "4K"]).default("1K"),
  aspect_ratio: z.enum(["16:9", "4:3", "1:1", "4:5", "9:16", "4:1", "1:4", "8:1", "1:8"]).default("1:1"),
  thinking_level: z.enum(["low", "high"]).default("low"),
  auto_start: z.boolean().default(true),
});

export async function GET() {
  try {
    const user = await requireApprovedUser();
    const supabase = createAdminClient();

    const { data, error } = await supabase
      .from("production_batches")
      .select("*, dna_profiles(id, name)")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ success: false, error: message }, { status: 401 });
  }
}

export async function POST(request: Request) {
  try {
    const user = await requireApprovedUser();
    const body = await request.json();
    const parsed = createBatchSchema.parse(body);

    const supabase = createAdminClient();

    // Fetch DNA profile
    const { data: dnaProfile } = await supabase
      .from("dna_profiles")
      .select("*")
      .eq("id", parsed.dna_profile_id)
      .eq("user_id", user.id)
      .single();

    if (!dnaProfile) {
      return NextResponse.json({ success: false, error: "DNA profile not found" }, { status: 404 });
    }

    const numImages = parsed.product_image_urls.length;
    const maxBatchSize = await getConfigNumber("max_batch_size", 1000);

    if (numImages > maxBatchSize) {
      return NextResponse.json(
        { success: false, error: `Batch size exceeds maximum of ${maxBatchSize}` },
        { status: 400 }
      );
    }

    // Calculate cost
    const estimate = await calculateCost({
      resolution: parsed.resolution as Resolution,
      aspect_ratio: parsed.aspect_ratio as AspectRatio,
      num_images: numImages,
      thinking_level: parsed.thinking_level as ThinkingLevel,
    });

    // Pre-flight credit check
    const hasCredits = await hasEnoughCredits(user.id, estimate.total_cost);
    if (!hasCredits) {
      return NextResponse.json(
        { success: false, error: "Insufficient credits", estimate },
        { status: 402 }
      );
    }

    // Deduct credits atomically
    const spent = await spendCredits(user.id, estimate.total_cost, {
      description: `Batch pre-payment: ${parsed.name}`,
      generationParams: {
        resolution: parsed.resolution,
        aspect_ratio: parsed.aspect_ratio,
        num_images: numImages,
        thinking_level: parsed.thinking_level,
      },
    });

    if (!spent) {
      return NextResponse.json(
        { success: false, error: "Could not deduct credits" },
        { status: 402 }
      );
    }

    // Create batch record
    const { data: batch, error: batchError } = await supabase
      .from("production_batches")
      .insert({
        user_id: user.id,
        dna_profile_id: parsed.dna_profile_id,
        name: parsed.name,
        status: "pending",
        total_images: numImages,
        total_cost: estimate.total_cost,
        generation_params: {
          resolution: parsed.resolution,
          aspect_ratio: parsed.aspect_ratio,
          thinking_level: parsed.thinking_level,
        },
      })
      .select()
      .single();

    if (batchError || !batch) {
      // Refund on batch creation failure
      await refundCredits(user.id, estimate.total_cost, { description: "Refund for failed batch creation" });
      throw batchError || new Error("Failed to create batch");
    }

    // Create image nodes
    const nodes = parsed.product_image_urls.map((url, index) => ({
      batch_id: batch.id,
      user_id: user.id,
      original_image_url: url,
      status: "pending",
      cost: estimate.cost_per_image,
      seed_used: Math.floor(Math.random() * 1_000_000),
      canvas_position: { x: (index % 10) * 220, y: Math.floor(index / 10) * 260 },
    }));

    const { error: nodesError } = await supabase.from("image_nodes").insert(nodes);

    if (nodesError) {
      await refundCredits(user.id, estimate.total_cost, { batchId: batch.id, description: "Refund for failed node creation" });
      throw nodesError;
    }

    // Start queue processing
    if (parsed.auto_start) {
      await enqueueBatch(batch.id, user.id);
    }

    return NextResponse.json({ success: true, data: batch, estimate });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
