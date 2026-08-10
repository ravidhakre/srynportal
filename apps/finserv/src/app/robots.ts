import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/customer/", "/api/"],
    },
    sitemap: "https://finserv.sryn.online/sitemap.xml",
  };
}
