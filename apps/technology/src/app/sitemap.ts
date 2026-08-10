import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://technology.sryn.online";

  const routes = [
    "",
    "/about",
    "/services",
    "/services/web-development",
    "/services/software-development",
    "/services/ecommerce",
    "/services/mobile-app-development",
    "/services/crm-erp",
    "/services/api-integration",
    "/services/payment-gateway",
    "/services/seo",
    "/services/google-ads",
    "/services/meta-ads",
    "/services/social-media",
    "/services/whatsapp-marketing",
    "/services/lead-generation",
    "/services/business-automation",
    "/services/digital-marketing",
    "/solutions",
    "/portfolio",
    "/pricing",
    "/blog",
    "/contact",
    "/start-project",
    "/faq",
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
