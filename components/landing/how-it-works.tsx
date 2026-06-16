"use client";

import { motion } from "framer-motion";
import { Camera, Dna, Package, Images } from "lucide-react";

const steps = [
  {
    icon: Camera,
    step: "01",
    title: "صوّر استوديوك",
    description: "ارفع صوراً للديكور، الإضاءة، والأجواء التي تميز علامتك.",
  },
  {
    icon: Dna,
    step: "02",
    title: "ابنِ DNA بصري",
    description: "نستخرج الهوية البصرية ونحولها إلى بروفايل جاهز للاستخدام.",
  },
  {
    icon: Package,
    step: "03",
    title: "أضف منتجاتك",
    description: "ارفع روابط صور المنتجات أو الصور الخام، سطراً تلو الآخر.",
  },
  {
    icon: Images,
    step: "04",
    title: "ولّد آلاف الصور",
    description: "احصل على صور احترافية بنفس الهوية، جاهزة للتحميل والنشر.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden border-y border-white/[0.04] bg-white/[0.01] py-24 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-violet-500/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading-ar text-3xl font-bold text-white sm:text-4xl">
            من الاستوديو إلى الإنتاج
            <span className="text-gradient"> في 4 خطوات</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            لا حاجة لتعلم Prompt Engineering معقد. العملية مصممة للفرق والاستوديوهات.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl border border-white/[0.06] bg-card p-6 transition-colors hover:border-amber-500/20">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <span className="font-heading-en text-3xl font-bold text-white/10">
                    {item.step}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
