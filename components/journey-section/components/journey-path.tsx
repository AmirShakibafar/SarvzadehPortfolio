"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
interface JourneyPathProps {
  progress: MotionValue<number>;
}

export function JourneyPath({ progress }: JourneyPathProps) {
  const path = `
  M2000 180
  C2000 700 2350 850 2300 1450
  C2250 2100 1700 2200 1750 2950
  C1800 3600 2000 3750 2000 3820
`;

  const distance = useTransform(progress, (v) => `${v * 100}%`);

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      <svg
        viewBox="0 0 4000 4000"
        preserveAspectRatio="xMidYMin slice"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="activeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7DF8F3">
              <animate
                attributeName="stop-color"
                values="#7DF8F3;#0DDCD5;#7DF8F3"
                dur="6s"
                repeatCount="indefinite"
              />
            </stop>

            <stop offset="100%" stopColor="#0DDCD5" />
          </linearGradient>

          <radialGradient id="orb">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="40%" stopColor="#8EF6F2" />
            <stop offset="100%" stopColor="#0DDCD5" />
          </radialGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ambient glow */}
        <path
          d={path}
          stroke="#0DDCD5"
          strokeWidth={22}
          opacity={0.06}
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
          opacity={0.7}
          fill="none"
          strokeLinecap="round"
          transform="translate(-2 -2)"
        />

        {/* Active glow */}
        <motion.path
          d={path}
          stroke="url(#activeGradient)"
          strokeWidth={12}
          fill="none"
          strokeLinecap="round"
          style={{ pathLength: progress }}
          filter="url(#glow)"
        />

        {/* Traveling orb */}
        <motion.g
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            offsetPath: `path('${path}')`,
            offsetDistance: distance,
          }}
        >
          {/* Glow */}
          <circle r={28} fill="#0DDCD5" opacity={0.18} />

          {/* Glass */}
          <circle
            r={16}
            fill="url(#orb)"
            stroke="rgba(255,255,255,.8)"
            strokeWidth={1.5}
          />

          {/* Highlight */}
          <circle cx="-5" cy="-5" r={4} fill="white" opacity={0.85} />

          {/* Core */}
          <circle r={5} fill="#0DDCD5" />
        </motion.g>
      </svg>
    </div>
  );
}
