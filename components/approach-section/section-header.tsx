import React from "react";
import { ScrollTrigger } from "@/components/ui/scroll-trigger";

export function SectionHeader() {
  return (
    <ScrollTrigger className="lg:col-span-5 z-30 isolate scroll-stagger-group">
      <div className="stagger-item" style={{ animationDelay: "100ms" }}>
        <span className="inline-block text-sm font-semibold tracking-wide text-primary">
          چرا بیماران به من اعتماد می‌کنند؟
        </span>
      </div>

      <h2
        className="mt-4 max-w-xl text-4xl font-extrabold leading-tight text-foreground lg:text-5xl stagger-item"
        style={{ animationDelay: "300ms" }}
      >
        هیچ دو بیمار
        <span className="text-primary"> ام‌اس </span>
        شبیه یکدیگر نیستند.
      </h2>

      <p
        className="mt-8 max-w-md text-lg leading-9 text-muted-foreground stagger-item"
        style={{ animationDelay: "500ms" }}
      >
        هر بیمار شرایط، علائم، سبک زندگی و اهداف متفاوتی دارد. به همین دلیل،
        برنامه درمانی باید بر پایه شواهد علمی و متناسب با نیازهای واقعی هر فرد
        طراحی شود.
      </p>
    </ScrollTrigger>
  );
}
