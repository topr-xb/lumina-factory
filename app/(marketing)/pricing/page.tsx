import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

const freeFeatures = [
  "1 هوية بصرية",
  "10 صور شهرياً",
  "دقة قياسية",
  "دعم عبر المركز",
];

const proFeatures = [
  "هويات بصرية غير محدودة",
  "500+ صور شهرياً",
  "دقة عالية",
  "دعم أولوية",
  "تقارير استخدام",
];

export default async function PricingPage() {
  const supabase = await createClient();
  const { data: rows } = await supabase.from("system_configs").select("key,value");
  const configs = Object.fromEntries(rows?.map((r) => [r.key, Number(r.value)]) || []);

  const proPrice = configs.PRO_PLAN_PRICE || 49;

  return (
    <div className="container mx-auto px-4 py-16 lg:px-8" dir="rtl">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-heading-ar text-4xl font-bold text-white">خطط الأسعار</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          ابدأ مجاناً وقم بالترقية عندما ينمو إنتاجك.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:max-w-4xl lg:mx-auto">
        <Card className="border-white/[0.06] bg-card">
          <CardHeader className="text-center">
            <CardTitle className="font-heading-ar text-2xl text-white">مجاني</CardTitle>
            <p className="mt-2 text-3xl font-bold text-white">$0</p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {freeFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2 text-muted-foreground">
                  <Check className="h-4 w-4 text-amber-500" />
                  {f}
                </li>
              ))}
            </ul>
            <Link href="/signup">
              <Button className="mt-6 w-full bg-white/10 text-white hover:bg-white/20">ابدأ مجاناً</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="relative border-amber-500/30 bg-card">
          <div className="absolute right-4 top-0 -translate-y-1/2 rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-black">
            الأكثر شيوعاً
          </div>
          <CardHeader className="text-center">
            <CardTitle className="font-heading-ar text-2xl text-white">احترافي</CardTitle>
            <p className="mt-2 text-3xl font-bold text-white">${proPrice}<span className="text-base font-normal text-muted-foreground">/شهر</span></p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {proFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2 text-muted-foreground">
                  <Check className="h-4 w-4 text-amber-500" />
                  {f}
                </li>
              ))}
            </ul>
            <Link href="/signup">
              <Button className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90">اشترك الآن</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
