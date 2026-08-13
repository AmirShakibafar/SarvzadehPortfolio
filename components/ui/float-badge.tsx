import { motion } from "framer-motion";
import { GlassCard } from "./glass-card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export function FloatingBadge({
  icon: Icon,
  title,
  subtitle,
  className,
  delay = 0,
}: {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={cn("absolute z-20", className)}
    >
      <GlassCard className="flex items-center gap-4 p-3 pr-4 rounded-2xl">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div className="flex flex-col pl-2">
          <span className="text-sm font-bold text-slate-800">{title}</span>
          {subtitle && (
            <span className="text-xs text-slate-500 font-medium">
              {subtitle}
            </span>
          )}
        </div>
      </GlassCard>
    </motion.div>
  );
}
