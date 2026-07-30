import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/hero/hero-section";
import { JourneySection } from "@/components/journey-section";
import WhyTrustMeSection from "@/components/approach-section/why-trust-me-section";
import CtaSection from "@/components/cta/index";
import { Footer } from "@/components/layout/footer";

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

      {/* Constrained Page Content */}
      {/* Added -mt-8 lg:-mt-16 to pull the hero section up */}
      <div className="relative z-10 flex w-full max-w-7xl flex-col gap-8 px-4 pb-20 sm:px-6 lg:gap-12 lg:px-8 -mt-8 lg:-mt-16">
        <HeroSection />
      </div>

      <WhyTrustMeSection />
      <JourneySection />
      <CtaSection />
      <Footer />
    </div>
  );
}
