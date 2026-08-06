import { HeroSection as DesktopHero } from "./desktop/hero-section-desktop";
import { HeroSectionMobile as MobileHero } from "./mobile/hero-section-mobile";

export function HeroSection() {
  return (
    <>
      {/* 
        Desktop Version: 
        Hidden by default. Becomes visible as a block element on screens 1024px and larger.
      */}
      <div className="hidden md:block w-full">
        <DesktopHero />
      </div>

      {/* 
        Mobile Version: 
        Visible by default. Hidden on screens 1024px and larger.
      */}
      <div className="block md:hidden w-full">
        <MobileHero />
      </div>
    </>
  );
}
