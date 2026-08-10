import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://recruitment.sryn.online";

  const routes = [
    "",
    "/jobs",
    "/companies",
    "/categories",
    "/locations",
    "/services",
    "/for-employers",
    "/post-a-job",
    "/candidates",
    "/about",
    "/careers",
    "/blog",
    "/faq",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/disclaimer",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
