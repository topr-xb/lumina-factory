"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "ما هي خطوات إنشاء هوية بصرية؟",
    a: "اختر 'هوية جديدة'، ارفع 10-20 صورة للمنتج، وحدد الإضاءة والألوان والزوايا المطلوبة. ثم احفظ الهوية.",
  },
  {
    q: "كيف أقوم بتوليد دفعة صور؟",
    a: "اذهب إلى صفحة 'مساحة العمل'، اختر الهوية البصرية، أدخل أوصاف الصور المطلوبة، ثم ابدأ التوليد.",
  },
  {
    q: "ما طرق الدفع المتاحة؟",
    a: "يمكنك شحن المحفظة عبر بطاقات الائتمان أو غيرها من الطرق المتاحة ضمن صفحة المحفظة.",
  },
  {
    q: "هل يمكنني إعادة توليد صورة فاشلة؟",
    a: "نعم، افتح صفحة تفاصيل الدفعة واضغط على 'إعادة توليد الفاشلة'.",
  },
];

export default function HelpPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 py-16 lg:px-8" dir="rtl">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-center font-heading-ar text-4xl font-bold text-white">مركز المساعدة</h1>
        <p className="mt-4 text-center text-muted-foreground">إليك أشهر الأسئلة التي قد تساعدك</p>

        <div className="mt-10 space-y-4">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-xl border border-white/[0.06] bg-card px-6 py-4"
              >
                <button
                  className="flex w-full items-center justify-between text-right"
                  onClick={() => setOpenIndex(open ? null : i)}
                >
                  <span className="text-lg font-bold text-white">{faq.q}</span>
                  <ChevronDown className={cn("h-5 w-5 text-muted-foreground transition-transform", open && "rotate-180")} />
                </button>
                {open && (
                  <p className="mt-3 text-right text-muted-foreground">{faq.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
