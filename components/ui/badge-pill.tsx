import * as React from "react";
import { cn } from "@/lib/utils";

export function BadgePill({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full bg-white/40 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-md border border-white/60 shadow-[0_4px_12px_rgba(0,0,0,0.03)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
