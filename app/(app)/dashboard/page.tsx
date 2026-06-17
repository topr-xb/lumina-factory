import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { createMetadata } from "@/lib/metadata";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageTransition } from "@/components/motion/page-transition";
import { AnimatedNumber } from "@/components/ui/animated-number";
import { EmptyState } from "@/components/ui/empty-state";
import {
  Wallet,
  Briefcase,
  ImageIcon,
  Plus,
  ArrowLeft,
  TrendingUp,
  AlertCircle,
} from "lucide-react";

export const metadata: Metadata = createMetadata("لوحة التحكم", "نظرة عامة على رصيدك، دفعاتك، وصورك المنشأة");

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");
  try {

  const admin = createAdminClient();

  const { data: profile } = await admin
    .from("profiles")
    .select("approval_status")
    .eq("id", user.id)
    .single();

  if (profile?.approval_status !== "approved") {
    redirect("/pending-review");
  }

  const { data: wallet } = await admin
    .from("user_wallets")
    .select("available_credits")
    .eq("user_id", user.id)
    .single();

  const { data: batches } = await admin
    .from("production_batches")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .limit(5);

  const totalImages = batches?.reduce((acc, b) => acc + (b.total_images || 0), 0) || 0;
  const successfulImages = batches?.reduce((acc, b) => acc + (b.successful_images || 0), 0) || 0;

  const stats = [
    {
      title: "الرصيد المتاح",
      value: Number(wallet?.available_credits || 0),
      format: { minimumFractionDigits: 2, maximumFractionDigits: 2 },
      unit: "كريدت",
      icon: Wallet,
      trend: "متاح للاستخدام",
      color: "text-amber-500",
      bg: "bg-amber-500/10",
    },
    {
      title: "إجمالي الدفعات",
      value: batches?.length || 0,
      unit: "دفعة",
      icon: Briefcase,
      trend: "آخر 5 دفعات",
      color: "text-violet-500",
      bg: "bg-violet-500/10",
    },
    {
      title: "الصور المولدة",
      value: successfulImages,
      unit: "من " + totalImages,
      icon: ImageIcon,
      trend: "نجاح " + (totalImages > 0 ? Math.round((successfulImages / totalImages) * 100) : 0) + "%",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
  ];

  const quickActions = [
    { title: "دفعة جديدة", href: "/workspace", description: "أنشئ دفعة توليد جديدة", primary: true },
    { title: "هوية بصرية", href: "/dna-profiles/new", description: "ابنِ DNA جديد" },
    { title: "المساحة اللانهائية", href: "/workspace/canvas", description: "تصفح الدفعات بصرياً" },
  ];

  return (
    <PageTransition className="space-y-8" dir="rtl">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-heading-ar text-3xl font-bold text-white">لوحة التحكم</h1>
          <p className="mt-1 text-muted-foreground">نظرة عامة على حسابك وإنتاجك</p>
        </div>
        <Link href="/workspace">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Plus className="ml-2 h-4 w-4" />
            دفعة جديدة
          </Button>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="border-white/[0.06] bg-card">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="mt-2 font-heading-en text-3xl font-bold text-white">
                      <AnimatedNumber value={stat.value} format={stat.format} />
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">{stat.unit}</p>
                  </div>
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${stat.bg}`}>
                    <Icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-emerald-500">
                  <TrendingUp className="h-3 w-3" />
                  {stat.trend}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="mb-4 font-heading-ar text-lg font-semibold text-white">إجراءات سريعة</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {quickActions.map((action) => (
            <Link key={action.title} href={action.href}>
              <Card
                className={`group cursor-pointer border-white/[0.06] bg-card transition-all hover:-translate-y-1 hover:border-amber-500/30 ${
                  action.primary ? "bg-gradient-to-br from-amber-500/10 to-transparent" : ""
                }`}
              >
                <CardContent className="flex items-center justify-between p-5">
                  <div>
                    <p className="font-semibold text-white">{action.title}</p>
                    <p className="text-sm text-muted-foreground">{action.description}</p>
                  </div>
                  <ArrowLeft className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-x-1" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Batches */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-heading-ar text-lg font-semibold text-white">آخر الدفعات</h2>
          <Link href="/workspace" className="text-sm text-amber-500 hover:text-amber-400">
            عرض الكل
          </Link>
        </div>

        {batches && batches.length > 0 ? (
          <div className="space-y-3">
            {batches.map((batch) => (
              <Card
                key={batch.id}
                className="border-white/[0.06] bg-card transition-colors hover:border-white/[0.12]"
              >
                <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-semibold text-white">{batch.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {batch.successful_images} ناجحة / {batch.failed_images} فاشلة / {batch.total_images} إجمالي
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-sm text-muted-foreground">
                      ${Number(batch.total_cost || 0).toFixed(4)}
                    </div>
                    <Badge
                      variant={
                        batch.status === "completed"
                          ? "default"
                          : batch.status === "processing"
                          ? "secondary"
                          : "destructive"
                      }
                      className="min-w-[80px] justify-center"
                    >
                      {batch.status}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <EmptyState
            icon={AlertCircle}
            title="لا توجد دفعات بعد"
            description="ابدأ بإنشاء أول دفعة توليد من فضاء العمل."
            action={{
              label: "إنشاء دفعة",
              onClick: () => (typeof window !== "undefined" ? (window.location.href = "/workspace") : undefined),
            }}
          />
        )}
      </div>
    </PageTransition>
  );
  } catch (err: any) { return (<div dir="rtl" className="p-10 text-white"><h1 className="text-xl">Dashboard Server Error</h1><pre className="mt-4 whitespace-pre-wrap">{err?.message || String(err)}</pre></div>); }
}
