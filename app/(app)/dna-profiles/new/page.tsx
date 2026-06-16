"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NewDNAProfilePage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    description: "",
    decor_image_url: "",
    logo_url: "",
    product_position: "center",
    product_scale: 0.5,
    base_prompt: "",
    aspect_ratio: "1:1",
    resolution: "1K",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/dna-profiles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const json = await res.json();
    if (!json.success) {
      setError(json.error || "Failed to create DNA profile");
      setLoading(false);
      return;
    }

    router.push("/workspace");
  };

  return (
    <div className="container mx-auto py-8 px-4" dir="rtl">
      <h1 className="text-3xl font-bold mb-8">هوية بصرية جديدة</h1>

      <Card>
        <CardHeader>
          <CardTitle>بناء DNA بصري</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label>الاسم</Label>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="مثال: استوديو المنتجات الفاخرة"
                required
              />
            </div>

            <div className="space-y-2">
              <Label>الوصف</Label>
              <Textarea
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                placeholder="وصف الاستوديو والإضاءة والمزاج العام"
              />
            </div>

            <div className="space-y-2">
              <Label>رابط صورة الديكور/الاستوديو المرجعي</Label>
              <Input
                type="url"
                value={form.decor_image_url}
                onChange={(e) => setForm({ ...form, decor_image_url: e.target.value })}
                placeholder="https://example.com/studio.jpg"
                required
              />
            </div>

            <div className="space-y-2">
              <Label>رابط الشعار (اختياري)</Label>
              <Input
                type="url"
                value={form.logo_url}
                onChange={(e) => setForm({ ...form, logo_url: e.target.value })}
                placeholder="https://example.com/logo.png"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>موضع المنتج</Label>
                <Select
                  value={form.product_position}
                  onValueChange={(v) => setForm({ ...form, product_position: v || 'center' })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {["center", "left", "right", "top", "bottom"].map((p) => (
                      <SelectItem key={p} value={p}>
                        {p}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>حجم المنتج (0.1 - 1.0)</Label>
                <Input
                  type="number"
                  min={0.1}
                  max={1}
                  step={0.05}
                  value={form.product_scale}
                  onChange={(e) => setForm({ ...form, product_scale: parseFloat(e.target.value) })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>التوجيه الأساسي (Prompt)</Label>
              <Textarea
                value={form.base_prompt}
                onChange={(e) => setForm({ ...form, base_prompt: e.target.value })}
                placeholder="Luxury marble studio, soft golden lighting, minimalist..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>الدقة الافتراضية</Label>
                <Select
                  value={form.resolution}
                  onValueChange={(v) => setForm({ ...form, resolution: v || '1K' })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {["0.5K", "1K", "2K", "4K"].map((r) => (
                      <SelectItem key={r} value={r}>
                        {r}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>نسبة الأبعاد الافتراضية</Label>
                <Select
                  value={form.aspect_ratio}
                  onValueChange={(v) => setForm({ ...form, aspect_ratio: v || '1:1' })}
                >
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
            </div>

            {error && <p className="text-sm text-destructive">{error}</p>}

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "جاري الحفظ..." : "حفظ الهوية البصرية"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
