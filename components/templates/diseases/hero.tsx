import { Button } from "@/components/ui/button";
import { FloatingBadge } from "@/components/ui/float-badge";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { ArrowLeft, HeartPulse, Shield } from "lucide-react";
import Image from "next/image";

type ImageSize = "sm" | "md" | "lg";

const heroImageSizeClasses: Record<ImageSize, string> = {
  sm: "w-[70%] h-[70%] lg:w-[75%] lg:h-[75%]",
  md: "w-[85%] h-[85%] lg:w-[90%] lg:h-[90%]",
  lg: "w-[95%] h-[95%] lg:w-full lg:h-full",
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
  const scrollToDiseases = () => {
    if (firstDiseaseId) {
      document
        .getElementById(firstDiseaseId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full min-w-0 overflow-hidden lg:min-h-[90vh] flex items-center pt-12 pb-12 lg:pb-20"
    >
      <div className="mx-auto w-full min-w-0 max-w-7xl px-6 lg:px-14 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* TEXT */}
        <div className="relative isolate min-w-0 flex flex-col items-start text-right z-10 order-2 lg:order-1 w-full">
          <div
            className="absolute left-1/2 top-1/2 -z-10 h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2 opacity-30 lg:opacity-40 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat pointer-events-none"
            aria-hidden="true"
          />

          <div className="w-full min-w-0 text-right">
            <Heading size="h1" className="mb-4 lg:mb-6">
              {title}
            </Heading>
          </div>

          <div className="min-w-0 w-full">
            <Paragraph size="lg" className="max-w-md mb-8 lg:mb-12">
              {description}
            </Paragraph>
          </div>

          <div className="flex flex-col lg:flex-row w-full max-w-full items-center gap-3 lg:gap-4">
            {firstDiseaseId && (
              <Button
                size="pill"
                variant="pillPrimary"
                className="flex items-center justify-center gap-2 w-full lg:w-auto px-8"
                onClick={scrollToDiseases}
              >
                <span>بررسی بیماری‌ها</span>
                <ArrowLeft className="w-4 h-4" />
              </Button>
            )}

            <Button
              size="pill"
              variant="pillSecondary"
              className="w-full lg:w-auto justify-center px-8"
              onClick={() =>
                document
                  .getElementById("library")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              کتابخانه مرجع
            </Button>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative min-w-0 h-[320px] lg:h-[500px] w-full order-1 lg:order-2 flex items-center justify-center isolate">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
            <div
              className="absolute left-1/2 top-1/2 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 opacity-30 lg:opacity-40 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat pointer-events-none"
              aria-hidden="true"
            />

            <div className="absolute w-[90%] h-[90%] lg:w-[95%] lg:h-[95%] max-w-[300px] lg:max-w-[600px] lg:max-h-[600px] rounded-[45%_55%_48%_52%/55%_45%_50%_50%] bg-gradient-to-br from-white/80 lg:from-white/60 to-white/40 lg:to-white/20 border border-white/60 shadow-sm lg:shadow-[0_24px_80px_rgba(0,0,0,0.03)] lg:backdrop-blur-sm" />

            <div className="hidden lg:block absolute w-[90%] h-[90%] max-w-[550px] max-h-[550px] border border-primary/20 rounded-[50%] opacity-40 border-dashed rotate-6" />
          </div>

          {/* Hero Image */}
          {heroImageUrl && (
            <div
              className={`relative z-10 drop-shadow-md lg:drop-shadow-xl ${heroImageSizeClasses[heroImageSize]}`}
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
            className="top-2 right-0 scale-90 origin-top-right lg:scale-100 lg:origin-center lg:top-12 lg:right-12 z-20"
          />

          <FloatingBadge
            icon={HeartPulse}
            title="کنترل التهاب"
            subtitle="مدیریت علائم"
            className="bottom-2 left-0 scale-90 origin-bottom-left lg:scale-100 lg:origin-center lg:bottom-12 lg:left-12 z-20"
          />
        </div>
      </div>
    </section>
  );
}
