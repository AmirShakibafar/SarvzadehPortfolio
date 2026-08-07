import React from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { ShieldCheck, UserCircle, Zap } from "lucide-react";

export function CtaFeaturesMobile() {
  return (
    <div className="relative mt-12 isolate w-full px-4">
      {/* Background blob */}
      <div
        className="absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      <GlassCard className="relative z-10 flex flex-col rounded-[2rem] bg-white/10 border border-white/30 shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.8)] overflow-hidden">
        {/* Fake glass gradient layer replacing backdrop-blur */}
        <div
          className="absolute inset-0 bg-gradient-to-tr from-white/5 via-white/10 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col px-5 py-2">
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
        </div>
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
    <div className="flex items-center gap-4 py-4 text-right">
      {/* Icon (optimized to standard 48px touch target) */}
      <div className="flex items-center justify-center shrink-0 w-12 h-12 rounded-full bg-primary/10 shadow-[inset_0_0_12px_rgba(255,255,255,0.6)]">
        {icon}
      </div>

      {/* Text (flex-1 prevents overflow wrapping issues) */}
      <div className="flex-1">
        <h4 className="font-bold text-[15px] text-slate-900 mb-0.5">{title}</h4>
        <p className="text-[13px] text-slate-600 leading-relaxed">{subtitle}</p>
      </div>
    </div>
  );
}
