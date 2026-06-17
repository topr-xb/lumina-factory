import { requireApprovedUser } from "@/lib/auth";
import { createAdminClient } from "@/lib/supabase/admin";
import { getConfigNumber } from "@/lib/config";
import { PageHeader } from "@/components/page/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Wallet, CreditCard, ArrowDownLeft, ArrowUpRight, RotateCcw } from "lucide-react";

export default async function WalletPage() {
  const user = await requireApprovedUser();
  const supabase = createAdminClient();

  const [{ data: wallet }, { data: transactions }, pricePerCredit] = await Promise.all([
    supabase.from("user_wallets").select("*").eq("user_id", user.id).single(),
    supabase
      .from("audit_logs")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .limit(50),
    getConfigNumber("price_per_credit", 0.01),
  ]);

  const balance = Number(wallet?.available_credits || 0);
  const balanceUsd = (balance * pricePerCredit).toFixed(2);

  const typeMeta: Record<
    string,
    { label: string; icon: React.ElementType; color: string; sign: string }
  > = {
    debit: { label: "مصروفات", icon: ArrowDownLeft, color: "bg-red-500/10 text-red-500", sign: "-" },
    credit: { label: "شحن", icon: ArrowUpRight, color: "bg-emerald-500/10 text-emerald-500", sign: "+" },
    refund: { label: "استرداد", icon: RotateCcw, color: "bg-amber-500/10 text-amber-500", sign: "+" },
  };

  return (
    <div className="space-y-6" dir="rtl">
      <PageHeader
        title="المحفظة"
        subtitle="رصيدك الحالي، سجل العمليات، وتفاصيل الاستخدام."
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-white/[0.06] bg-card md:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg text-white">
              <Wallet className="h-5 w-5 text-amber-500" />
              الرصيد المتاح
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-white">{balance.toFixed(2)}</span>
              <span className="text-muted-foreground">رصيد</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">≈ ${balanceUsd} USD</p>
          </CardContent>
        </Card>

        <Card className="border-white/[0.06] bg-card">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg text-white">
              <CreditCard className="h-5 w-5 text-amber-500" />
              شحن الرصيد
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              خيارات الشحن ستتوفر قريباً. تواصل مع المسؤول لإضافة رصيد.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-white/[0.06] bg-card">
        <CardHeader>
          <CardTitle className="text-lg text-white">سجل العمليات</CardTitle>
        </CardHeader>
        <CardContent>
          {(!transactions || transactions.length === 0) ? (
            <p className="text-muted-foreground">لا توجد عمليات مسجلة بعد.</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow className="border-white/[0.06] hover:bg-transparent">
                  <TableHead className="text-right">النوع</TableHead>
                  <TableHead className="text-right">المبلغ</TableHead>
                  <TableHead className="text-right">الرصيد بعد العملية</TableHead>
                  <TableHead className="text-right">الوصف</TableHead>
                  <TableHead className="text-right">التاريخ</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((tx) => {
                  const meta = typeMeta[tx.transaction_type] || typeMeta.debit;
                  const Icon = meta.icon;
                  const amount = Number(tx.amount || 0);

                  return (
                    <TableRow key={tx.id} className="border-white/[0.06]">
                      <TableCell>
                        <Badge variant="outline" className={`gap-1 ${meta.color}`}>
                          <Icon className="h-3 w-3" />
                          {meta.label}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-white">
                        {meta.sign}
                        {amount.toFixed(2)}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {Number(tx.balance_after || 0).toFixed(2)}
                      </TableCell>
                      <TableCell className="max-w-xs truncate text-muted-foreground">
                        {tx.description || "—"}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {new Date(tx.created_at).toLocaleString("ar-SA")}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
