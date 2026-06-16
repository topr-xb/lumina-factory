import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-600" />
            <span className="text-xl font-bold">Lumina Factory</span>
          </div>
          <nav className="flex gap-4">
            <Link href="/login">
              <Button variant="ghost">تسجيل الدخول</Button>
            </Link>
            <Link href="/signup">
              <Button>ابدأ مجانًا</Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            صوّر البيئة مرة واحدة،<br />
            <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
              واستنسخها مليون مرة
            </span>
          </h1>
          <p className="text-lg text-muted-foreground sm:text-xl">
            Lumina Factory يسمح لك بحقن الهوية البصرية لأي استوديو في منتجات جديدة
            لتوليد آلاف الصور الاحترافية بدون الحاجة لتصوير كل منتج على حدة.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/signup">
              <Button size="lg" className="w-full sm:w-auto">
                ابدأ تجربتك المجانية
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                تسجيل الدخول
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
