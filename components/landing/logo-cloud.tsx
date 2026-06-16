"use client";

import { motion } from "framer-motion";

const logos = [
  "Fal.ai",
  "Supabase",
  "Netlify",
  "Next.js",
  "React",
  "Tailwind",
];

export function LogoCloud() {
  return (
    <section className="border-y border-white/[0.04] bg-white/[0.01] py-10">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground">
          بُني باستخدام أفضل التقنيات
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
        >
          {logos.map((logo) => (
            <div
              key={logo}
              className="text-lg font-semibold text-muted-foreground/50 transition-colors hover:text-muted-foreground"
            >
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
