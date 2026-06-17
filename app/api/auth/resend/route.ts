import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = schema.parse(body);

    const supabase = createAdminClient();
    const { error } = await supabase.auth.resend({
      type: "signup",
      email: parsed.email,
      options: {
        emailRedirectTo: "https://lumina-factory.netlify.app/auth/confirm?next=/dashboard",
      },
    });

    if (error) throw error;

    return NextResponse.json({ success: true, message: "تم إعادة إرسال رابط التأكيد" });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ success: false, error: message }, { status: 400 });
  }
}
