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

  const handleCreateBatch = async () => {
    setLoading(true);
    setError("");

    const urls = productUrls.split("\n").map((u) => u.trim()).filter(Boolean);

    const res = await fetch("/api/batches", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: batchName || `Batch ${new Date().toLocaleString("ar-SA")}`,
        dna_profile_id: selectedProfile,
        product_image_urls: urls,
        resolution,
        aspect_ratio: aspectRatio,
        thinking_level: thinkingLevel,
      }),
    });

    const json = await res.json();
    if (!json.success) {
      setError(json.error || "Failed to create batch");
      setLoading(false);
      return;
    }

    setProductUrls("");
    setBatchName("");
    setEstimate(null);
    fetchBatches();
    setLoading(false);
  };

  return (
    <div className="container mx-auto py-8 px-4" dir="rtl">
        <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">فضاء العمل</h1>
          <p className="text-muted-foreground">أنشئ دفعات التوليد وتابعها</p>
        </div>
        <div className="flex gap-2">
          <Link href="/workspace/canvas">
            <Button variant="outline">المساحة اللانهائية</Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="outline">لوحة التحكم</Button>
          </Link>
        </div>
      </div>

      <Tabs defaultValue="create" className="space-y-6">
        <TabsList>
          <TabsTrigger value="create">إنشاء دفعة</TabsTrigger>
          <TabsTrigger value="batches">الدفعات</TabsTrigger>
        </TabsList>

        <TabsContent value="create">
          <Card>
            <CardHeader>
              <CardTitle>إعدادات الدفعة</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>اسم الدفعة</Label>
                <Input value={batchName} onChange={(e) => setBatchName(e.target.value)} placeholder="مثال: حملة الصيف" />
              </div>

              <div className="space-y-2">
                <Label>الهوية البصرية (DNA Profile)</Label>
                <Select value={selectedProfile} onValueChange={(v) => setSelectedProfile(v || '')}>
                  <SelectTrigger>
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
                {profiles.length === 0 && (
                  <p className="text-sm text-muted-foreground">
                    لا توجد هويات بصرية.{' '}
                    <Link href="/dna-profiles/new" className="text-primary hover:underline">
                      أنشئ واحدة
                    </Link>
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>الدقة</Label>
                  <Select value={resolution} onValueChange={(v) => setResolution(v || '1K')}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0.5K">0.5K</SelectItem>
                      <SelectItem value="1K">1K</SelectItem>
                      <SelectItem value="2K">2K</SelectItem>
                      <SelectItem value="4K">4K</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>نسبة الأبعاد</Label>
                  <Select value={aspectRatio} onValueChange={(v) => setAspectRatio(v || '1:1')}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {["1:1", "4:3", "16:9", "4:5", "9:16", "4:1", "1:4", "8:1", "1:8"].map((r) => (
                        <SelectItem key={r} value={r}>
                          {r}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>التفكير العميق</Label>
                  <Select value={thinkingLevel} onValueChange={(v) => setThinkingLevel(v || 'low')}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">عادي</SelectItem>
                      <SelectItem value="high">عميق (+50%)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>روابط صور المنتجات (سطر لكل صورة)</Label>
                <Textarea
                  value={productUrls}
                  onChange={(e) => setProductUrls(e.target.value)}
                  placeholder="https://example.com/product-1.jpg&#10;https://example.com/product-2.jpg"
                  rows={6}
                />
              </div>

              {estimate && (
                <div className="rounded-lg bg-muted p-4">
                  <p className="font-medium">التكلفة التقديرية</p>
                  <p className="text-2xl font-bold">${estimate.total_cost.toFixed(4)}</p>
                  <p className="text-sm text-muted-foreground">
                    ${estimate.cost_per_image.toFixed(4)} لكل صورة × {productUrls.split("\n").filter(Boolean).length} صورة
                  </p>
                </div>
              )}

              {error && <p className="text-sm text-destructive">{error}</p>}

              <Button
                className="w-full"
                disabled={loading || !selectedProfile || !productUrls.trim()}
                onClick={handleCreateBatch}
              >
                {loading ? "جاري الإنشاء..." : "إنشاء الدفعة وبدء المعالجة"}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="batches">
          <div className="space-y-4">
            {batches.map((batch) => (
              <Card key={batch.id}>
                <CardContent className="flex items-center justify-between py-4">
                  <div>
                    <p className="font-medium">{batch.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {batch.successful_images} ناجحة / {batch.failed_images} فاشلة / {batch.total_images} إجمالي
                    </p>
                  </div>
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
                </CardContent>
              </Card>
            ))}
            {batches.length === 0 && <p className="text-muted-foreground">لا توجد دفعات بعد.</p>}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
