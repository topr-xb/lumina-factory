"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

export default function AuthErrorPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-12">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-destructive/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md"
      >
        <div className="rounded-2xl border border-white/[0.06] bg-card p-8 text-center shadow-2xl">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10 text-destructive">
            <AlertCircle className="h-8 w-8" />
          </div>
          <h1 className="mt-4 font-heading-ar text-2xl font-bold text-white">
            فشل تأكيد الحساب
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            الرابط غير صالح أو انتهت صلاحيته. يمكنك طلب رابط جديد من صفحة تسجيل الدخول.
          </p>
          <Link href="/login" className="mt-6 block">
            <Button className="w-full bg-white/5 text-white hover:bg-white/10">
              العودة لتسجيل الدخول
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
