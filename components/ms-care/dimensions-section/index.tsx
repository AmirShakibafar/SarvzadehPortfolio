"use client";

import { useState, type ElementType } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CARE_DIMENSIONS,
  ORBIT_RADIUS,
  ORBIT_RADIUS_MOBILE,
} from "../constants";
import { FloatingCard } from "./floating-card";
import { NeuralIllustration } from "./neural-illustration";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { GlassCard } from "@/components/ui/glass-card";
import { cn } from "@/lib/utils";

function DimensionDetail({
  title,
  description,
  icon: Icon,
  className,
}: {
  title: string;
  description: string;
  icon: ElementType;
  className?: string;
}) {
  return (
    <GlassCard
      intensity="heavy"
      className={cn(
        "flex flex-col items-center text-center gap-3 p-6 rounded-[24px]",
        "bg-white/85 border-white/60 backdrop-blur-md",
        "shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.7)]",
        className,
      )}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 shadow-[inset_0_0_12px_rgba(255,255,255,0.6)]">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-lg font-bold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-[240px]">
        {description}
      </p>
    </GlassCard>
  );
}

export function DimensionsSection() {
  const [activeId, setActiveId] = useState<number>(CARE_DIMENSIONS[0].id);
  const activeDimension =
    CARE_DIMENSIONS.find((d) => d.id === activeId) ?? CARE_DIMENSIONS[0];

  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 py-32 lg:py-48 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center z-20 relative mb-10 lg:mb-16"
      >
        <Heading
          as="h2"
          size="h2"
          className="text-3xl lg:text-5xl leading-[1.4] mb-4"
        >
          همراه شما در تمام مسیر زندگی با ام‌اس
        </Heading>
        <Paragraph size="lg">
          ابعاد مختلف سلامت شما در یک اکوسیستم یکپارچه
        </Paragraph>
      </motion.div>

      {/* Mobile: pill selector */}
      <div className="lg:hidden w-full mb-6 z-20">
        <div className="flex gap-2 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-none">
          {CARE_DIMENSIONS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveId(item.id)}
              className={cn(
                "snap-start shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                "border backdrop-blur-sm whitespace-nowrap",
                activeId === item.id
                  ? "bg-primary text-primary-foreground border-primary/20 shadow-[0_4px_14px_color-mix(in_oklab,var(--color-primary)_30%,transparent)]"
                  : "bg-white/60 text-foreground border-white/60 hover:border-primary/20",
              )}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop orbit hub */}
      <div className="hidden lg:flex relative w-full max-w-[800px] aspect-square items-center justify-center">
        {/* SVG Diagram scaling responsive container */}
        <div className="absolute inset-0">
          <NeuralIllustration
            dimensions={CARE_DIMENSIONS}
            activeId={activeId}
            radius={ORBIT_RADIUS}
          />
        </div>

        {/* Absolute Percentage-Mapped Card Layer */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {CARE_DIMENSIONS.map((item, index) => {
            // Replicates the SVG polar math using CSS percentages.
            // SVG line draws to radius 180 within a 500x500 box (180/500 = 36%).
            const rad = (item.angle * Math.PI) / 180;
            const left = `calc(50% + ${36 * Math.sin(rad)}%)`;
            const top = `calc(50% - ${36 * Math.cos(rad)}%)`;

            return (
              <div
                key={item.id}
                className="absolute pointer-events-auto"
                style={{
                  left,
                  top,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <FloatingCard
                  title={item.title}
                  icon={item.icon}
                  angle={item.angle}
                  // Enforce a radius of 0 to disable internal translation in FloatingCard
                  radius={0}
                  delay={item.delay}
                  index={index}
                  isActive={activeId === item.id}
                  onSelect={() => setActiveId(item.id)}
                />
              </div>
            );
          })}
        </div>

        {/* Center Details */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <DimensionDetail
                title={activeDimension.title}
                description={activeDimension.description}
                icon={activeDimension.icon}
                className="max-w-[220px]"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile: compact hub + detail below */}
      <div className="lg:hidden relative w-full flex flex-col items-center gap-6">
        <div className="relative w-[280px] h-[280px]">
          <NeuralIllustration
            dimensions={CARE_DIMENSIONS}
            activeId={activeId}
            radius={ORBIT_RADIUS_MOBILE}
          />
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-sm"
          >
            <DimensionDetail
              title={activeDimension.title}
              description={activeDimension.description}
              icon={activeDimension.icon}
              className="w-full"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
