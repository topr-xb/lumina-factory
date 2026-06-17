import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    fal_key: !!process.env.FAL_KEY,
    fal_webhook_secret: !!process.env.FAL_WEBHOOK_SECRET,
    supabase_url: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
    supabase_service_role_key: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
    site_url: process.env.NEXT_PUBLIC_SITE_URL,
    node_env: process.env.NODE_ENV,
  });
}
