import React from "react";

export function BackgroundDecorations() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <div className="absolute -top-40 right-20 h-[520px] w-[520px] rounded-full border border-white/50 bg-gradient-to-br from-white/50 to-white/10   " />
      <div className="absolute bottom-10 left-10 h-[320px] w-[320px] rounded-full border border-white/60 bg-gradient-to-br from-white/40 to-white/5   " />
    </div>
  );
}
