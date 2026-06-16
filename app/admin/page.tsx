"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AdminPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [configs, setConfigs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  if (loading) return <p className="p-8">جاري التحميل...</p>;
  if (error) return <p className="p-8 text-destructive">{error}</p>;

  return (
    <div className="container mx-auto py-8 px-4" dir="rtl">
      <h1 className="text-3xl font-bold mb-8">لوحة الإدارة</h1>

      <Tabs defaultValue="users">
        <TabsList>
          <TabsTrigger value="users">المستخدمين</TabsTrigger>
          <TabsTrigger value="config">إعدادات النظام</TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="space-y-4">
          {users.map((user) => (
            <Card key={user.id}>
              <CardContent className="flex items-center justify-between py-4">
                <div>
                  <p className="font-medium">{user.email}</p>
                  <p className="text-sm text-muted-foreground">{user.full_name || "—"}</p>
                  <div className="mt-2 flex gap-2">
                    <Badge variant={user.approval_status === "approved" ? "default" : "secondary"}>
                      {user.approval_status}
                    </Badge>
                    <Badge variant="outline">{user.role}</Badge>
                  </div>
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">الرصيد</p>
                  <p className="font-bold">{Number(user.user_wallets?.[0]?.available_credits || 0).toFixed(2)}</p>
                  {user.approval_status !== "approved" && (
                    <Button size="sm" className="mt-2" onClick={() => approveUser(user.id)}>
                      موافقة
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="config" className="space-y-4">
          {configs.map((cfg) => (
            <Card key={cfg.config_key}>
              <CardHeader>
                <CardTitle className="text-base">{cfg.config_key}</CardTitle>
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
    <div className="space-y-2">
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Button size="sm" onClick={handleSave} disabled={saving}>
        {saving ? "جاري الحفظ..." : "حفظ"}
      </Button>
    </div>
  );
}
