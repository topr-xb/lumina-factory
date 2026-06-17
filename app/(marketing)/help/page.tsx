"use client";

import { useState } from "react";
import { PageHeader } from "@/components/page/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Search, ChevronDown, Mail, MessageCircle } from "lucide-react";

const faqs = [
  {
    category: "البدء",
    q: "ما هي خطوات إنشاء هوية بصرية؟",
    a: "اختر 'هوية جديدة'، ارفع ١٠-٢٠ صورة للمنتج، حدد الإضاءة والألوان والزوايا المطلوبة، ثم احفظ الهوية. بعدها يمكنك استخدامها في أي دفعة.",
  },
  {
    category: "البدء",
    q: "ما المقصود بالحمض النووي البصري؟",
    a: "هو مجموعة السمات البصرية التي تميز استوديوك: الإضاءة، الألوان، الخلفية، الزاوية، والمزاج العام. بمجرد بنائه، يمكن تطبيقه على آلاف الصور.",
  },
  {
    category: "التوليد",
    q: "كيف أقوم بتوليد دفعة صور؟",
    a: "اذهب إلى 'مساحة العمل'، اختر الهوية البصرية، أدخل أوصاف الصور المطلوبة (كل وصف في سطر)، راجع التكلفة، ثم ابدأ التوليد.",
  },
  {
    category: "التوليد",
    q: "كم تستغرق الدفعة؟",
    a: "تعتمد على حجم الدفعة والحمل على الخوادم. الدفعات الصغيرة قد تكتمل في دقائق، بينما الدفعات الكبيرة قد تستغرق عشرات الدقائق.",
  },
  {
    category: "الفوترة",
    q: "ما هي الكريدت؟",
    a: "الكريدت هي وحدة الدفع داخل المنصة. تختلف التكلفة حسب الدقة، نسبة الأبعاد، ومستوى التفكير العميق. يمكنك حساب التكلفة قبل كل توليد.",
  },
  {
    category: "الفوترة",
    q: "ما طرق الدفع المتاحة؟",
    a: "يمكنك شحن المحفظة عبر بطاقات الائتمان أو غيرها من الطرق المتاحة ضمن صفحة المحفظة. الأسعار تُحسب ديناميكياً من لوحة الإدارة.",
  },
  {
    category: "استكشاف الأخطاء",
    q: "هل يمكنني إعادة توليد صورة فاشلة؟",
    a: "نعم، افتح صفحة تفاصيل الدفعة واضغط على 'إعادة توليد الفاشلة'. يتم خصم التكلفة تلقائياً واستردادها عند الفشل.",
  },
  {
    category: "استكشاف الأخطاء",
    q: "لماذا فشل تأكيد حسابي؟",
    a: "قد يكون الرابط منتهي الصلاحية أو تم استخدامه مسبقاً. اطلب رابطاً جديداً من صفحة تسجيل الدخول، أو تواصل مع فريق الدعم.",
  },
];

const categories = Array.from(new Set(faqs.map((f) => f.category)));

export default function HelpPage() {
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = faqs.filter((f) => {
    const matchesSearch =
      f.q.toLowerCase().includes(search.toLowerCase()) ||
      f.a.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory ? f.category === activeCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-12 lg:px-8" dir="rtl">
      <PageHeader
        title="مركز المساعدة"
        subtitle="إجابات مفصلة لأهم الأسئلة حول استخدام Lumina Factory. إذا لم تجد إجابتك، فريق الدعم جاهز.">
        <div className="relative mt-4 max-w-md">
          <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            className="border-white/10 bg-white/[0.03] pr-10 text-right text-white placeholder:text-muted-foreground"
            placeholder="ابحث في الأسئلة..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </PageHeader>

      <div className="mt-8 flex flex-wrap gap-2">
        <Button
          variant={activeCategory === null ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveCategory(null)}
          className={activeCategory === null ? "bg-primary text-primary-foreground" : "border-white/10 bg-white/5 hover:bg-white/10"}
        >
          الكل
        </Button>
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={activeCategory === cat ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory(cat)}
            className={activeCategory === cat ? "bg-primary text-primary-foreground" : "border-white/10 bg-white/5 hover:bg-white/10"}
          >
            {cat}
          </Button>
        ))}
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          {filtered.length > 0 ? (
            filtered.map((faq, i) => {
              const open = openIndex === i;
              return (
                <Card
                  key={i}
                  className={cn(
                    "border-white/[0.06] bg-card transition-all",
                    open && "border-amber-500/20 bg-white/[0.02]"
                  )}
                >
                  <CardContent className="p-5">
                    <button
                      className="flex w-full items-center justify-between gap-4 text-right"
                      onClick={() => setOpenIndex(open ? null : i)}
                    >
                      <div>
                        <span className="text-xs font-medium text-amber-500">{faq.category}</span>
                        <h3 className="mt-1 text-lg font-bold text-white">{faq.q}</h3>
                      </div>
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 shrink-0 text-muted-foreground transition-transform",
                          open && "rotate-180 text-amber-500"
                        )}
                      />
                    </button>
                    {open && (
                      <p className="mt-4 border-t border-white/[0.06] pt-4 leading-relaxed text-muted-foreground">
                        {faq.a}
                      </p>
                    )}
                  </CardContent>
                </Card>
              );
            })
          ) : (
            <Card className="border-white/[0.06] bg-card">
              <CardContent className="py-12 text-center text-muted-foreground">
                لا توجد نتائج مطابقة. جرّب كلمات مختلفة.
              </CardContent>
            </Card>
          )}
        </div>

        <div className="space-y-4">
          <Card className="border-white/[0.06] bg-card">
            <CardContent className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">تواصل مع الدعم</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                لم تجد إجابتك؟ أرسل لنا استفسارك وسنرد عليك في أقرب وقت.
              </p>
              <Button className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/90">
                إرسال تذكرة
              </Button>
            </CardContent>
          </Card>

          <Card className="border-white/[0.06] bg-card">
            <CardContent className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-violet-500/10 text-violet-500">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">مجتمع المصنع</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                انضم للمجتمع لتتبادل الأفكار والتقنيات مع مستخدمي المنصة.
              </p>
              <Button
                variant="outline"
                className="mt-4 w-full border-white/10 bg-white/5 text-white hover:bg-white/10"
              >
                قريباً
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
