// lib/disease-data.ts
import { DiseasePageData } from "@/components/templates/DiseaseCategoryTemplate";

// Import your local data files here
import { autoimmuneData } from "@/data/autoimmune";
// import { geneticData } from "@/data/genetic";
// import { infectiousData } from "@/data/infectious";

// Map the URL slug to the corresponding data object
const diseaseRegistry: Record<string, any> = {
  autoimmune: autoimmuneData,
  // "genetic": geneticData,
  // "infectious": infectiousData,
};

export async function getDiseaseData(
  categorySlug: string,
): Promise<DiseasePageData | null> {
  const data = diseaseRegistry[categorySlug];

  if (!data) {
    return null; // Triggers a 404 if the URL is invalid
  }

  // Ensure the exported data perfectly matches what the Template component expects.
  // We use fallbacks (||) here so the page doesn't crash if your .ts file is missing a field.
  return {
    title: data.title,
    subtitle: data.subtitle || "رویکرد نوین پزشکی",
    description: data.description,
    mechanismTitle: data.mechanismTitle || "سازوکار بیماری",
    mechanismDescription:
      data.mechanismDescription ||
      "بررسی نحوه عملکرد و تاثیرات فیزیولوژیک بیماری بر بدن بیمار.",
    featuredDiseases: data.featuredDiseases || [],
    keywords: data.keywords || [],
  };
}
