"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { ChevronDown } from "lucide-react";

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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function FaqSection() {
  return (
    <div className="relative mt-24 isolate w-full max-w-3xl mx-auto px-4 lg:px-0">
      {/* Background Blob */}
      <div
        className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] opacity-30 md:h-[900px] md:w-[900px] -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat pointer-events-none"
        aria-hidden="true"
      />

      <div className="text-center mb-10 space-y-4">
        <span className="inline-block text-sm font-semibold tracking-wide text-primary">
          سوالات متداول
        </span>
        <Heading className="text-3xl font-extrabold leading-tight text-foreground lg:text-4xl">
          پاسخ به دغدغه‌های شما
        </Heading>
      </div>

      <motion.div
        className="space-y-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "50px 0px", amount: 0.1 }}
      >
        {faqData.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </motion.div>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div variants={itemVariants}>
      <GlassCard className="relative overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-br from-white/60 to-white/20 shadow-[0_4px_20px_rgb(0,0,0,0.03),inset_0_1px_1px_rgba(255,255,255,0.6)] transition-all hover:from-white/70 hover:to-white/30">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between gap-4 p-5 text-right focus:outline-none"
          aria-expanded={isOpen}
        >
          <h4 className="font-bold text-slate-900 text-sm md:text-base">
            {question}
          </h4>
          <div
            className={`flex items-center justify-center shrink-0 w-8 h-8 rounded-full bg-primary/10 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <ChevronDown className="w-4 h-4 text-primary" />
          </div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="px-5 pb-5 pt-0">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200/50 to-transparent mb-4" />
                <Paragraph className="text-sm leading-7 text-slate-600">
                  {answer}
                </Paragraph>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </GlassCard>
    </motion.div>
  );
}
