import { motion } from "framer-motion";
import { BookOpen, ImageIcon, PlayCircle, Shield } from "lucide-react";
import { ResourceAction } from "./resource-action";
import { Paragraph } from "@/components/ui/paragraph";
import { FeaturedDisease } from "./types";
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

  return (
    <section
      id={disease.id}
      className="flex items-center py-12 lg:py-16 relative w-full"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-14 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div
            className={cn(
              "flex flex-col items-start text-right w-full relative",
              isEven ? "order-2 lg:order-1" : "order-2 lg:order-2",
            )}
          >
            <DotPattern className="top-0 right-0 -mt-6 -mr-6 w-32 h-32 opacity-70" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="w-full text-right relative z-10"
            >
              <div className="text-primary font-medium text-sm mb-4">
                {(index + 1).toString().padStart(2, "0")} — {enName}
              </div>
              <Heading size="h2" className="mb-6">
                {faName}
              </Heading>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative z-10"
            >
              <Paragraph size="lg" className="mb-10">
                {disease.description}
              </Paragraph>
            </motion.div>

            {hasResources && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="w-full relative z-10"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                  <h4 className="text-sm font-bold text-slate-800">
                    مطالب و منابع مرتبط
                  </h4>
                </div>

                <div className="flex flex-col w-full">
                  {disease.media?.type === "video" && (
                    <ResourceAction
                      icon={PlayCircle}
                      title="مشاهده ویدیو آموزشی"
                    />
                  )}
                  {disease.media?.type === "photo" && (
                    <ResourceAction
                      icon={ImageIcon}
                      title="مشاهده تصاویر بالینی"
                    />
                  )}
                  {disease.paperDoi && (
                    <ResourceAction
                      icon={BookOpen}
                      title="مطالعه مقاله علمی مرجع"
                      href={`https://doi.org/${disease.paperDoi}`}
                    />
                  )}
                </div>
              </motion.div>
            )}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className={cn(
              "relative w-full max-w-[480px] mx-auto aspect-square isolate",
              isEven ? "order-1 lg:order-2" : "order-1 lg:order-1",
            )}
          >
            {/* Blob background */}
            <div
              className="absolute inset-[-8%] -z-20 bg-contain bg-center bg-no-repeat pointer-events-none"
              style={{
                backgroundImage: "url('/blob.svg')",
              }}
              aria-hidden="true"
            />

            {/* Soft glass shape that follows the same visual footprint */}
            <GlassCard
              className={cn(
                "absolute inset-[8%] -z-10 opacity-50",
                "transition-all duration-700",
                "shadow-xl shadow-primary/10",
                blobShapeClass,
              )}
            />

            {/* Image */}
            <div className="absolute inset-[4%] z-10 flex items-center justify-center">
              {disease.imageUrl ? (
                <Image
                  src={disease.imageUrl}
                  alt={faName}
                  fill
                  className="object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.10)]"
                  sizes="(max-width: 768px) 90vw, 45vw"
                  priority={index < 2}
                />
              ) : (
                <div
                  className={cn(
                    "w-[72%] h-[72%]",
                    "bg-white/20 backdrop-blur-sm",
                    "border border-white/30",
                    "flex items-center justify-center",
                    "transition-all duration-700",
                    blobShapeClass,
                  )}
                >
                  <Shield className="w-20 h-20 text-primary/40" />
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
