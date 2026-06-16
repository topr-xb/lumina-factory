import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AuthErrorPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md space-y-6 rounded-xl border bg-card p-8 shadow text-center">
        <h1 className="text-2xl font-bold">فشل تأكيد الحساب</h1>
        <p className="text-muted-foreground">
          الرابط غير صالح أو انتهت صلاحيته. يمكنك طلب رابط جديد من صفحة تسجيل الدخول.
        </p>
        <Button asChild className="w-full">
          <Link href="/login">العودة لتسجيل الدخول</Link>
        </Button>
      </div>
    </div>
  );
}
