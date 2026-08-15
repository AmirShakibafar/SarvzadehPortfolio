// components/templates/diseases/types.ts

export interface ProcessStep {
  title: string;
  desc: string;
  iconName: string;
  highlight: boolean;
}

export interface DiseaseMedia {
  type: "video" | "photo";
  url?: string;
}

export interface FeaturedDisease {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
  media?: DiseaseMedia;
  paperDoi?: string;
}

export interface DiseasePageData {
  title: string;
  subtitle: string;
  description: string;
  heroImageUrl?: string;
  mechanismTitle: string;
  mechanismDescription: string;
  featuredDiseases: FeaturedDisease[];
  keywords: string[];
  processSteps: ProcessStep[];
}
