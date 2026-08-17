import React from "react";
import { AutoimmuneHero } from "./hero";
import { ImmuneSystemProcess } from "./immune-progress";
import { DiseaseStory } from "./disease-story";
import { DiseaseLibrary } from "./library";
import { ScrollSpyTracker } from "./scroll-spy-tracker";
import type { FeaturedDisease, ProcessStep } from "./types";

// 1. Exact type mapping based on your autoimmuneData.ts structure
export interface DiseaseCategoryData {
  title: string;
  subtitle: string;
  description: string;
  heroImageUrl?: string;
  heroImageSize?: "sm" | "md" | "lg";
  mechanismTitle: string;
  mechanismDescription: string;
  processSteps: ProcessStep[];
  featuredDiseases: FeaturedDisease[];
  keywords: string[];
}

interface DiseaseCategoryTemplateProps {
  data: DiseaseCategoryData;
}

export default function DiseaseCategoryTemplate({
  data,
}: DiseaseCategoryTemplateProps) {
  return (
    <main className="relative w-full">
      {/* 
        CLIENT BOUNDARY: 
        This tiny component observes the DOM and renders the fixed UI.
      */}
      <ScrollSpyTracker featuredDiseases={data.featuredDiseases} />

      {/* SERVER COMPONENTS */}
      <AutoimmuneHero
        title={data.title}
        subtitle={data.subtitle}
        description={data.description}
        heroImageUrl={data.heroImageUrl}
        heroImageSize={data.heroImageSize}
        firstDiseaseId={data.featuredDiseases[0]?.id}
      />

      <ImmuneSystemProcess
        title={data.mechanismTitle}
        description={data.mechanismDescription}
        steps={data.processSteps}
      />

      <div className="flex w-full flex-col">
        {data.featuredDiseases.map((disease, index) => (
          <DiseaseStory key={disease.id} disease={disease} index={index} />
        ))}
      </div>

      <DiseaseLibrary keywords={data.keywords} />
    </main>
  );
}
