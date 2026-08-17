import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { DotPattern } from "@/components/ui/dot-pattern";
import { GlassCard } from "@/components/ui/glass-card";
import { cn } from "@/lib/utils";
import { ProcessStep } from "@/components/templates/diseases/types";
import { ScrollTrigger } from "@/components/ui/scroll-trigger";
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
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[100%] w-[100%] max-w-4xl -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat opacity-30"
        aria-hidden="true"
      />

      <ScrollTrigger className="scroll-stagger-group mx-auto w-full min-w-0 max-w-7xl px-6 lg:px-14">
        {/* Animated Header */}
        <div
          className="stagger-item mx-auto mb-16 max-w-2xl text-center lg:mb-24"
          style={{ animationDelay: "100ms" }}
        >
          <Heading size="h2" className="mb-4">
            {title}
          </Heading>
          <Paragraph size="sm" className="text-slate-600">
            {description}
          </Paragraph>
        </div>

        <div className="relative mx-auto w-full max-w-5xl">
          <DotPattern className="absolute -right-8 -top-8 hidden h-32 w-32 opacity-40 lg:block" />

          {/* Timeline Connector Line */}
          <div className="absolute bottom-0 right-[27px] top-0 -z-10 w-[2px] bg-gradient-to-b from-transparent via-primary/30 to-transparent lg:bottom-auto lg:left-0 lg:right-0 lg:top-[27px] lg:h-[2px] lg:w-full lg:bg-gradient-to-l" />

          <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-6">
            {steps.map((step, idx) => {
              const Icon = iconMap[step.iconName] || HelpCircle;

              return (
                <div
                  key={idx}
                  className="stagger-item group relative flex w-full flex-row items-start gap-6 lg:flex-1 lg:flex-col lg:items-center"
                  style={{ animationDelay: `${250 + idx * 150}ms` }}
                >
                  <div
                    className={cn(
                      "relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-background transition-colors duration-300",
                      step.highlight
                        ? "bg-primary text-white"
                        : "bg-white text-primary group-hover:border-primary/20",
                    )}
                  >
                    <Icon className="h-6 w-6" />

                    <div
                      className={cn(
                        "absolute -bottom-2 -left-2 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold",
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
                      "flex w-full flex-1 flex-col justify-start p-5 text-right transition-all duration-300 lg:p-6 lg:text-center",
                      step.highlight
                        ? "border-primary/30 bg-white/70"
                        : "border-white/60 bg-white/40 hover:bg-white/60",
                    )}
                  >
                    <h3
                      className={cn(
                        "mb-2 text-base font-bold lg:text-lg",
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
      </ScrollTrigger>
    </section>
  );
}
