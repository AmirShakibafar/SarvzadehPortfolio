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
    <section id="mechanism" className="py-24 relative z-10 w-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <Heading size="h2" className="mb-4">
            {title}
          </Heading>
          <Paragraph>{description}</Paragraph>
        </motion.div>

        <div className="relative flex items-center justify-center isolate">
          <div
            className="absolute left-1/2 top-1/2 -z-10 h-[150%] w-[150%] max-w-5xl opacity-40 -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat pointer-events-none"
            aria-hidden="true"
          />

          <motion.div
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "100px 0px", amount: 0.05 }}
            className="relative w-full"
          >
            <DotPattern className="-right-8 -top-8 h-32 w-32 opacity-40" />
            <DotPattern className="-bottom-8 -left-8 h-32 w-32 opacity-40" />

            {/* Background connection line for Gestalt Continuity */}
            <div className="hidden lg:block absolute top-1/2 right-12 left-12 h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2 -z-10" />

            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4 relative">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  variants={cardItemVariants}
                  className="relative h-full isolate flex flex-col items-center"
                >
                  <div
                    className="absolute left-1/2 top-1/2 -z-10 h-[150%] w-[150%] opacity-40 -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Connecting Arrow for sequential flow */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -left-5 -translate-y-1/2 z-20 text-primary/40 bg-background rounded-full p-1 border border-primary/10">
                      <ChevronLeft className="w-5 h-5" />
                    </div>
                  )}

                  <GlassCard
                    className={`flex h-full w-full flex-col items-center justify-start p-6 text-center ${
                      step.highlight
                        ? "border-primary/30 bg-white/60 shadow-lg shadow-primary/10"
                        : "bg-white/40"
                    }`}
                  >
                    <div
                      className={`flex items-center justify-center w-12 h-12 rounded-full mb-4 text-xl font-bold ${
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
