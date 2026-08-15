// components/ui/ImmuneSystemProcess.tsx
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { DotPattern } from "@/components/ui/dot-pattern";
import { GlassCard } from "@/components/ui/glass-card";
import { cn } from "@/lib/utils";
import { ProcessStep } from "@/components/templates/diseases/types";
import {
  Dna,
  ScanSearch,
  ShieldAlert,
  Flame,
  Activity,
  Layers,
  Network,
  Scale,
  Droplet,
  AlertCircle,
  Leaf,
  Zap,
  HelpCircle,
} from "lucide-react";

// Best practice: Map string names to components to keep data serializable
// and prevent passing non-serializable elements across server/client boundaries.
const iconMap: Record<string, React.ElementType> = {
  Dna,
  ScanSearch,
  ShieldAlert,
  Flame,
  Activity,
  Layers,
  Network,
  Scale,
  Droplet,
  AlertCircle,
  Leaf,
  Zap,
};

interface ImmuneSystemProcessProps {
  title: string;
  description: string;
  steps: ProcessStep[];
}

export function ImmuneSystemProcess({
  title,
  description,
  steps,
}: ImmuneSystemProcessProps) {
  if (!steps || steps.length === 0) return null;

  return (
    <section
      id="mechanism"
      className="relative z-10 w-full min-w-0 overflow-hidden py-16 lg:py-24"
    >
      <div
        className="absolute left-1/2 top-1/2 -z-10 h-[100%] w-[100%] max-w-4xl -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat opacity-30 pointer-events-none"
        aria-hidden="true"
      />

      <div className="mx-auto w-full min-w-0 max-w-7xl px-6 lg:px-14">
        <div className="mx-auto mb-16 lg:mb-24 max-w-2xl text-center">
          <Heading size="h2" className="mb-4">
            {title}
          </Heading>
          <Paragraph size="sm" className="text-slate-600">
            {description}
          </Paragraph>
        </div>

        <div className="relative w-full max-w-5xl mx-auto">
          <DotPattern className="hidden lg:block absolute -right-8 -top-8 h-32 w-32 opacity-40" />

          <div className="absolute right-[27px] top-0 bottom-0 w-[2px] lg:right-0 lg:left-0 lg:top-[27px] lg:bottom-auto lg:w-full lg:h-[2px] bg-gradient-to-b lg:bg-gradient-to-l from-transparent via-primary/30 to-transparent -z-10" />

          <div className="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-6">
            {steps.map((step, idx) => {
              const Icon = iconMap[step.iconName] || HelpCircle;

              return (
                <div
                  key={idx}
                  className="relative flex flex-row lg:flex-col items-start lg:items-center gap-6 w-full lg:flex-1 group"
                >
                  <div
                    className={cn(
                      "relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-background transition-colors duration-300",
                      step.highlight
                        ? "bg-primary text-white shadow-lg shadow-primary/30"
                        : "bg-white text-primary shadow-md group-hover:border-primary/20",
                    )}
                  >
                    <Icon className="w-6 h-6" />

                    <div
                      className={cn(
                        "absolute -bottom-2 -left-2 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold shadow-sm",
                        step.highlight
                          ? "bg-white text-primary"
                          : "bg-primary text-white",
                      )}
                    >
                      {idx + 1}
                    </div>
                  </div>

                  <GlassCard
                    className={cn(
                      "flex flex-1 flex-col justify-start p-5 lg:p-6 text-right lg:text-center w-full transition-all duration-300",
                      step.highlight
                        ? "border-primary/30 bg-white/70 shadow-lg shadow-primary/5"
                        : "bg-white/40 border-white/60 hover:bg-white/60",
                    )}
                  >
                    <h3
                      className={cn(
                        "mb-2 text-base lg:text-lg font-bold",
                        step.highlight ? "text-primary" : "text-slate-800",
                      )}
                    >
                      {step.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-slate-600">
                      {step.desc}
                    </p>
                  </GlassCard>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
