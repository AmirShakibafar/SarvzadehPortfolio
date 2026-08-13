"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";

// Explicit imports ensure the bundler resolves the assets regardless of folder structure
import baleIcon from "@/assets/icons/bale.svg";
import eittaIcon from "@/assets/icons/eitta.svg";

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
      className="relative isolate flex flex-col space-y-2"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "100px 0px", amount: 0.05 }}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat opacity-40 md:h-[700px] md:w-[700px]"
        aria-hidden="true"
      />

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
            variant="pillSecondary"
            size="pill"
            className="gap-2 border-primary/20"
            onClick={() => window.open("https://ble.ir/your_bale_id", "_blank")}
          >
            <Image
              src={baleIcon}
              alt="Bale"
              width={24}
              height={24}
              className="size-6"
            />
            پشتیبانی بله
          </Button>

          <Button
            variant="pillSecondary"
            size="pill"
            className="gap-2 border-primary/20"
            onClick={() =>
              window.open("https://eitaa.com/your_eitaa_id", "_blank")
            }
          >
            <Image
              src={eittaIcon}
              alt="Eitaa"
              width={24}
              height={24}
              className="size-6"
            />
            پشتیبانی ایتا
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}
