import WhyTrustMeSectionDesktop from "./desktop/why-trust-me-section";
import WhyTrustMeSectionMobile from "./mobile/why-trust-me-section-mobile";

export default function WhyTrustMeSection() {
  return (
    <>
      {/* Mobile Version */}
      <div className="block lg:hidden">
        <WhyTrustMeSectionMobile />
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:block">
        <WhyTrustMeSectionDesktop />
      </div>
    </>
  );
}
