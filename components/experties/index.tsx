"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Brain, Activity, HeartPulse, Scale, ArrowLeft } from "lucide-react";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { GlassCard } from "@/components/ui/glass-card";

const specialtiesData = [
  {
    id: "ms",
    title: "مدیریت ام‌اس (MS)",
    description:
      "کاهش التهاب و کنترل علائم بیماری با برنامه‌های دقیق و شخصی‌سازی‌شده تغذیه‌ای.",
    icon: Brain,
    href: "/specialties/ms",
  },
  {
    id: "diabetes",
    title: "کنترل دیابت",
    description:
      "تنظیم نوسانات قند خون و پیشگیری از عوارض ثانویه از طریق اصلاح الگوی غذایی.",
    icon: Activity,
    href: "/specialties/diabetes",
  },
  {
    id: "cardiovascular",
    title: "سلامت قلب و عروق",
    description:
      "مدیریت فشار خون، کلسترول و تری‌گلیسیرید با رژیم‌های مبتنی بر شواهد علمی.",
    icon: HeartPulse,
    href: "/specialties/cardiovascular",
  },
  {
    id: "weight-management",
    title: "مدیریت اصولی وزن",
    description:
      "کاهش یا افزایش وزن پایدار بدون آسیب به متابولیسم و با حفظ توده عضلانی.",
    icon: Scale,
    href: "/specialties/weight-management",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export function SpecialtiesSection() {
  return (
    <section className="relative mb-16 isolate w-full px-4 lg:px-14 max-w-7xl mx-auto">
      {/* Background Blob */}
      <div
        className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] opacity-40 md:h-[900px] md:w-[900px] -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat pointer-events-none"
        aria-hidden="true"
      />

      <div className="mb-16 space-y-4 relative z-10 text-right">
        <span className="inline-block text-sm font-semibold tracking-wide text-primary">
          تخصص‌های درمانی
        </span>
        <Heading className="text-3xl font-extrabold leading-tight text-foreground lg:text-4xl">
          زمینه‌های تخصصی مشاوره
        </Heading>
        <Paragraph className="max-w-2xl text-slate-600">
          طراحی مسیر درمانی مبتنی بر جدیدترین مقالات علمی برای مدیریت و بهبود
          شرایط بالینی زیر.
        </Paragraph>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "50px 0px", amount: 0.1 }}
      >
        {specialtiesData.map((item) => {
          const Icon = item.icon;

          return (
            <motion.div key={item.id} variants={itemVariants}>
              <Link
                href={item.href}
                className="group block h-full focus:outline-none"
              >
                <GlassCard className="h-full flex flex-col p-8 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] group-hover:bg-white/50 group-focus-visible:ring-2 group-focus-visible:ring-primary border border-white/60 text-right">
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white ml-auto">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mb-4 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mb-8 text-sm leading-7 text-slate-600 flex-grow">
                    {item.description}
                  </p>

                  <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-primary transition-transform duration-300 group-hover:gap-3 justify-end">
                    <span>اطلاعات بیشتر</span>
                    <ArrowLeft className="h-4 w-4" />
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
