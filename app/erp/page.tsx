import type { Metadata } from "next";
import CatalogHub from "@/components/CatalogHub";
import { erpServices } from "@/lib/data";

export const metadata: Metadata = {
  title: "ERP Implementation & Integration",
  description:
    "Official ERPNext/Frappe Partner in Oman. SAP, Sage, Microsoft Dynamics 365, Oracle, and ERPNext implementation, plus e-invoicing compliance across Nigeria, Pakistan, Saudi Arabia, India, and the UK.",
};

export default function ErpPage() {
  return (
    <CatalogHub
      eyebrow="ERP"
      badge="Official ERPNext/Frappe Partner — Oman"
      title="We set up and connect every major ERP system."
      intro="SAP, Sage, Microsoft Dynamics 365, Oracle, and ERPNext — set up, connected, and kept compliant with e-invoicing rules across Nigeria, Pakistan, Saudi Arabia, India, and the UK."
      services={erpServices}
      basePath="/erp/"
    />
  );
}
