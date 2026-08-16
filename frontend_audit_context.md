# Frontend Deep Audit Context

### File: ./app/layout.tsx

**Risk Flags:** CSS & GPU Overload (WebKit)

```tsx
import localFont from "next/font/local";
import "./globals.css";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const vazir = localFont({
  src: [
    {
      path: "../public/fonts/vazir/Vazirmatn-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/vazir/Vazirmatn-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-vazir",
  display: "swap",
  preload: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={`${vazir.variable} scroll-smooth`}>
      <head>
        <title>دکتر رضا سرورزاده - تغذیه بالینی</title>

        <meta
          name="description"
          content="تغذیه شخصی‌سازی شده برای مدیریت بهتر ام‌اس و بهبود کیفیت زندگی."
        />
      </head>

      <body className="min-h-screen w-full bg-background text-foreground antialiased font-sans">
        <div className="sticky top-0 z-50 w-full">
          <Navbar />
        </div>

        {children}

        <Footer />
      </body>
    </html>
  );
}
```

---

### File: ./app/page.tsx

**Risk Flags:** CSS & GPU Overload (WebKit)

```tsx
import { HeroSection } from "@/components/hero/hero-section-index";
import { JourneySection } from "@/components/journey-section";
import WhyTrustMeSection from "@/components/approach-section";
import CtaSection from "@/components/cta/index";
import { FaqSection } from "@/components/faq";
import { SpecialtiesSection } from "@/components/experties";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center bg-background font-sans overflow-x-clip">
      {/* Global Background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[60%] rounded-full bg-primary/10   " />

        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[50%] rounded-full bg-primary/5   " />
      </div>

      <HeroSection />

      <div id="specialties">
        <SpecialtiesSection />
      </div>

      <div id="about">
        <WhyTrustMeSection />
      </div>

      <div id="journey">
        <JourneySection />
      </div>

      <div id="contact">
        <CtaSection />
      </div>

      <div id="faq" className="w-full">
        <FaqSection />
      </div>
    </div>
  );
}
```

---

### File: ./app/globals.css

**Risk Flags:** CSS & GPU Overload (WebKit)

```css
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans:
    var(--font-vazir), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, sans-serif;
  --font-serif: Georgia, Cambria, "Times New Roman", serif;
  --font-heading: var(--font-sans);
  --color-sidebar-ring: var(--sidebar-ring);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar: var(--sidebar);
  --color-chart-5: var(--chart-5);
  --color-chart-4: var(--chart-4);
  --color-chart-3: var(--chart-3);
  --color-chart-2: var(--chart-2);
  --color-chart-1: var(--chart-1);
  --color-ring: var(--ring);
  --color-input: var(--input);
  --color-border: var(--border);
  --color-destructive: var(--destructive);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent: var(--accent);
  --color-muted-foreground: var(--muted-foreground);
  --color-muted: var(--muted);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-secondary: var(--secondary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary: var(--primary);
  --color-popover-foreground: var(--popover-foreground);
  --color-popover: var(--popover);
  --color-card-foreground: var(--card-foreground);
  --color-card: var(--card);
  --radius-sm: calc(var(--radius) * 0.6);
  --radius-md: calc(var(--radius) * 0.8);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) * 1.4);
  --radius-2xl: calc(var(--radius) * 1.8);
  --radius-3xl: calc(var(--radius) * 2.2);
  --radius-4xl: calc(var(--radius) * 2.6);
}

/* * {
  outline: 1px solid rgba(255, 0, 0, 1) !important;
} */

:root {
  --primary: #0ddcd5;
  --primary-foreground: #ffffff;
  --secondary: #ebf5f5;
  --secondary-foreground: #2a5a5c;
  --background: #ffffff;
  --foreground: #242424;
  --card: #ffffff;
  --card-foreground: #242424;
  --popover: #ffffff;
  --popover-foreground: #242424;
  --muted: #f7f7f7;
  --muted-foreground: #848484;
  --accent: #f7f7f7;
  --accent-foreground: #343434;
  --destructive: #e23624;
  --border: #eaeaea;
  --input: #eaeaea;
  --ring: #b0b0b0;
  --chart-1: #dedede;
  --chart-2: #848484;
  --chart-3: #666666;
  --chart-4: #545454;
  --chart-5: #3c3c3c;
  --radius: 0.625rem;
  --sidebar: #fafafa;
  --sidebar-foreground: #242424;
  --sidebar-primary: #343434;
  --sidebar-primary-foreground: #fafafa;
  --sidebar-accent: #f7f7f7;
  --sidebar-accent-foreground: #343434;
  --sidebar-border: #eaeaea;
  --sidebar-ring: #b0b0b0;
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }

  html {
    @apply font-sans;
  }

  body {
    @apply min-h-screen bg-background text-foreground antialiased;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply font-heading;
  }
}
```

---

### File: ./components/ui/float-badge.tsx

**Risk Flags:** CSS & GPU Overload (WebKit)

```tsx
import { GlassCard } from "./glass-card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export function FloatingBadge({
  icon: Icon,
  title,
  subtitle,
  className,
}: {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "absolute z-20 transition-transform duration-300 hover:scale-105",
        className,
      )}
    >
      <GlassCard className="flex items-center gap-3 lg:gap-4 p-2.5 lg:p-3 pr-3 lg:pr-4 rounded-xl lg:rounded-2xl">
        <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg lg:rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
          <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
        </div>
        <div className="flex flex-col pl-1 lg:pl-2 text-right">
          <span className="text-xs lg:text-sm font-bold text-slate-800 leading-tight">
            {title}
          </span>
          {subtitle && (
            <span className="text-[10px] lg:text-xs text-slate-500 font-medium mt-0.5">
              {subtitle}
            </span>
          )}
        </div>
      </GlassCard>
    </div>
  );
}
```

---

### File: ./components/approach-section/section-header.tsx

**Risk Flags:** Framer Motion & Render Loops

```tsx
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

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

export function SectionHeader() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "100px 0px", amount: 0.05 }}
      className="lg:col-span-5 z-30 isolate"
    >
      <motion.div variants={itemVariants} className="   ">
        <span className="inline-block text-sm font-semibold tracking-wide text-primary">
          چرا بیماران به من اعتماد می‌کنند؟
        </span>
      </motion.div>

      <motion.h2
        variants={itemVariants}
        className="mt-4 max-w-xl text-4xl font-extrabold leading-tight text-foreground lg:text-5xl    "
      >
        هیچ دو بیمار
        <span className="text-primary"> ام‌اس </span>
        شبیه یکدیگر نیستند.
      </motion.h2>

      <motion.p
        variants={itemVariants}
        className="mt-8 max-w-md text-lg leading-9 text-muted-foreground    "
      >
        هر بیمار شرایط، علائم، سبک زندگی و اهداف متفاوتی دارد. به همین دلیل،
        برنامه درمانی باید بر پایه شواهد علمی و متناسب با نیازهای واقعی هر فرد
        طراحی شود.
      </motion.p>
    </motion.div>
  );
}
```

---

### File: ./components/approach-section/animations.ts

**Risk Flags:** Framer Motion & Render Loops

```ts
import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};
```

---

### File: ./components/approach-section/desktop/why-trust-me-section.tsx

**Risk Flags:** CSS & GPU Overload (WebKit)

```tsx
"use client";
import React from "react";
import { BackgroundDecorations } from "./bg-decoration";
import { SectionHeader } from "../section-header";
import { GlassBrainArtwork } from "./glass-brain-artwork";
import { QuoteDisplay } from "./quote-display";
import { DecoratedStatsGrid } from "./decorated-stats-grid";

export default function WhyTrustMeSection() {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-background pt-16 pb-8 lg:pt-24 lg:pb-16 isolate"
    >
      <BackgroundDecorations />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <SectionHeader />
          <DecoratedStatsGrid />
        </div>

        {/* Removed motion.div wrapper. Children handle their own animations. */}
        <div className="relative mt-16 lg:mt-24">
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            {/* Kept static, removed from animation tree */}
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5    " />
          </div>

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="order-first">
              <GlassBrainArtwork />
            </div>

            <div className="order-last lg:order-first">
              <QuoteDisplay />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

### File: ./components/approach-section/desktop/glass-brain-artwork.tsx

**Risk Flags:** Framer Motion & Render Loops

```tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function GlassBrainArtwork() {
  return (
    <div className="order-2 flex w-full justify-center lg:order-1 isolate">
      <motion.div
        className="relative isolate z-0 flex aspect-square w-full max-w-[480px] items-center justify-center"
        initial={{ scale: 0.8, y: 40, opacity: 0 }}
        whileInView={{ scale: 1, y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "100px 0px", amount: 0.05 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className="absolute left-1/2 top-1/2 -z-20 h-[150%] w-[150%] opacity-40 -translate-x-1/2 -translate-y-1/2 bg-contain bg-center bg-no-repeat pointer-events-none"
          style={{ backgroundImage: "url('/blob.svg')" }}
          aria-hidden="true"
        />

        <div className="relative z-10 h-full w-full">
          <Image
            src="/images/approach/brain2.webp"
            alt="Glass Brain"
            fill
            className="object-contain"
            draggable={false}
            sizes="(max-width: 480px) 100vw, 480px"
          />
        </div>
      </motion.div>
    </div>
  );
}
```

---

### File: ./components/approach-section/desktop/quote-display.tsx

**Risk Flags:** Framer Motion & Render Loops

```tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

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

export function QuoteDisplay() {
  return (
    <motion.div
      className="order-1 text-center lg:order-2 lg:text-right relative isolate"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "100px 0px", amount: 0.05 }}
    >
      <div
        className="hidden md:block absolute -z-10 top-1/2 opacity-10 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat pointer-events-none"
        aria-hidden="true"
      />

      <motion.div variants={itemVariants}>
        <span className="inline-block text-sm font-semibold tracking-wide text-primary">
          رویکرد من
        </span>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="mt-2 text-8xl leading-none text-primary/15"
      >
        ❝
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="mt-6 text-2xl font-light leading-[2.1] text-foreground md:text-3xl"
      >
        هدف من فقط تجویز یک رژیم غذایی نیست؛ بلکه همراهی با هر بیمار برای ساختن
        مسیری درمانی، علمی و ماندگار است.
      </motion.p>

      <motion.div variants={itemVariants} className="mt-2 flex justify-end">
        <Image
          src="/images/approach/signiture.webp"
          alt="امضا دکتر رضا سروزاده"
          width={240}
          height={160}
          className="h-40 w-auto object-contain"
        />
      </motion.div>
    </motion.div>
  );
}
```

---

### File: ./components/approach-section/desktop/decorated-stats-grid.tsx

**Risk Flags:** Framer Motion & Render Loops, CSS & GPU Overload (WebKit)

```tsx
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { DotPattern } from "../../ui/dot-pattern";
import { GlassCard } from "@/components/ui/glass-card";

const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 0.99, // Forces browser to maintain composite layer for consistent backdrop-filter rendering
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
};

const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 0.99, // Prevents glass transparency pop at the end of the animation
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

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

export function DecoratedStatsGrid() {
  return (
    <div className="relative flex items-center justify-center lg:col-span-7 lg:mt-0 isolate">
      <div
        className="absolute left-1/2 top-1/2 -z-10 h-[150%] opacity-40 w-[150%] max-w-4xl -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      <motion.div
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "100px 0px", amount: 0.05 }}
        className="relative w-full max-w-2xl"
      >
        <DotPattern className="-right-8 -top-8 h-32 w-32 opacity-40" />
        <DotPattern className="-bottom-8 -left-8 h-32 w-32 opacity-40" />

        <div className="grid w-full grid-cols-2 gap-6 lg:grid-cols-3 lg:gap-6">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              variants={cardItemVariants}
              className={`relative h-full   isolate ${
                index === 2 ? "col-span-2 lg:col-span-1" : "col-span-1"
              }`}
            >
              <div
                className="absolute left-1/2 top-1/2 -z-10 h-[150%] w-[150%] opacity-40 -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat pointer-events-none"
                aria-hidden="true"
              />

              <GlassCard
                className={`flex h-full flex-col items-center justify-center p-6 text-center   ${
                  stat.highlight ? "border-primary/30 bg-white/50     " : ""
                }`}
              >
                <div
                  className={`text-4xl font-extrabold tracking-tight lg:text-5xl ${
                    stat.highlight ? "text-primary" : "text-foreground"
                  }`}
                >
                  {stat.value}
                </div>
                <div className="mt-4 text-sm font-bold text-foreground">
                  {stat.title}
                </div>
                <div className="mt-2 whitespace-pre-line text-xs leading-6 text-muted-foreground">
                  {stat.description}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
```

---

### File: ./components/approach-section/mobile/why-trust-me-section-mobile.tsx

**Risk Flags:** CSS & GPU Overload (WebKit)

```tsx
// why-trust-me-section-mobile.tsx
"use client";

import React from "react";
import { SectionHeader } from "../section-header";
import { QuoteDisplay } from "../desktop/quote-display";
import { DecoratedStatsGridMobile } from "./stats-mobile";
import { GlassBrainArtworkMobile } from "./glass-artwork-mobile";
import { QuoteDisplayMobile } from "./quote-display-mobile";

export default function WhyTrustMeSectionMobile() {
  return (
    <section dir="rtl" className="relative isolate overflow-hidden py-16">
      {/* Mobile-optimized ambient background - Replaced expensive blurs with native radial gradients and removed   */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--tw-gradient-stops))] from-primary/20 to-transparent opacity-40" />
        <div className="absolute bottom-0 right-[-80px] h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,var(--tw-gradient-stops))] from-primary/10 to-transparent opacity-40" />
      </div>

      <div className="flex flex-col px-5">
        <div className="mb-8">
          <SectionHeader />
        </div>
        <DecoratedStatsGridMobile />
        <GlassBrainArtworkMobile />
        <QuoteDisplayMobile />
      </div>
    </section>
  );
}
```

---

### File: ./components/approach-section/mobile/stats-mobile.tsx

**Risk Flags:** Framer Motion & Render Loops

```tsx
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
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "50px 0px", amount: 0.05 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative w-full"
      >
        <DotPattern className="-right-4 -top-4 h-24 w-24 opacity-20" />

        <div className="grid w-full grid-cols-2 gap-4">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className={`relative h-full isolate ${
                index === 2 ? "col-span-2" : "col-span-1"
              }`}
            >
              {/* Blob placed individually behind each card */}
              <div
                className="absolute top-1/2 left-1/2 -z-10 h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat opacity-40 pointer-events-none"
                aria-hidden="true"
              />

              <div
                className={`
                  relative flex h-full flex-col items-center justify-center p-6 text-center 
                  rounded-[24px] overflow-hidden
                    
                  ${
                    stat.highlight
                      ? "bg-white/40 border border-primary/20"
                      : "bg-white/20 border border-white/30"
                  }
                `}
              >
                {/* Surface Glare Layer */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-white/20 to-transparent pointer-events-none" />

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
```

---

### File: ./components/approach-section/mobile/glass-artwork-mobile.tsx

**Risk Flags:** Framer Motion & Render Loops

```tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function GlassBrainArtworkMobile() {
  return (
    <div className="flex w-full justify-center isolate">
      <motion.div
        className="relative isolate z-0 flex aspect-square w-full max-w-[280px] items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "50px 0px", amount: 0.1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="absolute left-1/2 top-1/2 -z-10 h-[150%] w-[150%] opacity-40 -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat pointer-events-none" />

        <div className="relative z-10 h-full w-full animate-[pulse_8s_ease-in-out_infinite]">
          <Image
            src="/images/approach/brain2.webp"
            alt="Glass Brain"
            fill
            className="object-contain [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
            draggable={false}
            sizes="280px"
          />
        </div>
      </motion.div>
    </div>
  );
}
```

---

### File: ./components/approach-section/mobile/quote-display-mobile.tsx

**Risk Flags:** Framer Motion & Render Loops

```tsx
// quote-display-mobile.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function QuoteDisplayMobile() {
  return (
    <motion.div
      className="relative isolate text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "100px 0px", amount: 0.05 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div
        className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[1200px] -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat opacity-35 pointer-events-none"
        aria-hidden="true"
      />

      <div>
        <span className="inline-block text-sm font-semibold tracking-wide text-primary">
          رویکرد من
        </span>
      </div>

      <div className="mt-2 text-8xl leading-none text-primary/15">❝</div>

      <p className="mt-6 text-2xl font-light leading-[2.1] text-foreground">
        هدف من فقط تجویز یک رژیم غذایی نیست؛ بلکه همراهی با هر بیمار برای ساختن
        مسیری درمانی، علمی و ماندگار است.
      </p>

      <div className="mt-2 flex justify-center">
        <Image
          src="/images/approach/signiture.webp"
          alt="امضا دکتر رضا سروزاده"
          width={240}
          height={160}
          className="h-40 w-auto object-contain"
        />
      </div>
    </motion.div>
  );
}
```

---

### File: ./components/experties/index.tsx

**Risk Flags:** CSS & GPU Overload (WebKit)

```tsx
import Link from "next/link";
import { Shield, Activity, HeartPulse, Leaf, ArrowLeft } from "lucide-react";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { GlassCard } from "@/components/ui/glass-card";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

const specialtiesData = [
  {
    id: "autoimmune",
    title: "بیماری‌های خودایمنی",
    description:
      "مدیریت بیماری‌های مرتبط با سیستم ایمنی از جمله ام‌اس، میاستنی گراویس، پسوریازیس و ویتیلیگو.",
    icon: Shield,
    href: "/diseases/autoimmune",
    isActive: true,
  },

  {
    id: "hormonal-metabolic",
    title: "هورمونی - متابولیک",
    description:
      "کنترل شرایط فیزیولوژیک شامل فیبروم رحم، اندومتریوز، سندروم تخمدان پلی‌کیستیک (PCOS) و سندروم متابولیک.",
    icon: Activity,
    href: "/diseases/hormonal-metabolic",
    isActive: true,
  },
  {
    id: "allergy",
    title: "آلرژی و حساسیت",
    description:
      "تنظیم و بهبود واکنش‌های سیستمیک مرتبط با آسم، حساسیت‌های پوستی و سندرم MCAS.",
    icon: Leaf,
    href: "/diseases/allergy",
    isActive: true,
  },
  {
    id: "cancer",
    title: "سرطان",
    description:
      "پشتیبانی ساختاریافته برای انواع سرطان‌ها نظیر ملانوما، سرطان پروستات و سرطان پستان.",
    icon: HeartPulse,
    href: "/diseases/cancer",
    isActive: false,
  },
];

export function SpecialtiesSection() {
  return (
    <section className="relative z-10 w-full min-w-0 overflow-hidden py-16">
      {/* Global Background Blob */}
      <div
        className="absolute left-1/2 top-1/2 -z-10 h-[100%] w-[100%] max-w-4xl -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat opacity-30 pointer-events-none"
        aria-hidden="true"
      />

      <div className="mx-auto w-full min-w-0 max-w-7xl px-6 lg:px-14">
        <div className="mx-auto mb-8 max-w-2xl text-center relative z-10">
          <span className="mb-4 inline-block text-xs lg:text-sm font-semibold tracking-wide text-primary">
            تخصص‌های درمانی
          </span>
          <Heading size="h2" className="mb-4">
            زمینه‌های تخصصی مشاوره
          </Heading>
          <Paragraph size="sm" className="text-slate-600">
            طراحی مسیر درمانی مبتنی بر جدیدترین مقالات علمی برای مدیریت و بهبود
            شرایط بالینی زیر.
          </Paragraph>
        </div>

        <div className="relative w-full max-w-7xl mx-auto pt-8">
          {/* Decorative dots - Hidden on mobile */}
          <DotPattern className="hidden lg:block absolute -left-8 -bottom-8 h-48 w-48 opacity-40" />
          <DotPattern className="hidden lg:block absolute -right-8 -top-8 h-32 w-32 opacity-40" />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-12 relative z-10">
            {specialtiesData.map((item) => {
              const Icon = item.icon;

              const CardContent = (
                <GlassCard
                  className={cn(
                    "relative flex h-full flex-col p-6 pt-10 text-right transition-all duration-300",
                    item.isActive
                      ? "group bg-white/40 border-white/60 hover:bg-white/60 hover:border-white/80     "
                      : "bg-white/20 border-white/30 opacity-70",
                  )}
                >
                  {/* Anchored Icon */}
                  <div
                    className={cn(
                      "absolute -top-7 right-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-background transition-colors duration-300",
                      item.isActive
                        ? "bg-white text-primary   group-hover:bg-primary group-hover:text-white"
                        : "bg-slate-100 text-slate-400",
                    )}
                  >
                    <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <h3
                    className={cn(
                      "mb-3 text-lg lg:text-xl font-bold",
                      item.isActive ? "text-slate-800" : "text-slate-500",
                    )}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={cn(
                      "text-sm leading-relaxed flex-grow",
                      item.isActive ? "text-slate-600" : "text-slate-400",
                    )}
                  >
                    {item.description}
                  </p>

                  <div className="mt-6 flex items-center justify-start">
                    {item.isActive ? (
                      <div className="flex items-center gap-1.5 text-sm font-semibold text-primary">
                        <span>اطلاعات بیشتر</span>
                        <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                      </div>
                    ) : (
                      <span className="text-sm font-medium text-slate-400">
                        به‌زودی
                      </span>
                    )}
                  </div>
                </GlassCard>
              );

              return item.isActive ? (
                <Link
                  key={item.id}
                  href={item.href}
                  className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-2xl"
                >
                  {CardContent}
                </Link>
              ) : (
                <div
                  key={item.id}
                  className="block h-full cursor-default"
                  aria-disabled="true"
                >
                  {CardContent}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

### File: ./components/faq/index.tsx

**Risk Flags:** Framer Motion & Render Loops, CSS & GPU Overload (WebKit)

```tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "آیا امکان مشاوره آنلاین با دکتر سرورزاده وجود دارد؟",
    answer:
      "بله، پس از تکمیل فرم ارزیابی، در صورت نیاز و تشخیص اولیه، امکان هماهنگی برای مشاوره ویدیویی یا صوتی در بستر امن فراهم می‌شود.",
  },
  {
    question: "مدت زمان پاسخ‌گویی به فرم‌های ارزیابی چقدر است؟",
    answer:
      "تیم پشتیبانی ما معمولاً بین ۲۴ تا ۴۸ ساعت کاری پس از ثبت فرم، جهت هماهنگی‌های بعدی با شما تماس خواهد گرفت.",
  },
  {
    question: "آیا اطلاعات پزشکی من محرمانه می‌ماند؟",
    answer:
      "تمامی اطلاعات ثبت شده در فرم‌ها و سوابق پزشکی شما با بالاترین استانداردهای امنیتی نگهداری شده و کاملاً محرمانه تلقی می‌شوند.",
  },
  {
    question: "چگونه می‌توانم نوبت ویزیت حضوری دریافت کنم؟",
    answer:
      "در حال حاضر اولویت با بیمارانی است که مسیر ارزیابی اولیه را طی کرده باشند. پس از بررسی شرایط شما، زمان مراجعه حضوری تعیین و اطلاع‌رسانی می‌گردد.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function FaqSection() {
  return (
    <div className="relative my-24 isolate w-full max-w-3xl mx-auto px-4 lg:px-0">
      {/* Background Blob */}
      <div
        className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] opacity-30 md:h-[900px] md:w-[900px] -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat pointer-events-none"
        aria-hidden="true"
      />

      <div className="text-center mb-10 space-y-4">
        <span className="inline-block text-sm font-semibold tracking-wide text-primary">
          سوالات متداول
        </span>
        <Heading className="text-3xl font-extrabold leading-tight text-foreground lg:text-4xl">
          پاسخ به دغدغه‌های شما
        </Heading>
      </div>

      <motion.div
        className="space-y-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "50px 0px", amount: 0.1 }}
      >
        {faqData.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </motion.div>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div variants={itemVariants}>
      <GlassCard className="relative overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-br from-white/60 to-white/20   transition-all hover:from-white/70 hover:to-white/30">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between gap-4 p-5 text-right focus:outline-none"
          aria-expanded={isOpen}
        >
          <h4 className="font-bold text-slate-900 text-sm md:text-base">
            {question}
          </h4>
          <div
            className={`flex items-center justify-center shrink-0 w-8 h-8 rounded-full bg-primary/10 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <ChevronDown className="w-4 h-4 text-primary" />
          </div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="px-5 pb-5 pt-0">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200/50 to-transparent mb-4" />
                <Paragraph className="text-sm leading-7 text-slate-600">
                  {answer}
                </Paragraph>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </GlassCard>
    </motion.div>
  );
}
```

---

### File: ./components/layout/navbar/navbar-desktop.tsx

**Risk Flags:** Framer Motion & Render Loops

```tsx
"use client";

import { act, useState } from "react";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowLeft, ChevronDown, Leaf } from "lucide-react";

import { Button } from "@/components/ui/button";
import { NavItem } from "@/components/ui/nav-item";

const diseaseCategories = [
  {
    href: "/diseases/autoimmune",
    label: "خودایمنی",
    active: true,
  },
  {
    href: "/diseases/cancer",
    label: "سرطان",
    active: false,
  },
  {
    href: "/diseases/hormonal-metabolic",
    label: "هورمونی و متابولیک",
    active: true,
  },
  {
    href: "/diseases/allergy",
    label: "آلرژی",
    active: true,
  },
];

export function NavbarDesktop() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="sticky top-0 z-50 h-24 w-full border-b border-primary/10 bg-white/20       "
    >
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-6 md:px-[56px]">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-primary   ">
            <Leaf className="h-6 w-6" />
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-lg font-bold leading-tight text-foreground">
              دکتر رضا سرورزاده
            </span>

            <span className="mt-0.5 text-xs text-muted-foreground">
              تغذیه بالینی و رژیم‌درمانی
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden h-full items-center gap-6 lg:flex xl:gap-8">
          <NavItem
            href="/"
            label="صفحه اصلی"
            isActive={true}
            className="text-base"
          />

          {/* Services + Dropdown */}
          <div className="group relative flex h-full items-center">
            <NavItem
              href="/"
              label="خدمات"
              className="text-base"
              hasDropdown={true}
            />
            <div className="pointer-events-none absolute right-0 top-[calc(100%-8px)] w-64 translate-y-2 rounded-2xl border border-white/40 bg-white/80 p-2 opacity-0     transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
              {diseaseCategories
                .filter((disease) => disease.active)
                .map((disease) => (
                  <Link
                    key={disease.href}
                    href={disease.href}
                    className="block rounded-xl px-4 py-3 text-sm text-slate-700 transition-colors hover:bg-primary/10 hover:text-primary"
                  >
                    {disease.label}
                  </Link>
                ))}
            </div>
          </div>

          <NavItem href="/#about" label="درباره من" className="text-base" />

          <NavItem href="/#journey" label="مسیر درمان" className="text-base" />

          <NavItem href="/#faq" label="سوالات متداول" className="text-base" />
        </nav>

        {/* CTA */}
        <div className="flex shrink-0 items-center">
          <Button
            variant="pillPrimary"
            size="pill"
            className="hidden gap-2 px-6 md:flex"
          >
            <Link
              href="/#contact"
              className="flex items-center gap-2 whitespace-nowrap"
            >
              رزرو مشاوره
              <ArrowLeft className="h-5 w-5 shrink-0" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
```

---

### File: ./components/layout/navbar/navbar-mobile.tsx

**Risk Flags:** Framer Motion & Render Loops

```tsx
"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import { ArrowLeft, ChevronDown, Leaf, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const menuLinks = [
  { href: "/", label: "صفحه اصلی" },
  { href: "/#about", label: "درباره من" },
  { href: "/#journey", label: "مسیر درمان" },
  { href: "/#faq", label: "سوالات متداول" },
];

const diseaseCategories = [
  {
    href: "/diseases/autoimmune",
    label: "خودایمنی",
    active: true,
  },
  {
    href: "/diseases/cancer",
    label: "سرطان",
    active: false,
  },
  {
    href: "/diseases/hormonal-metabolic",
    label: "هورمونی و متابولیک",
    active: true,
  },
  {
    href: "/diseases/allergy",
    label: "آلرژی",
    active: true,
  },
];

export function NavbarMobile() {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden && !isOpen ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="sticky top-0 z-40 h-20 w-full border-b border-primary/10 bg-white/80       "
        dir="rtl"
      >
        <div className="flex h-full w-full items-center justify-between px-5">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-primary   ">
              <Leaf className="h-5 w-5" />
            </div>

            <div className="flex flex-col justify-center">
              <span className="text-base font-bold leading-tight text-foreground">
                دکتر رضا سرورزاده
              </span>

              <span className="mt-0.5 text-[10px] text-muted-foreground">
                تغذیه بالینی و رژیم‌درمانی
              </span>
            </div>
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            className="rounded-lg p-2 text-foreground transition-colors hover:bg-primary/10 focus:outline-none"
            aria-label="باز کردن منو"
            aria-expanded={isOpen}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 z-50 bg-black/20   "
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 200,
              }}
              className="fixed right-0 top-0 z-50 flex h-full w-[280px] flex-col bg-white   "
              dir="rtl"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b border-border/50 p-5">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="flex items-center gap-2"
                >
                  <Leaf className="h-5 w-5 text-primary" />

                  <span className="text-base font-bold text-foreground">
                    منو
                  </span>
                </Link>

                <button
                  onClick={closeMenu}
                  className="rounded-full bg-secondary/50 p-2 text-muted-foreground transition-colors hover:text-foreground focus:outline-none"
                  aria-label="بستن منو"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Navigation */}
              <div className="flex-1 overflow-y-auto py-4">
                <nav className="flex flex-col space-y-1 px-4">
                  {menuLinks.slice(0, 1).map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className="rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}

                  {/* Services Dropdown */}
                  <div>
                    <button
                      type="button"
                      onClick={() => setIsServicesOpen((previous) => !previous)}
                      className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                      aria-expanded={isServicesOpen}
                    >
                      <span>خدمات</span>

                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="mr-3 border-r border-primary/20 py-1 pr-3">
                            <Link
                              href="/#specialties"
                              onClick={closeMenu}
                              className="block rounded-lg px-4 py-2.5 text-sm text-slate-600 transition-colors hover:bg-primary/10 hover:text-primary"
                            >
                              همه خدمات
                            </Link>

                            {diseaseCategories
                              .filter((disease) => disease.active)
                              .map((disease) => (
                                <Link
                                  key={disease.href}
                                  href={disease.href}
                                  onClick={closeMenu}
                                  className="block rounded-lg px-4 py-2.5 text-sm text-slate-600 transition-colors hover:bg-primary/10 hover:text-primary"
                                >
                                  {disease.label}
                                </Link>
                              ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Remaining Links */}
                  {menuLinks.slice(1).map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className="rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* CTA */}
              <div className="border-t border-border/50 bg-slate-50/50 p-5">
                <Button
                  variant="pillPrimary"
                  size="pill"
                  className="h-12 w-full justify-center gap-2 px-5"
                >
                  <Link
                    href="/#contact"
                    onClick={closeMenu}
                    className="flex w-full items-center justify-center gap-2 whitespace-nowrap"
                  >
                    رزرو مشاوره
                    <ArrowLeft className="h-5 w-5 shrink-0" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
```

---

### File: ./components/cta/desktop/cta-features.tsx

**Risk Flags:** CSS & GPU Overload (WebKit)

```tsx
import React from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { ShieldCheck, UserCircle, Zap } from "lucide-react";

export function CtaFeatures() {
  return (
    <div className="relative mt-16 isolate w-full">
      <div
        className="absolute left-1/2 top-1/2 -z-10 h-[200px] w-[500px] md:h-[800px] opacity-40 md:w-[300px] -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat pointer-events-none"
        aria-hidden="true"
      />

      {/* 1. Use GlassCard with   and remove grid classes from here */}
      <GlassCard className="p-6 lg:p-8 rounded-[2rem] bg-white/10 border border-white/30   overflow-hidden relative z-10   ">
        {/* 2. Fake glass gradient layer */}
        <div
          className="absolute inset-0 bg-gradient-to-tr from-white/5 via-white/10 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* 3. Dedicated content wrapper that handles the grid layout */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <FeatureItem
            icon={
              <ShieldCheck className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
            }
            title="حفظ حریم خصوصی"
            subtitle="اطلاعات شما کاملاً محرمانه است"
          />

          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-right border-y md:border-y-0 md:border-x border-white/40 py-4 md:py-0 md:px-8 relative isolate">
            <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-slate-200/50 to-transparent hidden md:block" />
            <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-slate-200/50 to-transparent hidden md:block" />
            <FeatureItem
              icon={
                <UserCircle className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
              }
              title="مشاوره تخصصی"
              subtitle="راهنمایی توسط دکتر رضا سرورزاده"
              wrapperClassName="w-full"
            />
          </div>

          <FeatureItem
            icon={<Zap className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />}
            title="پاسخ سریع"
            subtitle="در اولین فرصت با شما تماس می‌گیریم"
          />
        </div>
      </GlassCard>
    </div>
  );
}

function FeatureItem({
  icon,
  title,
  subtitle,
  wrapperClassName = "",
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  wrapperClassName?: string;
}) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-4 text-center md:text-right ${wrapperClassName}`}
    >
      <div className="flex items-center justify-center shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary/10   ">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-slate-900 mb-1">{title}</h4>
        <p className="text-xs text-slate-600">{subtitle}</p>
      </div>
    </div>
  );
}
```

---

### File: ./components/cta/desktop/cta-info.tsx

**Risk Flags:** Framer Motion & Render Loops

```tsx
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
```

---

### File: ./components/cta/desktop/evaluation-form.tsx

**Risk Flags:** Framer Motion & Render Loops, CSS & GPU Overload (WebKit)

```tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import {
  PhoneCall,
  MessageSquare,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import {
  EVALUATION_QUESTIONS,
  type EvaluationQuestion,
} from "../evaluation-constants";

interface ContactData {
  phone: string;
  description: string;
}

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -15,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
};

export function EvaluationForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [contactData, setContactData] = useState<ContactData>({
    phone: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSteps = EVALUATION_QUESTIONS.length + 1;
  const isComplete = currentStep === totalSteps;

  const handleOptionSelect = (questionId: string, option: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
    setCurrentStep((prev) => prev + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ evaluation: answers, contact: contactData }),
      });
      if (!response.ok) throw new Error("Network response was not ok");
      setCurrentStep((prev) => prev + 1);
    } catch (error) {
      console.error("Failed to send request", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative isolate w-full">
      {/* Background Blob */}
      <div
        className="absolute left-1/2 top-1/2 -z-10 h-[150%] w-[150%] max-w-4xl -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      {/* 
        Exact simulated glass trick:
        1. bg-white/10 + specific borders and shadows
        2. overflow-hidden for the inner fake gradient
        3.   ensures the base component doesn't sneak in a   filter
      */}
      <GlassCard className="p-6 md:p-8 lg:p-10 rounded-[2rem] bg-white/10 border border-white/30   overflow-hidden min-h-[420px] flex flex-col relative z-10   ">
        {/* Fake glass gradient layer */}
        <div
          className="absolute inset-0 bg-gradient-to-tr from-white/5 via-white/10 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Content Container (z-10 ensures it sits above the fake gradient) */}
        <div className="relative z-10 flex flex-col flex-1">
          {!isComplete && (
            <ProgressBar
              currentStep={currentStep}
              totalSteps={totalSteps}
              onBack={() => setCurrentStep((prev) => prev - 1)}
            />
          )}

          <div className="flex-1 flex flex-col justify-center relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="w-full"
              >
                {currentStep < EVALUATION_QUESTIONS.length && (
                  <QuestionStep
                    question={EVALUATION_QUESTIONS[currentStep]}
                    onSelect={handleOptionSelect}
                  />
                )}

                {currentStep === EVALUATION_QUESTIONS.length && (
                  <ContactStep
                    contactData={contactData}
                    setContactData={setContactData}
                    onSubmit={handleSubmit}
                    isSubmitting={isSubmitting}
                  />
                )}

                {isComplete && (
                  <SuccessStep
                    onReset={() => {
                      setCurrentStep(0);
                      setAnswers({});
                      setContactData({ phone: "", description: "" });
                    }}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}

// --- Internal Step Components ---

function ProgressBar({
  currentStep,
  totalSteps,
  onBack,
}: {
  currentStep: number;
  totalSteps: number;
  onBack: () => void;
}) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-bold text-teal-600 bg-teal-50/50 px-3 py-1 rounded-full border border-teal-100">
          مرحله {currentStep + 1} از {totalSteps}
        </span>
        {currentStep > 0 && (
          <button
            type="button"
            onClick={onBack}
            className="text-slate-500 hover:text-slate-900 hover:bg-white/50 px-3 py-1.5 rounded-full flex items-center text-sm font-medium transition-all"
          >
            <ArrowRight className="h-4 w-4 ml-1.5" />
            بازگشت
          </button>
        )}
      </div>
      <div className="h-2 w-full bg-white/50 border border-white/60 rounded-full overflow-hidden   ">
        <div
          className="h-full bg-gradient-to-l from-teal-300 to-teal-500 transition-all duration-500 ease-out rounded-full"
          style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
        />
      </div>
    </div>
  );
}

function QuestionStep({
  question,
  onSelect,
}: {
  question: EvaluationQuestion;
  onSelect: (id: string, opt: string) => void;
}) {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-slate-900 leading-snug">
        {question.question}
      </h3>
      <div className="flex flex-col gap-3">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(question.id, option)}
            className="w-full text-right px-6 py-4 rounded-2xl border border-white/60 bg-white/50 hover:bg-white/80 hover:border-teal-300   text-slate-700 font-semibold transition-all duration-300"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

interface ContactStepProps {
  contactData: ContactData;
  setContactData: React.Dispatch<React.SetStateAction<ContactData>>;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
}

function ContactStep({
  contactData,
  setContactData,
  onSubmit,
  isSubmitting,
}: ContactStepProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">اطلاعات تماس</h3>
        <p className="text-slate-600 text-sm">
          لطفاً شماره خود را وارد کنید تا کارشناسان ما با شما تماس بگیرند.
        </p>
      </div>
      <div className="space-y-4">
        <div className="relative group">
          <input
            type="tel"
            required
            value={contactData.phone}
            onChange={(e) =>
              setContactData({ ...contactData, phone: e.target.value })
            }
            placeholder="0912 345 6789"
            dir="ltr"
            className="w-full pl-10 pr-4 py-4 rounded-2xl border border-white/60 bg-white/50 text-left focus:outline-none focus:ring-2 focus:ring-teal-400 focus:bg-white transition-all   "
          />
          <PhoneCall className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-teal-500 transition-colors" />
        </div>
        <div className="relative group">
          <textarea
            rows={3}
            value={contactData.description}
            onChange={(e) =>
              setContactData({ ...contactData, description: e.target.value })
            }
            placeholder="توضیحات تکمیلی (اختیاری)"
            className="w-full pl-10 pr-4 py-4 rounded-2xl border border-white/60 bg-white/50 resize-none focus:outline-none focus:ring-2 focus:ring-teal-400 focus:bg-white transition-all   "
          />
          <MessageSquare className="absolute left-4 top-5 h-5 w-5 text-slate-400 group-focus-within:text-teal-500 transition-colors" />
        </div>
      </div>
      <Button
        type="submit"
        disabled={isSubmitting || !contactData.phone}
        className="w-full h-14 rounded-2xl bg-gradient-to-l from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 text-white font-bold text-lg flex items-center justify-center gap-2     transition-all disabled:opacity-50"
      >
        {isSubmitting ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <ArrowLeft className="h-5 w-5" />
        )}
        {isSubmitting ? "در حال ارسال اطلاعات..." : "ثبت درخواست"}
      </Button>
    </form>
  );
}

function SuccessStep({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4 h-full py-8">
      <div className="relative isolate">
        <div
          className="absolute left-1/2 top-1/2 -z-10 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat opacity-40 pointer-events-none"
          aria-hidden="true"
        />
        <div className="h-24 w-24 bg-gradient-to-br from-teal-100 to-white border border-white rounded-full flex items-center justify-center text-teal-500 mb-4   relative z-10">
          <CheckCircle2 className="h-12 w-12" />
        </div>
      </div>
      <h3 className="text-3xl font-extrabold text-slate-900 mb-2">
        با تشکر از شما!
      </h3>
      <p className="text-slate-600 leading-relaxed max-w-sm mx-auto">
        اطلاعات شما با موفقیت ثبت شد. کارشناسان ما به زودی جهت هماهنگی و
        راهنمایی با شما تماس خواهند گرفت.
      </p>
      <Button
        variant="outline"
        onClick={onReset}
        className="mt-6 rounded-full border-white/60 bg-white/50 text-teal-700 hover:bg-white/80 hover:text-teal-800   transition-all"
      >
        ثبت درخواست جدید
      </Button>
    </div>
  );
}
```

---

### File: ./components/cta/mobile/evaluation-form-mobile.tsx

**Risk Flags:** Framer Motion & Render Loops

```tsx
// evaluation-form-mobile.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  PhoneCall,
  MessageSquare,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import {
  EVALUATION_QUESTIONS,
  type EvaluationQuestion,
} from "../evaluation-constants";

interface ContactData {
  phone: string;
  description: string;
}

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

export function EvaluationFormMobile() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [contactData, setContactData] = useState<ContactData>({
    phone: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSteps = EVALUATION_QUESTIONS.length + 1;
  const isComplete = currentStep === totalSteps;

  const handleOptionSelect = (questionId: string, option: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
    setCurrentStep((prev) => prev + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ evaluation: answers, contact: contactData }),
      });
      if (!response.ok) throw new Error("Network response was not ok");
      setCurrentStep((prev) => prev + 1);
    } catch (error) {
      console.error("Failed to send request", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative isolate w-full">
      {/* Mobile-scaled Background Blob */}
      <div
        className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      {/* Fake Glass Wrapper */}
      <div
        className="
    p-5 sm:p-6 
    rounded-[2rem]
    border border-white/20
    bg-white/[0.08]
      
    min-h-[420px]
    flex flex-col
    relative z-10
    overflow-hidden
  "
      >
        {/* Glass surface light */}
        <div
          className="
      absolute inset-0
      bg-gradient-to-br
      from-white/25
      via-white/5
      to-transparent
      pointer-events-none
    "
        />

        <div className="relative z-10 flex flex-col h-full w-full">
          {!isComplete && (
            <ProgressBar
              currentStep={currentStep}
              totalSteps={totalSteps}
              onBack={() => setCurrentStep((prev) => prev - 1)}
            />
          )}

          <div className="flex-1 flex flex-col justify-center relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="w-full"
              >
                {currentStep < EVALUATION_QUESTIONS.length && (
                  <QuestionStep
                    question={EVALUATION_QUESTIONS[currentStep]}
                    onSelect={handleOptionSelect}
                  />
                )}

                {currentStep === EVALUATION_QUESTIONS.length && (
                  <ContactStep
                    contactData={contactData}
                    setContactData={setContactData}
                    onSubmit={handleSubmit}
                    isSubmitting={isSubmitting}
                  />
                )}

                {isComplete && (
                  <SuccessStep
                    onReset={() => {
                      setCurrentStep(0);
                      setAnswers({});
                      setContactData({ phone: "", description: "" });
                    }}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Internal Step Components ---

function ProgressBar({
  currentStep,
  totalSteps,
  onBack,
}: {
  currentStep: number;
  totalSteps: number;
  onBack: () => void;
}) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs font-bold text-teal-700 bg-teal-100/50 px-3 py-1 rounded-full border border-teal-200">
          مرحله {currentStep + 1} از {totalSteps}
        </span>
        {currentStep > 0 && (
          <button
            type="button"
            onClick={onBack}
            className="text-slate-600 hover:text-slate-900 bg-white/40 hover:bg-white/60 px-3 py-1.5 rounded-full flex items-center text-xs font-medium transition-colors"
          >
            <ArrowRight className="h-3.5 w-3.5 ml-1" />
            بازگشت
          </button>
        )}
      </div>
      <div className="h-1.5 w-full bg-white/50 border border-white/60 rounded-full overflow-hidden   ">
        <div
          className="h-full bg-gradient-to-l from-teal-300 to-teal-500 transition-all duration-500 ease-out rounded-full"
          style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
        />
      </div>
    </div>
  );
}

function QuestionStep({
  question,
  onSelect,
}: {
  question: EvaluationQuestion;
  onSelect: (id: string, opt: string) => void;
}) {
  return (
    <div className="space-y-5">
      <h3 className="text-xl font-bold text-slate-900 leading-snug">
        {question.question}
      </h3>
      <div className="flex flex-col gap-2.5">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(question.id, option)}
            className="w-full text-right px-5 py-3.5 rounded-2xl border border-white/50 bg-white/60 hover:bg-white/80 active:bg-teal-50 text-slate-700 font-semibold transition-colors text-sm   "
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

interface ContactStepProps {
  contactData: ContactData;
  setContactData: React.Dispatch<React.SetStateAction<ContactData>>;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
}

function ContactStep({
  contactData,
  setContactData,
  onSubmit,
  isSubmitting,
}: ContactStepProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-1.5">
          اطلاعات تماس
        </h3>
        <p className="text-slate-600 text-xs leading-relaxed">
          شماره خود را وارد کنید تا کارشناسان ما با شما تماس بگیرند.
        </p>
      </div>
      <div className="space-y-3">
        <div className="relative group">
          <input
            type="tel"
            required
            value={contactData.phone}
            onChange={(e) =>
              setContactData({ ...contactData, phone: e.target.value })
            }
            placeholder="0912 345 6789"
            dir="ltr"
            className="w-full pl-10 pr-4 py-3.5 rounded-2xl border border-white/50 bg-white/60 text-left focus:outline-none focus:ring-2 focus:ring-teal-400 focus:bg-white transition-colors text-sm   "
          />
          <PhoneCall className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-teal-500 transition-colors" />
        </div>
        <div className="relative group">
          <textarea
            rows={2}
            value={contactData.description}
            onChange={(e) =>
              setContactData({ ...contactData, description: e.target.value })
            }
            placeholder="توضیحات تکمیلی (اختیاری)"
            className="w-full pl-10 pr-4 py-3.5 rounded-2xl border border-white/50 bg-white/60 resize-none focus:outline-none focus:ring-2 focus:ring-teal-400 focus:bg-white transition-colors text-sm   "
          />
          <MessageSquare className="absolute left-3.5 top-4 h-4 w-4 text-slate-400 group-focus-within:text-teal-500 transition-colors" />
        </div>
      </div>
      <Button
        type="submit"
        disabled={isSubmitting || !contactData.phone}
        className="w-full h-12 rounded-2xl bg-gradient-to-l from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 text-white font-bold text-base flex items-center justify-center gap-2     transition-opacity disabled:opacity-50"
      >
        {isSubmitting ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <ArrowLeft className="h-4 w-4" />
        )}
        {isSubmitting ? "در حال ارسال..." : "ثبت درخواست"}
      </Button>
    </form>
  );
}

function SuccessStep({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4 h-full py-6">
      <div className="relative isolate">
        <div
          className="absolute left-1/2 top-1/2 -z-10 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat opacity-40 pointer-events-none"
          aria-hidden="true"
        />
        <div className="h-20 w-20 bg-gradient-to-br from-teal-100 to-white border border-white rounded-full flex items-center justify-center text-teal-500 mb-2   relative z-10">
          <CheckCircle2 className="h-10 w-10" />
        </div>
      </div>
      <h3 className="text-2xl font-extrabold text-slate-900 mb-1">
        با تشکر از شما!
      </h3>
      <p className="text-slate-600 leading-relaxed text-sm max-w-[260px] mx-auto">
        اطلاعات شما ثبت شد. کارشناسان ما به زودی با شما تماس خواهند گرفت.
      </p>
      <Button
        variant="outline"
        onClick={onReset}
        className="mt-4 rounded-full border-white/50 bg-white/60 text-teal-700 hover:bg-white/80 active:bg-teal-50   transition-colors text-sm h-10 px-6"
      >
        ثبت درخواست جدید
      </Button>
    </div>
  );
}
```

---

### File: ./components/cta/mobile/cta-info-mobile.tsx

**Risk Flags:** Framer Motion & Render Loops

```tsx
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
      viewport={{ once: true, margin: "50px 0px", amount: 0.1 }}
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
```

---

### File: ./components/cta/mobile/cta-features-mobile.tsx

**Risk Flags:** CSS & GPU Overload (WebKit)

```tsx
import React from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { ShieldCheck, UserCircle, Zap } from "lucide-react";

export function CtaFeaturesMobile() {
  return (
    <div className="relative mt-12 isolate w-full px-4">
      <div
        className="absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      {/* Removed "flex flex-col" from the GlassCard wrapper */}
      <GlassCard className="relative z-10 rounded-[2rem] bg-white/10 border border-white/30   overflow-hidden   ">
        <div
          className="absolute inset-0 bg-gradient-to-tr from-white/5 via-white/10 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Layout is handled strictly by this inner wrapper */}
        <div className="relative z-10 flex flex-col px-5 py-2">
          <FeatureItemMobile
            icon={<ShieldCheck className="w-5 h-5 text-primary" />}
            title="حفظ حریم خصوصی"
            subtitle="اطلاعات شما کاملاً محرمانه است"
          />

          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200/50 to-transparent" />

          <FeatureItemMobile
            icon={<UserCircle className="w-5 h-5 text-primary" />}
            title="مشاوره تخصصی"
            subtitle="راهنمایی توسط دکتر رضا سرورزاده"
          />

          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200/50 to-transparent" />

          <FeatureItemMobile
            icon={<Zap className="w-5 h-5 text-primary" />}
            title="پاسخ سریع"
            subtitle="در اولین فرصت با شما تماس می‌گیریم"
          />
        </div>
      </GlassCard>
    </div>
  );
}

function FeatureItemMobile({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-center gap-4 py-4 text-right">
      <div className="flex items-center justify-center shrink-0 w-12 h-12 rounded-full bg-primary/10   ">
        {icon}
      </div>

      <div className="flex-1">
        <h4 className="font-bold text-[15px] text-slate-900 mb-0.5">{title}</h4>
        <p className="text-[13px] text-slate-600 leading-relaxed">{subtitle}</p>
      </div>
    </div>
  );
}
```

---

### File: ./components/templates/diseases/immune-progress.tsx

**Risk Flags:** CSS & GPU Overload (WebKit)

```tsx
// components/ui/ImmuneSystemProcess.tsx
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { DotPattern } from "@/components/ui/dot-pattern";
import { GlassCard } from "@/components/ui/glass-card";
import { cn } from "@/lib/utils";
import { ProcessStep } from "@/components/templates/diseases/types";
import {
  Dna,
  ScanSearch,
  ShieldAlert,
  Flame,
  Activity,
  Layers,
  Network,
  Scale,
  Droplet,
  AlertCircle,
  Leaf,
  Zap,
  HelpCircle,
} from "lucide-react";

// Best practice: Map string names to components to keep data serializable
// and prevent passing non-serializable elements across server/client boundaries.
const iconMap: Record<string, React.ElementType> = {
  Dna,
  ScanSearch,
  ShieldAlert,
  Flame,
  Activity,
  Layers,
  Network,
  Scale,
  Droplet,
  AlertCircle,
  Leaf,
  Zap,
};

interface ImmuneSystemProcessProps {
  title: string;
  description: string;
  steps: ProcessStep[];
}

export function ImmuneSystemProcess({
  title,
  description,
  steps,
}: ImmuneSystemProcessProps) {
  if (!steps || steps.length === 0) return null;

  return (
    <section
      id="mechanism"
      className="relative z-10 w-full min-w-0 overflow-hidden py-16 lg:py-24"
    >
      <div
        className="absolute left-1/2 top-1/2 -z-10 h-[100%] w-[100%] max-w-4xl -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat opacity-30 pointer-events-none"
        aria-hidden="true"
      />

      <div className="mx-auto w-full min-w-0 max-w-7xl px-6 lg:px-14">
        <div className="mx-auto mb-16 lg:mb-24 max-w-2xl text-center">
          <Heading size="h2" className="mb-4">
            {title}
          </Heading>
          <Paragraph size="sm" className="text-slate-600">
            {description}
          </Paragraph>
        </div>

        <div className="relative w-full max-w-5xl mx-auto">
          <DotPattern className="hidden lg:block absolute -right-8 -top-8 h-32 w-32 opacity-40" />

          <div className="absolute right-[27px] top-0 bottom-0 w-[2px] lg:right-0 lg:left-0 lg:top-[27px] lg:bottom-auto lg:w-full lg:h-[2px] bg-gradient-to-b lg:bg-gradient-to-l from-transparent via-primary/30 to-transparent -z-10" />

          <div className="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-6">
            {steps.map((step, idx) => {
              const Icon = iconMap[step.iconName] || HelpCircle;

              return (
                <div
                  key={idx}
                  className="relative flex flex-row lg:flex-col items-start lg:items-center gap-6 w-full lg:flex-1 group"
                >
                  <div
                    className={cn(
                      "relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-background transition-colors duration-300",
                      step.highlight
                        ? "bg-primary text-white     "
                        : "bg-white text-primary   group-hover:border-primary/20",
                    )}
                  >
                    <Icon className="w-6 h-6" />

                    <div
                      className={cn(
                        "absolute -bottom-2 -left-2 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold   ",
                        step.highlight
                          ? "bg-white text-primary"
                          : "bg-primary text-white",
                      )}
                    >
                      {idx + 1}
                    </div>
                  </div>

                  <GlassCard
                    className={cn(
                      "flex flex-1 flex-col justify-start p-5 lg:p-6 text-right lg:text-center w-full transition-all duration-300",
                      step.highlight
                        ? "border-primary/30 bg-white/70     "
                        : "bg-white/40 border-white/60 hover:bg-white/60",
                    )}
                  >
                    <h3
                      className={cn(
                        "mb-2 text-base lg:text-lg font-bold",
                        step.highlight ? "text-primary" : "text-slate-800",
                      )}
                    >
                      {step.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-slate-600">
                      {step.desc}
                    </p>
                  </GlassCard>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

### File: ./components/templates/diseases/disease-story.tsx

**Risk Flags:** CSS & GPU Overload (WebKit)

```tsx
import { BookOpen, ImageIcon, PlayCircle, Shield } from "lucide-react";
import { ResourceAction } from "./resource-action";
import { Paragraph } from "@/components/ui/paragraph";
import { FeaturedDisease, ImageSize } from "./types";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/ui/heading";
import Image from "next/image";
import { GlassCard } from "@/components/ui/glass-card";
import { DotPattern } from "@/components/ui/dot-pattern";

const BLOB_SHAPES = [
  "rounded-[60%_40%_30%_70%/60%_30%_70%_40%]",
  "rounded-[30%_70%_70%_30%/30%_30%_70%_70%]",
  "rounded-[50%_50%_20%_80%/25%_80%_20%_75%]",
  "rounded-[40%_60%_70%_30%/40%_50%_60%_50%]",
  "rounded-[70%_30%_50%_50%/60%_40%_60%_40%]",
];

const IMAGE_SIZE_CLASSES: Record<ImageSize, string> = {
  sm: "w-[65%] h-[65%]",
  md: "w-[80%] h-[80%]",
  lg: "w-[95%] h-[95%]",
};

export function DiseaseStory({
  disease,
  index,
}: {
  disease: FeaturedDisease;
  index: number;
}) {
  const isEven = index % 2 === 0;
  const nameParts = disease.name.split(" (");
  const enName = nameParts[0];
  const faName = nameParts[1]?.replace(")", "") || disease.name;
  const hasResources = disease.media || disease.paperDoi;

  const blobShapeClass = BLOB_SHAPES[index % BLOB_SHAPES.length];

  const imageSizeClass = IMAGE_SIZE_CLASSES[disease.imageSize ?? "sm"];

  return (
    <section
      id={disease.id}
      className="flex items-center py-10 lg:py-16 relative w-full"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-14 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">
          {/* Text Section */}
          <div
            className={cn(
              "flex flex-col items-start text-right w-full relative",
              "order-2",
              isEven ? "lg:order-1" : "lg:order-2",
            )}
          >
            <DotPattern className="hidden lg:block absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 opacity-70" />

            <div className="w-full text-right relative z-10">
              <div className="text-primary font-medium text-sm mb-3 lg:mb-4">
                {(index + 1).toString().padStart(2, "0")} — {enName}
              </div>

              <Heading size="h2" className="mb-4 lg:mb-6">
                {faName}
              </Heading>
            </div>

            <div className="relative z-10 w-full">
              <Paragraph size="lg" className="mb-8 lg:mb-10 text-slate-700">
                {disease.description}
              </Paragraph>
            </div>

            {hasResources && (
              <div className="w-full relative z-10">
                <div className="mb-5 lg:mb-6 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />

                  <h4 className="text-sm font-bold text-slate-800">
                    مطالب و منابع مرتبط
                  </h4>
                </div>

                <div className="flex flex-col w-full gap-2">
                  {disease.media?.type === "video" && (
                    <ResourceAction
                      icon={PlayCircle}
                      title="مشاهده ویدیو آموزشی"
                      action="play"
                    />
                  )}

                  {disease.media?.type === "photo" && (
                    <ResourceAction
                      icon={ImageIcon}
                      title="مشاهده تصاویر بالینی"
                      action="view"
                    />
                  )}

                  {disease.paperDoi && (
                    <ResourceAction
                      icon={BookOpen}
                      title="مطالعه مقاله علمی مرجع"
                      href={`https://doi.org/${disease.paperDoi}`}
                      action="external"
                    />
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Visual Section */}
          <div
            className={cn(
              "relative w-full max-w-[320px] lg:max-w-[480px] mx-auto aspect-square isolate",
              "order-1",
              isEven ? "lg:order-2" : "lg:order-1",
            )}
          >
            {/* Blob background */}
            <div
              className="absolute inset-[-8%] -z-20 bg-contain bg-center bg-no-repeat pointer-events-none"
              style={{ backgroundImage: "url('/blob.svg')" }}
              aria-hidden="true"
            />

            {/* Soft glass shape */}
            <GlassCard
              className={cn(
                "absolute inset-[8%] -z-10 opacity-50     transition-all duration-700",
                blobShapeClass,
              )}
            />

            {/* Image */}
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              {disease.imageUrl ? (
                <div
                  className={cn(
                    "relative transition-all duration-700",
                    imageSizeClass,
                  )}
                >
                  <Image
                    src={disease.imageUrl}
                    alt={faName}
                    fill
                    className="object-contain   "
                    sizes="(max-width: 1024px) 70vw, 40vw"
                    priority={index < 2}
                  />
                </div>
              ) : (
                <div
                  className={cn(
                    "w-[72%] h-[72%] bg-white/20   border border-white/30 flex items-center justify-center transition-all duration-700",
                    blobShapeClass,
                  )}
                >
                  <Shield className="w-16 h-16 lg:w-20 lg:h-20 text-primary/40" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

### File: ./components/templates/diseases/DiseaseCategoryTemplate.tsx

**Risk Flags:** CSS & GPU Overload (WebKit)

```tsx
"use client";

import { useEffect, useState } from "react";
import { DiseasePageData } from "./types";
import { MedicalBackground } from "./bg";
import { ScrollProgressIndicator } from "./scroll-indicator";
import { AutoimmuneHero } from "./hero";
import { ImmuneSystemProcess } from "./immune-progress";
import { DiseaseStory } from "./disease-story";
import { DiseaseLibrary } from "./library";

export default function DiseaseCategoryTemplate({
  data,
}: {
  data: DiseasePageData;
}) {
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" },
    );

    const sections = [
      "hero",
      "mechanism",
      ...data.featuredDiseases.map((d) => d.id),
      "library",
    ];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [data.featuredDiseases]);

  return (
    <div
      className="relative w-full min-h-screen font-sans selection:bg-primary/20 selection:text-primary"
      dir="rtl"
    >
      <MedicalBackground />
      <div className="hidden lg:block">
        <ScrollProgressIndicator
          activeSection={activeSection}
          featuredDiseases={data.featuredDiseases}
        />
      </div>
      <AutoimmuneHero
        title={data.title}
        subtitle={data.subtitle}
        description={data.description}
        heroImageSize={data.heroImageSize}
        heroImageUrl={data.heroImageUrl}
        firstDiseaseId={data.featuredDiseases[0]?.id}
      />
      <ImmuneSystemProcess
        title={data.mechanismTitle}
        description={data.mechanismDescription}
        steps={data.processSteps}
      />

      <div className="flex flex-col w-full">
        {data.featuredDiseases.map((disease, i) => (
          <DiseaseStory key={disease.id} disease={disease} index={i} />
        ))}
      </div>

      <DiseaseLibrary keywords={data.keywords} />
    </div>
  );
}
```

---

### File: ./components/hero/desktop/hero-section-desktop.tsx

**Risk Flags:** Framer Motion & Render Loops

```tsx
"use client";

import Link from "next/link";
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
        <motion.div variants={itemVariants}>
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

        <motion.div variants={itemVariants}>
          <Paragraph size="lg" className="text-sm md:text-base max-w-[480px]">
            با برنامه‌های غذایی علمی و متناسب با شرایط شما، به کنترل علائم ام‌اس
            کمک کرده و سلامت‌تان را بهبود ببخشید.
          </Paragraph>
        </motion.div>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center lg:justify-start gap-3 md:gap-4 mt-2"
        >
          <Button
            variant="pillPrimary"
            size="pill"
            className="gap-2 px-5 text-sm md:text-base"
          >
            <Link
              href="/#contact"
              className="flex items-center gap-2 whitespace-nowrap"
            >
              رزرو مشاوره
              <ArrowLeft className="h-4 w-4 md:h-5 md:w-5 shrink-0" />
            </Link>
          </Button>

          <Button
            variant="pillSecondary"
            size="pill"
            className="gap-2 bg-white/50 px-5 text-sm md:text-base hover:bg-white/80"
          >
            <Link
              href="/#about"
              className="flex items-center gap-2 whitespace-nowrap"
            >
              بیشتر بدانید
              <ArrowLeft className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground shrink-0" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Left Side: Image Content */}
      <motion.div
        className="relative flex w-full items-end justify-center md:w-[80%] lg:w-[55%] isolate"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat opacity-40 md:h-[750px] md:w-[750px] lg:h-[1000px] lg:w-[1000px]"
          aria-hidden="true"
        />

        <HeroImage />
      </motion.div>
    </main>
  );
}
```

---

### File: ./components/hero/desktop/hero-image.tsx

**Risk Flags:** Framer Motion & Render Loops, CSS & GPU Overload (WebKit)

```tsx
"use client";
import doctorImage from "@/public/images/hero/hero4.webp";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Apple, Activity, Brain } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

export function HeroImage() {
  return (
    <div className="relative w-full h-[420px] sm:h-[480px] md:h-[560px] lg:h-[clamp(600px,calc(100svh-120px),850px)] max-w-[800px] flex items-end justify-center z-0 isolate">
      <BackgroundGlow />
      <DecorativeEllipse />
      <GlassBlob />
      <DoctorImage />
      <FloatingCards />
    </div>
  );
}

function BackgroundGlow() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-30  ">
      <div className="absolute w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(34,211,238,0.12)_0%,transparent_60%)]  " />
      <div className="absolute top-[-10%] left-[-10%] w-[90%] h-[90%] bg-[radial-gradient(circle,rgba(255,255,255,0.4)_0%,transparent_60%)]  " />
      <div className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[80%] bg-[radial-gradient(circle,rgba(20,184,166,0.12)_0%,transparent_60%)]  " />
    </div>
  );
}

function GlassBlob() {
  return (
    <div
      className="
        absolute 
        top-[10%] lg:top-[5%] 
        left-1/2 
        -translate-x-[52%] 
        w-[75%] lg:w-[75%] 
        h-[75%] lg:h-[80%] 
        max-w-[760px] 
        max-h-[620px]
        rounded-[45%_55%_48%_52%/55%_45%_50%_50%]
        bg-gradient-to-br from-white/60 to-white/20
        border border-white/60
          
        -z-10
         
      "
    />
  );
}

function DecorativeEllipse() {
  return (
    <div
      className="
        absolute 
        top-1/2 
        left-1/2 
        -translate-x-1/2 
        -translate-y-[55%] 
        w-[110%] 
        h-[90%] 
        max-w-[850px] 
        max-h-[850px]
        rounded-[50%]
        border border-white/20
        -z-40
        rotate-6
         
      "
    />
  );
}
function DoctorImage() {
  return (
    <div className="relative z-10 w-full flex items-center justify-center">
      <Image
        src={doctorImage}
        alt="Doctor"
        priority
        fetchPriority="high"
        placeholder="empty"
        sizes="
          (max-width: 640px) 85vw,
          (max-width: 1024px) 60vw,
          (max-width: 1280px) 45vw,
          420px
        "
        className="
          w-full h-auto
          max-w-[320px]
          sm:max-w-[380px]
          md:max-w-[420px]
          lg:max-w-[460px]
          object-contain
          select-none
          [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]
          [-webkit-mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]
        "
      />
    </div>
  );
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const cardItem: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
};

function FloatingCards() {
  return (
    <motion.div
      className="absolute inset-0 z-20 pointer-events-none isolate"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {/* Top right - Card 1 */}
      {/* Changed lg:-right-12 to lg:right-4 */}
      <div className="absolute top-[2%] -right-4 sm:top-[8%] sm:-right-8 lg:top-[18%] lg:right-4 pointer-events-auto scale-90 sm:scale-100 origin-right">
        <motion.div
          variants={cardItem}
          whileHover={{ scale: 1.05 }}
          className=" "
        >
          <FloatingCardItem
            title="مدیریت ام‌اس"
            description="کاهش التهاب با تغذیه اصولی"
            icon={<Brain className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />}
          />
        </motion.div>
      </div>

      {/* Middle/Bottom left - Card 2 */}
      {/* Changed lg:-right-16 to lg:-right-2 */}
      <div className="absolute top-[65%] -left-6 sm:top-[55%] sm:-left-8 lg:top-[48%] lg:left-auto lg:-right-2 pointer-events-auto scale-90 sm:scale-100 origin-left lg:origin-right">
        <motion.div
          variants={cardItem}
          whileHover={{ scale: 1.05 }}
          className=" "
        >
          <FloatingCardItem
            title="کاهش خستگی"
            description="افزایش انرژی در طول روز"
            icon={<Activity className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />}
          />
        </motion.div>
      </div>

      {/* Bottom right - Card 3 */}
      {/* Changed lg:-right-6 to lg:right-6 */}
      <div className="absolute bottom-[2%] -right-2 sm:bottom-[5%] sm:-right-4 lg:bottom-auto lg:top-[72%] lg:right-6 pointer-events-auto scale-90 sm:scale-100 origin-right">
        <motion.div
          variants={cardItem}
          whileHover={{ scale: 1.05 }}
          className=" "
        >
          <FloatingCardItem
            title="سلامت سیستم عصبی"
            description="تامین مواد مغذی ضروری"
            icon={<Apple className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

function FloatingCardItem({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <GlassCard
      className="
        flex items-center gap-3 lg:gap-4 
        px-3 py-2.5 lg:px-5 lg:py-4 
        rounded-[24px] lg:rounded-[32px] 
        bg-white/80
        border border-white/60
          
      "
    >
      <div className="flex items-center justify-center shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary/10   ">
        {icon}
      </div>

      <div className="flex flex-col text-right">
        <p className="font-semibold text-[13px] lg:text-sm text-foreground whitespace-nowrap">
          {title}
        </p>
        <p className="text-[10px] lg:text-xs text-muted-foreground mt-0.5 whitespace-nowrap">
          {description}
        </p>
      </div>
    </GlassCard>
  );
}
```

---

### File: ./components/hero/mobile/hero-image-mobile.tsx

**Risk Flags:** Framer Motion & Render Loops

```tsx
// hero-image-mobile.tsx
"use client";
import doctorImage from "@/public/images/hero/hero4.webp";
import Image from "next/image";
import { motion } from "framer-motion";
import { Apple, Activity, Brain } from "lucide-react";

export function HeroImageMobile() {
  return (
    <div className="relative w-full h-[420px] sm:h-[480px] max-w-[800px] flex items-end justify-center z-0 isolate">
      <BackgroundGlow />
      <DecorativeEllipse />
      <GlassBlob />
      <DoctorImage />
      <FloatingCards />
    </div>
  );
}

function BackgroundGlow() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-30">
      <div className="absolute w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(34,211,238,0.12)_0%,transparent_60%)]" />
      <div className="absolute top-[-10%] left-[-10%] w-[90%] h-[90%] bg-[radial-gradient(circle,rgba(255,255,255,0.4)_0%,transparent_60%)]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[80%] bg-[radial-gradient(circle,rgba(20,184,166,0.12)_0%,transparent_60%)]" />
    </div>
  );
}

function GlassBlob() {
  return (
    <div
      className="
        absolute 
        top-[10%]
        left-1/2 
        -translate-x-[52%] 
        w-[75%]
        h-[75%]
        max-w-[760px] 
        max-h-[620px]
        rounded-[45%_55%_48%_52%/55%_45%_50%_50%]
        bg-gradient-to-br from-white/60 to-white/20
        border border-white/60
          
        -z-10
      "
    />
  );
}

function DecorativeEllipse() {
  return (
    <div
      className="
        absolute 
        top-1/2 
        left-1/2 
        -translate-x-1/2 
        -translate-y-[55%] 
        w-[110%] 
        h-[90%] 
        max-w-[850px] 
        max-h-[850px]
        rounded-[50%]
        border border-white/20
        -z-40
        rotate-6
      "
    />
  );
}
function DoctorImage() {
  return (
    <div className="relative z-10 w-full flex items-center justify-center">
      <Image
        src={doctorImage}
        alt="Doctor"
        priority
        fetchPriority="high"
        placeholder="empty"
        sizes="
          (max-width: 640px) 85vw,
          (max-width: 1024px) 60vw,
          (max-width: 1280px) 45vw,
          420px
        "
        className="
          w-full h-auto
          max-w-[320px]
          sm:max-w-[380px]
          md:max-w-[420px]
          lg:max-w-[460px]
          object-contain
          select-none
          [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]
          [-webkit-mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]
        "
      />
    </div>
  );
}
function FloatingCards() {
  return (
    <motion.div
      className="absolute inset-0 z-20 pointer-events-none isolate"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
    >
      <div className="absolute top-[10%] right-2 sm:top-[12%] sm:right-6 pointer-events-auto scale-90 sm:scale-100 origin-right">
        <FloatingCardItem
          title="مدیریت ام‌اس"
          icon={<Brain className="w-5 h-5 text-primary" />}
        />
      </div>

      <div className="absolute top-[60%] left-2 sm:top-[55%] sm:left-6 pointer-events-auto scale-90 sm:scale-100 origin-left">
        <FloatingCardItem
          title="کاهش خستگی"
          icon={<Activity className="w-5 h-5 text-primary" />}
        />
      </div>

      <div className="absolute bottom-[10%] right-4 sm:bottom-[15%] sm:right-8 pointer-events-auto scale-90 sm:scale-100 origin-right">
        <FloatingCardItem
          title="سلامت سیستم عصبی"
          icon={<Apple className="w-5 h-5 text-primary" />}
        />
      </div>
    </motion.div>
  );
}

function FloatingCardItem({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="relative bg-white/50 border border-white/50   overflow-hidden rounded-[24px] px-3 py-2.5">
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-white/50 to-transparent pointer-events-none" />

      <div className="relative z-10 flex items-center gap-3">
        <div className="flex items-center justify-center shrink-0 w-10 h-10 rounded-full bg-primary/10   ">
          {icon}
        </div>

        <div className="flex flex-col text-right">
          <p className="font-semibold text-[13px] text-foreground whitespace-nowrap">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}
```

---

### File: ./components/hero/mobile/hero-section-mobile.tsx

**Risk Flags:** Framer Motion & Render Loops

```tsx
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
        {/* Replaced CSS radial gradient with SVG blob */}
        <div
          className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] md:h-[750px] md:w-[750px] -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat opacity-40 pointer-events-none"
          aria-hidden="true"
        />

        <HeroImageMobile />
      </motion.div>
    </main>
  );
}
```

---

### File: ./components/journey-section/index.tsx

**Risk Flags:** Hydration & SSR Mismatches

```tsx
import React, { useEffect, useState } from "react";
import { JOURNEY_STEPS } from "./constants/journey";
import { JourneyScrollContainer } from "./components/desktop/journey-scroll-container";
import { JourneyScrollContainerMobile } from "./components/mobile/journey-scroll-container-mobile";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const handleChange = () => {
      setIsMobile(mediaQuery.matches);
    };

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return isMobile;
};

export const JourneySection: React.FC = () => {
  const isMobile = useIsMobile();

  const formattedSteps = JOURNEY_STEPS.map(({ icon: Icon, ...rest }) => ({
    ...rest,
    icon: <Icon className="h-5 w-5 text-primary" />,
  }));

  return (
    <div className="relative">
      {isMobile ? (
        <JourneyScrollContainerMobile steps={formattedSteps} />
      ) : (
        <JourneyScrollContainer steps={formattedSteps} />
      )}
    </div>
  );
};
```

---

### File: ./components/journey-section/components/desktop/journey-glass-illustration.tsx

**Risk Flags:** Framer Motion & Render Loops, CSS & GPU Overload (WebKit)

```tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { cn } from "@/lib/utils";

interface IllustrationProps {
  src: string;
  alt: string;
  index?: number;
}

const illustrationVariants: Variants = {
  hidden: { scale: 0.95, y: 20, opacity: 0 },
  visible: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

const BLOB_SHAPES = [
  "rounded-[60%_40%_30%_70%/60%_30%_70%_40%]",
  "rounded-[30%_70%_70%_30%/30%_30%_70%_70%]",
  "rounded-[50%_50%_20%_80%/25%_80%_20%_75%]",
  "rounded-[40%_60%_70%_30%/40%_50%_60%_50%]",
  "rounded-[70%_30%_50%_50%/60%_40%_60%_40%]",
];

export const JourneyGlassIllustration: React.FC<IllustrationProps> = ({
  src,
  alt,
  index = 0,
}) => {
  const blobShapeClass = BLOB_SHAPES[index % BLOB_SHAPES.length];

  return (
    <motion.div
      className="relative z-0 flex aspect-square w-full items-center justify-center isolate"
      variants={illustrationVariants}
    >
      {/* Optimized Background Blob */}
      <div
        className="absolute left-1/2 top-1/2 -z-20 h-[150%] w-[150%] max-w-4xl -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      {/* Fluid Glass Card */}
      <GlassCard
        className={cn(
          "absolute inset-0 md:inset-2 -z-10 transition-all duration-700",
          blobShapeClass,
        )}
      />

      {/* Enlarged image container - Infinite animation removed */}
      <div className="relative z-10 flex h-[95%] w-[95%] items-center justify-center">
        <Image
          src={src}
          alt={alt}
          width={800}
          height={800}
          className="h-full w-full object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </motion.div>
  );
};
```

---

### File: ./components/journey-section/components/desktop/journey-step.tsx

**Risk Flags:** Framer Motion & Render Loops, CSS & GPU Overload (WebKit)

```tsx
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { JourneyGlassIllustration } from "./journey-glass-illustration";
import { GlassCard } from "@/components/ui/glass-card";

interface StepProps {
  title: string;
  text: string;
  image: string;
  duration: string;
  chips: string[];
  reassurance: string;
  trustBadge: string;
  icon: React.ReactNode;
  align: "left" | "right";
  index: number; // Added to determine the blob shape
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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

export const JourneyStep: React.FC<StepProps> = ({
  title,
  text,
  image,
  duration,
  chips,
  reassurance,
  trustBadge,
  icon,
  align,
  index,
}) => {
  const isRightAligned = align === "right";

  return (
    <motion.div
      className={`flex w-full flex-col items-center gap-8 md:gap-16 isolate ${
        isRightAligned ? "md:flex-row" : "md:flex-row-reverse"
      }`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px 0px", amount: 0.2 }}
    >
      <div className="w-full flex-1">
        {/* Pass the index down to the illustration */}
        <JourneyGlassIllustration src={image} alt={title} index={index} />
      </div>

      <div className="flex w-full flex-1 flex-col gap-5">
        <motion.span
          variants={itemVariants}
          className="text-sm font-medium text-primary"
        >
          {duration}
        </motion.span>

        <motion.h3
          variants={itemVariants}
          className="text-balance text-3xl font-bold leading-snug text-foreground"
        >
          {title}
        </motion.h3>

        <motion.p
          variants={itemVariants}
          className="text-lg leading-relaxed text-muted-foreground"
        >
          {text}
        </motion.p>

        {/* Feature Pills */}
        <motion.div
          variants={itemVariants}
          className="mt-2 flex flex-wrap gap-2"
        >
          {chips.map((chip, idx) => (
            <span
              key={idx}
              className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
            >
              {chip}
            </span>
          ))}
        </motion.div>

        {/* Bottom Glass Card */}
        <motion.div variants={itemVariants} className="relative isolate mt-6">
          <GlassCard className="rounded-[24px] p-6">
            <div className="mb-3 flex items-center gap-3">
              {icon}
              <h4 className="text-balance font-semibold leading-snug text-foreground">
                {trustBadge}
              </h4>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {reassurance}
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </motion.div>
  );
};
```

---

### File: ./components/journey-section/components/desktop/journey-path.tsx

**Risk Flags:** Framer Motion & Render Loops

```tsx
"use client";

import React from "react";
import { motion, MotionValue, useTransform, useSpring } from "framer-motion";

interface JourneyPathProps {
  progress: MotionValue<number>;
}

export function JourneyPath({ progress }: JourneyPathProps) {
  const path = `
    M1800 80 
    C1800 800 2350 1000 2350 2000 
    C2350 3000 1650 3200 1650 4200 
    C1650 4600 1800 4800 1800 4950
  `;

  // Smooth the scroll raw value to prevent main-thread thrashing
  const smoothProgress = useSpring(progress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const distance = useTransform(smoothProgress, (v) => `${v * 100}%`);
  const heartOpacity = useTransform(smoothProgress, [0.985, 1], [0, 0.9]);
  const heartScale = useTransform(smoothProgress, [0.97, 1], [0.85, 1.15]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      <svg
        viewBox="0 0 4000 5100"
        preserveAspectRatio="xMidYMin slice"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="activeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7DF8F3" />
            <stop offset="100%" stopColor="#0DDCD5" />
          </linearGradient>

          <radialGradient id="orb">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="40%" stopColor="#8EF6F2" />
            <stop offset="100%" stopColor="#0DDCD5" />
          </radialGradient>
        </defs>

        {/* Ambient background path */}
        <path
          d={path}
          stroke="#0DDCD5"
          strokeWidth={26}
          opacity={0.05}
          fill="none"
        />

        {/* Glass tube */}
        <path
          d={path}
          stroke="#EEF4F6"
          strokeWidth={16}
          fill="none"
          strokeLinecap="round"
        />

        {/* Highlight */}
        <path
          d={path}
          stroke="white"
          strokeWidth={2}
          opacity={0.6}
          fill="none"
          strokeLinecap="round"
          transform="translate(-2 -2)"
        />

        {/* Simulated Glow */}
        <motion.path
          d={path}
          stroke="url(#activeGradient)"
          strokeWidth={24}
          opacity={0.2}
          fill="none"
          strokeLinecap="round"
          style={{ pathLength: smoothProgress }}
        />

        {/* Active glowing path */}
        <motion.path
          d={path}
          stroke="url(#activeGradient)"
          strokeWidth={12}
          fill="none"
          strokeLinecap="round"
          style={{ pathLength: smoothProgress }}
        />

        {/* --- START NODE --- */}
        <g transform="translate(1800, 80)">
          <motion.circle
            r={50}
            fill="none"
            stroke="#0DDCD5"
            strokeWidth={2}
            opacity={0.25}
            animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.1, 0.25] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
          />

          <circle
            r={30}
            fill="rgba(255,255,255,0.75)"
            stroke="rgba(13,220,213,0.6)"
            strokeWidth={2}
          />

          <g transform="scale(1.2)">
            <rect
              x={-4}
              y={-12}
              width={8}
              height={24}
              rx={3}
              fill="url(#orb)"
            />
            <rect
              x={-12}
              y={-4}
              width={24}
              height={8}
              rx={3}
              fill="url(#orb)"
            />
          </g>

          <circle cx="-6" cy="-6" r={4} fill="white" opacity={0.9} />
        </g>

        {/* --- END NODE --- */}
        <g transform="translate(1800, 4950)">
          <motion.g
            style={{
              opacity: heartOpacity,
              scale: heartScale,
            }}
          >
            <circle
              r={36}
              fill="rgba(255,255,255,0.7)"
              stroke="rgba(13,220,213,0.7)"
              strokeWidth={2}
            />

            <g transform="scale(2.8) translate(-12, -12)">
              <path
                d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                fill="url(#orb)"
                stroke="white"
                strokeWidth={1}
              />
            </g>
          </motion.g>
        </g>

        {/* Traveling orb */}
        <motion.g
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            offsetPath: `path('${path}')`,
            offsetDistance: distance,
          }}
        >
          <circle r={24} fill="#0DDCD5" opacity={0.2} />
          <circle
            r={16}
            fill="url(#orb)"
            stroke="rgba(255,255,255,.85)"
            strokeWidth={1.5}
          />
          <circle r={5} fill="#0DDCD5" />
        </motion.g>
      </svg>
    </div>
  );
}
```

---

### File: ./components/journey-section/components/mobile/journey-glass-illustration-mobile.tsx

**Risk Flags:** Framer Motion & Render Loops

```tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface IllustrationMobileProps {
  src: string;
  alt: string;
  index?: number;
}

const illustrationVariants: Variants = {
  hidden: { scale: 0.95, y: 15, opacity: 0 },
  visible: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const BLOB_SHAPES = [
  "rounded-[60%_40%_30%_70%/60%_30%_70%_40%]",
  "rounded-[30%_70%_70%_30%/30%_30%_70%_70%]",
  "rounded-[50%_50%_20%_80%/25%_80%_20%_75%]",
  "rounded-[40%_60%_70%_30%/40%_50%_60%_50%]",
  "rounded-[70%_30%_50%_50%/60%_40%_60%_40%]",
];

export const JourneyGlassIllustrationMobile: React.FC<
  IllustrationMobileProps
> = ({ src, alt, index = 0 }) => {
  const blobShapeClass = BLOB_SHAPES[index % BLOB_SHAPES.length];

  return (
    <motion.div
      className="relative z-0 flex aspect-square w-full items-center justify-center isolate"
      variants={illustrationVariants}
    >
      {/* Optimized Background Blob */}
      <div
        className="absolute left-1/2 top-1/2 -z-10 opacity-60 h-[150%] w-[150%] max-w-4xl -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat pointer-events-none"
        aria-hidden="true"
      />

      {/* Fluid Glass Card with inline styles adapted to shape */}
      <div
        className={cn(
          "absolute inset-2 -z-10 bg-white/10 border border-white/30   overflow-hidden transition-all duration-700",
          blobShapeClass,
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-white/10 to-transparent pointer-events-none" />
      </div>

      {/* Enlarged image container to 95% to allow break-out effect */}
      <div className="relative z-10 flex h-[95%] w-[95%] items-center justify-center">
        <Image
          src={src}
          alt={alt}
          width={800}
          height={800}
          className="h-full w-full object-cover"
          sizes="(max-width: 480px) 100vw, 400px"
        />
      </div>
    </motion.div>
  );
};
```

---

### File: ./components/journey-section/components/mobile/journey-mobile.tsx

**Risk Flags:** Framer Motion & Render Loops, CSS & GPU Overload (WebKit)

```tsx
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { JourneyGlassIllustrationMobile } from "./journey-glass-illustration-mobile";

interface StepProps {
  title: string;
  text: string;
  image: string;
  duration: string;
  chips: string[];
  reassurance: string;
  trustBadge: string;
  icon: React.ReactNode;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const JourneyMobile: React.FC<{ steps: StepProps[] }> = ({ steps }) => {
  return (
    <div className="w-full flex flex-col md:hidden mt-4" dir="rtl">
      {steps.map((step, index) => {
        const isEven = index % 2 === 0;
        const isLast = index === steps.length - 1;

        const pathClasses = isEven
          ? "right-1/2 w-[25%] border-l-[3px] border-y-[3px] border-r-0 rounded-l-[3rem]"
          : "left-1/2 w-[25%] border-r-[3px] border-y-[3px] border-l-0 rounded-r-[3rem]";

        return (
          <div key={index} className="relative flex flex-col w-full isolate">
            {!isLast && (
              <div
                className={`absolute border-dashed border-primary/30 -z-10 ${pathClasses} top-12 h-full`}
              />
            )}

            <div className="absolute top-12 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary ring-[6px] ring-background z-0" />

            <motion.div
              className="flex flex-col gap-6 px-4 pt-12 pb-20 relative z-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
            >
              <motion.div
                variants={itemVariants}
                className={`w-[80%] max-w-[280px] ${isEven ? "self-start" : "self-end"}`}
              >
                <JourneyGlassIllustrationMobile
                  src={step.image}
                  alt={step.title}
                  index={index}
                />
              </motion.div>

              <motion.div
                variants={itemVariants}
                className={`w-[90%] flex flex-col gap-4 mt-2 ${
                  isEven ? "self-end" : "self-start"
                }`}
              >
                <span className="text-sm font-medium text-primary">
                  {step.duration}
                </span>

                <h3 className="text-balance text-2xl font-bold leading-snug text-foreground">
                  {step.title}
                </h3>

                <p className="text-base leading-relaxed text-muted-foreground">
                  {step.text}
                </p>

                <div className="mt-1 flex flex-wrap gap-2">
                  {step.chips.map((chip, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                <div className="relative isolate mt-4">
                  <GlassCard className="rounded-[24px] p-5">
                    <div className="mb-3 flex items-center gap-3">
                      {step.icon}
                      <h4 className="text-balance font-semibold leading-snug text-foreground">
                        {step.trustBadge}
                      </h4>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {step.reassurance}
                    </p>
                  </GlassCard>
                </div>
              </motion.div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};
```

---

### File: ./components/journey-section/components/mobile/journey-path-mobile.tsx

**Risk Flags:** Framer Motion & Render Loops

```tsx
"use client";

import React from "react";
import { motion, MotionValue, useTransform, useSpring } from "framer-motion";

interface JourneyPathMobileProps {
  progress: MotionValue<number>;
}

export function JourneyPathMobile({ progress }: JourneyPathMobileProps) {
  const path = `
    M1800 80 
    C1800 800 2350 1000 2350 2000 
    C2350 3000 1650 3200 1650 4200 
    C1650 4600 1800 4800 1800 4950
  `;

  // MUST apply a spring. Mobile CPUs cannot compute SVG path lengths 1:1 with scroll events.
  const smoothProgress = useSpring(progress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const distance = useTransform(smoothProgress, (v) => `${v * 100}%`);
  const heartOpacity = useTransform(smoothProgress, [0.985, 1], [0, 0.9]);
  const heartScale = useTransform(smoothProgress, [0.97, 1], [0.85, 1.15]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      <svg
        viewBox="0 0 4000 5100"
        preserveAspectRatio="xMidYMin slice"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="activeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7DF8F3" />
            <stop offset="100%" stopColor="#0DDCD5" />
          </linearGradient>

          <radialGradient id="orb">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="40%" stopColor="#8EF6F2" />
            <stop offset="100%" stopColor="#0DDCD5" />
          </radialGradient>
        </defs>

        <path
          d={path}
          stroke="#0DDCD5"
          strokeWidth={26}
          opacity={0.05}
          fill="none"
        />

        <path
          d={path}
          stroke="#EEF4F6"
          strokeWidth={16}
          fill="none"
          strokeLinecap="round"
        />

        <path
          d={path}
          stroke="white"
          strokeWidth={2}
          opacity={0.6}
          fill="none"
          strokeLinecap="round"
          transform="translate(-2 -2)"
        />

        <motion.path
          d={path}
          stroke="url(#activeGradient)"
          strokeWidth={24}
          opacity={0.2}
          fill="none"
          strokeLinecap="round"
          style={{ pathLength: smoothProgress }}
        />

        <motion.path
          d={path}
          stroke="url(#activeGradient)"
          strokeWidth={12}
          fill="none"
          strokeLinecap="round"
          style={{ pathLength: smoothProgress }}
        />

        <g transform="translate(1800, 80)">
          <circle
            r={50}
            fill="none"
            stroke="#0DDCD5"
            strokeWidth={2}
            opacity={0.25}
            className="animate-[pulse_2.5s_ease-out_infinite]"
          />

          <circle
            r={30}
            fill="rgba(255,255,255,0.75)"
            stroke="rgba(13,220,213,0.6)"
            strokeWidth={2}
          />

          <g transform="scale(1.2)">
            <rect
              x={-4}
              y={-12}
              width={8}
              height={24}
              rx={3}
              fill="url(#orb)"
            />
            <rect
              x={-12}
              y={-4}
              width={24}
              height={8}
              rx={3}
              fill="url(#orb)"
            />
          </g>

          <circle cx="-6" cy="-6" r={4} fill="white" opacity={0.9} />
        </g>

        <g transform="translate(1800, 4950)">
          <motion.g style={{ opacity: heartOpacity, scale: heartScale }}>
            <circle
              r={36}
              fill="rgba(255,255,255,0.7)"
              stroke="rgba(13,220,213,0.7)"
              strokeWidth={2}
            />

            <g transform="scale(2.8) translate(-12, -12)">
              <path
                d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                fill="url(#orb)"
                stroke="white"
                strokeWidth={1}
              />
            </g>
          </motion.g>
        </g>

        <motion.g
          className="animate-[pulse_2s_ease-in-out_infinite]"
          style={{
            offsetPath: `path('${path}')`,
            offsetDistance: distance,
          }}
        >
          <circle r={24} fill="#0DDCD5" opacity={0.2} />
          <circle
            r={16}
            fill="url(#orb)"
            stroke="rgba(255,255,255,.85)"
            strokeWidth={1.5}
          />
          <circle r={5} fill="#0DDCD5" />
        </motion.g>
      </svg>
    </div>
  );
}
```

---

### File: ./components/journey-section/hooks/useJourney.ts

**Risk Flags:** Framer Motion & Render Loops

```ts
"use client";

import { useScroll, useSpring, useReducedMotion } from "framer-motion";
import { useRef, RefObject } from "react";

export const useJourneyProgress = (ref: RefObject<HTMLElement>) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 18,
    mass: 1,
  });

  return smoothProgress;
};

export const useFloatingAnimation = () => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return {};

  return {
    y: [0, -10, 0],
    rotate: [-3, 3, -3],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };
};
```

---

### File: ./hooks/use-media-query.ts

**Risk Flags:** Hydration & SSR Mismatches

```ts
"use client";

import { useSyncExternalStore } from "react";

export function useMediaQuery(query: string): boolean {
  const subscribe = (callback: () => void) => {
    const media = window.matchMedia(query);
    media.addEventListener("change", callback);
    return () => media.removeEventListener("change", callback);
  };

  const getSnapshot = () => window.matchMedia(query).matches;

  // Default fallback for SSR to prevent hydration errors
  const getServerSnapshot = () => false;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
```

---

### File: ./data/autoimmune.ts

**Risk Flags:** Framer Motion & Render Loops

```ts
// data/autoimmune.ts

import { HeroImage } from "@/components/hero/desktop/hero-image";
import { image } from "framer-motion/client";

export const autoimmuneData = {
  // Hero Section Data
  title: "آشنایی با بیماری‌های خودایمنی",
  subtitle: "رویکرد نوین ایمونولوژی",
  description:
    "مدیریت و کنترل بیماری‌های مرتبط با سیستم ایمنی از طریق رویکردهای نوین علمی. در این بیماری‌ها، سیستم ایمنی به اشتباه بافت‌های سالم بدن را هدف قرار می‌دهد.",
  heroImageUrl: "/images/diseases/ms2.png",
  heroImageSize: "lg" as const,
  // Mechanism Section Data
  mechanismTitle: "سازوکار بیماری‌های خودایمنی",
  mechanismDescription:
    "در این بیماری‌ها، سیستم ایمنی به اشتباه بافت‌های سالم بدن را هدف قرار داده و باعث ایجاد التهاب می‌شود.",
  processSteps: [
    {
      title: "محرک‌های اولیه",
      desc: "عوامل ژنتیکی یا محیطی سیستم ایمنی را تحریک می‌کنند",
      iconName: "Dna",
      highlight: false,
    },
    {
      title: "نقص در تشخیص",
      desc: "ناتوانی در تمایز بین سلول‌های خودی و مهاجم",
      iconName: "ScanSearch",
      highlight: false,
    },
    {
      title: "حمله خودایمنی",
      desc: "تولید آنتی‌بادی و حمله به بافت‌های سالم بدن",
      iconName: "ShieldAlert",
      highlight: false,
    },
    {
      title: "التهاب مزمن",
      desc: "آسیب بافتی و بروز علائم پیش‌رونده",
      iconName: "Flame",
      highlight: true,
    },
  ],
  // Featured Diseases Array
  featuredDiseases: [
    {
      id: "ms",
      name: "Multiple Sclerosis (ام‌اس)",
      description:
        "بیماری است که در آن سیستم ایمنی به میلین و گاهی خود آکسون‌های سیستم عصبی مرکزی آسیب می‌زند.",
      imageUrl: "/images/diseases/ms4.png",
      media: { type: "video" as const },
    },
    {
      id: "psoriasis",
      name: "Psoriasis (پسوریازیس)",
      description:
        "بیماری التهابی مزمن است که باعث فعال‌شدن بیش‌ازحد سیستم ایمنی و افزایش سرعت تکثیر سلول‌های پوست می‌شود.",
      imageUrl: "/images/diseases/pes.png",
      media: { type: "photo" as const },
      paperDoi: "10.5281/zenodo.7799594",
    },
    {
      id: "vitiligo",
      name: "Vitiligo (ویتیلیگو)",
      description:
        "بیماری خودایمنی است که در آن سیستم ایمنی ملانوسیت‌های تولیدکننده رنگدانه را تخریب می‌کند.",
      imageUrl: "/images/diseases/vitiligo.png",
      media: { type: "photo" as const },
    },
  ],

  // Library Search Keywords
  keywords: [
    "نوروپاتی آکسونی حرکتی حاد",
    "سندرم آنتی‌فسفولیپید",
    "گاستریت خودایمنی",
    "تیروئیدیت هاشیموتو",
    "لوپوس اریتماتوز سیستمیک (SLE)",
    "بیماری سلیاک",
  ],
};
```

---
