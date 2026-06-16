import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Target, Zap, Shield } from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "جودة بصرية",
    description: "نؤمن بأن كل صورة يجب أن تعكس هوية العلامة التجارية بدقة.",
  },
  {
    icon: Target,
    title: "دقة وتحكم",
    description: "تحكم كامل في الإضاءة، الألوان، الزوايا، والتكوين.",
  },
  {
    icon: Zap,
    title: "سرعة الإنتاج",
    description: "حول ساعات التصوير إلى دقائق من التوليد.",
  },
  {
    icon: Shield,
    title: "أمان وخصوصية",
    description: "بياناتك وصورك محمية بأعلى معايير الأمان.",
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 lg:px-8" dir="rtl">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-heading-ar text-4xl font-bold text-white">عن Lumina Factory</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          مصنع بصري ذكي يساعد العلامات التجارية على إنتاج صور منتجات احترافية
          بنفس الهوية البصرية، بسرعة وبكفاءة.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {values.map((value) => {
          const Icon = value.icon;
          return (
            <Card key={value.title} className="border-white/[0.06] bg-card">
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">{value.title}</h3>
                <p className="mt-2 text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
