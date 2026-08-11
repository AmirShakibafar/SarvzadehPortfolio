// app/diseases/[category]/page.tsx
import { notFound } from "next/navigation";
import DiseaseCategoryTemplate from "@/components/templates/DiseaseCategoryTemplate";
import { getDiseaseData } from "@/lib/disease-data";

export async function generateStaticParams() {
  return [{ category: "autoimmune" }];
}

// NOTE: params is typed as a Promise in Next.js 15+
export default async function DiseaseCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  // 1. Await the params object
  const resolvedParams = await params;

  // 2. Safely log the slug to the terminal to verify Next.js sees it
  console.log("Requested category slug:", resolvedParams.category);

  // 3. Convert to lowercase to prevent case-sensitivity 404s (e.g. /Autoimmune)
  const safeSlug = resolvedParams.category?.toLowerCase();

  // 4. Fetch data
  const pageData = await getDiseaseData(safeSlug);

  if (!pageData) {
    console.log("Data not found for slug:", safeSlug); // Check terminal if this hits
    notFound();
  }

  return <DiseaseCategoryTemplate data={pageData} />;
}
