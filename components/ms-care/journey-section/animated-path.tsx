"use client";

import { motion, MotionValue } from "framer-motion";

interface AnimatedPathProps {
  pathLength: MotionValue<number>;
  stepCount: number;
  activeIndex: number;
}

export function AnimatedPath({
  pathLength,
  stepCount,
  activeIndex,
}: AnimatedPathProps) {
  const stepPositions = Array.from({ length: stepCount }, (_, i) =>
    stepCount > 1 ? (i / (stepCount - 1)) * 100 : 50,
  );

  return (
    <>
      <div className="absolute top-0 bottom-0 right-[39px] w-[2px] bg-border/40" />
      <svg
        className="absolute top-0 bottom-0 right-[38px] w-[4px] h-full overflow-visible"
        viewBox="0 0 4 100"
        preserveAspectRatio="none"
      >
        <motion.line
          x1="2"
          y1="0"
          x2="2"
          y2="100"
          stroke="var(--color-primary)"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength }}
        />
        {stepPositions.map((y, index) => (
          <StepNode
            key={index}
            cy={y}
            isActive={index <= activeIndex}
            isCurrent={index === activeIndex}
          />
        ))}
      </svg>
    </>
  );
}

function StepNode({
  cy,
  isActive,
  isCurrent,
}: {
  cy: number;
  isActive: boolean;
  isCurrent: boolean;
}) {
  const r = isCurrent ? 1.2 : 0.9;

  return (
    <g>
      <circle
        cx="2"
        cy={cy}
        r={r}
        fill={isActive ? "var(--color-primary)" : "var(--color-background)"}
        stroke={isActive ? "var(--color-primary)" : "var(--color-border)"}
        strokeWidth="0.4"
        vectorEffect="non-scaling-stroke"
      />
      {isCurrent && (
        <motion.circle
          cx="2"
          cy={cy}
          r={r}
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="0.3"
          vectorEffect="non-scaling-stroke"
          initial={{ scale: 1, opacity: 0.6 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
        />
      )}
    </g>
  );
}
