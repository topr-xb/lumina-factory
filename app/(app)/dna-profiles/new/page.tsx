"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PageTransition } from "@/components/motion/page-transition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { ErrorState } from "@/components/ui/error-state";
import { toast } from "@/lib/toast";
import {
  Camera,
  ImageIcon,
  Type,
  Settings,
  Sparkles,
  ArrowLeft,
  Check,
} from "lucide-react";

export default function NewDNAProfilePage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
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

  const updateField = (field: string, value: string | number) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");

    const res = await fetch("/api/dna-profiles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const json = await res.json();
    if (!json.success) {
      const msg = json.error || "فشل إنشاء الهوية البصرية";
      setError(msg);
      toast.error("فشل الحفظ", msg);
      setLoading(false);
      return;
    }

    toast.success("تم حفظ الهوية البصرية", "يمكنك الآن استخدامها في الدفعات");
    router.push("/workspace");
  };

  const steps = [
    { id: 1, title: "الأساسيات", icon: Type },
    { id: 2, title: "الصور المرجعية", icon: Camera },
    { id: 3, title: "التكوين", icon: Settings },
  ];

  return (
    <PageTransition className="mx-auto max-w-4xl space-y-6" dir="rtl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading-ar text-3xl font-bold text-white">هوية بصرية جديدة</h1>
          <p className="mt-1 text-muted-foreground">
            حدد هوية استوديوك المرجعية لاستنساخها على المنتجات
          </p>
        </div>
      </div>

      {/* Stepper */}
      <div className="flex items-center justify-center gap-4">
        {steps.map((s, index) => {
          const Icon = s.icon;
          const isActive = step === s.id;
          const isCompleted = step > s.id;

          return (
            <div key={s.id} className="flex items-center gap-3">
              <div
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-amber-500/10 text-amber-500"
                    : isCompleted
                    ? "bg-emerald-500/10 text-emerald-500"
                    : "bg-white/[0.03] text-muted-foreground"
                }`}
              >
                <div
                  className={`flex h-5 w-5 items-center justify-center rounded-full text-xs ${
                    isActive
                      ? "bg-amber-500 text-primary-foreground"
                      : isCompleted
                      ? "bg-emerald-500 text-white"
                      : "bg-white/10 text-muted-foreground"
                  }`}
                >
                  {isCompleted ? <Check className="h-3 w-3" /> : s.id}
                </div>
                {s.title}
              </div>
              {index < steps.length - 1 && (
                <div className={`h-px w-8 ${isCompleted ? "bg-emerald-500/30" : "bg-white/10"}`} />
              )}
            </div>
          );
        })}
      </div>

      {error && <ErrorState title="خطأ" description={error} onRetry={() => setError("")} />}

      {/* Step 1: Basics */}
      {step === 1 && (
        <Card className="border-white/[0.06] bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Type className="h-5 w-5 text-amber-500" />
              معلومات الأساسية
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>اسم الهوية البصرية</Label>
              <Input
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                placeholder="مثال: استوديو المنتجات الفاخرة"
                className="border-white/10 bg-white/[0.03] text-right text-white"
                required
              />
            </div>
            <div className="space-y-2">
              <Label>الوصف</Label>
              <Textarea
                value={form.description}
                onChange={(e) => updateField("description", e.target.value)}
                placeholder="صف الإضاءة، الألوان، والمزاج العام للاستوديو..."
                rows={4}
                className="border-white/10 bg-white/[0.03] text-right text-white"
              />
            </div>
            <div className="flex justify-end">
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => setStep(2)}
                disabled={!form.name}
              >
                التالي
                <ArrowLeft className="mr-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 2: Images */}
      {step === 2 && (
        <Card className="border-white/[0.06] bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Camera className="h-5 w-5 text-amber-500" />
              الصور المرجعية
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label>صورة الاستوديو / الديكور</Label>
                <Input
                  type="url"
                  value={form.decor_image_url}
                  onChange={(e) => updateField("decor_image_url", e.target.value)}
                  placeholder="https://example.com/studio.jpg"
                  className="border-white/10 bg-white/[0.03] text-right text-white"
                  required
                />
                {form.decor_image_url && (
                  <div className="mt-2 aspect-video overflow-hidden rounded-lg bg-white/[0.03]">
                    <img
                      src={form.decor_image_url}
                      alt="Decor preview"
                      className="h-full w-full object-cover"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                    />
                  </div>
                )}
                {!form.decor_image_url && (
                  <div className="mt-2 flex aspect-video items-center justify-center rounded-lg bg-white/[0.03]">
                    <ImageIcon className="h-8 w-8 text-muted-foreground/30" />
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label>الشعار (اختياري)</Label>
                <Input
                  type="url"
                  value={form.logo_url}
                  onChange={(e) => updateField("logo_url", e.target.value)}
                  placeholder="https://example.com/logo.png"
                  className="border-white/10 bg-white/[0.03] text-right text-white"
                />
                {form.logo_url && (
                  <div className="mt-2 flex aspect-video items-center justify-center rounded-lg bg-white/[0.03]">
                    <img
                      src={form.logo_url}
                      alt="Logo preview"
                      className="max-h-full max-w-full object-contain"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                    />
                  </div>
                )}
                {!form.logo_url && (
                  <div className="mt-2 flex aspect-video items-center justify-center rounded-lg bg-white/[0.03]">
                    <ImageIcon className="h-8 w-8 text-muted-foreground/30" />
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-between">
              <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10" onClick={() => setStep(1)}>
                السابق
              </Button>
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => setStep(3)}
                disabled={!form.decor_image_url}
              >
                التالي
                <ArrowLeft className="mr-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 3: Configuration */}
      {step === 3 && (
        <Card className="border-white/[0.06] bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Settings className="h-5 w-5 text-amber-500" />
              إعدادات التوليد
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>موضع المنتج</Label>
                <Select value={form.product_position} onValueChange={(v) => updateField("product_position", v || "center")}>
                  <SelectTrigger className="border-white/10 bg-white/[0.03] text-right text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      { value: "center", label: "وسط" },
                      { value: "left", label: "يسار" },
                      { value: "right", label: "يمين" },
                      { value: "top", label: "أعلى" },
                      { value: "bottom", label: "أسفل" },
                    ].map((p) => (
                      <SelectItem key={p.value} value={p.value}>{p.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>الدقة الافتراضية</Label>
                <Select value={form.resolution} onValueChange={(v) => updateField("resolution", v || "1K")}>
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
            </div>

            <div className="space-y-2">
              <Label>نسبة الأبعاد الافتراضية</Label>
              <Select value={form.aspect_ratio} onValueChange={(v) => updateField("aspect_ratio", v || "1:1")}>
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

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label>حجم المنتج في الإطار</Label>
                <span className="text-sm text-white">{Math.round(form.product_scale * 100)}%</span>
              </div>
              <Slider
                value={[form.product_scale * 100]}
                onValueChange={(v) => updateField("product_scale", v[0] / 100)}
                min={10}
                max={100}
                step={5}
              />
            </div>

            <div className="space-y-2">
              <Label>التوجيه الأساسي (Prompt)</Label>
              <Textarea
                value={form.base_prompt}
                onChange={(e) => updateField("base_prompt", e.target.value)}
                placeholder="مثال: Luxury marble studio, soft golden lighting, minimalist product photography..."
                rows={4}
                className="border-white/10 bg-white/[0.03] text-right text-white"
              />
            </div>

            <div className="flex justify-between">
              <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10" onClick={() => setStep(2)}>
                السابق
              </Button>
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? (
                  "جاري الحفظ..."
                ) : (
                  <>
                    <Sparkles className="ml-2 h-4 w-4" />
                    حفظ الهوية البصرية
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </PageTransition>
  );
}
