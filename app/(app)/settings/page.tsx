"use client";

import { useState } from "react";
import { PageHeader } from "@/components/page/page-header";
import { PageTransition } from "@/components/motion/page-transition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/lib/toast";
import { User, Mail, Key, Bell, Shield, Trash2 } from "lucide-react";

export default function SettingsPage() {
  const [saving, setSaving] = useState(false);

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      toast.success("تم الحفظ", "تم حفظ الإعدادات بنجاح");
    }, 1000);
  };

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
                    className="border-white/10 bg-white/[0.03] text-right text-white"
                    placeholder="اسمك الثلاثي"
                  />
                </div>
                <div className="space-y-2">
                  <Label>اسم المستخدم</Label>
                  <Input
                    className="border-white/10 bg-white/[0.03] text-right text-white"
                    placeholder="@username"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>البريد الإلكتروني</Label>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <Input
                    className="border-white/10 bg-white/[0.03] text-right text-white"
                    disabled
                    defaultValue="user@example.com"
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
                  className="border-white/10 bg-white/[0.03] text-right text-white"
                />
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>كلمة المرور الجديدة</Label>
                  <Input
                    type="password"
                    className="border-white/10 bg-white/[0.03] text-right text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label>تأكيد كلمة المرور الجديدة</Label>
                  <Input
                    type="password"
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
