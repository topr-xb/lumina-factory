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
import { Loader2 } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
      toast.error("فشل تسجيل الدخول", error.message);
      setLoading(false);
      return;
    }

    router.push("/dashboard");
    router.refresh();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-md"
    >
      <div className="rounded-2xl border border-white/[0.06] bg-card p-8 shadow-2xl">
        <div className="text-center">
          <h1 className="font-heading-ar text-2xl font-bold text-white">تسجيل الدخول</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            أهلاً بك مجدداً في Lumina Factory
          </p>
        </div>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">
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
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="text-right">
                كلمة المرور
              </Label>
              <Link href="#" className="text-xs text-amber-500 hover:text-amber-400">
                نسيت كلمة المرور؟
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="h-11 border-white/10 bg-white/[0.03] text-right text-white placeholder:text-muted-foreground/50 focus:border-amber-500/50 focus:ring-amber-500/20"
            />
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
                جاري الدخول...
              </>
            ) : (
              "دخول"
            )}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          ما عندك حساب؟{" "}
          <Link href="/signup" className="font-medium text-amber-500 hover:text-amber-400">
            سجّل الآن
          </Link>
        </p>
      </div>
    </motion.div>
  );
}
