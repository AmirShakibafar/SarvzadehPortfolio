"use client";
import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

interface JourneyPathProps {
  progress: MotionValue<number>;
}

const PATH_STRING = `
  M1800 80 
  C1800 800 2350 1000 2350 2000 
  C2350 3000 1650 3200 1650 4200 
  C1650 4600 1800 4800 1800 4950
`;

const SvgDefinitions = () => (
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
);

export function JourneyPath({ progress }: JourneyPathProps) {
  // REMOVED: redundant useSpring. Use the prop directly.
  const distance = useTransform(progress, (v) => `${v * 100}%`);
  const heartOpacity = useTransform(progress, [0.975, 1], [0, 1]);

  const heartScale = useTransform(progress, [0.975, 1], [0.82, 1]);

  return (
    <div
      className="absolute inset-0 pointer-events-none z-10"
      style={{ willChange: "transform" }}
    >
      <svg
        viewBox="0 0 4000 5100"
        preserveAspectRatio="xMidYMin slice"
        className="w-full h-full"
      >
        <SvgDefinitions />

        {/* Base static tracks combined where possible */}
        <path
          d={PATH_STRING}
          stroke="#EEF4F6"
          strokeWidth={16}
          fill="none"
          strokeLinecap="round"
        />
        <path
          d={PATH_STRING}
          stroke="white"
          strokeWidth={2}
          opacity={0.6}
          fill="none"
          strokeLinecap="round"
          transform="translate(-2 -2)"
        />

        {/* Single hardware-accelerated glowing path */}
        <motion.path
          d={PATH_STRING}
          stroke="url(#activeGradient)"
          strokeWidth={16}
          opacity={0.8}
          fill="none"
          strokeLinecap="round"
          style={{ pathLength: progress }}
        />

        {/* =====================================================
    START NODE — MEDICAL CROSS
===================================================== */}

        <g transform="translate(1800, 80)">
          {/* Soft glass body */}
          <circle
            r={34}
            fill="rgba(255,255,255,0.78)"
            stroke="rgba(13,220,213,0.55)"
            strokeWidth={1.5}
          />

          {/* Inner glass rim */}
          <circle
            r={27}
            fill="none"
            stroke="rgba(13,220,213,0.16)"
            strokeWidth={1}
          />

          {/* Medical cross */}
          <rect x={-4} y={-15} width={8} height={30} rx={4} fill="url(#orb)" />

          <rect x={-15} y={-4} width={30} height={8} rx={4} fill="url(#orb)" />

          {/* Glass reflection */}
          <ellipse
            cx={-11}
            cy={-12}
            rx={4}
            ry={6}
            fill="white"
            opacity={0.45}
            transform="rotate(-35 -11 -12)"
          />
        </g>

        {/* =====================================================
    END NODE — HEART
===================================================== */}

        <g transform="translate(1800, 4950)">
          <motion.g
            style={{
              opacity: heartOpacity,
              scale: heartScale,
              transformOrigin: "center",
            }}
          >
            {/* Same glass language as start node */}
            <circle
              r={34}
              fill="rgba(255,255,255,0.78)"
              stroke="rgba(13,220,213,0.58)"
              strokeWidth={1.5}
            />

            {/* Inner glass rim */}
            <circle
              r={27}
              fill="none"
              stroke="rgba(13,220,213,0.16)"
              strokeWidth={1}
            />

            {/* Small centered heart */}
            <path
              d="
        M 0 13
        C -3 10 -14 2 -14 -6
        C -14 -12 -7 -16 -2.5 -11
        L 0 -8
        L 2.5 -11
        C 7 -16 14 -12 14 -6
        C 14 2 3 10 0 13
        Z
      "
              fill="url(#orb)"
              stroke="rgba(255,255,255,0.75)"
              strokeWidth={0.8}
            />

            {/* Heart glass highlight */}
            <ellipse
              cx={-5}
              cy={-7}
              rx={2}
              ry={3.5}
              fill="white"
              opacity={0.42}
              transform="rotate(-25 -5 -7)"
            />
          </motion.g>
        </g>

        {/* Traveling Orb (Desktop only) */}
        <motion.g
          style={{
            offsetPath: `path('${PATH_STRING}')`,
            offsetDistance: distance,
          }}
        >
          <circle
            r={16}
            fill="url(#orb)"
            stroke="rgba(255,255,255,.85)"
            strokeWidth={1.5}
          />
        </motion.g>
      </svg>
    </div>
  );
}
