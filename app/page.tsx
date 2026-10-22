import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import TrustBand from "@/components/home/TrustBand";
import Problems from "@/components/home/Problems";
import Solutions from "@/components/home/Solutions";
import FeaturedWork from "@/components/home/FeaturedWork";
import Process from "@/components/home/Process";
import ClosingCta from "@/components/home/ClosingCta";

export const metadata: Metadata = {
  title: "ERP, e-invoicing compliance & AI automation",
  description:
    "Phrowler connects the systems that run your business: ERPNext, Sage, Dynamics 365, and Oracle implementation, e-invoicing compliance for FIRS, FBR, ZATCA and more, and AI automation that removes manual work. 25+ years of ERP delivery.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBand />
      <Problems />
      <Solutions />
      <FeaturedWork />
      <Process />
      <ClosingCta />
    </>
  );
}
