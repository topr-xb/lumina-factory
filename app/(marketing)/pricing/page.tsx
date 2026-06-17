import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page/page-header";
import { createMetadata } from "@/lib/metadata";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = createMetadata(
  "الأسعار",
  "خطط أسعار Lumina Factory المرنة. ابدأ مجاناً ووسّع إنتاجك البصري حسب احتياجك."
);

const freeFeatures = [
  "١ هوية بصرية",
  "١٠ صور شهرياً",
  "دقة قياسية",
  "دعم عبر مركز المساعدة",
  "وصول لمعرض الصور",
];

const proFeatures = [
  "هويات بصرية غير محدودة",
  "٥٠٠+ صورة شهرياً",
  "دقة حتى ٤K",
  "دعم أولوية",
  "تقارير استخدام مفصلة",
  "وصول مبكر للميزات الجديدة",
];

export default async function PricingPage() {
  const supabase = await createClient();
  const { data: rows } = await supabase.from("system_configs").select("config_key,config_value");
  const configs = Object.fromEntries(rows?.map((r) => [r.config_key, Number(r.config_value)]) || []);

  const proMonthly = configs.PRO_PLAN_PRICE || 49;
  const proYearly = Math.round(proMonthly * 10); // 2 months free

  return (
    <div className="container mx-auto px-4 py-12 lg:px-8" dir="rtl">
      <PageHeader
        title="خطط الأسعار"
        subtitle="ابدأ مجاناً وقم بالترقية عندما ينمو إنتاجك. كل خطة مصممة لتناسب مرحلة عملك."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:max-w-5xl lg:mx-auto">
        <Card className="border-white/[0.06] bg-card">
          <CardHeader className="pb-6">
            <CardTitle className="font-heading-ar text-2xl text-white">مجاني</CardTitle>
            <p className="mt-2 text-sm text-muted-foreground">للتجربة والمشاريع الصغيرة</p>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="font-heading-ar text-5xl font-bold text-white">$0</span>
              <span className="text-muted-foreground">/شهر</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {freeFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-muted-foreground">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                  {f}
                </li>
              ))}
            </ul>
            <Link href="/signup">
              <Button
                variant="outline"
                className="mt-8 w-full border-white/10 bg-white/5 py-6 text-base text-white hover:bg-white/10"
              >
                ابدأ مجاناً
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden border-amber-500/30 bg-card shadow-2xl shadow-amber-500/5">
          <div className="absolute right-0 top-0 rounded-bl-xl bg-gradient-to-l from-amber-500 to-orange-600 px-4 py-1.5 text-xs font-bold text-black">
            الأكثر شيوعاً
          </div>
          <CardHeader className="pb-6">
            <CardTitle className="font-heading-ar text-2xl text-white">احترافي</CardTitle>
            <p className="mt-2 text-sm text-muted-foreground">للعلامات التجارية النامية</p>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="font-heading-ar text-5xl font-bold text-white">${proMonthly}</span>
              <span className="text-muted-foreground">/شهر</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              أو ${proYearly}/سنوياً (شهران مجاناً)
            </p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {proFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-muted-foreground">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                  {f}
                </li>
              ))}
            </ul>
            <Link href="/signup">
              <Button className="mt-8 w-full bg-primary py-6 text-base font-semibold text-primary-foreground hover:bg-primary/90">
                اشترك الآن
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="mt-16 rounded-2xl border border-white/[0.06] bg-card p-8 text-center">
        <h2 className="font-heading-ar text-xl font-bold text-white">هل تحتاج خطة مخصصة؟</h2>
        <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
          إذا كان إنتاجك يتجاوز الخطة الاحترافية، أو تحتاج واجهة برمجية (API) خاصة، تواصل معنا لنصمم لك حلاً.
        </p>
        <Button
          variant="outline"
          className="mt-6 border-white/10 bg-white/5 text-white hover:bg-white/10"
        >
          تواصل مع المبيعات
        </Button>
      </div>
    </div>
  );
}
