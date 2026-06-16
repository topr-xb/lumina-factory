import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PendingReviewPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <div className="max-w-md space-y-6 rounded-xl border bg-card p-8 shadow">
        <div className="mx-auto h-16 w-16 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-2xl">
          ⏳
        </div>
        <h1 className="text-2xl font-bold">الحساب قيد المراجعة</h1>
        <p className="text-muted-foreground">
          تم إنشاء حسابك بنجاح. فريق المراجعة سيقوم بتفعيل حسابك قريبًا.
          بعد التفعيل تستطيع الدخول إلى لوحة التحكم وبدء إنتاج الصور.
        </p>
        <Link href="/login">
          <Button className="w-full">العودة لتسجيل الدخول</Button>
        </Link>
      </div>
    </div>
  );
}
