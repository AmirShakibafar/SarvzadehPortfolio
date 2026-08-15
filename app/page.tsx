import { HeroSection } from "@/components/hero/hero-section-index";
import { JourneySection } from "@/components/journey-section";
import WhyTrustMeSection from "@/components/approach-section";
import CtaSection from "@/components/cta/index";
import { FaqSection } from "@/components/faq";
import { SpecialtiesSection } from "@/components/experties";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center bg-background font-sans overflow-x-clip">
      {/* Global Background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[60%] rounded-full bg-primary/10 blur-[120px]" />

        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[50%] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <HeroSection />

      <div id="specialties">
        <SpecialtiesSection />
      </div>

      <div id="about">
        <WhyTrustMeSection />
      </div>

      <div id="journey">
        <JourneySection />
      </div>

      <div id="contact">
        <CtaSection />
      </div>

      <div id="faq" className="w-full">
        <FaqSection />
      </div>
    </div>
  );
}
