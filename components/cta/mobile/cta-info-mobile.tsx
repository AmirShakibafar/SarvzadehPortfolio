import React from "react";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { ScrollTrigger } from "@/components/ui/scroll-trigger";

import baleIcon from "@/assets/icons/bale.svg";
import eittaIcon from "@/assets/icons/eitta.svg";
import { cn } from "@/lib/utils";

export function CtaInfoMobile() {
  return (
    <ScrollTrigger className="scroll-stagger-group relative isolate w-full text-right">
      <div className="stagger-item flex w-full flex-col space-y-4">
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
      </div>
    </ScrollTrigger>
  );
}
