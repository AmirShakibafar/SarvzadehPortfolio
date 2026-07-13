"use client";

import { motion } from "framer-motion";

export function NeuralIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="absolute inset-0 m-auto w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] flex items-center justify-center opacity-80"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(36,216,220,0.15)_0%,transparent_70%)] rounded-full blur-2xl" />
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full absolute inset-0 text-[#24D8DC]/30"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3, ease: "easeInOut" }}
          d="M250 250 Q 150 100 50 200 T 100 400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
          d="M250 250 Q 350 400 450 300 T 400 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3, delay: 0.2, ease: "easeInOut" }}
          d="M250 250 Q 100 350 200 450"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3, delay: 0.7, ease: "easeInOut" }}
          d="M250 250 Q 400 150 300 50"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
}
