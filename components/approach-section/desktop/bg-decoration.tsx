import React from "react";

export function BackgroundDecorations() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <div className="absolute -top-40 right-20 h-[520px] w-[520px] rounded-full border border-white/50 bg-gradient-to-br from-white/50 to-white/10 shadow-[0_25px_80px_rgba(13,220,213,0.08)]" />
      <div className="absolute right-40 top-28 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[120px]" />
      <div className="absolute bottom-10 left-10 h-[320px] w-[320px] rounded-full border border-white/60 bg-gradient-to-br from-white/40 to-white/5 shadow-[0_20px_60px_rgba(13,220,213,0.05)]" />
      <div className="absolute left-1/3 top-1/2 h-36 w-36 rounded-full bg-cyan-300/10 blur-[70px]" />
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{ backgroundImage: "url('/images/noise.webp')" }}
      />
    </div>
  );
}
