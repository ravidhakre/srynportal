import React from "react";

export function CorporateJsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SRYN Management Pvt. Ltd.",
    "url": "https://www.sryn.online",
    "logo": "https://www.sryn.online/logo.png",
    "description": "SRYN Management Pvt. Ltd. is a diversified organization operating across Technology, Financial Services and Recruitment.",
    "sameAs": [],
    "department": [
      {
        "@type": "Organization",
        "name": "SRYN Technology",
        "url": "https://technology.sryn.online"
      },
      {
        "@type": "Organization",
        "name": "SRYN FinServ",
        "url": "https://finserv.sryn.online"
      },
      {
        "@type": "Organization",
        "name": "SRYN Recruitment",
        "url": "https://recruitment.sryn.online"
      }
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "SRYN Management",
    "url": "https://www.sryn.online"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
