import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { createMetadata } from "@/lib/metadata";
import { AppShell } from "@/components/layout/app-shell";

export const metadata: Metadata = createMetadata("لوحة التحكم", "إدارة حسابك، دفعاتك، وصورك في Lumina Factory");

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return <AppShell user={user}>{children}</AppShell>;
}
