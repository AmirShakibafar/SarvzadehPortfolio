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

  // Dynamically calculate the SVG viewbox size based on the exact radius prop.
  // This ensures the SVG line length in pixels matches the CSS translation in FloatingCards.
  const padding = 60;
  const size = (radius + padding) * 2;
  const center = size / 2;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      // REMOVED fixed style={{ width: size, height: size }} to enable responsive scaling
      className="absolute inset-0 flex items-center justify-center pointer-events-none w-full h-full"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--color-primary)_15%,transparent)_0%,transparent_70%)] rounded-full blur-2xl" />
      <div className="absolute inset-[15%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_0%,transparent_60%)] rounded-full blur-xl" />

      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="w-full h-full absolute inset-0 overflow-visible"
      >
        {!prefersReducedMotion && (
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: `${center}px ${center}px` }}
          >
            {[0, 60, 120].map((offset) => (
              <ellipse
                key={offset}
                cx={center}
                cy={center}
                rx={radius * 0.9}
                ry={radius * 0.7}
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="0.5"
                strokeOpacity="0.08"
                transform={`rotate(${offset} ${center} ${center})`}
              />
            ))}
          </motion.g>
        )}

        {dimensions.map((dim) => {
          const end = polarToCartesian(center, radius, dim.angle);
          const isActive = dim.id === activeId;

          return (
            <g key={dim.id}>
              {/* Base track: faintly visible background line */}
              <motion.path
                d={`M ${center} ${center} L ${end.x} ${end.y}`}
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="1"
                strokeOpacity="0.12"
                strokeLinecap="round"
                initial={prefersReducedMotion ? false : { pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.8,
                  delay: dim.delay,
                  ease: "easeOut",
                }}
              />

              {/* Active highlight: draws to the target when active */}
              <motion.path
                d={`M ${center} ${center} L ${end.x} ${end.y}`}
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="2"
                strokeOpacity="0.8"
                strokeLinecap="round"
                initial={prefersReducedMotion ? false : { pathLength: 0 }}
                animate={{ pathLength: isActive ? 1 : 0 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.4,
                  ease: "easeInOut",
                }}
              />

              {/* End node anchor point */}
              <motion.circle
                cx={end.x}
                cy={end.y}
                r="4"
                fill="var(--color-primary)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: isActive ? 1 : 0,
                  opacity: isActive ? 1 : 0,
                }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.2,
                  delay: isActive && !prefersReducedMotion ? 0.3 : 0,
                }}
              />

              {/* End node glow */}
              <motion.circle
                cx={end.x}
                cy={end.y}
                r="12"
                fill="var(--color-primary)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: isActive ? 1 : 0,
                  opacity: isActive ? 0.15 : 0,
                }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.3,
                  delay: isActive && !prefersReducedMotion ? 0.3 : 0,
                }}
              />
            </g>
          );
        })}

        {/* Start nodes / central hub */}
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
