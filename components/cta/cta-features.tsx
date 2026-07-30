import React from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { ShieldCheck, UserCircle, Zap } from "lucide-react";

export function CtaFeatures() {
  return (
    <div className="relative mt-16 isolate w-full">
      {/* Teal blob behind the features section matching the form */}
      <div className="absolute -inset-4 bg-primary/15 rounded-[2.5rem] blur-2xl -z-10" />

      <GlassCard className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 lg:p-8 rounded-[2rem] border-white/60 bg-white/30 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative z-10">
        <FeatureItem
          icon={<ShieldCheck className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />}
          title="حفظ حریم خصوصی"
          subtitle="اطلاعات شما کاملاً محرمانه است"
        />

        <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-right border-y md:border-y-0 md:border-x border-white/40 py-4 md:py-0 md:px-8 relative">
          <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-slate-200/50 to-transparent hidden md:block" />
          <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-slate-200/50 to-transparent hidden md:block" />
          <FeatureItem
            icon={<UserCircle className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />}
            title="مشاوره تخصصی"
            subtitle="راهنمایی توسط دکتر رضا سرورزاده"
            wrapperClassName="w-full"
          />
        </div>

        <FeatureItem
          icon={<Zap className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />}
          title="پاسخ سریع"
          subtitle="در اولین فرصت با شما تماس می‌گیریم"
        />
      </GlassCard>
    </div>
  );
}

function FeatureItem({
  icon,
  title,
  subtitle,
  wrapperClassName = "",
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  wrapperClassName?: string;
}) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-4 text-center md:text-right ${wrapperClassName}`}
    >
      <div className="flex items-center justify-center shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary/10 shadow-[inset_0_0_12px_rgba(255,255,255,0.6)]">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-slate-900 mb-1">{title}</h4>
        <p className="text-xs text-slate-600">{subtitle}</p>
      </div>
    </div>
  );
}
