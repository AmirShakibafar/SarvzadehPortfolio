import { Button } from "@/components/ui/button";
import { FloatingBadge } from "@/components/ui/float-badge";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { motion } from "framer-motion";
import { ArrowLeft, HeartPulse, Shield } from "lucide-react";
import Image from "next/image";

export function AutoimmuneHero({
  title,
  subtitle,
  description,
  heroImageUrl,
  firstDiseaseId,
}: {
  title: string;
  subtitle: string;
  description: string;
  heroImageUrl?: string;
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
      className="relative w-full min-w-0 overflow-hidden min-h-[90vh] flex items-center pt-24 pb-20"
    >
      <div className="mx-auto w-full min-w-0 max-w-7xl px-6 lg:px-14 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        {/* ================================================================
            TEXT
        ================================================================ */}
        <div className="relative isolate min-w-0 flex flex-col items-start text-right z-10 order-2 lg:order-1">
          {/* Background Blob */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              -z-10
              h-[130%]
              w-[130%]
              -translate-x-1/2
              -translate-y-1/2
              opacity-40
              bg-[url('/blob.svg')]
              bg-contain
              bg-center
              bg-no-repeat
              pointer-events-none
            "
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-full min-w-0 text-right"
          >
            <Heading size="h1" className="mb-6">
              {title}
            </Heading>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="min-w-0"
          >
            <Paragraph size="lg" className="max-w-md mb-12">
              {description}
            </Paragraph>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex max-w-full flex-wrap items-center gap-4"
          >
            {firstDiseaseId && (
              <Button
                size="pill"
                variant="pillPrimary"
                className="flex items-center gap-2 px-8"
                onClick={scrollToDiseases}
              >
                <span>بررسی بیماری‌ها</span>
                <ArrowLeft className="w-4 h-4" />
              </Button>
            )}

            <Button
              size="pill"
              variant="pillSecondary"
              className="px-8"
              onClick={() =>
                document
                  .getElementById("library")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              کتابخانه مرجع
            </Button>
          </motion.div>
        </div>

        {/* ================================================================
            IMAGE
        ================================================================ */}
        <div className="relative min-w-0 h-[400px] lg:h-[500px] w-full order-1 lg:order-2 flex items-center justify-center isolate">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10"
          >
            {/* Background Glow */}
            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[110%]
                w-[110%]
                -translate-x-1/2
                -translate-y-1/2
                opacity-40
                bg-[url('/blob.svg')]
                bg-contain
                bg-center
                bg-no-repeat
                pointer-events-none
              "
              aria-hidden="true"
            />

            {/* Glass Blob */}
            <div
              className="
                absolute
                w-[92%]
                h-[92%]
                lg:w-[95%]
                lg:h-[95%]
                max-w-[600px]
                max-h-[600px]
                rounded-[45%_55%_48%_52%/55%_45%_50%_50%]
                bg-gradient-to-br
                from-white/60
                to-white/20
                border
                border-white/60
                shadow-[0_24px_80px_rgba(0,0,0,0.03)]
                backdrop-blur-sm
              "
            />

            {/* Decorative Ellipse */}
            <div
              className="
                absolute
                w-[90%]
                h-[90%]
                max-w-[550px]
                max-h-[550px]
                border
                border-primary/20
                rounded-[50%]
                opacity-40
                border-dashed
                rotate-6
              "
            />
          </motion.div>

          {/* Hero Image */}
          {heroImageUrl && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="
                relative
                w-[85%]
                h-[85%]
                lg:w-full
                lg:h-full
                lg:scale-[1.1]
                z-10
                drop-shadow-xl
              "
            >
              <Image
                src={heroImageUrl}
                alt={title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </motion.div>
          )}

          {/* Floating badges */}
          <FloatingBadge
            icon={Shield}
            title="سیستم ایمنی"
            subtitle="شبکه دفاعی بدن"
            className="top-12 right-2 lg:right-12 z-20"
            delay={0.4}
          />

          <FloatingBadge
            icon={HeartPulse}
            title="کنترل التهاب"
            subtitle="مدیریت علائم"
            className="bottom-12 left-2 lg:left-12 z-20"
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
}
