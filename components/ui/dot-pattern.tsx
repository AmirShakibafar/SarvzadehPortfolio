import React from "react";

export function DotPattern({ className }: { className?: string }) {
  return (
    <svg
      className={`absolute -z-10 text-primary/20 ${
        className || "top-0 right-0 -mt-8 -mr-8 w-32 h-32"
      }`}
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 100 100"
    >
      <pattern
        id="dot-pattern"
        x="0"
        y="0"
        width="16"
        height="16"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="2" cy="2" r="2" />
      </pattern>
      <rect width="100" height="100" fill="url(#dot-pattern)" />
    </svg>
  );
}
