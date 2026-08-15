// components/templates/diseases/types.ts

export type ImageSize = "sm" | "md" | "lg";
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
  imageSize?: ImageSize;
  media?: DiseaseMedia;
  paperDoi?: string;
}

export interface DiseasePageData {
  title: string;
  subtitle: string;
  description: string;
  heroImageUrl?: string;
  heroImageSize?: ImageSize;
  mechanismTitle: string;
  mechanismDescription: string;
  featuredDiseases: FeaturedDisease[];
  keywords: string[];
  processSteps: ProcessStep[];
}
