import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { InteractiveLibrary } from "./interactive-library";
import { ScrollTrigger } from "@/components/ui/scroll-trigger";

export function DiseaseLibrary({ keywords }: { keywords: string[] }) {
  return (
    <section
      id="library"
      className="relative z-10 flex min-h-[60vh] w-full items-center py-16 lg:py-24"
    >
      <ScrollTrigger className="scroll-stagger-group mx-auto w-full max-w-5xl px-6 lg:px-14">
        {/* Pass the interactive logic down, but keep the header markup on the server */}
        <InteractiveLibrary keywords={keywords}>
          <div className="w-full text-right lg:w-auto">
            <Heading size="h2" className="mb-3 lg:mb-4">
              کتابخانه بیماری‌ها
            </Heading>
            <Paragraph className="max-w-md text-slate-600">
              فهرست جامع سایر بیماری‌های مرتبط که در این مرکز مورد بررسی، تشخیص
              و مدیریت قرار می‌گیرند.
            </Paragraph>
          </div>
        </InteractiveLibrary>
      </ScrollTrigger>
    </section>
  );
}
