import { MarketingNav } from "@/components/landing/marketing-nav";
import { Footer } from "@/components/landing/footer";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <MarketingNav />
      <main className="flex-1 pt-24">{children}</main>
      <Footer />
    </div>
  );
}
