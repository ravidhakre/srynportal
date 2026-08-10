import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/candidate/", "/employer/", "/recruiter/", "/admin/", "/api/"],
    },
    sitemap: "https://recruitment.sryn.online/sitemap.xml",
  };
}
