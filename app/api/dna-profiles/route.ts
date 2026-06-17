import { NextResponse } from "next/server";
import { z } from "zod";
import { createAdminClient } from "@/lib/supabase/admin";
import { requireApprovedUser } from "@/lib/auth";
import { getConfigArray } from "@/lib/config";

const dnaProfileSchema = z.object({
  name: z.string().min(1).max(200),
  description: z.string().optional(),
  decor_image_url: z.string().url(),
  logo_url: z.string().url().optional(),
  product_position: z.enum(["center", "left", "right", "top", "bottom"]).default("center"),
  product_scale: z.number().min(0.1).max(1).default(0.5),
  base_prompt: z.string().optional(),
  aspect_ratio: z.string().default("1:1"),
  resolution: z.string().default("1K"),
  is_public: z.boolean().default(false),
});

export async function GET() {
  try {
    const user = await requireApprovedUser();
    const supabase = createAdminClient();

    const { data, error } = await supabase
      .from("dna_profiles")
      .select("*")
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
    const parsed = dnaProfileSchema.parse(body);

    const [supportedResolutions, supportedAspectRatios] = await Promise.all([
      getConfigArray<string>("supported_resolutions", ["0.5K", "1K", "2K", "4K"]),
      getConfigArray<string>("supported_aspect_ratios", [
        "16:9",
        "4:3",
        "1:1",
        "4:5",
        "9:16",
        "4:1",
        "1:4",
        "8:1",
        "1:8",
      ]),
    ]);

    if (!supportedResolutions.includes(parsed.resolution)) {
      return NextResponse.json(
        { success: false, error: `Unsupported resolution: ${parsed.resolution}` },
        { status: 400 }
      );
    }
    if (!supportedAspectRatios.includes(parsed.aspect_ratio)) {
      return NextResponse.json(
        { success: false, error: `Unsupported aspect ratio: ${parsed.aspect_ratio}` },
        { status: 400 }
      );
    }

    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("dna_profiles")
      .insert({
        ...parsed,
        user_id: user.id,
      })
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ success: false, error: message }, { status: 400 });
  }
}
