import type { MetadataRoute } from "next";
import { erpServices, aiServices } from "@/lib/data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://phrowler.com";
  const staticRoutes = ["", "/erp", "/ai", "/work", "/about", "/contact"];
  const serviceRoutes = [
    ...erpServices.map((s) => `/erp/${s.slug}`),
    ...aiServices.map((s) => `/ai/${s.slug}`),
  ];

  return [...staticRoutes, ...serviceRoutes].map((route) => ({
    url: `${base}${route}/`.replace(/\/+$/, "/"),
  }));
}
