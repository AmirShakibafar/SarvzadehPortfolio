"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  PlayCircle,
  Image as ImageIcon,
  BookOpen,
  Search,
  Activity,
  Shield,
  HeartPulse,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Component Imports
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { GlassCard } from "@/components/ui/glass-card";
import { autoimmuneData } from "@/data/autoimmune";

// ============================================================================
// CONTINUOUS BACKGROUND ATMOSPHERE
// ============================================================================
function MedicalBackground() {
  return (
    <div
      className="fixed inset-0 -z-50 overflow-hidden bg-[#FAFAFA] pointer-events-none"
      aria-hidden="true"
    >
      {/* Extremely soft, continuous cyan atmosphere */}
      <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[120px] opacity-70" />
      <div className="absolute top-[40%] left-[-10%] w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[100px] opacity-60" />
      <div className="absolute bottom-[-10%] right-[20%] w-[70vw] h-[70vw] bg-emerald-50/40 rounded-full blur-[120px] opacity-50" />
    </div>
  );
}

// ============================================================================
// RIGHT-SIDE PROGRESS INDICATOR
// ============================================================================
function ScrollProgressIndicator({ activeSection }: { activeSection: string }) {
  const sections = [
    { id: "hero", label: "معرفی" },
    { id: "mechanism", label: "سازوکار" },
    ...autoimmuneData.featuredDiseases.map((d) => ({
      id: d.id,
      label: d.name.split(" (")[1]?.replace(")", "") || d.name,
    })),
    { id: "library", label: "کتابخانه بیماری‌ها" },
  ];

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col gap-6 z-50">
      {sections.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <button
            key={section.id}
            onClick={() => handleScroll(section.id)}
            className="group relative flex items-center justify-center w-6 h-6 focus:outline-none"
            aria-label={`Scroll to ${section.label}`}
          >
            {/* Dot */}
            <div
              className={cn(
                "transition-all duration-500 rounded-full",
                isActive
                  ? "w-2.5 h-2.5 bg-primary shadow-[0_0_12px_rgba(var(--primary-rgb),0.6)]"
                  : "w-1.5 h-1.5 bg-slate-300 group-hover:bg-primary/50 group-hover:scale-150",
              )}
            />

            {/* Label (Pops out to the left of the dot in RTL) */}
            <div
              className={cn(
                "absolute right-8 whitespace-nowrap text-xs font-medium transition-all duration-500 px-3 py-1.5 rounded-full",
                isActive
                  ? "opacity-100 translate-x-0 text-primary bg-primary/5 backdrop-blur-sm"
                  : "opacity-0 translate-x-4 text-slate-400 group-hover:opacity-100 group-hover:translate-x-2",
              )}
            >
              {section.label}
            </div>
          </button>
        );
      })}
    </div>
  );
}

// ============================================================================
// FLOATING UI BADGE
// ============================================================================
function FloatingBadge({
  icon: Icon,
  title,
  subtitle,
  className,
  delay = 0,
}: {
  icon: any;
  title: string;
  subtitle?: string;
  className?: string;
  delay?: number;
}) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      animate={prefersReduced ? {} : { y: [0, -6, 0] }}
      // @ts-ignore
      transition={{
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
      }}
      className={cn("absolute z-20", className)}
    >
      <GlassCard className="flex items-center gap-4 p-3 pr-4 rounded-2xl">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div className="flex flex-col pl-2">
          <span className="text-sm font-bold text-slate-800">{title}</span>
          {subtitle && (
            <span className="text-xs text-slate-500 font-medium">
              {subtitle}
            </span>
          )}
        </div>
      </GlassCard>
    </motion.div>
  );
}

// ============================================================================
// HERO SECTION
// ============================================================================
function AutoimmuneHero() {
  const scrollToDiseases = () => {
    document
      .getElementById(autoimmuneData.featuredDiseases[0].id)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-[90vh] flex items-center pt-24 pb-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-14 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center w-full">
        {/* Content (Right Side) */}
        <div className="flex flex-col items-start text-right z-10 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary font-medium text-sm mb-8"
          >
            <Activity className="w-4 h-4" />
            <span>رویکرد نوین ایمونولوژی</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Heading size="h1" className="mb-6">
              آشنایی با بیماری‌های <br />
              <span className="text-primary">خودایمنی</span>
            </Heading>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Paragraph size="lg" className="max-w-md mb-12">
              {autoimmuneData.description}
            </Paragraph>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button
              size="pill"
              variant="pillPrimary"
              className="flex items-center gap-2 px-8"
              onClick={scrollToDiseases}
            >
              <span>بررسی بیماری‌ها</span>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <Button
              size="pill"
              variant="pillSecondary"
              className="px-8"
              onClick={() =>
                document
                  .getElementById("library")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              کتابخانه مرجع
            </Button>
          </motion.div>
        </div>

        {/* Visual (Left Side) - Soft Atmospheric Glow + Badges */}
        <div className="relative h-[400px] lg:h-[500px] w-full order-1 lg:order-2 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-[80%] h-[80%] bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute w-[60%] h-[60%] bg-primary/20 rounded-full blur-2xl opacity-60" />
            <div className="absolute w-full h-full border border-primary/10 rounded-full opacity-30 border-dashed" />
          </motion.div>

          <FloatingBadge
            icon={Shield}
            title="سیستم ایمنی"
            subtitle="شبکه دفاعی بدن"
            className="top-12 right-0 lg:right-12"
            delay={0.4}
          />
          <FloatingBadge
            icon={HeartPulse}
            title="کنترل التهاب"
            subtitle="مدیریت علائم"
            className="bottom-12 left-0 lg:left-12"
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// IMMUNE SYSTEM PROCESS (Directly on canvas)
// ============================================================================
function ImmuneSystemProcess() {
  const steps = [
    { title: "سیستم ایمنی", desc: "عملکرد طبیعی دفاعی بدن" },
    { title: "فعال‌شدن نابجا", desc: "تشخیص اشتباه بافت خودی" },
    { title: "التهاب", desc: "تجمع سلول‌های ایمنی" },
    { title: "آسیب بافتی", desc: "بروز علائم بیماری" },
  ];

  return (
    <section id="mechanism" className="py-24 relative z-10 w-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <Heading size="h2" className="mb-4">
            سازوکار بیماری‌های خودایمنی
          </Heading>
          <Paragraph>
            در این بیماری‌ها، سیستم ایمنی به اشتباه بافت‌های سالم بدن را هدف
            قرار داده و باعث ایجاد التهاب می‌شود.
          </Paragraph>
        </motion.div>

        <div className="relative">
          {/* Connecting Lines */}
          <div className="hidden lg:block absolute top-6 right-16 left-16 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent -z-10" />
          <div className="lg:hidden absolute right-6 top-8 bottom-16 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex flex-row lg:flex-col items-start lg:items-center lg:text-center gap-6 lg:gap-4 relative"
              >
                <div className="text-primary/40 font-light text-4xl lg:text-5xl leading-none shrink-0 bg-[#FAFAFA] pr-2 lg:pr-0 lg:px-4">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <div className="flex flex-col lg:items-center mt-1 lg:mt-2">
                  <h4 className="text-slate-900 font-bold mb-1.5 text-lg">
                    {step.title}
                  </h4>
                  <Paragraph size="sm" className="max-w-[200px]">
                    {step.desc}
                  </Paragraph>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// RESOURCE ACTION (Inline, Compact, Native)
// ============================================================================
function ResourceAction({
  icon: Icon,
  title,
  href,
}: {
  icon: any;
  title: string;
  href?: string;
}) {
  const ActionIcon = href ? ExternalLink : ArrowLeft;

  const content = (
    <div className="group flex items-center gap-4 py-3 cursor-pointer border-b border-slate-100 hover:border-primary/30 transition-colors w-full md:max-w-md">
      <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary/10 group-hover:scale-105 transition-all shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <span className="text-sm font-medium text-slate-700 group-hover:text-primary transition-colors flex-grow text-right">
        {title}
      </span>
      <ActionIcon
        className={cn(
          "w-4 h-4 text-primary opacity-0 transition-all shrink-0",
          href
            ? "group-hover:opacity-100"
            : "-translate-x-2 group-hover:opacity-100 group-hover:translate-x-0",
        )}
      />
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="block w-full">
        {content}
      </a>
    );
  }
  return (
    <button
      type="button"
      className="block w-full text-right focus:outline-none"
    >
      {content}
    </button>
  );
}

// ============================================================================
// DISEASE SCROLL STORY
// ============================================================================
function DiseaseStory({
  disease,
  index,
}: {
  disease: (typeof autoimmuneData.featuredDiseases)[0];
  index: number;
}) {
  const isEven = index % 2 === 0;

  const nameParts = disease.name.split(" (");
  const enName = nameParts[0];
  const faName = nameParts[1]?.replace(")", "") || disease.name;

  const hasResources = disease.media || disease.paperDoi;

  return (
    <section
      id={disease.id}
      className="min-h-[80vh] flex items-center py-24 relative w-full"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-14 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content Column */}
          <div
            className={cn(
              "flex flex-col items-start text-right w-full",
              isEven ? "order-2 lg:order-1" : "order-2 lg:order-2",
            )}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="text-primary font-medium text-sm mb-4">
                {(index + 1).toString().padStart(2, "0")} — {enName}
              </div>
              <Heading size="h2" className="mb-6">
                {faName}
              </Heading>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <Paragraph size="lg" className="mb-12">
                {disease.description}
              </Paragraph>
            </motion.div>

            {/* Resources Section */}
            {hasResources && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="w-full"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                  <h4 className="text-sm font-bold text-slate-800">
                    مطالب و منابع مرتبط
                  </h4>
                </div>

                <div className="flex flex-col w-full">
                  {disease.media?.type === "video" && (
                    <ResourceAction
                      icon={PlayCircle}
                      title="مشاهده ویدیو آموزشی"
                    />
                  )}
                  {disease.media?.type === "photo" && (
                    <ResourceAction
                      icon={ImageIcon}
                      title="مشاهده تصاویر بالینی"
                    />
                  )}
                  {disease.paperDoi && (
                    <ResourceAction
                      icon={BookOpen}
                      title="مطالعه مقاله علمی مرجع"
                      href={`https://doi.org/${disease.paperDoi}`}
                    />
                  )}
                </div>
              </motion.div>
            )}
          </div>

          {/* Visual Column - Actual Image breathing on canvas */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className={cn(
              "relative w-full aspect-square md:aspect-[4/3] lg:aspect-square flex items-center justify-center",
              isEven ? "order-1 lg:order-2" : "order-1 lg:order-1",
            )}
          >
            {/* Subtle atmospheric anchor behind image */}
            <div className="absolute inset-0 bg-primary/5 rounded-[3rem] blur-2xl opacity-60" />

            {disease.imageUrl ? (
              <div className="relative w-[70%] h-[70%] lg:w-[80%] lg:h-[80%] drop-shadow-xl hover:drop-shadow-2xl transition-all duration-700 ease-out">
                <Image
                  src={disease.imageUrl}
                  alt={faName}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ) : (
              // Minimal fallback if image doesn't exist
              <div className="w-[60%] h-[60%] bg-white/50 backdrop-blur-md rounded-[2.5rem] border border-white/60 shadow-sm flex items-center justify-center">
                <Shield className="w-16 h-16 text-primary/20" />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// DISEASE LIBRARY (Inline List, No Cards)
// ============================================================================
function DiseaseLibrary() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredKeywords = autoimmuneData.keywords.filter((keyword) =>
    keyword.includes(searchQuery),
  );

  return (
    <section
      id="library"
      className="py-24 relative z-10 min-h-[70vh] flex items-center"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-14 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-12 lg:items-end justify-between mb-16"
        >
          <div className="text-right">
            <Heading size="h2" className="mb-4">
              کتابخانه بیماری‌ها
            </Heading>
            <Paragraph className="max-w-md">
              فهرست جامع سایر بیماری‌های خودایمنی که در این مرکز مورد بررسی،
              تشخیص و مدیریت قرار می‌گیرند.
            </Paragraph>
          </div>

          <div className="relative w-full max-w-sm">
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-primary/60" />
            </div>
            <input
              type="text"
              placeholder="جستجو در بین بیماری‌ها..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-14 pl-4 pr-12 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200/60 text-slate-900 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 focus:bg-white transition-all"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col w-full"
        >
          {filteredKeywords.length > 0 ? (
            filteredKeywords.map((keyword, index) => (
              <div
                key={index}
                className="group flex items-center justify-between py-6 border-b border-slate-200/60 hover:border-primary/30 transition-colors cursor-default relative overflow-hidden px-4 -mx-4 rounded-xl hover:bg-primary/[0.02]"
              >
                <div className="flex items-center gap-6 z-10">
                  <span className="text-slate-300 font-mono text-sm group-hover:text-primary/50 transition-colors">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <span className="text-slate-700 font-medium group-hover:text-primary transition-colors text-lg">
                    {keyword}
                  </span>
                </div>
                <ArrowLeft className="w-5 h-5 text-slate-300 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-primary transition-all z-10" />
              </div>
            ))
          ) : (
            <div className="w-full py-20 text-center flex flex-col items-center justify-center">
              <Search className="h-10 w-10 text-slate-300 mb-4" />
              <Paragraph>بیماری با این نام یافت نشد.</Paragraph>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// MAIN PAGE EXPORT
// ============================================================================
export default function AutoimmunePage() {
  const [activeSection, setActiveSection] = useState<string>("hero");

  // Track active section for right-side indicator
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }, // Trigger when element is near center
    );

    const sections = [
      "hero",
      "mechanism",
      ...autoimmuneData.featuredDiseases.map((d) => d.id),
      "library",
    ];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="relative w-full min-h-screen font-sans selection:bg-primary/20 selection:text-primary"
      dir="rtl"
    >
      <MedicalBackground />
      <ScrollProgressIndicator activeSection={activeSection} />

      <AutoimmuneHero />
      <ImmuneSystemProcess />

      {/* Featured Diseases flow directly on the canvas */}
      <div className="flex flex-col w-full">
        {autoimmuneData.featuredDiseases.map((disease, i) => (
          <DiseaseStory key={disease.id} disease={disease} index={i} />
        ))}
      </div>

      <DiseaseLibrary />
    </div>
  );
}
