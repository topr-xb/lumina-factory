"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { PageHeader } from "@/components/page/page-header";
import { PageTransition } from "@/components/motion/page-transition";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { LoadingState } from "@/components/ui/loading-state";
import { EmptyState } from "@/components/ui/empty-state";
import { ErrorState } from "@/components/ui/error-state";
import { AnimatedNumber } from "@/components/ui/animated-number";
import { toast } from "@/lib/toast";
import type { ProductionBatch, ImageNode } from "@/types";
import {
  ArrowLeft,
  RotateCcw,
  Download,
  ImageIcon,
  CheckCircle2,
  Clock,
  AlertCircle,
  RefreshCw,
} from "lucide-react";

export default function BatchDetailPage() {
  const params = useParams();
  const batchId = params.id as string;

  const [batch, setBatch] = useState<(ProductionBatch & { nodes?: ImageNode[] }) | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchBatch = useCallback(async () => {
    try {
      const res = await fetch(`/api/batches/${batchId}`);
      const json = await res.json();
      if (json.success) {
        setBatch(json.data);
      } else {
        setError(json.error || "تعذر تحميل الدفعة");
      }
    } catch {
      setError("تعذر الاتصال بالخادم");
    } finally {
      setLoading(false);
    }
  }, [batchId]);

  useEffect(() => {
    fetchBatch();
    const interval = setInterval(fetchBatch, 5000);
    return () => clearInterval(interval);
  }, [fetchBatch]);

  const handleRegenerate = async () => {
    if (!batch) return;
    const failedIds = batch.nodes?.filter((n) => n.status === "failed").map((n) => n.id);
    if (!failedIds || failedIds.length === 0) return;

    await fetch(`/api/batches/${batch.id}/regenerate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ node_ids: failedIds }),
    });

    toast.success("تمت إعادة التوليد", "جاري معالجة الصور الفاشلة");
    fetchBatch();
  };

  if (loading) {
    return (
      <PageTransition className="space-y-6" dir="rtl">
        <PageHeader title="تفاصيل الدفعة" subtitle="جاري تحميل البيانات..." />
        <LoadingState text="جاري تحميل تفاصيل الدفعة..." />
      </PageTransition>
    );
  }

  if (error) {
    return (
      <PageTransition className="space-y-6" dir="rtl">
        <PageHeader title="تفاصيل الدفعة" subtitle="تعذر تحميل البيانات" />
        <ErrorState title="تعذر تحميل الدفعة" description={error} onRetry={fetchBatch} />
      </PageTransition>
    );
  }

  if (!batch) {
    return (
      <PageTransition className="space-y-6" dir="rtl">
        <PageHeader title="تفاصيل الدفعة" subtitle="الدفعة غير موجودة" />
        <EmptyState
          icon={ImageIcon}
          title="الدفعة غير موجودة"
          description="قد تكون الدفعة محذوفة أو الرابط غير صحيح."
          action={{
            label: "العودة للدفعات",
            onClick: () => (window.location.href = "/workspace"),
          }}
        />
      </PageTransition>
    );
  }

  const progress = batch.total_images > 0
    ? Math.round((batch.successful_images / batch.total_images) * 100)
    : 0;

  const statusConfig = {
    completed: { label: "مكتملة", color: "bg-emerald-500/10 text-emerald-500" },
    processing: { label: "قيد التنفيذ", color: "bg-amber-500/10 text-amber-500" },
    pending: { label: "معلقة", color: "bg-blue-500/10 text-blue-500" },
    partial_error: { label: "إكمال جزئي", color: "bg-orange-500/10 text-orange-500" },
    cancelled: { label: "ملغاة", color: "bg-destructive/10 text-destructive" },
  };

  const status = statusConfig[batch.status] || statusConfig.pending;

  return (
    <PageTransition className="space-y-6" dir="rtl">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          <Link href="/workspace">
            <Button
              variant="ghost"
              size="icon"
              className="mt-1 text-muted-foreground hover:text-white"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <PageHeader
            title={batch.name}
            subtitle={`${batch.successful_images} ناجحة من ${batch.total_images} صورة · تم الإنشاء ${new Date(batch.created_at).toLocaleDateString("ar-SA")}`}
            className="w-full"
          />
        </div>
        <div className="flex gap-2">
          {batch.failed_images > 0 && (
            <Button
              variant="outline"
              className="border-white/10 bg-white/5 hover:bg-white/10"
              onClick={handleRegenerate}
            >
              <RotateCcw className="ml-2 h-4 w-4" />
              إعادة توليد الفاشلة
            </Button>
          )}
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Download className="ml-2 h-4 w-4" />
            تحميل الكل
          </Button>
        </div>
      </div>

      <Card className="border-white/[0.06] bg-card">
        <CardContent className="p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Badge className={status.color}>{status.label}</Badge>
              <span className="text-sm text-muted-foreground">
                آخر تحديث {new Date(batch.updated_at).toLocaleTimeString("ar-SA")}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <RefreshCw className="h-4 w-4 animate-spin text-amber-500" />
              <span className="text-muted-foreground">يتم التحديث تلقائياً</span>
            </div>
          </div>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-amber-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-2 flex justify-between text-sm">
            <span className="text-muted-foreground">تقدم الدفعة</span>
            <span className="font-bold text-white">{progress}%</span>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="الإجمالي" value={batch.total_images} />
        <StatCard label="النجاح" value={batch.successful_images} color="text-emerald-500" />
        <StatCard label="الفشل" value={batch.failed_images} color="text-destructive" />
        <StatCard label="التكلفة" value={`${Number(batch.total_cost).toFixed(2)}`} isCurrency />
      </div>

      <Separator className="bg-white/[0.06]" />

      <div>
        <h2 className="mb-4 font-heading-ar text-xl font-bold text-white">الصور المولدة</h2>
        {batch.nodes && batch.nodes.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {batch.nodes.map((node) => (
              <Card key={node.id} className="overflow-hidden border-white/[0.06] bg-card">
                <div className="aspect-square bg-white/[0.03]">
                  {node.generated_image_url ? (
                    <img
                      src={node.generated_image_url}
                      alt="generated"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <ImageIcon className="h-8 w-8 text-muted-foreground/30" />
                    </div>
                  )}
                </div>
                <CardContent className="p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {node.status === "success" && <CheckCircle2 className="h-4 w-4 text-emerald-500" />}
                      {node.status === "processing" && <Clock className="h-4 w-4 animate-pulse text-amber-500" />}
                      {node.status === "failed" && <AlertCircle className="h-4 w-4 text-destructive" />}
                      <span className="text-sm text-white capitalize">{node.status}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">${Number(node.cost).toFixed(4)}</span>
                  </div>
                  {node.error_reason && (
                    <p className="mt-2 text-xs text-destructive">{node.error_reason}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <EmptyState
            icon={ImageIcon}
            title="لا توجد صور بعد"
            description="سيتم تحديث الصفحة تلقائياً عند اكتمال التوليد."
          />
        )}
      </div>
    </PageTransition>
  );
}

function StatCard({
  label,
  value,
  color = "text-white",
  isCurrency,
}: {
  label: string;
  value: string | number;
  color?: string;
  isCurrency?: boolean;
}) {
  const numeric = typeof value === "number" ? value : Number(value);
  const display = isCurrency || Number.isNaN(numeric) ? `$${value}` : <AnimatedNumber value={numeric} />;

  return (
    <Card className="border-white/[0.06] bg-card">
      <CardContent className="p-5 text-center">
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className={`mt-1 text-3xl font-bold ${color}`}>{display}</p>
      </CardContent>
    </Card>
  );
}
