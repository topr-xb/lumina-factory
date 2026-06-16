import Link from "next/link";

export default function AuthErrorPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md space-y-6 rounded-xl border bg-card p-8 shadow text-center">
        <h1 className="text-2xl font-bold">فشل تأكيد الحساب</h1>
        <p className="text-muted-foreground">
          الرابط غير صالح أو انتهت صلاحيته. يمكنك طلب رابط جديد من صفحة تسجيل الدخول.
        </p>
        <Link
          href="/login"
          className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          العودة لتسجيل الدخول
        </Link>
      </div>
    </div>
  );
}
