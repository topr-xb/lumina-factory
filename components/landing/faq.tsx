"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "ما هو DNA البصري؟",
    answer:
      "DNA البصري هو ملف الهوية البصرية لاستوديوك: الإضاءة، الألوان، الخلفية، الزاوية، والمزاج العام. بمجرد بنائه، يمكن تطبيقه على آلاف صور المنتجات.",
  },
  {
    question: "هل يمكن استخدام الصور تجارياً؟",
    answer:
      "نعم، جميع الصور المولدة ملك لك ويمكن استخدامها تجارياً في متجرك، مواقع التواصل، والإعلانات.",
  },
  {
    question: "ما هي الكريدت؟",
    answer:
      "الكريدت هي وحدة الدفع داخل المنصة. تختلف التكلفة حسب الدقة، نسبة الأبعاد، وخيار التفكير العميق. يمكنك حساب التكلفة قبل كل توليد.",
  },
  {
    question: "كم تستغرق الدفعة؟",
    answer:
      "تعتمد على حجم الدفعة والحمل على الخوادم. الدفعات الصغيرة قد تكتمل في دقائق، بينما الدفعات الكبيرة قد تستغرق عشرات الدقائق.",
  },
  {
    question: "هل أحتاج خبرة في الذكاء الاصطناعي؟",
    answer:
      "لا. Lumina Factory مصمم ليكون سهلاً. كل ما تحتاجه هو صور مرجعية وروابط منتجات، والمنصة تتولى الباقي.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading-ar text-3xl font-bold text-white sm:text-4xl">
            الأسئلة الشائعة
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-white/[0.06] bg-card px-6"
              >
                <AccordionTrigger className="text-right text-white hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-right text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
