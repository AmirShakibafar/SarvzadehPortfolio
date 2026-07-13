"use client";

import { motion } from "framer-motion";
import { CARE_DIMENSIONS } from "../constants";
import { FloatingCard } from "./floating-card";
import { NeuralIllustration } from "./neural-illustration";

export function DimensionsSection() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 py-32 lg:py-48 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center z-20 relative mb-16 lg:mb-0"
      >
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-[1.4] mb-4">
          همراه شما در تمام مسیر زندگی با ام‌اس
        </h2>
        <p className="text-lg text-gray-500">
          ابعاد مختلف سلامت شما در یک اکوسیستم یکپارچه
        </p>
      </motion.div>

      <div className="relative w-full max-w-4xl aspect-[1/1] flex items-center justify-center">
        <NeuralIllustration />

        <div className="relative w-full h-full flex flex-wrap lg:block gap-4 justify-center items-center z-20 mt-10 lg:mt-0">
          {CARE_DIMENSIONS.map((item, index) => (
            <FloatingCard
              key={item.id}
              title={item.title}
              delay={item.delay}
              top={item.top}
              right={item.right}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
