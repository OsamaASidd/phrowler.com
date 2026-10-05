import type { Metadata } from "next";
import CatalogHub from "@/components/CatalogHub";
import { aiServices, featuredAiProduct } from "@/lib/data";

export const metadata: Metadata = {
  title: "AI & Automation",
  description:
    "AI assistants, voice AI, computer vision, and workflow automation, built to run in production — not just a demo.",
};

export default function AiPage() {
  return (
    <CatalogHub
      eyebrow="AI"
      title="AI and automation that fits into how your team already works."
      intro="From AI assistants and voice bots to computer vision and workflow automation — plus the full application built around them, so it ships as a real product, not a proof of concept."
      services={aiServices}
      basePath="/ai/"
      featured={featuredAiProduct}
    />
  );
}
