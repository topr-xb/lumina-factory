import type { Metadata } from "next";
import { PageHeader } from "@/components/page/page-header";
import { createMetadata } from "@/lib/metadata";
import { Card, CardContent } from "@/components/ui/card";

import { Sparkles, Target, Zap, Shield, Camera, Layers, Gem, Infinity } from "lucide-react";

export const metadata: Metadata = createMetadata(
  "عن Lumina Factory",
  "تعرف على مصنع الضوء، منصة استنساخ الهوية البصرية بالذكاء الاصطناعي للعلامات التجارية الطموحة."
);

const values = [
  {
    icon: Sparkles,
    title: "جودة بصرية فائقة",
    description:
      "نؤمن بأن كل صورة يجب أن تعكس هوية العلامة التجارية بدقة. لذلك نبني \"الحمض النووي البصري\" لاستوديوك قبل إنتاج أي صورة.",
  },
  {
    icon: Target,
    title: "دقة وتحكم كامل",
    description:
      "تحكم كامل في الإضاءة، الألوان، الزوايا، نسبة الأبعاد، والتكوين. لا مفاجآت، فقط نتائج متوقعة واحترافية.",
  },
  {
    icon: Zap,
    title: "سرعة إنتاج غير مسبوقة",
    description:
      "حول ساعات التصوير إلى دقائق من التوليد. أنشئ مئات الصور المتناسقة في جلسة عمل واحدة بدلاً من جلسات تصوير متعددة.",
  },
  {
    icon: Shield,
    title: "أمان وخصوصية",
    description:
      "بياناتك وصورك محمية بأعلى معايير الأمان. كل حساب يحتاج موافقة، وكل عملية مالية مسجلة بدقة.",
  },
];

const capabilities = [
  {
    icon: Camera,
    title: "جلسات تصوير رقمية",
    description: "صورة مرجعية واحدة، آلاف المنتجات، نفس الإضاءة، نفس الجودة.",
  },
  {
    icon: Layers,
    title: "مولد الدفعات الذكي",
    description: "أدخل أوصافاً متعددة ودع النظام ينتج لك صوراً متناسقة مع هويتك.",
  },
  {
    icon: Gem,
    title: "تخصصات بصرية",
    description: "ذهب، مجوهرات، أزياء، ساعات، طعام... كل فئة لها لغتها البصرية الخاصة.",
  },
  {
    icon: Infinity,
    title: "توسع بلا حدود",
    description: "أضف منتجات جديدة دون إعادة بناء الهوية البصرية من الصفر.",
  },
];

const stats = [
  { value: "١٠x", label: "أسرع من جلسة تصوير تقليدية" },
  { value: "١٠٠٪", label: "تحكم بالهوية البصرية" },
  { value: "٤K", label: "دقة تصدير قصوى" },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 lg:px-8" dir="rtl">
      <PageHeader
        title="عن Lumina Factory"
        subtitle="مصنع بصري ذكي يساعد العلامات التجارية على إنتاج صور منتجات احترافية بنفس الهوية البصرية، بسرعة وبكفاءة."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {values.map((value) => {
          const Icon = value.icon;
          return (
            <Card
              key={value.title}
              className="group border-white/[0.06] bg-card transition-all duration-300 hover:border-amber-500/20 hover:bg-white/[0.02]"
            >
              <CardContent className="p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-600/10 text-amber-500 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">{value.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-16">
        <h2 className="text-center font-heading-ar text-2xl font-bold text-white md:text-3xl">
          ماذا يمكنك أن تصنع؟
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          منصة واحدة تجمع بين قوة نماذج الصورة إلى صورة والتحكم الدقيق في الهوية البصرية.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <Card
                key={cap.title}
                className="border-white/[0.06] bg-card text-center transition-all hover:-translate-y-1 hover:border-white/10"
              >
                <CardContent className="p-6">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-white/[0.05] text-amber-500">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-white">{cap.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{cap.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="mt-16 rounded-2xl border border-white/[0.06] bg-gradient-to-br from-amber-500/10 via-transparent to-violet-500/10 p-8 md:p-12">
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading-ar text-4xl font-bold text-white md:text-5xl">{stat.value}</p>
              <p className="mt-2 text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
