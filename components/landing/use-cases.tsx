"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Home, Shirt, UtensilsCrossed } from "lucide-react";

const useCases = [
  {
    icon: ShoppingBag,
    title: "متاجر الإلكترونيات",
    description: "صور منتجات متناسقة لآلاف السكاوات بنفس الإضاءة والخلفية.",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Home,
    title: "العقارات والديكور",
    description: "تجهيز مشاهد داخلية متناسقة للأثاث والديكور بسرعة.",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    icon: Shirt,
    title: "الأزياء والموضة",
    description: "إنتاج كتالوجات أزياء بخلفيات استوديو متناسقة.",
    color: "from-rose-500/20 to-pink-500/20",
  },
  {
    icon: UtensilsCrossed,
    title: "المطاعم والمنتجات الغذائية",
    description: "صور طعام احترافية بنفس أجواء المطعم أو العلامة.",
    color: "from-amber-500/20 to-orange-500/20",
  },
];

export function UseCases() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading-ar text-3xl font-bold text-white sm:text-4xl">
            استخدامات لا تنتهي
          </h2>
          <p className="mt-4 text-muted-foreground">
            أي صناعة تحتاج صور منتجات متناسقة، Lumina Factory يخدمها.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {useCases.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-card p-8 transition-all hover:border-white/[0.12]"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition-opacity group-hover:opacity-100`} />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-white">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
