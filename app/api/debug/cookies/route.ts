import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const all = await cookies();
  const list = all.getAll().map((c) => ({ name: c.name, value: c.value.slice(0, 50) }));
  return NextResponse.json({ cookies: list });
}