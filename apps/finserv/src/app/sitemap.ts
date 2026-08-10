import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://finserv.sryn.online";

  const routes = [
    "",
    "/about",
    "/loans",
    "/loans/personal-loan",
    "/loans/business-loan",
    "/loans/home-loan",
    "/loans/loan-against-property",
    "/credit",
    "/credit/consultation",
    "/credit/guidance",
    "/credit/cards",
    "/financial-solutions",
    "/eligibility",
    "/documents",
    "/faq",
    "/blog",
    "/contact",
    "/apply",
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
