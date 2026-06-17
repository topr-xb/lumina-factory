"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PageHeader } from "@/components/page/page-header";
import { PageTransition } from "@/components/motion/page-transition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoadingState } from "@/components/ui/loading-state";
import { ErrorState } from "@/components/ui/error-state";
import { toast } from "@/lib/toast";
import { createClient } from "@/lib/supabase/client";
import { User, Mail, Key, Bell, Shield, Trash2 } from "lucide-react";

export default function SettingsPage() {
  const router = useRouter();
  const supabase = createClient();

  const [profile, setProfile] = useState<{ email: string; full_name: string | null } | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [fullName, setFullName] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProfile() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      const res = await fetch("/api/profile");
      const json = await res.json();

      if (json.success) {
        setProfile({
          email: user?.email || json.data.email || "",
          full_name: json.data.full_name,
        });
        setFullName(json.data.full_name || "");
      } else {
        setError(json.error || "تعذر تحميل الملف الشخصي");
      }
      setLoading(false);
    }
    fetchProfile();
  }, [supabase]);

  const handleSave = async () => {
    setSaving(true);
    setError("");

    try {
      // Update full name
      const profileRes = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ full_name: fullName.trim() || null }),
      });
      const profileJson = await profileRes.json();
      if (!profileJson.success) {
        throw new Error(profileJson.error || "فشل تحديث الملف الشخصي");
      }

      // Update password if provided
      if (newPassword) {
        if (newPassword !== confirmPassword) {
          throw new Error("كلمتا المرور الجديدتين غير متطابقتين");
        }
        if (newPassword.length < 6) {
          throw new Error("كلمة المرور الجديدة يجب أن تكون 6 أحرف على الأقل");
        }

        const { error: pwError } = await supabase.auth.updateUser({
          password: newPassword,
        });
        if (pwError) throw pwError;

        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      }

      toast.success("تم الحفظ", "تم تحديث إعدادات حسابك بنجاح");
    } catch (err) {
      const msg = err instanceof Error ? err.message : "فشل الحفظ";
      setError(msg);
      toast.error("فشل الحفظ", msg);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <PageTransition className="space-y-6" dir="rtl">
        <PageHeader title="الإعدادات" subtitle="إدارة حسابك، أمانك، وتفضيلاتك ضمن منصة Lumina Factory." />
        <LoadingState text="جاري تحميل الإعدادات..." />
      </PageTransition>
    );
  }

  if (error && !profile) {
    return (
      <PageTransition className="space-y-6" dir="rtl">
        <PageHeader title="الإعدادات" subtitle="إدارة حسابك، أمانك، وتفضيلاتك ضمن منصة Lumina Factory." />
        <ErrorState title="تعذر التحميل" description={error} />
      </PageTransition>
    );
  }

  return (
    <PageTransition className="space-y-6" dir="rtl">
      <PageHeader
        title="الإعدادات"
        subtitle="إدارة حسابك، أمانك، وتفضيلاتك ضمن منصة Lumina Factory."
      />

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="mb-6 grid w-full grid-cols-3 bg-card text-muted-foreground sm:w-auto sm:inline-grid">
          <TabsTrigger value="profile" className="gap-2 data-[state=active]:bg-amber-500 data-[state=active]:text-black">
            <User className="hidden h-4 w-4 sm:inline" />
            الملف الشخصي
          </TabsTrigger>
          <TabsTrigger value="security" className="gap-2 data-[state=active]:bg-amber-500 data-[state=active]:text-black">
            <Shield className="hidden h-4 w-4 sm:inline" />
            الأمان
          </TabsTrigger>
          <TabsTrigger value="preferences" className="gap-2 data-[state=active]:bg-amber-500 data-[state=active]:text-black">
            <Bell className="hidden h-4 w-4 sm:inline" />
            التفضيلات
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card className="border-white/[0.06] bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg text-white">
                <User className="h-5 w-5 text-amber-500" />
                الملف الشخصي
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>الاسم الكامل</Label>
                  <Input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="اسمك الثلاثي"
                    className="border-white/10 bg-white/[0.03] text-right text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label>اسم المستخدم</Label>
                  <Input
                    disabled
                    placeholder="@username"
                    className="border-white/10 bg-white/[0.03] text-right text-white"
                  />
                  <p className="text-xs text-muted-foreground">سيُتاح قريباً.</p>
                </div>
              </div>
              <div className="space-y-2">
                <Label>البريد الإلكتروني</Label>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <Input
                    disabled
                    value={profile?.email || ""}
                    className="border-white/10 bg-white/[0.03] text-right text-white"
                  />
                </div>
                <p className="text-xs text-muted-foreground">لا يمكن تغيير البريد حالياً.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card className="border-white/[0.06] bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg text-white">
                <Key className="h-5 w-5 text-amber-500" />
                تغيير كلمة المرور
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-2">
                <Label>كلمة المرور الحالية</Label>
                <Input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="border-white/10 bg-white/[0.03] text-right text-white"
                />
                <p className="text-xs text-muted-foreground">
                  مطلوبة فقط إذا كنت تغيّر كلمة المرور (Supabase قد تطلب إعادة الدخول إذا مرت فترة).
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>كلمة المرور الجديدة</Label>
                  <Input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="border-white/10 bg-white/[0.03] text-right text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label>تأكيد كلمة المرور الجديدة</Label>
                  <Input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="border-white/10 bg-white/[0.03] text-right text-white"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-destructive/20 bg-destructive/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg text-destructive">
                <Trash2 className="h-5 w-5" />
                حذف الحساب
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                حذف الحساب نهائي ولا يمكن التراجع عنه. ستفقد جميع بياناتك وصورك.
              </p>
              <Button variant="destructive" className="mt-4" disabled>
                حذف الحساب
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preferences" className="space-y-6">
          <Card className="border-white/[0.06] bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg text-white">
                <Bell className="h-5 w-5 text-amber-500" />
                الإشعارات
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                إعدادات الإشعارات ستتوفر قريباً. سنعلمك عند تفعيلها.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {error && (
        <div className="rounded-lg bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {error}
        </div>
      )}

      <Separator className="bg-white/[0.06]" />

      <Button
        className="bg-primary px-8 text-base font-semibold text-primary-foreground hover:bg-primary/90"
        onClick={handleSave}
        disabled={saving}
      >
        {saving ? "جاري الحفظ..." : "حفظ التغييرات"}
      </Button>
    </PageTransition>
  );
}
