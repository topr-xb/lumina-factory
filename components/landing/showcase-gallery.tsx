"use client";

import { motion } from "framer-motion";

const examples = [
  { label: "عطور فاخرة", color: "bg-gradient-to-br from-amber-500/30 to-orange-600/30" },
  { label: "أثاث عصري", color: "bg-gradient-to-br from-violet-500/30 to-purple-600/30" },
  { label: "إلكترونيات", color: "bg-gradient-to-br from-blue-500/30 to-cyan-600/30" },
  { label: "أزياء", color: "bg-gradient-to-br from-rose-500/30 to-pink-600/30" },
  { label: "طعام", color: "bg-gradient-to-br from-emerald-500/30 to-teal-600/30" },
  { label: "ديكور", color: "bg-gradient-to-br from-orange-500/30 to-amber-600/30" },
];

export function ShowcaseGallery() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.04] bg-white/[0.01] py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading-ar text-3xl font-bold text-white sm:text-4xl">
            جودة تنافس أكبر الاستوديوهات
          </h2>
          <p className="mt-4 text-muted-foreground">
            أمثلة من أنماط يمكن إنتاجها بنفس الهوية البصرية.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {examples.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`group relative aspect-[4/3] overflow-hidden rounded-2xl ${item.color} flex items-center justify-center border border-white/[0.06]`}
            >
              <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
              <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="relative z-10 text-lg font-bold text-white">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
