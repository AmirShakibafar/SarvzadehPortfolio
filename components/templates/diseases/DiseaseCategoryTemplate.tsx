"use client";

import { useEffect, useState } from "react";
import { DiseasePageData } from "./types";
import { MedicalBackground } from "./bg";
import { ScrollProgressIndicator } from "./scroll-indicator";
import { AutoimmuneHero } from "./hero";
import { ImmuneSystemProcess } from "./immune-progress";
import { DiseaseStory } from "./disease-story";
import { DiseaseLibrary } from "./library";

export default function DiseaseCategoryTemplate({
  data,
}: {
  data: DiseasePageData;
}) {
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" },
    );

    const sections = [
      "hero",
      "mechanism",
      ...data.featuredDiseases.map((d) => d.id),
      "library",
    ];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [data.featuredDiseases]);

  return (
    <div
      className="relative w-full min-h-screen font-sans selection:bg-primary/20 selection:text-primary"
      dir="rtl"
    >
      <MedicalBackground />
      <ScrollProgressIndicator
        activeSection={activeSection}
        featuredDiseases={data.featuredDiseases}
      />

      <AutoimmuneHero
        title={data.title}
        subtitle={data.subtitle}
        description={data.description}
        heroImageUrl={data.heroImageUrl}
        firstDiseaseId={data.featuredDiseases[0]?.id}
      />
      <ImmuneSystemProcess
        title={data.mechanismTitle}
        description={data.mechanismDescription}
      />

      <div className="flex flex-col w-full">
        {data.featuredDiseases.map((disease, i) => (
          <DiseaseStory key={disease.id} disease={disease} index={i} />
        ))}
      </div>

      <DiseaseLibrary keywords={data.keywords} />
    </div>
  );
}
