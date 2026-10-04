import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CatalogDetail from "@/components/CatalogDetail";
import { webMobileServices } from "@/lib/data";

export function generateStaticParams() {
  return webMobileServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/web-mobile/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = webMobileServices.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.tagline,
  };
}

export default async function WebMobileServicePage({
  params,
}: PageProps<"/web-mobile/[slug]">) {
  const { slug } = await params;
  const service = webMobileServices.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <CatalogDetail
      service={service}
      basePath="/web-mobile/"
      hubLabel="Web & Mobile services"
    />
  );
}
