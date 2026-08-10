import React from "react";
import { Metadata } from "next";
import { AdminLayout } from "../../components/admin-layout";

export const metadata: Metadata = {
  title: "SRYN Master Admin | Central Control Panel",
  description: "Centralized business management and administration platform for SRYN Management Pvt. Ltd.",
};

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return <AdminLayout>{children}</AdminLayout>;
}
