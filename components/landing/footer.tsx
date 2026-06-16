"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";

const footerLinks = {
  product: [
    { label: "الميزات", href: "#features" },
    { label: "كيف يعمل", href: "#how-it-works" },
    { label: "الأسعار", href: "#pricing" },
    { label: "الأسئلة", href: "#faq" },
  ],
  company: [
    { label: "عن Lumina", href: "#" },
    { label: "تواصل معنا", href: "#" },
    { label: "المدونة", href: "#" },
  ],
  legal: [
    { label: "شروط الاستخدام", href: "#" },
    { label: "سياسة الخصوصية", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/[0.04] bg-[#08080a] py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-orange-600">
                <Sparkles className="h-5 w-5 text-white" />
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
            <p className="mt-4 text-sm text-muted-foreground">
              مصنع بصري ذكي يساعد العلامات التجارية على إنتاج صور منتجات احترافية بالذكاء الاصطناعي.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white">المنتج</h4>
            <ul className="mt-4 space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">الشركة</h4>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">قانوني</h4>
            <ul className="mt-4 space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.04] pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2026 Lumina Factory. جميع الحقوق محفوظة.
          </p>
          <p className="text-sm text-muted-foreground">
            صُنع بإتقان للعلامات التجارية الطموحة.
          </p>
        </div>
      </div>
    </footer>
  );
}
