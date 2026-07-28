import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animations";

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

export function StatsOverImageBlob() {
  // A wider, more asymmetric horizontal organic blob path
  const blobPath =
    "M50,350 C30,150 250,50 500,80 C750,110 950,250 900,450 C850,650 600,750 350,700 C100,650 70,550 50,350 Z";

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative z-0 mt-20 flex h-full w-full items-center justify-center lg:col-span-7 lg:mt-0"
    >
      {/* 
        Architectural breakout container: 
        Forces the image to bleed off the left edge (in RTL) and scale up to ~65% of screen width.
        The mask-image creates the soft fade where it approaches the text (right side of this container).
      */}
      <div
        className="
          relative isolate flex w-[140%] -translate-x-[20%] flex-col items-center 
          lg:absolute lg:bottom-auto lg:left-0 lg:top-1/2 lg:w-[65vw] lg:-translate-x-0 lg:-translate-y-1/2
          [mask-image:linear-gradient(to_left,transparent_0%,black_15%,black_100%)]
        "
      >
        {/* Floating glass bubbles */}
        <div className="absolute right-[15%] top-[10%] z-20 size-24 rounded-full border border-white/40 bg-white/10 backdrop-blur-xl" />
        <div className="absolute bottom-[20%] left-[10%] z-20 size-40 rounded-full border border-white/50 bg-white/20 backdrop-blur-2xl" />
        <div className="absolute bottom-[40%] right-[25%] z-20 size-16 rounded-full border border-white/30 bg-white/5 backdrop-blur-lg" />

        {/* Stats floating integrated into the top section of the blob */}
        <motion.div
          variants={fadeInUp}
          className="absolute left-[45%] top-[15%] z-30 flex w-[90%] max-w-2xl -translate-x-1/2 items-center justify-around gap-6"
        >
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="text-center rounded-3xl border border-white/20 bg-white/10 px-6 py-5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-md"
            >
              <div
                className={`text-4xl font-extrabold tracking-tight lg:text-5xl ${
                  stat.highlight ? "text-primary" : "text-foreground"
                }`}
              >
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-semibold text-foreground">
                {stat.title}
              </div>
              <div className="mt-1 whitespace-pre-line text-xs leading-6 text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Massive organic image structure */}
        <div className="relative aspect-[16/10] w-full overflow-visible">
          {/* Deep architectural teal glow */}
          <div className="absolute inset-20 -z-10 rounded-[40%] bg-primary/20 blur-[120px]" />

          <svg
            className="absolute inset-0 h-full w-full overflow-visible"
            viewBox="0 0 1000 800"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <clipPath id="massive-blob">
                <path d={blobPath} />
              </clipPath>
            </defs>

            <image
              href="/images/approach/bg2.png"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#massive-blob)"
            />

            {/* Subtle premium glass rim lighting */}
            <path
              d={blobPath}
              stroke="rgba(255,255,255,0.6)"
              strokeWidth="2"
              fill="none"
              className="drop-shadow-md"
            />
            <path
              d={blobPath}
              stroke="rgba(13,220,213,0.15)"
              strokeWidth="8"
              fill="none"
              className="blur-sm"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
