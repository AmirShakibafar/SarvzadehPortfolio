import * as React from "react";
import { cn } from "@/lib/utils";

export type GlassCardProps = React.HTMLAttributes<HTMLDivElement>;

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base setup: clip bleeding edges for WebKit performance
          "relative overflow-hidden",

          // MOBILE-FIRST (Optimized for low GPU overhead):
          // 1. Simpler vertical gradient (cheaper math than diagonal)
          // 2. Tighter border radius
          // 3. Smaller shadow spread/blur to reduce rasterization area
          // 4. Softer border/inset highlight to match
          "bg-gradient-to-b from-white/50 to-white/20",
          "border border-white/40 rounded-3xl",
          "shadow-[0_4px_12px_rgba(0,0,0,0.03),inset_0_1px_0_rgba(255,255,255,0.4)]",

          // DESKTOP (Richer depth, device can handle the composite cost):
          "md:bg-gradient-to-br md:from-white/60 md:to-white/20",
          "md:border-white/60 md:rounded-[2rem]",
          "md:shadow-[0_8px_30px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)]",

          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

GlassCard.displayName = "GlassCard";
