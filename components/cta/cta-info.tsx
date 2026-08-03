"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.35,
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

export function CtaInfo() {
  return (
    <motion.div
      className="flex flex-col space-y-2"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
    >
      {/* Removed static will-change-transform */}
      <motion.div variants={itemVariants}>
        <span className="inline-block text-sm font-semibold tracking-wide text-primary">
          ارتباط سریع و آسان
        </span>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Heading className="text-4xl font-extrabold leading-tight text-foreground lg:text-5xl">
          برای شروع، <br />
          <span className="text-primary">مسیر مناسب</span> را انتخاب کنید
        </Heading>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Paragraph className="max-w-lg text-lg leading-9 text-muted-foreground">
          فرم ارزیابی کوتاه ما را تکمیل کنید تا با اطلاعات کامل با شما تماس
          بگیریم، یا برای پاسخ سریع‌تر مستقیماً در پیام‌رسان‌ها به ما پیام دهید.
        </Paragraph>
      </motion.div>

      <motion.div variants={itemVariants} className="space-y-4 pt-4">
        <h4 className="font-semibold text-foreground">
          ارتباط مستقیم در پیام‌رسان‌ها:
        </h4>
        <div className="flex flex-wrap items-center gap-4">
          <Button
            // Added transform-gpu to isolate the backdrop-blur computation
            className="flex h-12 items-center gap-2 rounded-full border border-white/20 bg-[#18a983]/90 px-6 text-white shadow-lg shadow-[#18a983]/20 transition-all hover:bg-[#18a983] backdrop-blur-md transform-gpu"
            onClick={() => window.open("https://ble.ir/your_bale_id", "_blank")}
          >
            پشتیبانی بله
          </Button>

          <Button
            className="flex h-12 items-center gap-2 rounded-full border border-white/20 bg-[#ea7a2c]/90 px-6 text-white shadow-lg shadow-[#ea7a2c]/20 transition-all hover:bg-[#ea7a2c] backdrop-blur-md transform-gpu"
            onClick={() =>
              window.open("https://eitaa.com/your_eitaa_id", "_blank")
            }
          >
            پشتیبانی ایتا
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}
