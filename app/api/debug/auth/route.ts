import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { createClient } from "@/lib/supabase/server";

export async function GET() {
  const allHeaders: Record<string, string> = {};
  (await headers()).forEach((value, key) => { allHeaders[key] = value; });

  const supabase = await createClient();
  let { data: { user } } = await supabase.auth.getUser();

  let bearerUser = null;
  if (!user) {
    const authHeader = (await headers()).get("authorization");
    const token = authHeader?.startsWith("Bearer ") ? authHeader.slice(7) : null;
    if (token) {
      const tokenUser = await supabase.auth.getUser(token);
      bearerUser = tokenUser.data.user?.id ?? null;
      user = tokenUser.data.user;
    }
  }

  return NextResponse.json({
    hasUser: !!user,
    userId: user?.id ?? null,
    bearerUser,
    authHeader: allHeaders["authorization"]?.slice(0, 40) ?? null,
  });
}