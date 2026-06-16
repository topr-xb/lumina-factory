"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { User, Mail, Key, Bell } from "lucide-react";

export default function SettingsPage() {
  const [saving, setSaving] = useState(false);

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => setSaving(false), 1000);
  };

  return (
    <div className="mx-auto max-w-2xl space-y-6" dir="rtl">
      <div>
        <h1 className="font-heading-ar text-3xl font-bold text-white">الإعدادات</h1>
        <p className="mt-1 text-muted-foreground">إدارة حسابك وتفضيلاتك</p>
      </div>

      <Card className="border-white/[0.06] bg-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <User className="h-5 w-5 text-amber-500" />
            الملف الشخصي
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>الاسم الكامل</Label>
            <Input className="border-white/10 bg-white/[0.03] text-right text-white" placeholder="اسمك الثلاثي" />
          </div>
          <div className="space-y-2">
            <Label>البريد الإلكتروني</Label>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <Input className="border-white/10 bg-white/[0.03] text-right text-white" disabled value="user@example.com" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-white/[0.06] bg-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <Key className="h-5 w-5 text-amber-500" />
            كلمة المرور
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>كلمة المرور الحالية</Label>
            <Input type="password" className="border-white/10 bg-white/[0.03] text-right text-white" />
          </div>
          <div className="space-y-2">
            <Label>كلمة المرور الجديدة</Label>
            <Input type="password" className="border-white/10 bg-white/[0.03] text-right text-white" />
          </div>
        </CardContent>
      </Card>

      <Card className="border-white/[0.06] bg-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <Bell className="h-5 w-5 text-amber-500" />
            الإشعارات
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            إعدادات الإشعارات ستتوفر قريباً.
          </p>
        </CardContent>
      </Card>

      <Separator className="bg-white/[0.06]" />

      <Button className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={handleSave} disabled={saving}>
        {saving ? "جاري الحفظ..." : "حفظ التغييرات"}
      </Button>
    </div>
  );
}
