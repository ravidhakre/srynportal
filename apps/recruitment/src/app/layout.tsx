import type { Metadata } from "next";
import "./globals.css";
import { RecruitmentHeader } from "../components/header";
import { RecruitmentFooter } from "../components/footer";

export const metadata: Metadata = {
  title: "SRYN Recruitment | Connecting Talent With Opportunities",
  description:
    "SRYN Recruitment provides IT, Non-IT, staffing, placement and third-party recruitment solutions for employers and professionals.",
  metadataBase: new URL("https://recruitment.sryn.online"),
  alternates: {
    canonical: "https://recruitment.sryn.online",
  },
  openGraph: {
    title: "SRYN Recruitment | Find Talent. Find Opportunities. Build Better Teams.",
    description: "IT & Non-IT Jobs, Staffing, Bulk Hiring & Permanent Placements.",
    url: "https://recruitment.sryn.online",
    siteName: "SRYN Recruitment",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SRYN Recruitment",
    description: "Connecting Talent With the Right Opportunities.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-slate-950 text-slate-100 antialiased flex flex-col min-h-screen">
        <RecruitmentHeader />
        <div className="flex-1 pt-24">{children}</div>
        <RecruitmentFooter />
      </body>
    </html>
  );
}
