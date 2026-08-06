import { HeroSection as DesktopHero } from "./hero-section-desktop";
import { HeroSectionMobile as MobileHero } from "./hero-section-mobile";

export function HeroSection() {
  return (
    <>
      {/* 
        Desktop Version: 
        Hidden by default. Becomes visible as a block element on screens 1024px and larger.
      */}
      <div className="hidden lg:block w-full">
        <DesktopHero />
      </div>

      {/* 
        Mobile Version: 
        Visible by default. Hidden on screens 1024px and larger.
      */}
      <div className="block lg:hidden w-full">
        <MobileHero />
      </div>
    </>
  );
}
