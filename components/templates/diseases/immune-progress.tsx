"use client";

import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { motion, Variants } from "framer-motion";
import { DotPattern } from "@/components/ui/dot-pattern";
import { GlassCard } from "@/components/ui/glass-card";
import { ChevronLeft } from "lucide-react";

const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 0.99,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
};

const cardItemVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 0.99,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function ImmuneSystemProcess({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const steps = [
    {
      title: "محرک‌های اولیه",
      desc: "عوامل ژنتیکی یا محیطی\nسیستم ایمنی را تحریک می‌کنند",
      highlight: false,
    },
    {
      title: "نقص در تشخیص",
      desc: "ناتوانی در تمایز بین\nسلول‌های خودی و مهاجم",
      highlight: false,
    },
    {
      title: "حمله خودایمنی",
      desc: "تولید آنتی‌بادی و حمله\nبه بافت‌های سالم بدن",
      highlight: false,
    },
    {
      title: "التهاب مزمن",
      desc: "آسیب بافتی و بروز\nعلائم پیش‌رونده",
      highlight: true,
    },
  ];

  return (
    <section
      id="mechanism"
      className="relative z-10 w-full min-w-0 overflow-hidden py-24"
    >
      <div className="mx-auto w-full min-w-0 max-w-7xl px-6 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mb-20 max-w-2xl text-center"
        >
          <Heading size="h2" className="mb-4">
            {title}
          </Heading>

          <Paragraph>{description}</Paragraph>
        </motion.div>

        {/* ================================================================
            PROCESS AREA
        ================================================================ */}
        <div className="relative min-w-0 overflow-hidden">
          {/* Background blob */}
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              -z-10
              h-[120%]
              w-[120%]
              max-w-5xl
              -translate-x-1/2
              -translate-y-1/2
              bg-[url('/blob.svg')]
              bg-contain
              bg-center
              bg-no-repeat
              opacity-40
            "
            aria-hidden="true"
          />

          <motion.div
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: "100px 0px",
              amount: 0.05,
            }}
            className="relative w-full min-w-0"
          >
            {/* Decorative dots */}
            <DotPattern className="absolute -right-4 -top-4 h-24 w-24 opacity-40" />
            <DotPattern className="absolute -bottom-4 -left-4 h-24 w-24 opacity-40" />

            {/* Connection line */}
            <div className="pointer-events-none absolute left-12 right-12 top-1/2 z-0 hidden h-[2px] -translate-y-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent lg:block" />

            {/* ============================================================
                GRID
            ============================================================ */}
            <div className="relative grid w-full min-w-0 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  variants={cardItemVariants}
                  className="relative isolate flex h-full min-w-0 flex-col items-center overflow-hidden"
                >
                  {/* Card-local background */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-1/2
                      top-1/2
                      -z-10
                      h-[125%]
                      w-[125%]
                      -translate-x-1/2
                      -translate-y-1/2
                      bg-[url('/blob.svg')]
                      bg-contain
                      bg-center
                      bg-no-repeat
                      opacity-40
                    "
                    aria-hidden="true"
                  />

                  {/* Sequential arrow */}
                  {idx < steps.length - 1 && (
                    <div className="absolute -left-5 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full border border-primary/10 bg-background p-1 text-primary/40 lg:flex">
                      <ChevronLeft className="h-5 w-5" />
                    </div>
                  )}

                  <GlassCard
                    className={`flex h-full w-full min-w-0 flex-col items-center justify-start p-6 text-center ${
                      step.highlight
                        ? "border-primary/30 bg-white/60 shadow-lg shadow-primary/10"
                        : "bg-white/40"
                    }`}
                  >
                    <div
                      className={`mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-xl font-bold ${
                        step.highlight
                          ? "bg-primary text-white"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </div>

                    <div className="mt-2 text-sm font-bold text-foreground">
                      {step.title}
                    </div>

                    <div className="mt-2 whitespace-pre-line text-xs leading-6 text-muted-foreground">
                      {step.desc}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
