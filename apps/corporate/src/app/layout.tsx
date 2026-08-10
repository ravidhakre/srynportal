import type { Metadata } from "next";
import "./globals.css";
import { CorporateHeader } from "../components/header";
import { CorporateFooter } from "../components/footer";
import { CorporateJsonLd } from "../components/json-ld";

export const metadata: Metadata = {
  title: "SRYN Management Pvt. Ltd. | Technology, Finance & Recruitment",
  description:
    "SRYN Management Pvt. Ltd. operates across Technology, Financial Services and Recruitment, providing digital solutions, financial assistance and talent solutions.",
  metadataBase: new URL("https://www.sryn.online"),
  alternates: {
    canonical: "https://www.sryn.online",
  },
  openGraph: {
    title: "SRYN Management Pvt. Ltd. | Technology, Finance & Recruitment",
    description:
      "Building Businesses. Enabling Growth. Creating Opportunities across Technology, Financial Services and Recruitment.",
    url: "https://www.sryn.online",
    siteName: "SRYN Management",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SRYN Management Pvt. Ltd.",
    description: "Building Businesses. Enabling Growth. Creating Opportunities.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased flex flex-col min-h-screen">
        <CorporateJsonLd />
        <CorporateHeader />
        <div className="flex-1 pt-20">{children}</div>
        <CorporateFooter />
      </body>
    </html>
  );
}
