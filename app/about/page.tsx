import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "About",
  description:
    "Phrowler brings 25+ years of ERP implementation experience, plus 5+ years in e-invoicing integration and AI automation.",
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
            Decades of ERP expertise. Modern technology solutions.
          </h1>
          <p className="mt-6 max-w-2xl text-muted">
            Phrowler brings over 25 years of experience in ERP implementation,
            system design, and business-process automation, helping
            organizations streamline operations and improve efficiency
            through technology.
          </p>
        </Container>
      </section>

      <section className="border-b border-border">
        <Container className="py-16">
          <div className="max-w-3xl">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              25+ years of ERP, 5+ years of e-invoicing &amp; AI
            </h2>
            <p className="mt-4 text-sm text-muted">
              Our expertise spans multiple ERP platforms — SAP, Sage,
              Microsoft Dynamics 365, Oracle, and ERPNext — with a strong
              focus on implementation, customization, financial systems, and
              enterprise integration.
            </p>
            <p className="mt-4 text-sm text-muted">
              In recent years, we&apos;ve expanded into e-invoicing
              integration, tax-authority connectivity, and AI-based
              application development, with over five years of practical,
              production experience in these emerging areas — including
              Nigeria FIRS and Pakistan FBR e-invoicing pipelines across
              SAP, Sage, Dynamics 365, and ERPNext, and AI systems spanning
              RAG/LLM applications, computer vision, and workflow
              automation.
            </p>
            <p className="mt-4 text-sm text-muted">
              Today, our primary focus is ERPNext implementation and
              customization, complemented by e-invoicing integration across
              multiple ERP platforms and AI-powered business automation. We
              combine proven ERP expertise with modern technology to deliver
              practical, reliable, and cost-effective solutions.
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
