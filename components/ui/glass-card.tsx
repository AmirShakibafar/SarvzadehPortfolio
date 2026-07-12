import * as React from "react";
import { cn } from "@/lib/utils";

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  intensity?: "light" | "medium" | "heavy";
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, intensity = "medium", children, ...props }, ref) => {
    const intensityStyles = {
      light: "bg-white/40 backdrop-blur-sm border-white/30",
      medium: "bg-white/60 backdrop-blur-md border-white/50",
      heavy: "bg-white/80 backdrop-blur-lg border-white/70",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl border shadow-[0_8px_30px_rgb(0,0,0,0.04)]",
          intensityStyles[intensity],
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
