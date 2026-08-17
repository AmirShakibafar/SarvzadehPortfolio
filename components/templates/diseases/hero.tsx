import { FloatingBadge } from "@/components/ui/float-badge";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { HeartPulse, Shield } from "lucide-react";
import Image from "next/image";
import { HeroActions } from "./hero-actions";

type ImageSize = "sm" | "md" | "lg";

const heroImageSizeClasses: Record<ImageSize, string> = {
  sm: "h-[70%] w-[70%] lg:h-[75%] lg:w-[75%]",
  md: "h-[85%] w-[85%] lg:h-[90%] lg:w-[90%]",
  lg: "h-[95%] w-[95%] lg:h-full lg:w-full",
};

export function AutoimmuneHero({
  title,
  subtitle,
  description,
  heroImageUrl,
  heroImageSize = "md",
  firstDiseaseId,
}: {
  title: string;
  subtitle: string;
  description: string;
  heroImageUrl?: string;
  heroImageSize?: ImageSize;
  firstDiseaseId?: string;
}) {
  return (
    <section
      id="hero"
      className="relative flex w-full min-w-0 items-center overflow-hidden pb-12 pt-12 lg:min-h-[90vh] lg:pb-20"
    >
      <div className="mx-auto grid w-full min-w-0 max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-8 lg:px-14">
        {/* TEXT */}
        <div className="relative z-10 order-2 w-full min-w-0 flex-col items-start isolate flex text-right lg:order-1">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat opacity-30 lg:opacity-40"
            aria-hidden="true"
          />

          <div
            className="animate-fade-up w-full min-w-0 text-right"
            style={{ animationDelay: "100ms" }}
          >
            {/* Added subtitle rendering since it was in props but missing from the original JSX */}
            {subtitle && (
              <span className="mb-3 inline-block text-sm font-semibold tracking-wide text-primary">
                {subtitle}
              </span>
            )}
            <Heading size="h1" className="mb-4 lg:mb-6">
              {title}
            </Heading>
          </div>

          <div
            className="animate-fade-up w-full min-w-0"
            style={{ animationDelay: "200ms" }}
          >
            <Paragraph size="lg" className="mb-8 max-w-md lg:mb-12">
              {description}
            </Paragraph>
          </div>

          <div
            className="animate-fade-up w-full"
            style={{ animationDelay: "300ms" }}
          >
            {/* Client Component injected here */}
            <HeroActions firstDiseaseId={firstDiseaseId} />
          </div>
        </div>

        {/* IMAGE */}
        <div className="animate-soft-scale-fade-up relative order-1 flex h-[320px] w-full min-w-0 items-center justify-center isolate lg:order-2 lg:h-[500px]">
          <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat opacity-30 lg:opacity-40"
              aria-hidden="true"
            />

            <div className="absolute h-[90%] w-[90%] max-h-[600px] max-w-[300px] rounded-[45%_55%_48%_52%/55%_45%_50%_50%] border border-white/60 bg-gradient-to-br from-white/80 to-white/40 lg:h-[95%] lg:w-[95%] lg:max-w-[600px] lg:from-white/60 lg:to-white/20" />

            <div className="absolute hidden h-[90%] w-[90%] max-h-[550px] max-w-[550px] rotate-6 rounded-[50%] border border-dashed border-primary/20 opacity-40 lg:block" />
          </div>

          {/* Hero Image */}
          {heroImageUrl && (
            <div
              className={`relative z-10 ${heroImageSizeClasses[heroImageSize]}`}
            >
              <Image
                src={heroImageUrl}
                alt={title}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 90vw, 50vw"
                priority
              />
            </div>
          )}

          <FloatingBadge
            icon={Shield}
            title="سیستم ایمنی"
            subtitle="شبکه دفاعی بدن"
            className="absolute right-0 top-2 z-20 origin-top-right scale-90 lg:right-12 lg:top-12 lg:origin-center lg:scale-100"
          />

          <FloatingBadge
            icon={HeartPulse}
            title="کنترل التهاب"
            subtitle="مدیریت علائم"
            className="absolute bottom-2 left-0 z-20 origin-bottom-left scale-90 lg:bottom-12 lg:left-12 lg:origin-center lg:scale-100"
          />
        </div>
      </div>
    </section>
  );
}
