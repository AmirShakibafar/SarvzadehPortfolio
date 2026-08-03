"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Apple, Activity, Brain } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

interface HeroImageProps {
  src: string;
}

export function HeroImage({ src }: HeroImageProps) {
  return (
    <div className="relative w-full h-[420px] sm:h-[480px] md:h-[560px] lg:h-[clamp(600px,calc(100svh-120px),850px)] max-w-[800px] flex items-end justify-center z-0 isolate">
      <BackgroundGlow />
      <DecorativeEllipse />
      <GlassBlob />
      <DoctorImage src={src} />
      <FloatingCards />
    </div>
  );
}

function BackgroundGlow() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-30 transform-gpu">
      <div className="absolute w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(34,211,238,0.12)_0%,transparent_60%)] transform-gpu" />
      <div className="absolute top-[-10%] left-[-10%] w-[90%] h-[90%] bg-[radial-gradient(circle,rgba(255,255,255,0.4)_0%,transparent_60%)] transform-gpu" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[80%] bg-[radial-gradient(circle,rgba(20,184,166,0.12)_0%,transparent_60%)] transform-gpu" />
    </div>
  );
}

function GlassBlob() {
  return (
    <div
      className="
        absolute 
        top-[10%] lg:top-[5%] 
        left-1/2 
        -translate-x-[52%] 
        w-[95%] lg:w-[95%] 
        h-[75%] lg:h-[80%] 
        max-w-[760px] 
        max-h-[620px]
        rounded-[45%_55%_48%_52%/55%_45%_50%_50%]
        bg-gradient-to-br from-white/60 to-white/20
        border border-white/60
        shadow-[0_24px_80px_rgba(0,0,0,0.03)]
        -z-10
        transform-gpu
      "
    />
  );
}

function DecorativeEllipse() {
  return (
    <div
      className="
        absolute 
        top-1/2 
        left-1/2 
        -translate-x-1/2 
        -translate-y-[55%] 
        w-[110%] 
        h-[90%] 
        max-w-[850px] 
        max-h-[850px]
        rounded-[50%]
        border border-white/20
        -z-40
        rotate-6
        transform-gpu
      "
    />
  );
}

function DoctorImage({ src }: { src: string }) {
  return (
    <div className="relative w-[85%] h-full lg:w-[100%] max-w-[800px] z-10 translate-x-[2%] isolate [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)] transform-gpu will-change-transform">
      <Image
        src={src}
        alt="Doctor"
        fill
        className="object-contain object-bottom drop-shadow-2xl transform-gpu will-change-transform"
        priority
        sizes="(max-width: 1024px) 85vw, 800px"
      />
    </div>
  );
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const cardItem: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
};

function FloatingCards() {
  return (
    <motion.div
      className="absolute inset-0 z-20 pointer-events-none isolate"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {/* Top right - Card 1 */}
      {/* Changed lg:-right-12 to lg:right-4 */}
      <div className="absolute top-[2%] -right-4 sm:top-[8%] sm:-right-8 lg:top-[18%] lg:right-4 pointer-events-auto scale-90 sm:scale-100 origin-right">
        <motion.div
          variants={cardItem}
          whileHover={{ scale: 1.05 }}
          className="will-change-transform"
        >
          <FloatingCardItem
            title="مدیریت ام‌اس"
            description="کاهش التهاب با تغذیه اصولی"
            icon={<Brain className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />}
          />
        </motion.div>
      </div>

      {/* Middle/Bottom left - Card 2 */}
      {/* Changed lg:-right-16 to lg:-right-2 */}
      <div className="absolute top-[65%] -left-6 sm:top-[55%] sm:-left-8 lg:top-[48%] lg:left-auto lg:-right-2 pointer-events-auto scale-90 sm:scale-100 origin-left lg:origin-right">
        <motion.div
          variants={cardItem}
          whileHover={{ scale: 1.05 }}
          className="will-change-transform"
        >
          <FloatingCardItem
            title="کاهش خستگی"
            description="افزایش انرژی در طول روز"
            icon={<Activity className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />}
          />
        </motion.div>
      </div>

      {/* Bottom right - Card 3 */}
      {/* Changed lg:-right-6 to lg:right-6 */}
      <div className="absolute bottom-[2%] -right-2 sm:bottom-[5%] sm:-right-4 lg:bottom-auto lg:top-[72%] lg:right-6 pointer-events-auto scale-90 sm:scale-100 origin-right">
        <motion.div
          variants={cardItem}
          whileHover={{ scale: 1.05 }}
          className="will-change-transform"
        >
          <FloatingCardItem
            title="سلامت سیستم عصبی"
            description="تامین مواد مغذی ضروری"
            icon={<Apple className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

function FloatingCardItem({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <GlassCard
      className="
        flex items-center gap-3 lg:gap-4 
        px-3 py-2.5 lg:px-5 lg:py-4 
        rounded-[24px] lg:rounded-[32px] 
        bg-white/80
        border border-white/60
        shadow-[0_8px_32px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.7)]
      "
    >
      <div className="flex items-center justify-center shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary/10 shadow-[inset_0_0_12px_rgba(255,255,255,0.6)]">
        {icon}
      </div>

      <div className="flex flex-col text-right">
        <p className="font-semibold text-[13px] lg:text-sm text-foreground whitespace-nowrap">
          {title}
        </p>
        <p className="text-[10px] lg:text-xs text-muted-foreground mt-0.5 whitespace-nowrap">
          {description}
        </p>
      </div>
    </GlassCard>
  );
}
