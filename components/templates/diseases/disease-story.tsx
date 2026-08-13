import { motion } from "framer-motion";
import { BookOpen, ImageIcon, PlayCircle, Shield } from "lucide-react";
import { ResourceAction } from "./resource-action";
import { Paragraph } from "@/components/ui/paragraph";
import { FeaturedDisease } from "./types";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/ui/heading";
import Image from "next/image";

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

  return (
    <section
      id={disease.id}
      className="min-h-[80vh] flex items-center py-24 relative w-full"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-14 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div
            className={cn(
              "flex flex-col items-start text-right w-full",
              isEven ? "order-2 lg:order-1" : "order-2 lg:order-2",
            )}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="w-full text-right"
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
            >
              <Paragraph size="lg" className="mb-12">
                {disease.description}
              </Paragraph>
            </motion.div>

            {hasResources && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="w-full"
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
              "relative w-full aspect-square md:aspect-[4/3] lg:aspect-square flex items-center justify-center",
              isEven ? "order-1 lg:order-2" : "order-1 lg:order-1",
            )}
          >
            <div className="absolute inset-0 bg-primary/5 rounded-[3rem] blur-2xl opacity-60" />

            {disease.imageUrl ? (
              <div className="relative w-[70%] h-[70%] lg:w-[80%] lg:h-[80%] drop-shadow-xl hover:drop-shadow-2xl transition-all duration-700 ease-out">
                <Image
                  src={disease.imageUrl}
                  alt={faName}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ) : (
              <div className="w-[60%] h-[60%] bg-white/50 backdrop-blur-md rounded-[2.5rem] border border-white/60 shadow-sm flex items-center justify-center">
                <Shield className="w-16 h-16 text-primary/20" />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
