"use client";

import { motion } from "framer-motion";
import {
  Dna,
  Layers,
  Zap,
  ShieldCheck,
  Calculator,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Dna,
    title: "DNA Builder",
    description: "ابنِ هوية بصرية مرجعية من صور استوديوك. احتفظ بالإضاءة، الألوان، والمزاج في كل توليد.",
    className: "md:col-span-2",
  },
  {
    icon: Layers,
    title: "إنتاج بالدفعات",
    description: "ارفع مئات روابط المنتجات واترك المنصة تولدها بنفس الهوية.",
    className: "",
  },
  {
    icon: Zap,
    title: "مساحة لانهائية",
    description: "Visual canvas لتنظيم الدفعات والصور بشكل مرئي وتفاعلي.",
    className: "",
  },
  {
    icon: ShieldCheck,
    title: "Error Jail + إعادة توليد",
    description: "كل صورة فاشلة تُحجز تلقائياً ويمكن إعادة توليدها بنقرة.",
    className: "md:col-span-2",
  },
  {
    icon: Calculator,
    title: "حاسبة تكلفة ذكية",
    description: "اعرف التكلفة قبل التوليد. لا مفاجآت في الرصيد.",
    className: "",
  },
  {
    icon: Users,
    title: "موافقة المسؤول",
    description: "نظام مراجعة يضمن جودة المستخدمين ويحمي المنصة.",
    className: "",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading-ar text-3xl font-bold text-white sm:text-4xl">
            كل ما تحتاجه لإنتاج صور منتجات
            <span className="text-gradient"> بلا حدود</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            أدوات متكاملة تغنيك عن التصوير المتكرر وتعطيك تحكماً كاملاً بالهوية البصرية.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 grid gap-4 md:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-card p-6 transition-all hover:-translate-y-1 hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/5 ${feature.className}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
