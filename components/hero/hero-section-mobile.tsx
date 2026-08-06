"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowLeft, Brain, Activity, Apple } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

// Simplified animation for mobile performance
const floatVariant: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export function HeroSectionMobile() {
  return (
    <motion.main
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative flex flex-col items-center w-full px-4 pb-10 gap-6 isolate overflow-hidden"
    >
      {/* Optimized Background Glow */}
      <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 w-[140%] h-[320px] rounded-full bg-primary/20 blur-[40px] opacity-70 -z-10 pointer-events-none" />

      {/* Image Section with Floating Cards */}
      <motion.div
        variants={fadeUpVariant}
        className="relative w-full max-w-[400px] h-[280px] sm:h-[320px] flex justify-center items-end mt-4"
      >
        <Image
          src="/images/hero/Hero-Image.webp"
          alt="Doctor"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-contain object-bottom [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
        />

        {/* Floating Cards Container - Positioned absolutely around the image */}
        <div className="absolute inset-0 pointer-events-none z-10">
          {/* Top Right */}
          <motion.div
            variants={floatVariant}
            className="absolute top-[10%] -right-2 sm:right-2"
          >
            <CompactFloatingCard
              title="مدیریت ام‌اس"
              icon={<Brain className="w-3.5 h-3.5 text-primary" />}
            />
          </motion.div>

          {/* Middle Left */}
          <motion.div
            variants={floatVariant}
            className="absolute top-[45%] -left-2 sm:left-2"
          >
            <CompactFloatingCard
              title="کاهش خستگی"
              icon={<Activity className="w-3.5 h-3.5 text-primary" />}
            />
          </motion.div>

          {/* Bottom Right */}
          <motion.div
            variants={floatVariant}
            className="absolute bottom-[15%] -right-2 sm:right-2"
          >
            <CompactFloatingCard
              title="سلامت سیستم عصبی"
              icon={<Apple className="w-3.5 h-3.5 text-primary" />}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Typography */}
      <motion.div
        variants={fadeUpVariant}
        className="flex flex-col items-center text-center gap-5 px-2"
      >
        <Heading
          as="h1"
          size="h1"
          className="text-[30px] sm:text-[32px] font-bold leading-[1.35] tracking-tight text-foreground"
        >
          تغذیه شخصی‌سازی شده <br />
          برای مدیریت بهتر{" "}
          <span className="text-primary font-extrabold">ام‌اس</span> <br />و
          بهبود کیفیت <span className="text-primary font-extrabold">زندگی</span>{" "}
          شما
        </Heading>

        <Paragraph
          size="lg"
          className="text-[15px] leading-[1.8] font-medium text-muted-foreground max-w-[340px]"
        >
          با برنامه‌های غذایی علمی و متناسب با شرایط شما، به کنترل علائم ام‌اس
          کمک کرده و سلامت‌تان را بهبود ببخشید.
        </Paragraph>
      </motion.div>

      {/* CTAs */}
      <motion.div
        variants={fadeUpVariant}
        transition={{ delay: 0.15 }}
        className="flex flex-col w-full max-w-[360px] gap-3 mt-1"
      >
        <Button
          variant="pillPrimary"
          size="pill"
          className="w-full h-14 justify-center gap-2 text-[15px] font-semibold"
        >
          رزرو مشاوره
          <ArrowLeft className="h-5 w-5" />
        </Button>

        <Button
          variant="pillSecondary"
          size="pill"
          className="w-full h-14 justify-center gap-2 text-[15px] font-medium bg-secondary/40"
        >
          بیشتر بدانید
          <ArrowLeft className="h-5 w-5 text-muted-foreground" />
        </Button>
      </motion.div>
    </motion.main>
  );
}

// Performant Glassmorphism Component
function CompactFloatingCard({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) {
  return (
    <div
      className="
        flex items-center gap-1.5 
        px-2.5 py-1 
        rounded-full 
        bg-white/40 
        border border-white/30 
        shadow-[0_8px_20px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.4)]
        backdrop-blur-md
        transform-gpu
        pointer-events-auto
      "
    >
      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 shadow-[inset_0_0_8px_rgba(255,255,255,0.3)]">
        {icon}
      </div>
      <span className="text-[11px] font-bold text-foreground/90 whitespace-nowrap pl-1">
        {title}
      </span>
    </div>
  );
}
