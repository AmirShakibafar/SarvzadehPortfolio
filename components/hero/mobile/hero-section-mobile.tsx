// hero-section-mobile.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { HeroImageMobile } from "./hero-image-mobile";

export function HeroSectionMobile() {
  return (
    <main
      className="
        flex flex-col-reverse
        items-center justify-center
        w-full gap-8 md:gap-12
        min-h-[calc(100svh-80px)]
        py-6
        isolate
      "
    >
      {/* Right Side: Text Content */}
      <motion.div
        className="flex flex-col items-center text-center gap-5 md:gap-6 max-w-3xl z-10 shrink-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div>
          <Heading
            as="h1"
            size="h1"
            className="text-3xl md:text-4xl text-foreground leading-[1.3]"
          >
            تغذیه شخصی‌سازی شده <br />
            برای مدیریت بهتر <span className="text-primary">ام‌اس</span> <br />و
            بهبود کیفیت <span className="text-primary">زندگی</span> شما
          </Heading>
        </div>

        <div>
          <Paragraph size="lg" className="text-sm md:text-base max-w-[480px]">
            با برنامه‌های غذایی علمی و متناسب با شرایط شما، به کنترل علائم ام‌اس
            کمک کرده و سلامت‌تان را بهبود ببخشید.
          </Paragraph>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mt-2">
          <Button
            variant="pillPrimary"
            size="pill"
            className="gap-2 text-sm md:text-base"
          >
            رزرو مشاوره
            <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
          </Button>
          <Button
            variant="pillSecondary"
            size="pill"
            className="gap-2 bg-white/50 hover:bg-white/80 text-sm md:text-base"
          >
            بیشتر بدانید
            <ArrowLeft className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground" />
          </Button>
        </div>
      </motion.div>

      {/* Left Side: Image Content */}
      <motion.div
        className="relative flex justify-center items-end w-full md:w-[80%] isolate"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Background Blob - Replaced CSS blur with native radial gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full bg-[radial-gradient(circle,var(--tw-gradient-stops))] from-primary/25 to-transparent -z-10 pointer-events-none" />

        <HeroImageMobile src="/images/hero/Hero-Image.webp" />
      </motion.div>
    </main>
  );
}
