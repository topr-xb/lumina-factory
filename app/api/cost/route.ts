import { NextResponse } from "next/server";
import { z } from "zod";
import { calculateCost } from "@/lib/billing";
import type { Resolution, AspectRatio, ThinkingLevel } from "@/types";

const costSchema = z.object({
  resolution: z.enum(["0.5K", "1K", "2K", "4K"]).default("1K"),
  aspect_ratio: z.enum(["16:9", "4:3", "1:1", "4:5", "9:16", "4:1", "1:4", "8:1", "1:8"]).default("1:1"),
  num_images: z.number().int().min(1).max(1000).default(1),
  thinking_level: z.enum(["low", "high"]).default("low"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = costSchema.parse(body);

    const estimate = await calculateCost({
      resolution: parsed.resolution as Resolution,
      aspect_ratio: parsed.aspect_ratio as AspectRatio,
      num_images: parsed.num_images,
      thinking_level: parsed.thinking_level as ThinkingLevel,
    });

    return NextResponse.json({ success: true, estimate });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Invalid request";
    return NextResponse.json({ success: false, error: message }, { status: 400 });
  }
}
