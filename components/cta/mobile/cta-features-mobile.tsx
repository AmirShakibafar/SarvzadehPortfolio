// cta-features-mobile.tsx
import React from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { ShieldCheck, UserCircle, Zap } from "lucide-react";

export function CtaFeaturesMobile() {
  return (
    <div className="relative mt-12 isolate w-full">
      {/* Background blob */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          -z-10
          h-[420px]
          w-[420px]
          -translate-x-1/2
          -translate-y-1/2
          bg-[url('/blob.svg')]
          bg-contain
          bg-center
          bg-no-repeat
          opacity-30
          pointer-events-none
        "
        aria-hidden="true"
      />

      <GlassCard
        className="
          relative
          z-10
          flex
          flex-col
          gap-0
          rounded-[2rem]
          border-white/60
          bg-white/30
          shadow-[0_8px_30px_rgb(0,0,0,0.04)]
          overflow-hidden
          p-5
        "
      >
        <FeatureItemMobile
          icon={<ShieldCheck className="w-5 h-5 text-primary" />}
          title="حفظ حریم خصوصی"
          subtitle="اطلاعات شما کاملاً محرمانه است"
        />

        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200/50 to-transparent" />

        <FeatureItemMobile
          icon={<UserCircle className="w-5 h-5 text-primary" />}
          title="مشاوره تخصصی"
          subtitle="راهنمایی توسط دکتر رضا سرورزاده"
        />

        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200/50 to-transparent" />

        <FeatureItemMobile
          icon={<Zap className="w-5 h-5 text-primary" />}
          title="پاسخ سریع"
          subtitle="در اولین فرصت با شما تماس می‌گیریم"
        />
      </GlassCard>
    </div>
  );
}

function FeatureItemMobile({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-4
        py-5
        text-right
      "
    >
      {/* Icon */}
      <div
        className="
          flex
          items-center
          justify-center
          shrink-0
          w-11
          h-11
          rounded-full
          bg-primary/10
          shadow-[inset_0_0_12px_rgba(255,255,255,0.6)]
        "
      >
        {icon}
      </div>

      {/* Text */}
      <div>
        <h4 className="font-bold text-sm text-slate-900 mb-1">{title}</h4>

        <p className="text-xs text-slate-600 leading-relaxed">{subtitle}</p>
      </div>
    </div>
  );
}
