// cta-info-mobile.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";

export function CtaInfoMobile() {
  return (
    <motion.div
      className="relative flex flex-col space-y-4 text-center items-center isolate w-full"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "50px 0px", amount: 0.1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Mobile-scaled Background Blob */}
      <div
        className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat opacity-40 pointer-events-none"
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
        <Paragraph className="max-w-[280px] sm:max-w-md text-sm leading-relaxed text-muted-foreground mx-auto">
          فرم ارزیابی کوتاه ما را تکمیل کنید تا با اطلاعات کامل با شما تماس
          بگیریم، یا برای پاسخ سریع‌تر در پیام‌رسان‌ها به ما پیام دهید.
        </Paragraph>
      </div>

      <div className="space-y-3 pt-2 w-full max-w-[280px] sm:max-w-md">
        <h4 className="text-sm font-semibold text-foreground">
          ارتباط مستقیم در پیام‌رسان‌ها:
        </h4>
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
          <Button
            className="flex w-full h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-[#18a983]/90 px-6 text-white shadow-md shadow-[#18a983]/20 transition-colors active:bg-[#18a983]"
            onClick={() => window.open("https://ble.ir/your_bale_id", "_blank")}
          >
            پشتیبانی بله
          </Button>

          <Button
            className="flex w-full h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-[#ea7a2c]/90 px-6 text-white shadow-md shadow-[#ea7a2c]/20 transition-colors active:bg-[#ea7a2c]"
            onClick={() =>
              window.open("https://eitaa.com/your_eitaa_id", "_blank")
            }
          >
            پشتیبانی ایتا
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
