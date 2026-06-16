import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const admin = createAdminClient();

  const { data: profile } = await admin
    .from("profiles")
    .select("approval_status")
    .eq("id", user.id)
    .single();

  if (profile?.approval_status !== "approved") {
    redirect("/pending-review");
  }

  const { data: wallet } = await admin
    .from("user_wallets")
    .select("available_credits")
    .eq("user_id", user.id)
    .single();

  const { data: batches } = await admin
    .from("production_batches")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .limit(5);

  return (
    <div className="container mx-auto py-8 px-4" dir="rtl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">لوحة التحكم</h1>
          <p className="text-muted-foreground">نظرة عامة على حسابك وإنتاجك</p>
        </div>
        <Link href="/workspace">
          <Button>فضاء العمل</Button>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">الرصيد المتاح</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{Number(wallet?.available_credits || 0).toFixed(2)}</p>
            <p className="text-sm text-muted-foreground">كريدت</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">إجمالي الدفعات</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{batches?.length || 0}</p>
            <p className="text-sm text-muted-foreground">دفعة</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">حالة الحساب</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge variant="default">مفعل</Badge>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>آخر الدفعات</CardTitle>
        </CardHeader>
        <CardContent>
          {batches && batches.length > 0 ? (
            <div className="space-y-4">
              {batches.map((batch) => (
                <div key={batch.id} className="flex items-center justify-between border-b pb-4 last:border-0">
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
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">لا توجد دفعات بعد. ابدأ من فضاء العمل.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
