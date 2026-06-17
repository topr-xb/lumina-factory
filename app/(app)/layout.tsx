import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { createClient } from "@/lib/supabase/server";
import { createMetadata } from "@/lib/metadata";
import { AppShell } from "@/components/layout/app-shell";

export const metadata: Metadata = createMetadata("لوحة التحكم", "إدارة حسابك، دفعاتك، وصورك في Lumina Factory");

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  try {
    const supabase = await createClient();
    let {
      data: { user },
    } = await supabase.auth.getUser();

    // Bearer token fallback for programmatic/API access
    if (!user) {
      const authHeader = (await headers()).get("authorization");
      const token = authHeader?.startsWith("Bearer ") ? authHeader.slice(7) : null;
      if (token) {
        const tokenUser = await supabase.auth.getUser(token);
        user = tokenUser.data.user;
      }
    }

    if (!user) {
      redirect("/login");
    }

    return <AppShell user={user}>{children}</AppShell>;
  } catch (err: any) {
    const message = err?.message || String(err);
    return (
      <html lang="ar" dir="rtl">
        <body className="bg-black p-10 text-white">
          <h1 className="text-xl text-red-500">App Layout Server Error</h1>
          <pre className="mt-4 whitespace-pre-wrap">{message}</pre>
        </body>
      </html>
    );
  }
}