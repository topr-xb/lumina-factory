"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Clock, Mail } from "lucide-react";

export default function PendingReviewPage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-md"
    >
      <div className="rounded-2xl border border-white/[0.06] bg-card p-8 text-center shadow-2xl">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
          <Clock className="h-8 w-8" />
        </div>
        <h1 className="mt-4 font-heading-ar text-2xl font-bold text-white">
          الحساب قيد المراجعة
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          تم إنشاء حسابك بنجاح. فريق المراجعة سيقوم بتفعيل حسابك قريباً.
          بعد التفعيل تستطيع الدخول إلى لوحة التحكم وبدء إنتاج الصور.
        </p>

        <div className="mt-6 rounded-lg bg-white/[0.03] p-4">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Mail className="h-4 w-4 text-amber-500" />
            تأكد من تفعيل بريدك الإلكتروني أولاً
          </div>
        </div>

        <Link href="/login" className="mt-6 block">
          <Button className="w-full bg-white/5 text-white hover:bg-white/10">
            العودة لتسجيل الدخول
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
