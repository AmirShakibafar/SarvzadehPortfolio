import { BookOpen, ImageIcon, PlayCircle, Shield } from "lucide-react";
import { ResourceAction } from "./resource-action";
import { Paragraph } from "@/components/ui/paragraph";
import { FeaturedDisease, ImageSize } from "./types";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/ui/heading";
import Image from "next/image";
import { GlassCard } from "@/components/ui/glass-card";
import { DotPattern } from "@/components/ui/dot-pattern";
import { ScrollTrigger } from "@/components/ui/scroll-trigger";

// CHANGED: These are now standard CSS border-radius strings, not Tailwind classes
const BLOB_RADII = [
  "60% 40% 30% 70% / 60% 30% 70% 40%",
  "30% 70% 70% 30% / 30% 30% 70% 70%",
  "50% 50% 20% 80% / 25% 80% 20% 75%",
  "40% 60% 70% 30% / 40% 50% 60% 50%",
  "70% 30% 50% 50% / 60% 40% 60% 40%",
];

const IMAGE_SIZE_CLASSES: Record<ImageSize, string> = {
  sm: "w-[65%] h-[65%]",
  md: "w-[80%] h-[80%]",
  lg: "w-[95%] h-[95%]",
};

export function DiseaseStory({
  disease,
  index,
}: {
  disease: FeaturedDisease;
  index: number;
}) {
  const isEven = index % 2 === 0;
  const nameParts = disease.name.split(" (");
  const enName = nameParts[0];
  const faName = nameParts[1]?.replace(")", "") || disease.name;
  const hasResources = disease.media || disease.paperDoi;

  // Grab the specific radius for this index
  const blobRadius = BLOB_RADII[index % BLOB_RADII.length];
  const imageSizeClass = IMAGE_SIZE_CLASSES[disease.imageSize ?? "sm"];

  return (
    <ScrollTrigger className="scroll-stagger-group relative flex w-full items-center pt-10 pb-28 lg:py-16">
      <section
        id={disease.id}
        className="mx-auto w-full max-w-7xl scroll-mt-24 px-6 lg:scroll-mt-12 lg:px-14"
      >
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-24">
          {/* Text Section */}
          <div
            className={cn(
              "stagger-item relative flex w-full flex-col items-start text-right",
              "order-2",
              isEven ? "lg:order-1" : "lg:order-2",
            )}
            style={{ animationDelay: "150ms" }}
          >
            <DotPattern className="absolute right-0 top-0 -mr-6 -mt-6 hidden h-32 w-32 opacity-70 lg:block" />

            <div className="relative z-10 w-full text-right">
              <div className="mb-3 text-sm font-medium text-primary lg:mb-4">
                {(index + 1).toString().padStart(2, "0")} — {enName}
              </div>

              <Heading size="h2" className="mb-4 lg:mb-6">
                {faName}
              </Heading>
            </div>

            <div className="relative z-10 w-full">
              <Paragraph size="lg" className="mb-8 text-slate-700 lg:mb-10">
                {disease.description}
              </Paragraph>
            </div>

            {hasResources && (
              <div className="relative z-10 w-full">
                <div className="mb-5 flex items-center gap-3 lg:mb-6">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary/60" />

                  <h4 className="text-sm font-bold text-slate-800">
                    مطالب و منابع مرتبط
                  </h4>
                </div>

                <div className="flex w-full flex-col gap-2">
                  {disease.media?.type === "video" && (
                    <ResourceAction
                      icon={PlayCircle}
                      title="مشاهده ویدیو آموزشی"
                      action="play"
                    />
                  )}

                  {disease.media?.type === "photo" && (
                    <ResourceAction
                      icon={ImageIcon}
                      title="مشاهده تصاویر بالینی"
                      action="view"
                    />
                  )}

                  {disease.paperDoi && (
                    <ResourceAction
                      icon={BookOpen}
                      title="مطالعه مقاله علمی مرجع"
                      href={`https://doi.org/${disease.paperDoi}`}
                      action="external"
                    />
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Visual Section */}
          <div
            className={cn(
              "stagger-scale-item relative isolate mx-auto aspect-square w-full max-w-[320px] lg:max-w-[480px]",
              "order-1",
              isEven ? "lg:order-2" : "lg:order-1",
            )}
            style={{ animationDelay: "300ms" }}
          >
            {/* SVG Background - note: this is a static image so its shape won't change */}
            <div
              className="pointer-events-none absolute inset-[-8%] -z-20 bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/blob.svg')" }}
              aria-hidden="true"
            />

            {/* Soft glass shape - applying style={{ borderRadius }} fixes the issue */}
            <GlassCard
              className="absolute inset-[8%] -z-10 opacity-50 transition-all duration-700"
              style={{ borderRadius: blobRadius }}
            />

            {/* Image */}
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              {disease.imageUrl ? (
                <div
                  className={cn(
                    "relative transition-all duration-700",
                    imageSizeClass,
                  )}
                >
                  <Image
                    src={disease.imageUrl}
                    alt={faName}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 70vw, 40vw"
                    priority={index < 2}
                  />
                </div>
              ) : (
                <div
                  className="flex h-[72%] w-[72%] items-center justify-center border border-white/30 bg-white/20 transition-all duration-700"
                  style={{ borderRadius: blobRadius }}
                >
                  <Shield className="h-16 w-16 text-primary/40 lg:h-20 lg:w-20" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </ScrollTrigger>
  );
}
