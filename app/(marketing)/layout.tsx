import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { MarketingNav } from "@/components/landing/marketing-nav";
import { Footer } from "@/components/landing/footer";
import { PageTransition } from "@/components/motion/page-transition";

export const metadata: Metadata = createMetadata("Lumina Factory", "استنسخ الهوية البصرية لاستوديوك وانتج آلاف صور المنتجات بالذكاء الاصطناعي");

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <MarketingNav />
      <PageTransition className="flex-1 pt-24" dir="rtl">
        <main>{children}</main>
      </PageTransition>
      <Footer />
    </div>
  );
}
