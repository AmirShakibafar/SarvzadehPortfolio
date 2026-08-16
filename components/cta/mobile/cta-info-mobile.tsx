// cta-info-mobile.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";

import baleIcon from "@/assets/icons/bale.svg";
import eittaIcon from "@/assets/icons/eitta.svg";

export function CtaInfoMobile() {
  return (
    <motion.div
      className="relative flex w-full flex-col space-y-4 text-right isolate"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_OFFSET}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Mobile-scaled Background Blob - Kept centered behind the layout */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat opacity-20"
        aria-hidden="true"
      />

      <div>
        <span className="inline-block text-xs font-semibold tracking-wide text-primary">
          ارتباط سریع و آسان
        </span>
      </div>

      <div>
        <Heading className="text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
          برای شروع، <br />
          <span className="text-primary">مسیر مناسب</span> را انتخاب کنید
        </Heading>
      </div>

      <div>
        <Paragraph className="max-w-[280px] text-sm leading-relaxed text-muted-foreground sm:max-w-md">
          فرم ارزیابی کوتاه ما را تکمیل کنید تا با اطلاعات کامل با شما تماس
          بگیریم، یا برای پاسخ سریع‌تر در پیام‌رسان‌ها به ما پیام دهید.
        </Paragraph>
      </div>

      <div className="w-full max-w-[280px] space-y-3 pt-2 sm:max-w-md">
        <h4 className="text-sm font-semibold text-foreground">
          ارتباط مستقیم در پیام‌رسان‌ها:
        </h4>
        <div className="flex w-full flex-col gap-3 sm:flex-row">
          <Button
            variant="pillSecondary"
            size="pill"
            className="w-full justify-start gap-3 border-primary/20 px-5   "
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
            className="w-full justify-start gap-3 border-primary/20 px-5   "
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
      </div>
    </motion.div>
  );
}
