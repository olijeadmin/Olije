import type { MetadataRoute } from "next";
import { services, industries } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://olije.com";
  const staticRoutes = [
    "",
    "/about",
    "/about/leadership",
    "/services",
    "/industries",
    "/sustainability",
    "/investors",
    "/news",
    "/careers",
    "/contact",
  ];
  const serviceRoutes = services.map((s) => `/services/${s.slug}`);
  const industryRoutes = industries.map((i) => `/industries/${i.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...industryRoutes].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
