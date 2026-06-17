"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/lib/supabase/client";
import { toast } from "@/lib/toast";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2 } from "lucide-react";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
        emailRedirectTo: `${window.location.origin}/auth/confirm?next=/dashboard`,
      },
    });

    if (error) {
      setError(error.message);
      toast.error("فشل إنشاء الحساب", error.message);
      setLoading(false);
      return;
    }

    toast.success("تم إنشاء الحساب", "تحقق من بريدك لتأكيد الحساب");
    setSuccess(true);
    setLoading(false);
  };

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md"
      >
        <div className="rounded-2xl border border-white/[0.06] bg-card p-8 text-center shadow-2xl">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h2 className="mt-4 font-heading-ar text-2xl font-bold text-white">
            تم إنشاء الحساب
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            راجع بريدك الإلكتروني لتفعيل الحساب، ثم انتظر موافقة المسؤول.
          </p>
          <Button
            className="mt-6 w-full bg-white/5 text-white hover:bg-white/10"
            onClick={() => router.push("/login")}
          >
            الذهاب لتسجيل الدخول
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-md"
    >
      <div className="rounded-2xl border border-white/[0.06] bg-card p-8 shadow-2xl">
        <div className="text-center">
          <h1 className="font-heading-ar text-2xl font-bold text-white">إنشاء حساب</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            ابدأ رحلتك في Lumina Factory
          </p>
        </div>

        <form onSubmit={handleSignup} className="mt-8 space-y-5">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-right block">
              الاسم الكامل
            </Label>
            <Input
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="الاسم الثلاثي"
              required
              className="h-11 border-white/10 bg-white/[0.03] text-right text-white placeholder:text-muted-foreground/50 focus:border-amber-500/50 focus:ring-amber-500/20"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-right block">
              البريد الإلكتروني
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              required
              className="h-11 border-white/10 bg-white/[0.03] text-right text-white placeholder:text-muted-foreground/50 focus:border-amber-500/50 focus:ring-amber-500/20"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-right block">
              كلمة المرور
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              minLength={6}
              className="h-11 border-white/10 bg-white/[0.03] text-right text-white placeholder:text-muted-foreground/50 focus:border-amber-500/50 focus:ring-amber-500/20"
            />
            <p className="text-xs text-muted-foreground">
              6 أحرف على الأقل
            </p>
          </div>

          {error && (
            <div className="rounded-lg bg-destructive/10 px-4 py-3 text-sm text-destructive">
              {error}
            </div>
          )}

          <Button
            type="submit"
            className="h-11 w-full bg-primary text-base font-semibold text-primary-foreground hover:bg-primary/90 glow-amber-sm"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                جاري إنشاء الحساب...
              </>
            ) : (
              "إنشاء حساب"
            )}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          عندك حساب؟{" "}
          <Link href="/login" className="font-medium text-amber-500 hover:text-amber-400">
            سجّل الدخول
          </Link>
        </p>
      </div>
    </motion.div>
  );
}
