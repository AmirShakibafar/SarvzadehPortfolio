// hero-image-mobile.tsx
"use client";
import doctorImage from "@/public/images/hero/hero4.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { Apple, Activity, Brain } from "lucide-react";

export function HeroImageMobile() {
  return (
    <div className="relative w-full h-[420px] sm:h-[480px] max-w-[800px] flex items-end justify-center z-0 isolate">
      <BackgroundGlow />
      <DecorativeEllipse />
      <GlassBlob />
      <DoctorImage />
      <FloatingCards />
    </div>
  );
}

function BackgroundGlow() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-30">
      <div className="absolute w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(34,211,238,0.12)_0%,transparent_60%)]" />
      <div className="absolute top-[-10%] left-[-10%] w-[90%] h-[90%] bg-[radial-gradient(circle,rgba(255,255,255,0.4)_0%,transparent_60%)]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[80%] bg-[radial-gradient(circle,rgba(20,184,166,0.12)_0%,transparent_60%)]" />
    </div>
  );
}

function GlassBlob() {
  return (
    <div
      className="
        absolute 
        top-[10%]
        left-1/2 
        -translate-x-[52%] 
        w-[95%]
        h-[75%]
        max-w-[760px] 
        max-h-[620px]
        rounded-[45%_55%_48%_52%/55%_45%_50%_50%]
        bg-gradient-to-br from-white/60 to-white/20
        border border-white/60
        shadow-[0_24px_80px_rgba(0,0,0,0.03)]
        -z-10
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
      "
    />
  );
}
function DoctorImage() {
  return (
    <div className="relative z-10 w-full flex items-center justify-center">
      <Image
        src={doctorImage}
        alt="Doctor"
        priority
        fetchPriority="high"
        placeholder="empty"
        sizes="
          (max-width: 640px) 85vw,
          (max-width: 1024px) 60vw,
          (max-width: 1280px) 45vw,
          420px
        "
        className="
          w-full h-auto
          max-w-[320px]
          sm:max-w-[380px]
          md:max-w-[420px]
          lg:max-w-[460px]
          object-contain
          select-none
          [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]
          [-webkit-mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]
        "
      />
    </div>
  );
}
function FloatingCards() {
  return (
    <motion.div
      className="absolute inset-0 z-20 pointer-events-none isolate"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
    >
      <div className="absolute top-[10%] right-2 sm:top-[12%] sm:right-6 pointer-events-auto scale-90 sm:scale-100 origin-right">
        <FloatingCardItem
          title="مدیریت ام‌اس"
          icon={<Brain className="w-5 h-5 text-primary" />}
        />
      </div>

      <div className="absolute top-[60%] left-2 sm:top-[55%] sm:left-6 pointer-events-auto scale-90 sm:scale-100 origin-left">
        <FloatingCardItem
          title="کاهش خستگی"
          icon={<Activity className="w-5 h-5 text-primary" />}
        />
      </div>

      <div className="absolute bottom-[10%] right-4 sm:bottom-[15%] sm:right-8 pointer-events-auto scale-90 sm:scale-100 origin-right">
        <FloatingCardItem
          title="سلامت سیستم عصبی"
          icon={<Apple className="w-5 h-5 text-primary" />}
        />
      </div>
    </motion.div>
  );
}

function FloatingCardItem({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="relative bg-white/50 border border-white/50 shadow-[0_8px_20px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.8)] overflow-hidden rounded-[24px] px-3 py-2.5">
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-white/50 to-transparent pointer-events-none" />

      <div className="relative z-10 flex items-center gap-3">
        <div className="flex items-center justify-center shrink-0 w-10 h-10 rounded-full bg-primary/10 shadow-[inset_0_0_12px_rgba(255,255,255,0.6)]">
          {icon}
        </div>

        <div className="flex flex-col text-right">
          <p className="font-semibold text-[13px] text-foreground whitespace-nowrap">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}
