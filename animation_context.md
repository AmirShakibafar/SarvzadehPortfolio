### ./components/approach-section/section-header.tsx

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

### ./components/approach-section/animations.ts

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

### ./components/approach-section/desktop/glass-brain-artwork.tsx

```tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function GlassBrainArtwork() {
  return (
    <div className="order-2 flex w-full justify-center lg:order-1 isolate">
      <motion.div
        className="relative isolate z-0 flex aspect-square w-full max-w-[480px] items-center justify-center  "
        initial={{ scale: 0.8, y: 40, opacity: 0 }}
        whileInView={{ scale: 1, y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "100px 0px", amount: 0.05 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="absolute left-1/2 top-1/2 -z-20 h-[150%] w-[150%] opacity-40 -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat pointer-events-none" />

        <motion.div
          animate={{
            y: [0, -24, 0],
            rotate: [-4, 2, -4],
          }}
          transition={{
            delay: 1,
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative z-10 h-full w-full    "
        >
          <Image
            src="/images/approach/brain2.webp"
            alt="Glass Brain"
            fill
            className="object-contain    "
            draggable={false}
            sizes="(max-width: 768px) 100vw, 480px"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
```

### ./components/approach-section/desktop/quote-display.tsx

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

### ./components/approach-section/desktop/decorated-stats-grid.tsx

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
                  stat.highlight
                    ? "border-primary/30 bg-white/50 shadow-md shadow-primary/10"
                    : ""
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

### ./components/approach-section/mobile/stats-mobile.tsx

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
                  shadow-[0_8px_20px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.8)]
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

### ./components/approach-section/mobile/glass-artwork-mobile.tsx

```tsx
// glass-brain-artwork-mobile.tsx
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
        {/* SVG background blob replacing CSS blur */}
        <div className="absolute left-1/2 top-1/2 -z-20 h-[150%] w-[150%] opacity-40 -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat -z-10 pointer-events-none" />

        {/* Replaced Framer Motion JS loop with native CSS animation for iOS performance */}
        <div className="relative z-10 h-full w-full animate-[pulse_8s_ease-in-out_infinite]">
          <Image
            src="/images/approach/brain2.webp"
            alt="Glass Brain"
            fill
            className="object-contain   [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
            draggable={false}
            sizes="280px"
            priority
          />
        </div>
      </motion.div>
    </div>
  );
}
```

### ./components/approach-section/mobile/quote-display-mobile.tsx

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

### ./components/layout/navbar/navbar-desktop.tsx

```tsx
"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowLeft, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavItem } from "@/components/ui/nav-item";

export function NavbarDesktop() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    // Hide header if scrolling down and past 150px, otherwise show it
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
      className="sticky top-0 z-50 w-full h-24 bg-white/20 backdrop-blur-md border-b border-primary/10 shadow-[0_8px_32px_-8px] shadow-primary/20"
    >
      <div className="flex h-full items-center justify-between w-full max-w-7xl mx-auto px-[56px]">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-12 h-12 rounded-full border border-primary/20 bg-primary/5 text-primary shadow-[inset_0_0_12px_rgba(var(--primary),0.2)]">
            <Leaf className="w-6 h-6" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-bold text-lg text-foreground leading-tight">
              دکتر رضا سرورزاده
            </span>
            <span className="text-xs text-muted-foreground mt-0.5">
              تغذیه بالینی و رژیم‌درمانی
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 h-full">
          <NavItem
            href="#"
            label="صفحه اصلی"
            isActive={true}
            className="text-base"
          />
          <NavItem href="#" label="خدمات" className="text-base" />
          <NavItem href="#" label="درباره من" className="text-base" />
          <NavItem href="#" label="شرایط تحت درمان" className="text-base" />
          <NavItem href="#" label="مقالات" className="text-base" />
          <NavItem href="#" label="تماس با من" className="text-base" />
        </nav>

        {/* CTA Button */}
        <div className="flex items-center">
          <Button
            variant="pillPrimary"
            size="pill"
            className="gap-2 hidden md:flex"
          >
            رزرو مشاوره
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
```

### ./components/layout/navbar/navbar-mobile.tsx

```tsx
"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import { ArrowLeft, Leaf, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const menuLinks = [
  { href: "#", label: "صفحه اصلی" },
  { href: "#", label: "خدمات" },
  { href: "#", label: "درباره من" },
  { href: "#", label: "شرایط تحت درمان" },
  { href: "#", label: "مقالات" },
  { href: "#", label: "تماس با من" },
];

export function NavbarMobile() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    // Lower threshold for mobile viewports
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = isOpen ? "hidden" : "unset";
    }

    // Cleanup ensures scrolling is restored if the component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden && !isOpen ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="sticky top-0 z-40 w-full h-20 bg-white/80 backdrop-blur-md border-b border-primary/10 shadow-[0_8px_32px_-8px] shadow-primary/10  "
        dir="rtl"
      >
        <div className="flex h-full items-center justify-between w-full px-5">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/20 bg-primary/5 text-primary shadow-[inset_0_0_12px_rgba(13,220,213,0.1)]">
              <Leaf className="w-5 h-5" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-bold text-base text-foreground leading-tight">
                دکتر رضا سرورزاده
              </span>
              <span className="text-[10px] text-muted-foreground mt-0.5">
                تغذیه بالینی و رژیم‌درمانی
              </span>
            </div>
          </div>

          {/* Hamburger Menu Trigger */}
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 text-foreground focus:outline-none"
            aria-label="باز کردن منو"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm  "
            />

            {/* Side Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-50 h-full w-[280px] bg-white shadow-2xl flex flex-col  "
              dir="rtl"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-5 border-b border-border/50">
                <div className="flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-primary" />
                  <span className="font-bold text-base text-foreground">
                    منو
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-muted-foreground hover:text-foreground focus:outline-none bg-secondary/50 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto py-4">
                <nav className="flex flex-col space-y-1 px-4">
                  {menuLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-3 text-sm font-medium text-foreground rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* CTA Section */}
              <div className="p-5 border-t border-border/50 bg-slate-50/50">
                <Button
                  variant="pillPrimary"
                  size="pill"
                  className="w-full justify-center gap-2 h-12"
                >
                  رزرو مشاوره
                  <ArrowLeft className="h-5 w-5" />
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

### ./components/cta/desktop/cta-info.tsx

```tsx
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
      className="relative flex flex-col space-y-2 isolate"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "100px 0px", amount: 0.05 }}
    >
      <div
        className="absolute left-1/2 top-1/2 -z-10 h-[500px] opacity-40 w-[500px] md:h-[700px] md:w-[700px] -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat pointer-events-none"
        aria-hidden="true"
      />

      <motion.div variants={itemVariants} className="   ">
        <span className="inline-block text-sm font-semibold tracking-wide text-primary">
          ارتباط سریع و آسان
        </span>
      </motion.div>

      <motion.div variants={itemVariants} className="   ">
        <Heading className="text-4xl font-extrabold leading-tight text-foreground lg:text-5xl">
          برای شروع، <br />
          <span className="text-primary">مسیر مناسب</span> را انتخاب کنید
        </Heading>
      </motion.div>

      <motion.div variants={itemVariants} className="   ">
        <Paragraph className="max-w-lg text-lg leading-9 text-muted-foreground">
          فرم ارزیابی کوتاه ما را تکمیل کنید تا با اطلاعات کامل با شما تماس
          بگیریم، یا برای پاسخ سریع‌تر مستقیماً در پیام‌رسان‌ها به ما پیام دهید.
        </Paragraph>
      </motion.div>

      <motion.div variants={itemVariants} className="space-y-4 pt-4    ">
        <h4 className="font-semibold text-foreground">
          ارتباط مستقیم در پیام‌رسان‌ها:
        </h4>
        <div className="flex flex-wrap items-center gap-4">
          <Button
            className="flex h-12 items-center gap-2 rounded-full border border-white/20 bg-[#18a983]/90 px-6 text-white shadow-lg shadow-[#18a983]/20 transition-all hover:bg-[#18a983] backdrop-blur-md  "
            onClick={() => window.open("https://ble.ir/your_bale_id", "_blank")}
          >
            پشتیبانی بله
          </Button>

          <Button
            className="flex h-12 items-center gap-2 rounded-full border border-white/20 bg-[#ea7a2c]/90 px-6 text-white shadow-lg shadow-[#ea7a2c]/20 transition-all hover:bg-[#ea7a2c] backdrop-blur-md  "
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
```

### ./components/cta/desktop/evaluation-form.tsx

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
        3. backdrop-blur-none ensures the base component doesn't sneak in a blur filter
      */}
      <GlassCard className="p-6 md:p-8 lg:p-10 rounded-[2rem] bg-white/10 border border-white/30 shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.8)] overflow-hidden min-h-[420px] flex flex-col relative z-10 backdrop-blur-none">
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
      <div className="h-2 w-full bg-white/50 border border-white/60 rounded-full overflow-hidden shadow-inner">
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
            className="w-full text-right px-6 py-4 rounded-2xl border border-white/60 bg-white/50 hover:bg-white/80 hover:border-teal-300 hover:shadow-md text-slate-700 font-semibold transition-all duration-300"
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
            className="w-full pl-10 pr-4 py-4 rounded-2xl border border-white/60 bg-white/50 text-left focus:outline-none focus:ring-2 focus:ring-teal-400 focus:bg-white transition-all shadow-sm"
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
            className="w-full pl-10 pr-4 py-4 rounded-2xl border border-white/60 bg-white/50 resize-none focus:outline-none focus:ring-2 focus:ring-teal-400 focus:bg-white transition-all shadow-sm"
          />
          <MessageSquare className="absolute left-4 top-5 h-5 w-5 text-slate-400 group-focus-within:text-teal-500 transition-colors" />
        </div>
      </div>
      <Button
        type="submit"
        disabled={isSubmitting || !contactData.phone}
        className="w-full h-14 rounded-2xl bg-gradient-to-l from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 text-white font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-teal-500/25 transition-all disabled:opacity-50"
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
        <div className="h-24 w-24 bg-gradient-to-br from-teal-100 to-white border border-white rounded-full flex items-center justify-center text-teal-500 mb-4 shadow-xl relative z-10">
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
        className="mt-6 rounded-full border-white/60 bg-white/50 text-teal-700 hover:bg-white/80 hover:text-teal-800 shadow-sm transition-all"
      >
        ثبت درخواست جدید
      </Button>
    </div>
  );
}
```

### ./components/cta/mobile/evaluation-form-mobile.tsx

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
    shadow-[0_8px_40px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.35)]
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
      <div className="h-1.5 w-full bg-white/50 border border-white/60 rounded-full overflow-hidden shadow-inner">
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
            className="w-full text-right px-5 py-3.5 rounded-2xl border border-white/50 bg-white/60 hover:bg-white/80 active:bg-teal-50 text-slate-700 font-semibold transition-colors text-sm shadow-sm"
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
            className="w-full pl-10 pr-4 py-3.5 rounded-2xl border border-white/50 bg-white/60 text-left focus:outline-none focus:ring-2 focus:ring-teal-400 focus:bg-white transition-colors text-sm shadow-sm"
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
            className="w-full pl-10 pr-4 py-3.5 rounded-2xl border border-white/50 bg-white/60 resize-none focus:outline-none focus:ring-2 focus:ring-teal-400 focus:bg-white transition-colors text-sm shadow-sm"
          />
          <MessageSquare className="absolute left-3.5 top-4 h-4 w-4 text-slate-400 group-focus-within:text-teal-500 transition-colors" />
        </div>
      </div>
      <Button
        type="submit"
        disabled={isSubmitting || !contactData.phone}
        className="w-full h-12 rounded-2xl bg-gradient-to-l from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 text-white font-bold text-base flex items-center justify-center gap-2 shadow-md shadow-teal-500/20 transition-opacity disabled:opacity-50"
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
        <div className="h-20 w-20 bg-gradient-to-br from-teal-100 to-white border border-white rounded-full flex items-center justify-center text-teal-500 mb-2 shadow-lg relative z-10">
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
        className="mt-4 rounded-full border-white/50 bg-white/60 text-teal-700 hover:bg-white/80 active:bg-teal-50 shadow-sm transition-colors text-sm h-10 px-6"
      >
        ثبت درخواست جدید
      </Button>
    </div>
  );
}
```

### ./components/cta/mobile/cta-info-mobile.tsx

```tsx
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
        className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat opacity-20 pointer-events-none"
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
```

### ./components/hero/desktop/hero-section-desktop.tsx

```tsx
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
```

### ./components/hero/desktop/hero-image.tsx

```tsx
"use client";
import doctorImage from "@/public/images/hero/Hero-Image.webp";

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
        w-[95%] lg:w-[95%] 
        h-[75%] lg:h-[80%] 
        max-w-[760px] 
        max-h-[620px]
        rounded-[45%_55%_48%_52%/55%_45%_50%_50%]
        bg-gradient-to-br from-white/60 to-white/20
        border border-white/60
        shadow-[0_24px_80px_rgba(0,0,0,0.03)]
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
        shadow-[0_8px_32px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.7)]
      "
    >
      <div className="flex items-center justify-center shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary/10 shadow-[inset_0_0_12px_rgba(255,255,255,0.6)]">
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

### ./components/hero/mobile/hero-image-mobile.tsx

```tsx
// hero-image-mobile.tsx
"use client";
import doctorImage from "@/public/images/hero/Hero-Image.webp";
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
        w-[95%]
        h-[75%]
        max-w-[760px] 
        max-h-[620px]
        rounded-[45%_55%_48%_52%/55%_45%_50%_50%]
        bg-gradient-to-br from-white/60 to-white/20
        border border-white/60
        shadow-[0_24px_80px_rgba(0,0,0,0.03)]
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
    <div className="relative bg-white/50 border border-white/50 shadow-[0_8px_20px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.8)] overflow-hidden rounded-[24px] px-3 py-2.5">
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-white/50 to-transparent pointer-events-none" />

      <div className="relative z-10 flex items-center gap-3">
        <div className="flex items-center justify-center shrink-0 w-10 h-10 rounded-full bg-primary/10 shadow-[inset_0_0_12px_rgba(255,255,255,0.6)]">
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

### ./components/hero/mobile/hero-section-mobile.tsx

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

### ./components/journey-section/components/desktop/journey-glass-illustration.tsx

```tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion, TargetAndTransition } from "framer-motion";
import { useFloatingAnimation } from "../../hooks/useJourney";
import { GlassCard } from "@/components/ui/glass-card";

interface IllustrationProps {
  src: string;
  alt: string;
}

export const JourneyGlassIllustration: React.FC<IllustrationProps> = ({
  src,
  alt,
}) => {
  const floatingAnimation = useFloatingAnimation();

  return (
    <motion.div
      className="relative z-0 flex aspect-square w-full items-center justify-center isolate"
      initial={{ scale: 0.95, y: 20, opacity: 0 }}
      whileInView={{ scale: 1, y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "100px 0px", amount: 0.05 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      style={{ willChange: "transform, opacity" }}
    >
      {/* Increased container size to 150% to account for the baked-in blur spread */}
      <div className="absolute left-1/2 top-1/2 -z-20 h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 opacity-40 pointer-events-none">
        <Image
          src="/blob.svg"
          alt=""
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <GlassCard className="absolute inset-4 -z-10 rounded-[4rem]  " />

      <motion.div
        animate={floatingAnimation as TargetAndTransition}
        className="relative z-10 flex h-5/6 w-5/6 items-center justify-center  "
      >
        <Image
          src={src}
          alt={alt}
          width={800}
          height={800}
          className="h-full w-full object-cover    "
          sizes="(max-width: 768px) 83vw, 40vw"
        />
      </motion.div>
    </motion.div>
  );
};
```

### ./components/journey-section/components/desktop/journey-step.tsx

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
        <JourneyGlassIllustration src={image} alt={title} />
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

### ./components/journey-section/components/desktop/journey-path.tsx

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

### ./components/journey-section/components/mobile/journey-glass-illustration-mobile.tsx

```tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface IllustrationMobileProps {
  src: string;
  alt: string;
}

export const JourneyGlassIllustrationMobile: React.FC<
  IllustrationMobileProps
> = ({ src, alt }) => {
  return (
    <motion.div
      className="relative z-0 flex aspect-square w-full items-center justify-center isolate"
      initial={{ scale: 0.95, y: 15, opacity: 0 }}
      whileInView={{ scale: 1, y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "50px 0px", amount: 0.05 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="absolute left-1/2 top-1/2 -z-20 opacity-60 h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat pointer-events-none" />

      <div className="absolute inset-4 -z-10 rounded-[2.5rem] bg-white/10 border border-white/30 shadow-[0_8px_20px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.8)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-white/10 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 flex h-5/6 w-5/6 items-center justify-center animate-[pulse_6s_ease-in-out_infinite]">
        <Image
          src={src}
          alt={alt}
          width={800}
          height={800}
          className="h-full w-full object-cover  "
          sizes="(max-width: 768px) 83vw, 400px"
        />
      </div>
    </motion.div>
  );
};
```

### ./components/journey-section/components/mobile/journey-mobile.tsx

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

// Simplified to a pure opacity fade. No vertical shifting (y: 20),
// which removes layout calculation overhead on mobile browsers.
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

            <div className="flex flex-col gap-6 px-4 pt-12 pb-20 relative z-10">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={itemVariants}
                className={`w-[80%] max-w-[280px] ${isEven ? "self-start" : "self-end"}`}
              >
                <JourneyGlassIllustrationMobile
                  src={step.image}
                  alt={step.title}
                />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
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
            </div>
          </div>
        );
      })}
    </div>
  );
};
```

### ./components/journey-section/components/mobile/journey-path-mobile.tsx

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

### ./components/journey-section/hooks/useJourney.ts

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
