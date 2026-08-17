import React from "react";
import { Heading } from "@/components/ui/heading";
import { ScrollTrigger } from "@/components/ui/scroll-trigger";
import { FaqItem } from "./faq-item";

const faqData = [
  {
    question: "آیا امکان مشاوره آنلاین با دکتر سرورزاده وجود دارد؟",
    answer:
      "بله، پس از تکمیل فرم ارزیابی، در صورت نیاز و تشخیص اولیه، امکان هماهنگی برای مشاوره ویدیویی یا صوتی در بستر امن فراهم می‌شود.",
  },
  {
    question: "مدت زمان پاسخ‌گویی به فرم‌های ارزیابی چقدر است؟",
    answer:
      "تیم پشتیبانی ما معمولاً بین ۲۴ تا ۴۸ ساعت کاری پس از ثبت فرم، جهت هماهنگی‌های بعدی با شما تماس خواهد گرفت.",
  },
  {
    question: "آیا اطلاعات پزشکی من محرمانه می‌ماند؟",
    answer:
      "تمامی اطلاعات ثبت شده در فرم‌ها و سوابق پزشکی شما با بالاترین استانداردهای امنیتی نگهداری شده و کاملاً محرمانه تلقی می‌شوند.",
  },
  {
    question: "چگونه می‌توانم نوبت ویزیت حضوری دریافت کنم؟",
    answer:
      "در حال حاضر اولویت با بیمارانی است که مسیر ارزیابی اولیه را طی کرده باشند. پس از بررسی شرایط شما، زمان مراجعه حضوری تعیین و اطلاع‌رسانی می‌گردد.",
  },
];

export function FaqSection() {
  return (
    <div className="relative mx-auto my-24 w-full max-w-3xl isolate px-4 lg:px-0">
      {/* Background Blob */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat opacity-30 md:h-[900px] md:w-[900px]"
        aria-hidden="true"
      />

      <div className="mb-10 space-y-4 text-center">
        <span className="inline-block text-sm font-semibold tracking-wide text-primary">
          سوالات متداول
        </span>
        <Heading className="text-3xl font-extrabold leading-tight text-foreground lg:text-4xl">
          پاسخ به دغدغه‌های شما
        </Heading>
      </div>

      <ScrollTrigger className="scroll-stagger-group space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="stagger-item"
            // Replicates delayChildren: 0.1s (100ms) + staggerChildren: 0.15s (150ms)
            style={{ animationDelay: `${100 + index * 150}ms` }}
          >
            <FaqItem question={faq.question} answer={faq.answer} />
          </div>
        ))}
      </ScrollTrigger>
    </div>
  );
}
