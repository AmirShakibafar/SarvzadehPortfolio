import { Button } from "@/components/ui/button";
import { FloatingBadge } from "@/components/ui/float-badge";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { motion } from "framer-motion";
import { Activity, ArrowLeft, HeartPulse, Shield } from "lucide-react";
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
      className="relative w-full min-h-[90vh] flex items-center pt-24 pb-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-14 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center w-full">
        <div className="flex flex-col items-start text-right z-10 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary font-medium text-sm mb-8"
          >
            <Activity className="w-4 h-4" />
            <span>{subtitle}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-full text-right"
          >
            <Heading size="h1" className="mb-6">
              {title}
            </Heading>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Paragraph size="lg" className="max-w-md mb-12">
              {description}
            </Paragraph>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
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

        <div className="relative h-[400px] lg:h-[500px] w-full order-1 lg:order-2 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="w-[80%] h-[80%] bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute w-[60%] h-[60%] bg-primary/20 rounded-full blur-2xl opacity-60" />
            <div className="absolute w-full h-full border border-primary/10 rounded-full opacity-30 border-dashed" />
          </motion.div>

          {heroImageUrl && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="relative w-[70%] h-[70%] lg:w-full lg:h-full z-10 drop-shadow-xl"
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

          <FloatingBadge
            icon={Shield}
            title="سیستم ایمنی"
            subtitle="شبکه دفاعی بدن"
            className="top-12 right-0 lg:right-12 z-20"
            delay={0.4}
          />
          <FloatingBadge
            icon={HeartPulse}
            title="کنترل التهاب"
            subtitle="مدیریت علائم"
            className="bottom-12 left-0 lg:left-12 z-20"
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
}
