"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createClient } from "@/lib/supabase/client";
import type { DNAProfile, ProductionBatch } from "@/types";
import {
  Plus,
  ImageIcon,
  Layers,
  Sparkles,
  AlertCircle,
  TrendingUp,
  CheckCircle2,
  Clock,
  ArrowLeft,
} from "lucide-react";

export default function WorkspacePage() {
  const router = useRouter();
  const supabase = createClient();

  const [profiles, setProfiles] = useState<DNAProfile[]>([]);
  const [batches, setBatches] = useState<ProductionBatch[]>([]);
  const [selectedProfile, setSelectedProfile] = useState("");
  const [productUrls, setProductUrls] = useState("");
  const [batchName, setBatchName] = useState("");
  const [resolution, setResolution] = useState("1K");
  const [aspectRatio, setAspectRatio] = useState("1:1");
  const [thinkingLevel, setThinkingLevel] = useState("low");
  const [estimate, setEstimate] = useState<{ total_cost: number; cost_per_image: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("create");

  const fetchProfiles = useCallback(async () => {
    const res = await fetch("/api/dna-profiles");
    const json = await res.json();
    if (json.success) setProfiles(json.data);
  }, []);

  const fetchBatches = useCallback(async () => {
    const res = await fetch("/api/batches");
    const json = await res.json();
    if (json.success) setBatches(json.data);
  }, []);

  useEffect(() => {
    fetchProfiles();
    fetchBatches();
  }, [fetchProfiles, fetchBatches]);

  useEffect(() => {
    const urls = productUrls.split("\n").filter((u) => u.trim());
    if (urls.length === 0 || !selectedProfile) {
      setEstimate(null);
      return;
    }

    fetch("/api/cost", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        resolution,
        aspect_ratio: aspectRatio,
        num_images: urls.length,
        thinking_level: thinkingLevel,
      }),
    })
      .then((r) => r.json())
      .then((json) => {
        if (json.success) setEstimate(json.estimate);
      });
  }, [productUrls, resolution, aspectRatio, thinkingLevel, selectedProfile]);

  const selectedProfileData = profiles.find((p) => p.id === selectedProfile);
  const urlCount = productUrls.split("\n").filter(Boolean).length;

  const handleCreateBatch = async () => {
    setLoading(true);
    setError("");

    const urls = productUrls.split("\n").map((u) => u.trim()).filter(Boolean);

    const res = await fetch("/api/batches", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: batchName || `دفعة ${new Date().toLocaleDateString("ar-SA")}`,
        dna_profile_id: selectedProfile,
        product_image_urls: urls,
        resolution,
        aspect_ratio: aspectRatio,
        thinking_level: thinkingLevel,
      }),
    });

    const json = await res.json();
    if (!json.success) {
      setError(json.error || "فشل إنشاء الدفعة");
      setLoading(false);
      return;
    }

    setProductUrls("");
    setBatchName("");
    setEstimate(null);
    setSelectedProfile("");
    fetchBatches();
    setActiveTab("batches");
    setLoading(false);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-4 w-4 text-emerald-500" />;
      case "processing":
        return <Clock className="h-4 w-4 text-amber-500" />;
      default:
        return <AlertCircle className="h-4 w-4 text-destructive" />;
    }
  };

  return (
    <div className="space-y-8" dir="rtl">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-heading-ar text-3xl font-bold text-white">فضاء العمل</h1>
          <p className="mt-1 text-muted-foreground">أنشئ دفعات التوليد وتابع تقدمها</p>
        </div>
        <Link href="/workspace/canvas">
          <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10">
            <Layers className="ml-2 h-4 w-4" />
            المساحة اللانهائية
          </Button>
        </Link>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="bg-card">
          <TabsTrigger value="create" className="data-[state=active]:bg-amber-500/10 data-[state=active]:text-amber-500">
            <Sparkles className="ml-2 h-4 w-4" />
            إنشاء دفعة
          </TabsTrigger>
          <TabsTrigger value="batches" className="data-[state=active]:bg-amber-500/10 data-[state=active]:text-amber-500">
            <ImageIcon className="ml-2 h-4 w-4" />
            الدفعات ({batches.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="create" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Main Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* DNA Selection */}
              <Card className="border-white/[0.06] bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/10 text-xs text-amber-500">
                      1
                    </span>
                    اختر الهوية البصرية
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Select value={selectedProfile} onValueChange={(v) => setSelectedProfile(v || "")}>
                    <SelectTrigger className="h-12 border-white/10 bg-white/[0.03] text-right text-white">
                      <SelectValue placeholder="اختر استوديو مرجعي" />
                    </SelectTrigger>
                    <SelectContent>
                      {profiles.map((p) => (
                        <SelectItem key={p.id} value={p.id}>
                          {p.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  {selectedProfileData && (
                    <div className="flex items-center gap-4 rounded-lg bg-white/[0.03] p-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-600/20">
                        <ImageIcon className="h-6 w-6 text-amber-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">{selectedProfileData.name}</p>
                        <p className="text-sm text-muted-foreground">{selectedProfileData.resolution} · {selectedProfileData.aspect_ratio}</p>
                      </div>
                    </div>
                  )}

                  {profiles.length === 0 && (
                    <div className="rounded-lg bg-white/[0.03] p-4 text-center">
                      <p className="text-sm text-muted-foreground">
                        لا توجد هويات بصرية.{" "}
                        <Link href="/dna-profiles/new" className="text-amber-500 hover:text-amber-400">
                          أنشئ واحدة الآن
                        </Link>
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Product URLs */}
              <Card className="border-white/[0.06] bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/10 text-xs text-amber-500">
                      2
                    </span>
                    أضف صور المنتجات
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Textarea
                    value={productUrls}
                    onChange={(e) => setProductUrls(e.target.value)}
                    placeholder="الصق روابط صور المنتجات هنا، رابط واحد في كل سطر...&#10;https://example.com/product-1.jpg&#10;https://example.com/product-2.jpg"
                    rows={6}
                    className="border-white/10 bg-white/[0.03] text-right text-white placeholder:text-muted-foreground/50 focus:border-amber-500/50 focus:ring-amber-500/20"
                  />
                  <p className="text-sm text-muted-foreground">
                    {urlCount} صورة مضافة
                  </p>
                </CardContent>
              </Card>

 {/* Output Settings */}
              <Card className="border-white/[0.06] bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/10 text-xs text-amber-500">
                      3
                    </span>
                    إعدادات الإخراج
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="space-y-2">
                      <Label>الدقة</Label>
                      <Select value={resolution} onValueChange={(v) => setResolution(v || "1K")}>
                        <SelectTrigger className="border-white/10 bg-white/[0.03] text-right text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {["0.5K", "1K", "2K", "4K"].map((r) => (
                            <SelectItem key={r} value={r}>{r}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>نسبة الأبعاد</Label>
                      <Select value={aspectRatio} onValueChange={(v) => setAspectRatio(v || "1:1")}>
                        <SelectTrigger className="border-white/10 bg-white/[0.03] text-right text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {["1:1", "4:3", "16:9", "4:5", "9:16"].map((r) => (
                            <SelectItem key={r} value={r}>{r}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>التفكير العميق</Label>
                      <Select value={thinkingLevel} onValueChange={(v) => setThinkingLevel(v || "low")}>
                        <SelectTrigger className="border-white/10 bg-white/[0.03] text-right text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">عادي</SelectItem>
                          <SelectItem value="high">عميق (+50%)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Summary Sidebar */}
            <div className="space-y-6">
              <Card className="border-white/[0.06] bg-card sticky top-24">
                <CardHeader>
                  <CardTitle className="text-white">ملخص الدفعة</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-muted-foreground">اسم الدفعة</Label>
                    <Input
                      value={batchName}
                      onChange={(e) => setBatchName(e.target.value)}
                      placeholder="مثال: حملة الصيف"
                      className="border-white/10 bg-white/[0.03] text-right text-white placeholder:text-muted-foreground/50"
                    />
                  </div>

                  <div className="space-y-3 rounded-lg bg-white/[0.03] p-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">عدد الصور</span>
                      <span className="text-white">{urlCount}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">الهوية البصرية</span>
                      <span className="text-white">{selectedProfileData?.name || "—"}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">الدقة</span>
                      <span className="text-white">{resolution}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">نسبة الأبعاد</span>
                      <span className="text-white">{aspectRatio}</span>
                    </div>
                  </div>

                  {estimate && (
                    <div className="rounded-lg bg-amber-500/10 p-4">
                      <p className="text-sm text-amber-500">التكلفة التقديرية</p>
                      <p className="mt-1 font-heading-en text-2xl font-bold text-white">
                        ${estimate.total_cost.toFixed(4)}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        ${estimate.cost_per_image.toFixed(4)} لكل صورة
                      </p>
                    </div>
                  )}

                  {error && (
                    <div className="rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">
                      {error}
                    </div>
                  )}

                  <Button
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    disabled={loading || !selectedProfile || urlCount === 0}
                    onClick={handleCreateBatch}
                  >
                    {loading ? (
                      <>جاري الإنشاء...</>
                    ) : (
                      <>
                        <Sparkles className="ml-2 h-4 w-4" />
                        إنشاء الدفعة
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="batches" className="space-y-4">
          {batches.length > 0 ? (
            batches.map((batch) => (
              <Card
                key={batch.id}
                className="group border-white/[0.06] bg-card transition-colors hover:border-white/[0.12]"
              >
                <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                      batch.status === "completed" ? "bg-emerald-500/10" :
                      batch.status === "processing" ? "bg-amber-500/10" : "bg-destructive/10"
                    }`}>
                      {getStatusIcon(batch.status)}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{batch.name}</p>
                      <div className="mt-1 flex items-center gap-3 text-sm text-muted-foreground">
                        <span>{batch.total_images} صورة</span>
                        <span className="text-emerald-500">{batch.successful_images} ناجحة</span>
                        {batch.failed_images > 0 && (
                          <span className="text-destructive">{batch.failed_images} فاشلة</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-4 sm:justify-end">
                    <span className="text-sm text-muted-foreground">
                      ${Number(batch.total_cost || 0).toFixed(4)}
                    </span>
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
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-white"
                      onClick={() => router.push(`/workspace/canvas?batch=${batch.id}`)}
                    >
                      عرض
                      <ArrowLeft className="mr-2 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card className="border-white/[0.06] bg-card">
              <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
                  <Layers className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-white">لا توجد دفعات بعد</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  أنشئ أول دفعة توليد الآن.
                </p>
                <Button
                  className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => setActiveTab("create")}
                >
                  <Plus className="ml-2 h-4 w-4" />
                  دفعة جديدة
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
