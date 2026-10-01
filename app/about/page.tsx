import type { Metadata } from "next";
import Container from "@/components/Container";
import Button from "@/components/Button";
import { certifications, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Phrowler is a systems integration and AI engineering studio led by Osama Ahmed Siddiqui.",
};

const principles = [
  {
    title: "Scope it honestly",
    body: "We tell you upfront what's a two-week integration and what's a two-month one, before any contract is signed.",
  },
  {
    title: "Build against production",
    body: "Compliance and integration work fails in the details. We test against real ERP instances and real data, not sandboxes that don't match reality.",
  },
  {
    title: "Hand over something maintainable",
    body: "Documentation and a clean handoff are part of the deliverable, not an afterthought.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border">
        <Container className="py-20">
          <p className="font-mono-label text-xs uppercase text-brand">About</p>
          <h1 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Built by people who&apos;ve done the integration work themselves.
          </h1>
          <p className="mt-6 max-w-2xl text-muted">
            Phrowler exists because most e-invoicing and ERP compliance
            deadlines get treated as paperwork — until someone has to
            actually wire SAP, Sage, Dynamics 365, and Oracle into a
            regulator&apos;s API. That&apos;s the work we specialize in.
          </p>
        </Container>
      </section>

      <section className="border-b border-border">
        <Container className="grid gap-12 py-16 md:grid-cols-5">
          <div className="md:col-span-3">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              The engineer behind Phrowler
            </h2>
            <p className="mt-4 text-sm text-muted">
              Phrowler is led by Osama Ahmed Siddiqui, a systems integration
              engineer and full-stack AI developer with five-plus years
              across backend engineering, cloud infrastructure, and ERP
              systems spanning SAP ABAP &amp; S/4HANA, ERPNext/Frappe, Sage
              (50, 200, Evolution &amp; X3), Microsoft Dynamics 365, and
              Oracle Fusion.
            </p>
            <p className="mt-4 text-sm text-muted">
              That background includes shipping Nigeria FIRS and Pakistan FBR
              e-invoicing pipelines for 15+ Tier-1 clients, publishing four
              apps on the Frappe Marketplace, and building production AI
              systems — RAG/LLM applications, computer vision with YOLOv8,
              and n8n workflow automation — for clients running at real
              scale.
            </p>
            <p className="mt-4 text-sm text-muted">
              Phrowler brings that same hands-on approach to every
              engagement: no handoff between the people who scope the work
              and the people who build it.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Button href={site.resumeUrl} variant="secondary">
                Download résumé (PDF)
              </Button>
              <Button href={site.links.linkedin} variant="ghost">
                LinkedIn ↗
              </Button>
              <Button href={site.links.github} variant="ghost">
                GitHub ↗
              </Button>
            </div>
          </div>

          <div className="md:col-span-2 md:border-l md:border-border md:pl-12">
            <h3 className="font-mono-label text-xs uppercase text-muted">
              Education
            </h3>
            <p className="mt-3 text-sm font-medium text-foreground">
              BS Computer Science
            </p>
            <p className="text-sm text-muted">
              FAST — National University of Computer and Emerging Sciences
              (NUCES)
            </p>
            <p className="mt-1 text-sm text-muted">
              Three-time Dean&apos;s List Honoree · CGPA 3.43/4.0
            </p>

            <h3 className="mt-8 font-mono-label text-xs uppercase text-muted">
              Certifications
            </h3>
            <ul className="mt-3 space-y-2">
              {certifications.map((cert) => (
                <li key={cert} className="text-sm text-muted">
                  {cert}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 font-mono-label text-xs uppercase text-muted">
              Legal entity
            </h3>
            <p className="mt-3 text-sm text-muted">
              {site.name} is the trading name of {site.legal.entityName},
              registered in the {site.legal.jurisdiction}.
            </p>
            <p className="mt-1 text-sm text-muted">
              CR No. {site.legal.registrationNumber} · License No.{" "}
              {site.legal.licenseNumber}
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            How we work
          </h2>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {principles.map((p) => (
              <div key={p.title} className="grid gap-2 py-6 md:grid-cols-4 md:gap-8">
                <h3 className="font-medium text-foreground">{p.title}</h3>
                <p className="text-sm text-muted md:col-span-3">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
