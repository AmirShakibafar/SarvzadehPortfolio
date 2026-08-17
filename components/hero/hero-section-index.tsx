import { HeroSection as DesktopHero } from "./desktop/hero-section-desktop";
import { HeroSectionMobile as MobileHero } from "./mobile/hero-section-mobile";

export function HeroSection() {
  return (
    <>
      <div className="hidden md:block w-full">
        <DesktopHero />
      </div>

      <div className="block md:hidden w-full">
        <MobileHero />
      </div>
    </>
  );
}
