import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CatalogDetail from "@/components/CatalogDetail";
import { aiServices } from "@/lib/data";

export function generateStaticParams() {
  return aiServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/ai/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = aiServices.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.tagline,
  };
}

export default async function AiServicePage({
  params,
}: PageProps<"/ai/[slug]">) {
  const { slug } = await params;
  const service = aiServices.find((s) => s.slug === slug);
  if (!service) notFound();

  return <CatalogDetail service={service} basePath="/ai/" hubLabel="AI services" />;
}
