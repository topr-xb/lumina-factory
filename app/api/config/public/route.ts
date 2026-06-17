import { NextResponse } from "next/server";
import { getConfigArray, getConfigNumber, getConfigString } from "@/lib/config";

/**
 * Public configuration endpoint.
 * Exposes non-sensitive, UI-relevant values so the frontend can stay
 * in sync with system_configs and avoid hardcoded lists.
 */

export async function GET() {
  try {
    const [
      supportedResolutions,
      supportedAspectRatios,
      defaultResolution,
      defaultAspectRatio,
      maxBatchSize,
    ] = await Promise.all([
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
      getConfigString("default_resolution", "1K"),
      getConfigString("default_aspect_ratio", "1:1"),
      getConfigNumber("max_batch_size", 1000),
    ]);

    return NextResponse.json({
      success: true,
      data: {
        supportedResolutions,
        supportedAspectRatios,
        defaultResolution,
        defaultAspectRatio,
        maxBatchSize,
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
