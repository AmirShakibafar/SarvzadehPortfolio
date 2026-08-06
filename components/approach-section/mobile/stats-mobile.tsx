// decorated-stats-grid-mobile.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { DotPattern } from "../../ui/dot-pattern";

const statsData = [
  {
    value: "۱۰+",
    title: "سال تجربه تخصصی",
    description: "در تغذیه بالینی\nو مدیریت ام‌اس",
    highlight: false,
  },
  {
    value: "۵۰۰+",
    title: "ارزیابی تغذیه‌ای",
    description: "همراهی با بیماران\nبا برنامه اختصاصی",
    highlight: false,
  },
  {
    value: "۱۰۰٪",
    title: "برنامه اختصاصی",
    description: "متناسب با شرایط\nهر بیمار",
    highlight: true,
  },
];

export function DecoratedStatsGridMobile() {
  return (
    <div className="relative flex items-center justify-center isolate">
      {/* Flattened staggered animation into a single container fade */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "50px 0px", amount: 0.05 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative w-full"
      >
        <DotPattern className="-right-4 -top-4 h-24 w-24 opacity-30" />

        <div className="grid w-full grid-cols-2 gap-4">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className={`relative h-full ${
                index === 2 ? "col-span-2" : "col-span-1"
              }`}
            >
              {/* Fake Glass Structure replacing GlassCard and backdrop-blur */}
              <div
                className={`
                  relative flex h-full flex-col items-center justify-center p-6 text-center 
                  rounded-[24px] overflow-hidden
                  shadow-[0_8px_20px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.8)]
                  ${
                    stat.highlight
                      ? "bg-white/70 border border-primary/20"
                      : "bg-white/50 border border-white/50"
                  }
                `}
              >
                {/* Surface Glare Layer */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-white/50 to-transparent pointer-events-none" />

                {/* Z-Index Content */}
                <div className="relative z-10 flex flex-col items-center">
                  <div
                    className={`text-4xl font-extrabold tracking-tight ${
                      stat.highlight ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {stat.value}
                  </div>
                  <div className="mt-3 text-[13px] font-bold text-foreground">
                    {stat.title}
                  </div>
                  <div className="mt-1 whitespace-pre-line text-[11px] leading-5 text-muted-foreground/80">
                    {stat.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
