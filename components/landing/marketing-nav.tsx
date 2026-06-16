"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function MarketingNav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
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

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-white">
            عن المنصة
          </Link>
          <Link href="/pricing" className="text-sm font-medium text-muted-foreground transition-colors hover:text-white">
            الأسعار
          </Link>
          <Link href="/help" className="text-sm font-medium text-muted-foreground transition-colors hover:text-white">
            المساعدة
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/login">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-white">
              تسجيل الدخول
            </Button>
          </Link>
          <Link href="/signup">
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-amber-sm">
              ابدأ مجاناً
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
