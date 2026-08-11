"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { PlayCircle, Image as ImageIcon, BookOpen, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { GlassCard } from "@/components/ui/glass-card";
import { autoimmuneData } from "@/data/autoimmune";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function AutoimmunePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredKeywords = autoimmuneData.keywords.filter((keyword) =>
    keyword.includes(searchQuery),
  );

  return (
    <div
      className="relative isolate min-h-screen w-full overflow-hidden"
      dir="rtl"
    >
      {/* Background embedded as a faded layer */}
      <div
        className="absolute inset-0 -z-20 bg-[url('/images/autoimmune-bg.avif')] bg-cover bg-center opacity-10 pointer-events-none"
        aria-hidden="true"
      />

      {/* Background Blob Glow */}
      <div
        className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] opacity-40 md:h-[900px] md:w-[900px] -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat pointer-events-none"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 lg:px-14 py-16">
        {/* Header Section */}
        <GlassCard className="mb-16 p-8 md:p-12 text-right flex flex-col items-start">
          <Heading size="h1" className="mb-4 text-slate-900">
            {autoimmuneData.title}
          </Heading>
          <Paragraph size="lg" className="max-w-3xl text-slate-700">
            {autoimmuneData.description}
          </Paragraph>
        </GlassCard>

        {/* Featured Diseases Grid */}
        <motion.div
          className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {autoimmuneData.featuredDiseases.map((disease) => (
            <motion.div key={disease.id} variants={itemVariants}>
              <GlassCard className="flex h-full flex-col p-8 text-right transition-transform hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)]">
                {/* Image and Title Header */}
                <div className="mb-4 flex items-center gap-4">
                  {disease.imageUrl && (
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-[#EAEAEA] border border-white/60 shadow-sm">
                      <Image
                        src={disease.imageUrl}
                        alt={disease.name}
                        fill
                        sizes="64px"
                        className="object-contain p-1"
                      />
                    </div>
                  )}
                  <Heading size="h4" as="h3" className="text-slate-900">
                    {disease.name}
                  </Heading>
                </div>

                <Paragraph className="mb-6 flex-grow text-slate-700">
                  {disease.description}
                </Paragraph>

                {/* Media & Paper Badges */}
                <div className="mt-auto flex flex-wrap items-center justify-start gap-3">
                  {disease.media?.type === "video" && (
                    <span className="flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary">
                      <PlayCircle className="h-4 w-4" />
                      ویدیو توضیحات
                    </span>
                  )}
                  {disease.media?.type === "photo" && (
                    <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1.5 text-sm font-medium text-emerald-700">
                      <ImageIcon className="h-4 w-4" />
                      تصاویر بالینی
                    </span>
                  )}
                  {disease.paperDoi && (
                    <a
                      href={`https://doi.org/${disease.paperDoi}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 rounded-full bg-indigo-500/10 px-3 py-1.5 text-sm font-medium text-indigo-700 transition-colors hover:bg-indigo-500/20"
                    >
                      <BookOpen className="h-4 w-4" />
                      مشاهده مقاله
                    </a>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Keywords / Searchable Index Section */}
        <div className="pt-8 text-right">
          <div className="mb-8 flex flex-col items-end gap-6 md:flex-row md:items-center md:justify-between">
            <Heading size="h3" className="text-slate-900">
              فهرست جامع بیماری‌های تحت پوشش
            </Heading>

            {/* Styled Glass Search Bar */}
            <div className="relative w-full max-w-sm">
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                <Search className="h-5 w-5 text-primary/60" />
              </div>
              <input
                type="text"
                placeholder="جستجوی بیماری..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={cn(
                  "block w-full h-12 pl-4 pr-12 text-sm text-slate-900 placeholder:text-slate-500",
                  "rounded-full bg-white/30 backdrop-blur-md border border-white/60",
                  "shadow-[0_4px_14px_rgba(0,0,0,0.03),inset_0_1px_0_rgba(255,255,255,0.4)]",
                  "transition-all duration-300 ease-out",
                  "focus:bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 focus:shadow-[0_6px_20px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.5)]",
                )}
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {filteredKeywords.length > 0 ? (
              filteredKeywords.map((keyword, index) => (
                <span
                  key={index}
                  className={cn(
                    "inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-slate-700 cursor-default",
                    "rounded-full bg-white/20 backdrop-blur-md border border-white/40",
                    "shadow-[0_4px_14px_rgba(0,0,0,0.03),inset_0_1px_0_rgba(255,255,255,0.4)]",
                    "transition-all duration-300",
                    "hover:bg-white/40 hover:border-white/60 hover:text-primary hover:shadow-[0_6px_20px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.5)]",
                  )}
                >
                  {keyword}
                </span>
              ))
            ) : (
              <GlassCard className="w-full py-12 text-center flex flex-col items-center justify-center">
                <Search className="h-8 w-8 text-slate-300 mb-3" />
                <Paragraph className="text-slate-500">
                  بیماری با این نام یافت نشد.
                </Paragraph>
              </GlassCard>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
