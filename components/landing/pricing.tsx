"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "مجاني",
    price: "$0",
    description: "للتجربة والمشاريع الصغيرة",
    features: [
      "100 كريدت مجانية",
      "DNA profile واحد",
      "10 صور في الدفعة الواحدة",
      "دقة حتى 1K",
    ],
    cta: "ابدأ مجاناً",
    href: "/signup",
    popular: false,
  },
  {
    name: "احترافي",
    price: "$49",
    period: "/شهر",
    description: "للفرق والعلامات التجارية الناشئة",
    features: [
      "5,000 كريدت شهرياً",
      "DNA profiles غير محدودة",
      "500 صورة في الدفعة",
      "دقة حتى 4K",
      "أولوية في المعالجة",
      "دعم فني",
    ],
    cta: "اشترك الآن",
    href: "/signup",
    popular: true,
  },
  {
    name: "مؤسسي",
    price: "حسب الطلب",
    description: "للشركات والإنتاج الضخم",
    features: [
      "كريدت مخصص",
      "API access",
      "Custom models",
      "مدير حساب مخصص",
      "SLA guarantee",
    ],
    cta: "تواصل معنا",
    href: "#",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading-ar text-3xl font-bold text-white sm:text-4xl">
            أسعار واضحة
            <span className="text-gradient"> تScaling معك</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            ادفع حسب استخدامك. لا رسوم خفية. ابدأ مجاناً.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl border p-8 transition-all hover:-translate-y-1 ${
                plan.popular
                  ? "border-amber-500/50 bg-gradient-to-b from-amber-500/10 to-transparent shadow-lg shadow-amber-500/10"
                  : "border-white/[0.06] bg-card hover:border-white/[0.12]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-primary-foreground">
                  الأكثر شيوعاً
                </div>
              )}
              <h3 className="text-xl font-bold text-white">{plan.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-heading-en text-4xl font-bold text-white">{plan.price}</span>
                {plan.period && (
                  <span className="text-muted-foreground">{plan.period}</span>
                )}
              </div>
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href={plan.href} className="mt-8 block">
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  {plan.cta}
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
