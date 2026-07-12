import * as React from "react";
import { cn } from "@/lib/utils";

export function BadgePill({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm border border-white shadow-sm",
        className,
      )}
    >
      <span
        className="h-1.5 w-1.5 rounded-full bg-primary"
        aria-hidden="true"
      />
      {children}
    </div>
  );
}
