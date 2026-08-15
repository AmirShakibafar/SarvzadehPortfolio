import { BookOpen, ImageIcon, PlayCircle, Shield } from "lucide-react";
import { ResourceAction } from "./resource-action";
import { Paragraph } from "@/components/ui/paragraph";
import { FeaturedDisease, ImageSize } from "./types";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/ui/heading";
import Image from "next/image";
import { GlassCard } from "@/components/ui/glass-card";
import { DotPattern } from "@/components/ui/dot-pattern";

const BLOB_SHAPES = [
  "rounded-[60%_40%_30%_70%/60%_30%_70%_40%]",
  "rounded-[30%_70%_70%_30%/30%_30%_70%_70%]",
  "rounded-[50%_50%_20%_80%/25%_80%_20%_75%]",
  "rounded-[40%_60%_70%_30%/40%_50%_60%_50%]",
  "rounded-[70%_30%_50%_50%/60%_40%_60%_40%]",
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

  const blobShapeClass = BLOB_SHAPES[index % BLOB_SHAPES.length];

  const imageSizeClass = IMAGE_SIZE_CLASSES[disease.imageSize ?? "sm"];

  return (
    <section
      id={disease.id}
      className="flex items-center py-10 lg:py-16 relative w-full"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-14 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">
          {/* Text Section */}
          <div
            className={cn(
              "flex flex-col items-start text-right w-full relative",
              "order-2",
              isEven ? "lg:order-1" : "lg:order-2",
            )}
          >
            <DotPattern className="hidden lg:block absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 opacity-70" />

            <div className="w-full text-right relative z-10">
              <div className="text-primary font-medium text-sm mb-3 lg:mb-4">
                {(index + 1).toString().padStart(2, "0")} — {enName}
              </div>

              <Heading size="h2" className="mb-4 lg:mb-6">
                {faName}
              </Heading>
            </div>

            <div className="relative z-10 w-full">
              <Paragraph size="lg" className="mb-8 lg:mb-10 text-slate-700">
                {disease.description}
              </Paragraph>
            </div>

            {hasResources && (
              <div className="w-full relative z-10">
                <div className="mb-5 lg:mb-6 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />

                  <h4 className="text-sm font-bold text-slate-800">
                    مطالب و منابع مرتبط
                  </h4>
                </div>

                <div className="flex flex-col w-full gap-2">
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
              "relative w-full max-w-[320px] lg:max-w-[480px] mx-auto aspect-square isolate",
              "order-1",
              isEven ? "lg:order-2" : "lg:order-1",
            )}
          >
            {/* Blob background */}
            <div
              className="absolute inset-[-8%] -z-20 bg-contain bg-center bg-no-repeat pointer-events-none"
              style={{ backgroundImage: "url('/blob.svg')" }}
              aria-hidden="true"
            />

            {/* Soft glass shape */}
            <GlassCard
              className={cn(
                "absolute inset-[8%] -z-10 opacity-50 shadow-xl shadow-primary/10 transition-all duration-700",
                blobShapeClass,
              )}
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
                    className="object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.10)]"
                    sizes="(max-width: 1024px) 70vw, 40vw"
                    priority={index < 2}
                  />
                </div>
              ) : (
                <div
                  className={cn(
                    "w-[72%] h-[72%] bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center transition-all duration-700",
                    blobShapeClass,
                  )}
                >
                  <Shield className="w-16 h-16 lg:w-20 lg:h-20 text-primary/40" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
