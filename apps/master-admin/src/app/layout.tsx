import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SRYN Master Admin Portal | Enterprise Ecosystem Administration",
  description: "Centralized Management & Role-Based Administration for SRYN Ecosystem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-slate-100 antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
