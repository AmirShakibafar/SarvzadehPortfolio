"use client";

import { motion } from "framer-motion";

interface FloatingCardProps {
  title: string;
  delay: number;
  top: string;
  right: string;
  index: number;
}

export function FloatingCard({
  title,
  delay,
  top,
  right,
  index,
}: FloatingCardProps) {
  // Use CSS variables for absolute positioning on large screens to avoid React hydration mismatches
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className="lg:absolute lg:transform-none"
      style={{
        ...(typeof window !== "undefined" && window.innerWidth >= 1024
          ? { top, right }
          : {}),
      }}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 4 + (index % 3),
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
        className="bg-white/90 backdrop-blur-sm border border-[#24D8DC]/10 px-6 py-4 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.05)] whitespace-nowrap text-gray-800 font-medium text-sm lg:text-base hover:shadow-[0_12px_40px_rgba(36,216,220,0.15)] hover:border-[#24D8DC]/30 transition-colors duration-500 cursor-default"
      >
        {title}
      </motion.div>
    </motion.div>
  );
}
