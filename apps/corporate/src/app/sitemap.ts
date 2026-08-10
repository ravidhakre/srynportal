import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.sryn.online";

  const routes = [
    "",
    "/about",
    "/businesses",
    "/businesses/technology",
    "/businesses/finserv",
    "/businesses/recruitment",
    "/services",
    "/careers",
    "/contact",
    "/faq",
    "/blog",
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
