import type { MetadataRoute } from "next";
import { erpServices, aiServices, webMobileServices } from "@/lib/data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://phrowler.com";
  const staticRoutes = [
    "",
    "/erp",
    "/ai",
    "/ai/enterprise-knowledge-ai",
    "/web-mobile",
    "/work",
    "/about",
    "/contact",
    "/terms",
    "/privacy",
  ];
  const serviceRoutes = [
    ...erpServices.map((s) => `/erp/${s.slug}`),
    ...aiServices.map((s) => `/ai/${s.slug}`),
    ...webMobileServices.map((s) => `/web-mobile/${s.slug}`),
  ];

  return [...staticRoutes, ...serviceRoutes].map((route) => ({
    url: `${base}${route}/`.replace(/\/+$/, "/"),
  }));
}
