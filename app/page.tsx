import { Navbar } from "@/components/layout/navbar";
// Corrected: Using kebab-case (not snake_case) to maintain strict naming conventions
import { HeroSection } from "@/components/hero/hero-section-index";
import { JourneySection } from "@/components/journey-section";
import WhyTrustMeSection from "@/components/approach-section";
import CtaSection from "@/components/cta/index";
import { Footer } from "@/components/layout/footer";
import { FaqSection } from "@/components/faq";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center bg-background font-sans overflow-x-clip">
      {/* Global Background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[60%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[50%] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      {/* Sticky Navbar Wrapper */}
      <div className="sticky top-0 z-50 w-full">
        <Navbar />
      </div>

      <HeroSection />

      <WhyTrustMeSection />
      <JourneySection />
      <CtaSection />
      <FaqSection />
      <Footer />
    </div>
  );
}
