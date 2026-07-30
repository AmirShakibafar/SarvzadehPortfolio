import * as React from "react";
import { cn } from "@/lib/utils";

export type GlassCardProps = React.HTMLAttributes<HTMLDivElement>;

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative bg-white/40 backdrop-blur-xl border border-white/60",
          "shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem]",
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
