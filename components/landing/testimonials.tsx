"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "وفّرنا 70% من تكاليف التصوير الشهرية وأنتجنا كتالوج كامل في أقل من أسبوع.",
    author: "أحمد السبيعي",
    role: "مدير تسويق، متجر إلكترونيات",
  },
  {
    quote: "الهوية البصرية ثابتة في كل صورة. النتيجة تنافس أكبر الاستوديوهات.",
    author: "نورة القحطاني",
    role: "مؤسسة علامة أزياء",
  },
  {
    quote: "واجهة سهلة وفريق دعم متجاوب. المنصة تتحسن كل يوم.",
    author: "خالد العمري",
    role: "مدير إبداعي",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.04] bg-white/[0.01] py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading-ar text-3xl font-bold text-white sm:text-4xl">
            ماذا يقول عملاؤنا
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/[0.06] bg-card p-6"
            >
              <Quote className="h-8 w-8 text-amber-500/40" />
              <p className="mt-4 text-white/90 leading-relaxed">{item.quote}</p>
              <div className="mt-6">
                <p className="font-semibold text-white">{item.author}</p>
                <p className="text-sm text-muted-foreground">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
