"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { ProductionBatch, ImageNode } from "@/types";
import {
  ArrowLeft,
  RotateCcw,
  Download,
  ImageIcon,
  CheckCircle2,
  Clock,
  AlertCircle,
} from "lucide-react";

export default function BatchDetailPage() {
  const params = useParams();
  const batchId = params.id as string;

  const [batch, setBatch] = useState<(ProductionBatch & { nodes?: ImageNode[] }) | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchBatch = useCallback(async () => {
    const res = await fetch(`/api/batches/${batchId}`);
    const json = await res.json();
    if (json.success) setBatch(json.data);
    setLoading(false);
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

    fetchBatch();
  };

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center" dir="rtl">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-amber-500 border-t-transparent" />
      </div>
    );
  }

  if (!batch) {
    return (
      <div className="text-center" dir="rtl">
        <h1 className="text-xl font-bold text-white">الدفعة غير موجودة</h1>
        <Link href="/workspace">
          <Button className="mt-4" variant="outline">
            العودة للدفعات
          </Button>
        </Link>
      </div>
    );
  }

  const progress = batch.total_images > 0
    ? Math.round((batch.successful_images / batch.total_images) * 100)
    : 0;

  return (
    <div className="space-y-6" dir="rtl">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <Link href="/workspace">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="font-heading-ar text-2xl font-bold text-white">{batch.name}</h1>
            <div className="mt-1 flex items-center gap-3">
              <Badge
                variant={
                  batch.status === "completed"
                    ? "default"
                    : batch.status === "processing"
                    ? "secondary"
                    : "destructive"
                }
              >
                {batch.status}
              </Badge>
              <span className="text-sm text-muted-foreground">
                {batch.successful_images} ناجحة / {batch.total_images} إجمالي
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          {batch.failed_images > 0 && (
            <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10" onClick={handleRegenerate}>
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

      {/* Progress */}
      <Card className="border-white/[0.06] bg-card">
        <CardContent className="p-6">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">تقدم الدفعة</span>
            <span className="font-bold text-white">{progress}%</span>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-amber-500 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-4">
        <StatCard label="الإجمالي" value={batch.total_images} />
        <StatCard label="النجاح" value={batch.successful_images} color="text-emerald-500" />
        <StatCard label="الفشل" value={batch.failed_images} color="text-destructive" />
        <StatCard label="التكلفة" value={`$${Number(batch.total_cost).toFixed(2)}`} />
      </div>

      <Separator className="bg-white/[0.06]" />

      {/* Gallery */}
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
                      {node.status === "processing" && <Clock className="h-4 w-4 text-amber-500" />}
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
          <Card className="border-white/[0.06] bg-card">
            <CardContent className="py-12 text-center text-muted-foreground">
              لا توجد صور بعد. سيتم تحديث الصفحة تلقائياً.
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

function StatCard({ label, value, color = "text-white" }: { label: string; value: string | number; color?: string }) {
  return (
    <Card className="border-white/[0.06] bg-card">
      <CardContent className="p-4 text-center">
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className={`mt-1 text-2xl font-bold ${color}`}>{value}</p>
      </CardContent>
    </Card>
  );
}
