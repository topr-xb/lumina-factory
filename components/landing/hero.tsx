"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, Play, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-amber-500/10 blur-[120px]" />
        <div className="absolute top-1/3 right-0 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-orange-500/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-400"
          >
            <Zap className="h-4 w-4" />
            مدعوم بأحدث نماذج الذكاء الاصطناعي
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 font-heading-ar text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-7xl"
          >
            مصنع بصري ذكي
            <br />
            <span className="text-gradient">لعلامتك التجارية</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
          >
            صوّر استوديوك مرة واحدة، واستنسخ هويتك البصرية في آلاف صور المنتجات.
            بدون تصوير متكرر. بدون تكاليف ضخمة. بنقرة واحدة.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link href="/signup">
              <Button size="lg" className="group bg-primary px-8 text-base font-semibold text-primary-foreground hover:bg-primary/90 glow-amber">
                ابدأ إنتاجك البصري
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="group border-white/10 bg-white/5 px-8 text-base hover:bg-white/10 hover:text-white">
              <Play className="ml-2 h-4 w-4 fill-current" />
              شاهد كيف يعمل
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 flex items-center justify-center gap-6 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              لا يحتاج بطاقة ائتمان
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              100 كريدت مجانية
            </span>
          </motion.div>
        </div>

        {/* Hero visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative mx-auto mt-16 max-w-6xl"
        >
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-transparent p-1 shadow-2xl">
            <div className="relative overflow-hidden rounded-xl bg-[#0A0A0B]">
              <div className="grid grid-cols-2 gap-1 p-1 sm:grid-cols-4">
                {[
                  { color: "from-amber-500/20 to-orange-600/20", label: "استوديو فاخر" },
                  { color: "from-violet-500/20 to-purple-600/20", label: "منتجات إلكترونية" },
                  { color: "from-emerald-500/20 to-teal-600/20", label: "أزياء وأناقة" },
                  { color: "from-rose-500/20 to-pink-600/20", label: "طعام ومشروبات" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`group relative aspect-square overflow-hidden rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center`}
                  >
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                    <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100" />
                    <span className="relative z-10 text-center text-sm font-semibold text-white/90">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Glow under hero visual */}
          <div className="absolute -bottom-20 left-1/2 h-40 w-3/4 -translate-x-1/2 rounded-full bg-amber-500/20 blur-[100px]" />
        </motion.div>
      </div>
    </section>
  );
}
