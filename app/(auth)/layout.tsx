import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = createMetadata("حسابك", "تسجيل الدخول أو إنشاء حساب جديد في Lumina Factory");

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-12">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02]" />
      </div>

      {/* Logo */}
      <Link href="/" className="absolute top-8 flex items-center gap-2.5">
        <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-orange-600">
          <Sparkles className="h-5 w-5 text-white" />
          <div className="absolute inset-0 rounded-lg bg-amber-500/20 blur-lg" />
        </div>
        <div className="flex flex-col">
          <span className="font-heading-en text-lg font-bold leading-none tracking-tight text-white">
            Lumina
          </span>
          <span className="text-[10px] font-medium leading-none text-amber-500">
            مصنع الضوء
          </span>
        </div>
      </Link>

      {children}
    </div>
  );
}
