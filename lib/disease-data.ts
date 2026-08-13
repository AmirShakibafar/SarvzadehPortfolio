// lib/disease-data.ts
import { DiseasePageData } from "@/components/templates/diseases/types";
import { autoimmuneData } from "@/data/autoimmune";

const diseaseRegistry: Record<string, DiseasePageData> = {
  autoimmune: autoimmuneData,
};

export async function getDiseaseData(
  categorySlug: string,
): Promise<DiseasePageData | null> {
  const data = diseaseRegistry[categorySlug];

  if (!data) return null;

  return {
    title: data.title,
    subtitle: data.subtitle,
    description: data.description,
    heroImageUrl: data.heroImageUrl,
    mechanismTitle: data.mechanismTitle,
    mechanismDescription: data.mechanismDescription,
    featuredDiseases: data.featuredDiseases ?? [],
    keywords: data.keywords ?? [],
  };
}
