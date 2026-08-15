// lib/disease-data.ts
import { DiseasePageData } from "@/components/templates/diseases/types";
import { autoimmuneData } from "@/data/autoimmune";
import { cancerData } from "@/data/cancer";
import { hormonalMetabolicData } from "@/data/hormonal-metabolic";
import { allergyData } from "@/data/allergy";

const diseaseRegistry: Record<string, DiseasePageData> = {
  autoimmune: autoimmuneData,
  cancer: cancerData,
  "hormonal-metabolic": hormonalMetabolicData,
  allergy: allergyData,
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
    heroImageSize: data.heroImageSize,
    mechanismTitle: data.mechanismTitle,
    mechanismDescription: data.mechanismDescription,
    processSteps: data.processSteps ?? [],
    featuredDiseases: data.featuredDiseases ?? [],
    keywords: data.keywords ?? [],
  };
}
