import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/client/", "/api/"],
    },
    sitemap: "https://technology.sryn.online/sitemap.xml",
  };
}
