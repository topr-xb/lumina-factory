"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-background to-violet-500/10 p-10 text-center lg:p-16"
        >
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
          <div className="relative">
            <h2 className="font-heading-ar text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              ابدأ إنتاجك البصري اليوم
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              سجّل حسابك المجاني واحصل على 100 كريدت لتجربة Lumina Factory بنفسك.
            </p>
            <Link href="/signup" className="mt-8 inline-block">
              <Button size="lg" className="bg-primary px-8 text-base font-semibold text-primary-foreground hover:bg-primary/90 glow-amber">
                ابدأ مجاناً
                <ArrowLeft className="mr-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
