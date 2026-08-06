// cta-features-mobile.tsx
import React from "react";
import { ShieldCheck, UserCircle, Zap } from "lucide-react";

export function CtaFeaturesMobile() {
  return (
    <div className="mt-10 w-full space-y-3">
      <FeatureItemMobile
        icon={<ShieldCheck />}
        title="حفظ حریم خصوصی"
        subtitle="اطلاعات شما کاملاً محرمانه است"
      />

      <FeatureItemMobile
        icon={<UserCircle />}
        title="مشاوره تخصصی"
        subtitle="راهنمایی مستقیم توسط دکتر رضا سرورزاده"
      />

      <FeatureItemMobile
        icon={<Zap />}
        title="پاسخ سریع"
        subtitle="در اولین فرصت با شما تماس می‌گیریم"
      />
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
        flex items-center gap-4
        rounded-2xl
        border border-white/30
        bg-white/[0.12]
        px-4 py-4
        shadow-[0_8px_25px_rgba(0,0,0,0.04)]
      "
    >
      {/* Icon */}
      <div
        className="
          shrink-0
          flex items-center justify-center
          w-11 h-11
          rounded-xl
          bg-primary/10
          text-primary
        "
      >
        {React.cloneElement(icon as React.ReactElement, {
          className: "w-5 h-5",
        })}
      </div>

      {/* Text */}
      <div className="text-right">
        <h4 className="font-bold text-sm text-slate-900">{title}</h4>

        <p className="mt-1 text-xs text-slate-600 leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
