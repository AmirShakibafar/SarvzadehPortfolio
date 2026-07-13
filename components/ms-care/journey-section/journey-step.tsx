"use client";

import { motion } from "framer-motion";
import { ElementType } from "react";

interface JourneyStepProps {
  title: string;
  text: string;
  icon: ElementType;
  index: number;
}

export function JourneyStep({
  title,
  text,
  icon: Icon,
  index,
}: JourneyStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-150px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
      className="flex items-start gap-8"
    >
      <div className="relative shrink-0">
        <div className="w-20 h-20 bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex items-center justify-center border border-gray-100/50">
          <Icon className="w-8 h-8 text-[#24D8DC]" strokeWidth={1.5} />
        </div>
      </div>
      <div className="bg-white rounded-[32px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 flex-1 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-shadow duration-500">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{text}</p>
      </div>
    </motion.div>
  );
}
