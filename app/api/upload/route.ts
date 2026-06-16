import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { requireApprovedUser } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const user = await requireApprovedUser();
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const bucket = (formData.get("bucket") as string) || "uploads";

    if (!file) {
      return NextResponse.json({ success: false, error: "No file provided" }, { status: 400 });
    }

    // Validate file type and size
    if (!file.type.startsWith("image/")) {
      return NextResponse.json({ success: false, error: "Only images allowed" }, { status: 400 });
    }

    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json({ success: false, error: "File too large (max 10MB)" }, { status: 400 });
    }

    const supabase = createAdminClient();

    // Ensure bucket exists (service role can create)
    const { data: buckets } = await supabase.storage.listBuckets();
    if (!buckets?.find((b) => b.name === bucket)) {
      await supabase.storage.createBucket(bucket, {
        public: true,
        fileSizeLimit: 10 * 1024 * 1024,
      });
    }

    const path = `${user.id}/${Date.now()}-${file.name}`;
    const { data, error } = await supabase.storage.from(bucket).upload(path, file, {
      contentType: file.type,
      upsert: false,
    });

    if (error) throw error;

    const { data: publicUrl } = supabase.storage.from(bucket).getPublicUrl(data.path);

    return NextResponse.json({ success: true, url: publicUrl.publicUrl });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Upload failed";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
