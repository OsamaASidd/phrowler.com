import type { Metadata } from "next";
import CatalogHub from "@/components/CatalogHub";
import { erpServices } from "@/lib/data";

export const metadata: Metadata = {
  title: "ERP Implementation & Integration",
  description:
    "Official ERPNext/Frappe Partner in Oman. 25+ years of ERP implementation experience across ERPNext, Sage, Microsoft Dynamics 365, Oracle, Zoho Books, QuickBooks, and Odoo, plus e-invoicing compliance across Nigeria, Pakistan, Saudi Arabia, India, and the UK.",
};

export default function ErpPage() {
  return (
    <CatalogHub
      eyebrow="ERP"
      badge="Official ERPNext/Frappe Partner — Oman"
      title="ERPNext implementation, backed by 25+ years of ERP experience."
      intro="Our primary focus is ERPNext implementation and customization — backed by 25+ years of ERP system design experience across Sage, Microsoft Dynamics 365, Oracle, Zoho Books, QuickBooks, and Odoo, plus e-invoicing compliance across Nigeria, Pakistan, Saudi Arabia, India, and the UK."
      services={erpServices}
      basePath="/erp/"
    />
  );
}
