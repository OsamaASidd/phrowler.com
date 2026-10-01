import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CatalogDetail from "@/components/CatalogDetail";
import { erpServices } from "@/lib/data";

export function generateStaticParams() {
  return erpServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/erp/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = erpServices.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.tagline,
  };
}

export default async function ErpServicePage({
  params,
}: PageProps<"/erp/[slug]">) {
  const { slug } = await params;
  const service = erpServices.find((s) => s.slug === slug);
  if (!service) notFound();

  return <CatalogDetail service={service} basePath="/erp/" hubLabel="ERP services" />;
}
