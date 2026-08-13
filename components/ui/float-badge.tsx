import { GlassCard } from "./glass-card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export function FloatingBadge({
  icon: Icon,
  title,
  subtitle,
  className,
}: {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "absolute z-20 transition-transform duration-300 hover:scale-105",
        className,
      )}
    >
      <GlassCard className="flex items-center gap-3 lg:gap-4 p-2.5 lg:p-3 pr-3 lg:pr-4 rounded-xl lg:rounded-2xl">
        <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg lg:rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
          <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
        </div>
        <div className="flex flex-col pl-1 lg:pl-2 text-right">
          <span className="text-xs lg:text-sm font-bold text-slate-800 leading-tight">
            {title}
          </span>
          {subtitle && (
            <span className="text-[10px] lg:text-xs text-slate-500 font-medium mt-0.5">
              {subtitle}
            </span>
          )}
        </div>
      </GlassCard>
    </div>
  );
}
