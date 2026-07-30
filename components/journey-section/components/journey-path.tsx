"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

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

  const distance = useTransform(progress, (v) => `${v * 100}%`);
  const heartOpacity = useTransform(progress, [0.985, 1], [0, 0.9]);
  const heartScale = useTransform(progress, [0.97, 1], [0.85, 1.15]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {/* Viewbox height gently increased to 5200 to prevent the bottom glow from clipping */}
      <svg
        viewBox="0 0 4000 5100"
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
            <feGaussianBlur stdDeviation="10" result="blur" />
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

        {/* --- START NODE --- */}
        <g transform="translate(1800, 80)">
          <motion.circle
            r={70}
            fill="#0DDCD5"
            opacity={0.08}
            animate={{ scale: [0.9, 1.2, 0.9] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.circle
            r={42}
            fill="none"
            stroke="#0DDCD5"
            strokeWidth={2}
            opacity={0.25}
            animate={{ scale: [1, 1.5, 1], opacity: [0.25, 0, 0.25] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
          />

          <circle
            r={30}
            fill="rgba(255,255,255,0.75)"
            stroke="rgba(13,220,213,0.6)"
            strokeWidth={2}
            filter="url(#glow)"
          />

          <circle
            r={22}
            fill="none"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth={1}
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
            <motion.circle
              r={80}
              fill="#0DDCD5"
              opacity={0.25}
              filter="url(#glow)"
            />
            <circle
              r={36}
              fill="rgba(255,255,255,0.7)"
              stroke="rgba(13,220,213,0.7)"
              strokeWidth={2}
            />
            <circle
              r={26}
              fill="none"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth={1}
            />

            <g transform="scale(2.8) translate(-12, -12)">
              <path
                d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                fill="url(#orb)"
                stroke="white"
                strokeWidth={1}
                filter="url(#glow)"
              />
              <path
                d="M12 6 C10 4, 6 5, 5 8"
                stroke="white"
                strokeWidth={1}
                opacity={0.6}
                fill="none"
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
          <circle r={30} fill="#0DDCD5" opacity={0.15} />
          <circle
            r={16}
            fill="url(#orb)"
            stroke="rgba(255,255,255,.85)"
            strokeWidth={1.5}
          />
          <circle cx="-5" cy="-5" r={4} fill="white" opacity={0.85} />
          <circle r={5} fill="#0DDCD5" />
        </motion.g>
      </svg>
    </div>
  );
}
