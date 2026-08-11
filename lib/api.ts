// app/[category]/page.tsx
import { notFound } from "next/navigation";
import DiseaseCategoryTemplate from "@/components/templates/DiseaseCategoryTemplate";
import { getDiseaseData } from "@/lib/api";

// 1. Tell Next.js which URIs exist at build time
export async function generateStaticParams() {
  // If using local data, return the keys. 
  // If using an API, fetch the list of available category slugs here.
  return [
    { category: 'autoimmune' },
    { category: 'genetic' },
    { category: 'infectious' },
  ];
}

// 2. The actual page component
export default async function DynamicDiseasePage({ params }: { params: { category: string } }) {
  const data = await getDiseaseData(params.category);
  
  if (!data) notFound();

  return <DiseaseCategoryTemplate data={data} />;
}