"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoadingState } from "@/components/ui/loading-state";
import { toast } from "@/lib/toast";
import { motion } from "framer-motion";
import { AlertCircle, Mail, ArrowLeft, Loader2, CheckCircle2 } from "lucide-react";

export default function AuthErrorPage() {
  return (
    <Suspense fallback={<AuthErrorSkeleton />}>
      <AuthErrorContent />
    </Suspense>
  );
}

function AuthErrorSkeleton() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <LoadingState text="جاري التحميل..." />
    </div>
  );
}

function AuthErrorContent() {
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleResend = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/auth/resend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        setMessage(json.message);
        toast.success("تم إرسال الرابط", json.message);
      } else {
        setStatus("error");
        setMessage(json.error || "فشل إعادة الإرسال");
        toast.error("فشل الإرسال", json.error || "فشل إعادة الإرسال");
      }
    } catch {
      setStatus("error");
      setMessage("حدث خطأ غير متوقع");
      toast.error("خطأ", "حدث خطأ غير متوقع");
    }
  };

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
            الرابط غير صالح أو انتهت صلاحيته. أدخل بريدك لإعادة إرسال رابط التأكيد.
          </p>

          <form onSubmit={handleResend} className="mt-6 space-y-4 text-right">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">البريد الإلكتروني</Label>
              <div className="relative">
                <Mail className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  required
                  className="border-white/10 bg-white/[0.03] pr-10 text-right text-white"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              disabled={status === "loading" || status === "success"}
            >
              {status === "loading" && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
              {status === "success" && <CheckCircle2 className="ml-2 h-4 w-4" />}
              {status === "success" ? "تم الإرسال" : "إعادة إرسال رابط التأكيد"}
            </Button>
            {message && (
              <p className={`text-sm ${status === "error" ? "text-destructive" : "text-emerald-500"}`}>
                {message}
              </p>
            )}
          </form>

          <Link href="/login" className="mt-6 block">
            <Button variant="ghost" className="w-full text-muted-foreground hover:text-white">
              <ArrowLeft className="ml-2 h-4 w-4" />
              العودة لتسجيل الدخول
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
