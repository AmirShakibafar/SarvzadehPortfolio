"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CareDimension, ORBIT_RADIUS } from "../constants";

interface NeuralIllustrationProps {
  dimensions: CareDimension[];
  activeId: number | null;
  radius?: number;
}

function polarToCartesian(
  center: number,
  radius: number,
  angleDeg: number,
): { x: number; y: number } {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: center + radius * Math.sin(rad),
    y: center - radius * Math.cos(rad),
  };
}

export function NeuralIllustration({
  dimensions,
  activeId,
  radius = ORBIT_RADIUS,
}: NeuralIllustrationProps) {
  const prefersReducedMotion = useReducedMotion();
  const center = 250;
  const svgRadius = (radius / ORBIT_RADIUS) * 180;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="absolute inset-0 m-auto w-[280px] h-[280px] lg:w-[500px] lg:h-[500px] flex items-center justify-center pointer-events-none"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--color-primary)_15%,transparent)_0%,transparent_70%)] rounded-full blur-2xl" />
      <div className="absolute inset-[15%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_0%,transparent_60%)] rounded-full blur-xl" />

      <svg
        viewBox="0 0 500 500"
        className="w-full h-full absolute inset-0"
      >
        {!prefersReducedMotion && (
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "250px 250px" }}
          >
            {[0, 60, 120].map((offset) => (
              <ellipse
                key={offset}
                cx="250"
                cy="250"
                rx="160"
                ry="120"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="0.5"
                strokeOpacity="0.08"
                transform={`rotate(${offset} 250 250)`}
              />
            ))}
          </motion.g>
        )}

        {dimensions.map((dim) => {
          const end = polarToCartesian(center, svgRadius, dim.angle);
          const isActive = dim.id === activeId;

          return (
            <motion.path
              key={dim.id}
              d={`M ${center} ${center} L ${end.x} ${end.y}`}
              fill="none"
              stroke="var(--color-primary)"
              strokeWidth={isActive ? 2 : 1}
              strokeOpacity={isActive ? 0.8 : 0.12}
              strokeLinecap="round"
              initial={prefersReducedMotion ? false : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.8,
                delay: dim.delay,
                ease: "easeOut",
              }}
            />
          );
        })}

        <circle
          cx={center}
          cy={center}
          r="24"
          fill="white"
          fillOpacity="0.6"
          stroke="var(--color-primary)"
          strokeWidth="1"
          strokeOpacity="0.3"
        />

        {activeId !== null && !prefersReducedMotion && (
          <motion.circle
            cx={center}
            cy={center}
            r="24"
            fill="none"
            stroke="var(--color-primary)"
            strokeWidth="2"
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 1.8, opacity: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
        )}

        <circle
          cx={center}
          cy={center}
          r="6"
          fill="var(--color-primary)"
          fillOpacity={activeId !== null ? 1 : 0.5}
        />
      </svg>
    </motion.div>
  );
}
