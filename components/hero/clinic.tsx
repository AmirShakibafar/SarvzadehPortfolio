"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { User, ClipboardList, Activity, RefreshCw, Heart } from "lucide-react";

const journeySteps = [
  {
    id: 1,
    title: "بررسی کامل وضعیت بیمار",
    icon: User,
    text: "ارزیابی جامع بالینی و تحلیل دقیق سوابق پزشکی شما.",
  },
  {
    id: 2,
    title: "طراحی برنامه اختصاصی",
    icon: ClipboardList,
    text: "تدوین پروتکل تغذیه‌ای بر اساس شاخص‌های التهابی و عصبی.",
  },
  {
    id: 3,
    title: "پایش مداوم سبک زندگی",
    icon: Activity,
    text: "نظارت روزانه بر سطح انرژی، خواب و تغییرات فیزیکی.",
  },
  {
    id: 4,
    title: "اصلاح برنامه بر اساس پیشرفت",
    icon: RefreshCw,
    text: "به‌روزرسانی دینامیک مسیر درمان با توجه به بازخورد بدن شما.",
  },
  {
    id: 5,
    title: "بهبود کیفیت زندگی",
    icon: Heart,
    text: "رسیدن به ثبات پایدار، کاهش خستگی و مدیریت علائم.",
  },
];

const careDimensions = [
  { id: 1, title: "کاهش خستگی", top: "10%", right: "15%", delay: 0.1 },
  { id: 2, title: "بهبود کیفیت خواب", top: "25%", right: "70%", delay: 0.3 },
  { id: 3, title: "مدیریت التهاب", top: "45%", right: "5%", delay: 0.2 },
  { id: 4, title: "سلامت روده", top: "65%", right: "80%", delay: 0.4 },
  { id: 5, title: "تنظیم انرژی روزانه", top: "80%", right: "20%", delay: 0.3 },
  { id: 6, title: "تعادل مواد مغذی", top: "15%", right: "45%", delay: 0.5 },
  { id: 7, title: "کاهش مشکلات گوارشی", top: "85%", right: "60%", delay: 0.2 },
  { id: 8, title: "سبک زندگی پایدار", top: "50%", right: "65%", delay: 0.6 },
];

export default function MSCareSections() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      dir="rtl"
      className="w-full font-sans text-right overflow-hidden"
      ref={containerRef}
    >
      {/* SECTION 01: The Journey */}
      <section className="relative w-full max-w-7xl mx-auto px-6 py-32 lg:py-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Right Column: Narrative & CTA (Sticky) */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-3xl lg:text-5xl font-bold text-gray-900 leading-[1.4] mb-6"
              >
                چرا بیماران ام‌اس این روش درمانی را انتخاب می‌کنند؟
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="text-lg text-gray-600 leading-relaxed mb-10 max-w-md"
              >
                شما یک رژیم غذایی دریافت نمی‌کنید. شما وارد یک سیستم مراقبت
                مداوم می‌شوید که بر اساس واکنش‌های عصبی و نیازهای متغیر بدن شما
                طراحی شده است.
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="bg-[#24D8DC] text-white px-8 py-4 rounded-[24px] font-medium text-lg shadow-[0_8px_20px_rgba(36,216,220,0.25)] hover:shadow-[0_12px_25px_rgba(36,216,220,0.35)] transition-shadow duration-300"
              >
                شروع مسیر درمان
              </motion.button>
            </div>
          </div>

          {/* Left Column: Flowing Path */}
          <div className="lg:col-span-7 relative pt-10">
            {/* Elegant Background Line */}
            <div className="absolute top-0 bottom-0 right-[39px] w-[2px] bg-gray-200" />

            {/* Animated SVG Path overlapping the background line */}
            <svg
              className="absolute top-0 bottom-0 right-[39px] w-[2px] h-full"
              preserveAspectRatio="none"
            >
              <motion.line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="#24D8DC"
                strokeWidth="2"
                style={{ pathLength }}
              />
            </svg>

            <div className="flex flex-col gap-16 relative z-10">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-150px" }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  className="flex items-start gap-8"
                >
                  <div className="relative shrink-0">
                    <div className="w-20 h-20 bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex items-center justify-center border border-gray-100/50">
                      <step.icon
                        className="w-8 h-8 text-[#24D8DC]"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                  <div className="bg-white rounded-[32px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 flex-1 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-shadow duration-500">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{step.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider Soft Gradient */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-10" />

      {/* SECTION 02: Dimensions of Care */}
      <section className="relative w-full max-w-7xl mx-auto px-6 py-32 lg:py-48 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center z-20 relative mb-16 lg:mb-0"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-[1.4] mb-4">
            همراه شما در تمام مسیر زندگی با ام‌اس
          </h2>
          <p className="text-lg text-gray-500">
            ابعاد مختلف سلامت شما در یک اکوسیستم یکپارچه
          </p>
        </motion.div>

        {/* Organic Orbiting Container */}
        <div className="relative w-full max-w-4xl aspect-[1/1] flex items-center justify-center">
          {/* Central Abstract Neural/Pathways Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 m-auto w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] flex items-center justify-center opacity-80"
          >
            {/* Core Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(36,216,220,0.15)_0%,transparent_70%)] rounded-full blur-2xl" />

            {/* Abstract Neural SVG Lines */}
            <svg
              viewBox="0 0 500 500"
              className="w-full h-full absolute inset-0 text-[#24D8DC]/30"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 3, ease: "easeInOut" }}
                d="M250 250 Q 150 100 50 200 T 100 400"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
                d="M250 250 Q 350 400 450 300 T 400 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 3, delay: 0.2, ease: "easeInOut" }}
                d="M250 250 Q 100 350 200 450"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 3, delay: 0.7, ease: "easeInOut" }}
                d="M250 250 Q 400 150 300 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>

          {/* Floating Panels */}
          {/* Mobile: Standard stacked layout / Desktop: Organic Absolute Orbiting */}
          <div className="relative w-full h-full flex flex-wrap lg:block gap-4 justify-center items-center z-20 mt-10 lg:mt-0">
            {careDimensions.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: item.delay,
                  ease: "easeOut",
                }}
                className="lg:absolute lg:transform-none"
                style={{
                  top: `var(--lg-top, auto)`,
                  right: `var(--lg-right, auto)`,
                  // Use CSS variables so absolute positioning only applies to LG breakpoint context via Tailwind classes above
                  ...(typeof window !== "undefined" && window.innerWidth >= 1024
                    ? { top: item.top, right: item.right }
                    : {}),
                }}
              >
                {/* Breathing Animation Wrapper */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 4 + (index % 3), // Varied breathing rhythm
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: item.delay, // Offset starts so they don't breathe in unison
                  }}
                  className="bg-white/90 backdrop-blur-sm border border-[#24D8DC]/10 px-6 py-4 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.05)] whitespace-nowrap text-gray-800 font-medium text-sm lg:text-base hover:shadow-[0_12px_40px_rgba(36,216,220,0.15)] hover:border-[#24D8DC]/30 transition-colors duration-500 cursor-default"
                >
                  {item.title}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
