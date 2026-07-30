"use client"
import { CtaInfo } from "./cta-info";
import { EvaluationForm } from "./evaluation-form";
import { CtaFeatures } from "./cta-features";

export default function CtaSection() {
  return (
    <section dir="rtl" className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -z-10 translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -z-10 -translate-x-1/3 translate-y-1/4" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <CtaInfo />
          <EvaluationForm />
        </div>
        <CtaFeatures />
      </div>
    </section>
  );
}
