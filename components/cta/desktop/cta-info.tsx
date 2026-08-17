import React from "react";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { ScrollTrigger } from "@/components/ui/scroll-trigger";

// Explicit imports ensure the bundler resolves the assets regardless of folder structure
import baleIcon from "@/assets/icons/bale.svg";
import eittaIcon from "@/assets/icons/eitta.svg";
import { cn } from "@/lib/utils";

export function CtaInfo() {
  return (
    <ScrollTrigger className="scroll-stagger-group relative isolate flex flex-col space-y-2">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat opacity-40 md:h-[700px] md:w-[700px]"
        aria-hidden="true"
      />

      {/* Delay: 200ms */}
      <div className="stagger-item" style={{ animationDelay: "200ms" }}>
        <span className="inline-block text-sm font-semibold tracking-wide text-primary">
          ارتباط سریع و آسان
        </span>
      </div>

      {/* Delay: 550ms (200ms + 350ms stagger) */}
      <div className="stagger-item" style={{ animationDelay: "550ms" }}>
        <Heading className="text-4xl font-extrabold leading-tight text-foreground lg:text-5xl">
          برای شروع، <br />
          <span className="text-primary">مسیر مناسب</span> را انتخاب کنید
        </Heading>
      </div>

      {/* Delay: 900ms */}
      <div className="stagger-item" style={{ animationDelay: "900ms" }}>
        <Paragraph className="max-w-lg text-lg leading-9 text-muted-foreground">
          فرم ارزیابی کوتاه ما را تکمیل کنید تا با اطلاعات کامل با شما تماس
          بگیریم، یا برای پاسخ سریع‌تر مستقیماً در پیام‌رسان‌ها به ما پیام دهید.
        </Paragraph>
      </div>

      {/* Delay: 1250ms */}
      <div
        className="stagger-item space-y-4 pt-4"
        style={{ animationDelay: "1250ms" }}
      >
        <h4 className="font-semibold text-foreground">
          ارتباط مستقیم در پیام‌رسان‌ها:
        </h4>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://ble.ir/your_bale_id"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "pillSecondary", size: "pill" }),
              "gap-2 border-primary/20", // for mobile add "w-full justify-start px-5"
            )}
          >
            <Image
              src={baleIcon}
              alt="Bale"
              width={24}
              height={24}
              className="size-6"
            />
            پشتیبانی بله
          </a>

          <a
            href="https://eitaa.com/your_eitaa_id"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "pillSecondary", size: "pill" }),
              "gap-2 border-primary/20", // for mobile add "w-full justify-start px-5"
            )}
          >
            <Image
              src={eittaIcon}
              alt="Eitaa"
              width={24}
              height={24}
              className="size-6"
            />
            پشتیبانی ایتا
          </a>
        </div>
      </div>
    </ScrollTrigger>
  );
}
