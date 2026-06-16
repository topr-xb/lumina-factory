"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Users,
  Settings,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Wallet,
  Search,
} from "lucide-react";

export default function AdminPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [configs, setConfigs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchUsers();
    fetchConfigs();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch("/api/admin/users");
    const json = await res.json();
    if (json.success) setUsers(json.data);
  };

  const fetchConfigs = async () => {
    const res = await fetch("/api/admin/config");
    const json = await res.json();
    if (json.success) setConfigs(json.data);
    setLoading(false);
  };

  const approveUser = async (id: string) => {
    await fetch(`/api/admin/users/${id}/approve`, { method: "POST" });
    fetchUsers();
  };

  const filteredUsers = users.filter(
    (user) =>
      user.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.full_name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const pendingCount = users.filter((u) => u.approval_status === "pending").length;
  const approvedCount = users.filter((u) => u.approval_status === "approved").length;
  const adminCount = users.filter((u) => u.role === "admin").length;

  const stats = [
    { title: "إجمالي المستخدمين", value: users.length, icon: Users, color: "text-blue-500", bg: "bg-blue-500/10" },
    { title: "قيد المراجعة", value: pendingCount, icon: Clock, color: "text-amber-500", bg: "bg-amber-500/10" },
    { title: "تمت الموافقة", value: approvedCount, icon: CheckCircle2, color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { title: "المسؤولين", value: adminCount, icon: ShieldCheck, color: "text-violet-500", bg: "bg-violet-500/10" },
  ];

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-amber-500 border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="space-y-8" dir="rtl">
      {/* Header */}
      <div>
        <h1 className="font-heading-ar text-3xl font-bold text-white">لوحة الإدارة</h1>
        <p className="mt-1 text-muted-foreground">إدارة المستخدمين وإعدادات النظام</p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="border-white/[0.06] bg-card">
              <CardContent className="flex items-center gap-4 p-5">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${stat.bg}`}>
                  <Icon className={`h-5 w-5 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="font-heading-en text-2xl font-bold text-white">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Tabs defaultValue="users" className="space-y-6">
        <TabsList className="bg-card">
          <TabsTrigger value="users" className="data-[state=active]:bg-amber-500/10 data-[state=active]:text-amber-500">
            <Users className="ml-2 h-4 w-4" />
            المستخدمين
          </TabsTrigger>
          <TabsTrigger value="config" className="data-[state=active]:bg-amber-500/10 data-[state=active]:text-amber-500">
            <Settings className="ml-2 h-4 w-4" />
            إعدادات النظام
          </TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="space-y-4">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="البحث بالبريد أو الاسم..."
              className="border-white/10 bg-white/[0.03] pr-10 text-right text-white"
            />
          </div>

          <div className="space-y-3">
            {filteredUsers.map((user) => (
              <Card
                key={user.id}
                className="border-white/[0.06] bg-card transition-colors hover:border-white/[0.12]"
              >
                <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-semibold text-white">{user.email}</p>
                    <p className="text-sm text-muted-foreground">{user.full_name || "—"}</p>
                    <div className="mt-2 flex gap-2">
                      <Badge
                        variant={user.approval_status === "approved" ? "default" : "secondary"}
                        className="justify-center"
                      >
                        {user.approval_status}
                      </Badge>
                      <Badge variant="outline" className="justify-center">
                        {user.role}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-4 sm:justify-end">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Wallet className="h-4 w-4" />
                      {Number(user.user_wallets?.[0]?.available_credits || 0).toFixed(2)}
                    </div>
                    {user.approval_status !== "approved" && (
                      <Button
                        size="sm"
                        className="bg-emerald-500 text-white hover:bg-emerald-500/90"
                        onClick={() => approveUser(user.id)}
                      >
                        <CheckCircle2 className="ml-2 h-4 w-4" />
                        موافقة
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="config" className="space-y-4">
          {configs.map((cfg) => (
            <Card key={cfg.config_key} className="border-white/[0.06] bg-card">
              <CardHeader>
                <CardTitle className="text-base text-white">{cfg.config_key}</CardTitle>
              </CardHeader>
              <CardContent>
                <ConfigEditor configKey={cfg.config_key} initialValue={cfg.config_value} onSave={fetchConfigs} />
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}

function ConfigEditor({
  configKey,
  initialValue,
  onSave,
}: {
  configKey: string;
  initialValue: any;
  onSave: () => void;
}) {
  const [value, setValue] = useState(JSON.stringify(initialValue, null, 2));
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    try {
      const parsed = JSON.parse(value);
      await fetch("/api/admin/config", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ config_key: configKey, config_value: parsed }),
      });
      onSave();
    } catch (e) {
      alert("Invalid JSON");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-3">
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={6}
        className="w-full rounded-lg border border-white/10 bg-white/[0.03] p-3 font-mono text-sm text-white focus:border-amber-500/50 focus:outline-none focus:ring-1 focus:ring-amber-500/20"
      />
      <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={handleSave} disabled={saving}>
        {saving ? "جاري الحفظ..." : "حفظ"}
      </Button>
    </div>
  );
}
