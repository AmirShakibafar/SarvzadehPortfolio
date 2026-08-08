"use client";

import { motion, Variants } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { HeroImage } from "./hero-image";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.45,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function HeroSection() {
  return (
    <main
      className="
        flex flex-col-reverse lg:flex-row-reverse
        items-center justify-center lg:justify-between 
        w-full gap-8 md:gap-12 lg:gap-8 
        min-h-[calc(100svh-80px)]
        py-6
        isolate
      "
    >
      {/* Right Side: Text Content */}
      <motion.div
        className="flex flex-col items-center lg:items-start text-center lg:text-right gap-5 md:gap-6 lg:gap-8 w-full md:max-w-2xl lg:w-[45%] z-10 shrink-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className=" ">
          <Heading
            as="h1"
            size="h1"
            className="text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.3] lg:leading-[1.2]"
          >
            تغذیه شخصی‌سازی شده <br className="hidden lg:block" />
            برای مدیریت بهتر <span className="text-primary">ام‌اس</span>{" "}
            <br className="hidden lg:block" />و بهبود کیفیت{" "}
            <span className="text-primary">زندگی</span> شما
          </Heading>
        </motion.div>

        <motion.div variants={itemVariants} className=" ">
          <Paragraph size="lg" className="text-sm md:text-base max-w-[480px]">
            با برنامه‌های غذایی علمی و متناسب با شرایط شما، به کنترل علائم ام‌اس
            کمک کرده و سلامت‌تان را بهبود ببخشید.
          </Paragraph>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center lg:justify-start gap-3 md:gap-4 mt-2  "
        >
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
            className="gap-2 bg-white/50 hover:bg-white/80 text-sm md:text-base  "
          >
            بیشتر بدانید
            <ArrowLeft className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Left Side: Image Content */}
      <motion.div
        className="relative flex justify-center items-end w-full md:w-[80%] lg:w-[55%] isolate  "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Replaced CSS blur with SVG blob, scaled up to account for baked-in blur spread */}
        <div
          className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] md:h-[750px] md:w-[750px] lg:h-[1000px] lg:w-[1000px] -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat opacity-40 pointer-events-none"
          aria-hidden="true"
        />

        <HeroImage />
      </motion.div>
    </main>
  );
}
