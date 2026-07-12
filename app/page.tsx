import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/hero/hero-section";
import { FeaturesSection } from "@/components/hero/features-section";
import { ConditionsSection } from "@/components/hero/conditions-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-background font-sans">
      {/* Full-width sticky navbar */}
      <Navbar />

      {/* Content Wrapper with overflow hidden for blobs */}
      <div className="relative w-full flex flex-col items-center overflow-x-hidden">
        {/* Background blobs/gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[60%] rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute top-[20%] -right-[10%] w-[40%] h-[50%] rounded-full bg-primary/5 blur-[100px]" />
        </div>

        {/* Constrained Page Content */}
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col pt-8 pb-20 gap-16">
          <HeroSection />
          <FeaturesSection />
          <ConditionsSection />
        </div>
      </div>
    </div>
  );
}
