import type { Metadata } from "next";
import "./globals.css";
import { TechnologyHeader } from "../components/header";
import { TechnologyFooter } from "../components/footer";

export const metadata: Metadata = {
  title: "SRYN Technology | Software Development, Web & Digital Marketing",
  description:
    "SRYN Technology creates websites, software, digital platforms and marketing solutions that help businesses establish, automate and scale.",
  metadataBase: new URL("https://technology.sryn.online"),
  alternates: {
    canonical: "https://technology.sryn.online",
  },
  openGraph: {
    title: "SRYN Technology | Technology That Moves Your Business Forward",
    description: "Web Development, Custom Software, E-Commerce, Mobile Apps & Performance Digital Marketing.",
    url: "https://technology.sryn.online",
    siteName: "SRYN Technology",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SRYN Technology",
    description: "Technology That Moves Your Business Forward.",
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
        <TechnologyHeader />
        <div className="flex-1 pt-24">{children}</div>
        <TechnologyFooter />
      </body>
    </html>
  );
}
