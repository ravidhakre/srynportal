import type { Metadata } from "next";
import "./globals.css";
import { FinServHeader } from "../components/header";
import { FinServFooter } from "../components/footer";

export const metadata: Metadata = {
  title: "SRYN FinServ | Financial Solutions & Credit Assistance",
  description:
    "SRYN FinServ helps individuals and businesses understand and access suitable financial solutions through professional assistance and consultation.",
  metadataBase: new URL("https://finserv.sryn.online"),
  alternates: {
    canonical: "https://finserv.sryn.online",
  },
  openGraph: {
    title: "SRYN FinServ | Financial Solutions Designed Around Your Needs",
    description: "Personal Loans, Business Loans, Home Loans, LAP & Credit Consultation.",
    url: "https://finserv.sryn.online",
    siteName: "SRYN FinServ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SRYN FinServ",
    description: "Financial Solutions Designed Around Your Needs.",
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
        <FinServHeader />
        <div className="flex-1 pt-24">{children}</div>
        <FinServFooter />
      </body>
    </html>
  );
}
