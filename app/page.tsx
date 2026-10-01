import Container from "@/components/Container";
import Button from "@/components/Button";
import { pillars, erpServices, aiServices, caseStudies, stats, site } from "@/lib/data";
import { CheckIcon } from "@/components/icons";

const previewByPillar: Record<string, typeof erpServices> = {
  erp: erpServices.slice(0, 4),
  ai: aiServices.slice(0, 4),
};

const countByPillar: Record<string, number> = {
  erp: erpServices.length,
  ai: aiServices.length,
};

const before = [
  "Invoices submitted by hand, one at a time",
  "Finance, sales, and operations each on a different system",
  "Nobody fully sure the numbers actually match",
];

const after = [
  "Invoices go out compliant, automatically",
  "One connected system across the business",
  "Reports that agree with each other",
];

export default function Home() {
  const highlights = caseStudies.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border">
        <Container className="grid gap-12 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="font-mono-label text-xs uppercase text-brand">
              {site.tagline}
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-[2.75rem] md:leading-[1.1]">
              Keep your ERP connected, compliant, and running smoothly.
            </h1>
            <p className="mt-6 max-w-md text-muted">
              We set up and connect SAP, Sage, Microsoft Dynamics 365,
              Oracle, and ERPNext — then layer on the e-invoicing compliance
              and AI automation that keeps your team from doing things by
              hand.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Button href="/contact/">Start a project</Button>
              <Button href="/work/" variant="ghost">
                See the work →
              </Button>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-background p-6 shadow-sm">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="font-mono-label text-xs uppercase text-muted">
                  Before
                </p>
                <ul className="mt-3 space-y-3">
                  {before.map((item) => (
                    <li key={item} className="text-sm text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-l border-border pl-6">
                <p className="font-mono-label text-xs uppercase text-brand">
                  After
                </p>
                <ul className="mt-3 space-y-3">
                  {after.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand">
                        <CheckIcon className="h-3 w-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="border-b border-border">
        <Container className="flex flex-wrap gap-x-12 gap-y-6 py-10">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-mono-label text-2xl font-semibold text-foreground">
                {stat.value}
              </div>
              <div className="mt-1 max-w-[14rem] text-sm text-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </Container>
      </section>

      {/* Pillars */}
      <section className="border-b border-border">
        <Container className="py-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              What we do
            </h2>
            <p className="mt-3 text-muted">
              Two disciplines, one team — because the hardest problems live
              where your ERP meets your automation.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {pillars.map((pillar) => (
              <div
                key={pillar.slug}
                className="rounded-xl border border-border bg-background p-8 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {pillar.name}
                </h3>
                <p className="mt-2 text-sm font-medium text-brand">
                  {pillar.pitch}
                </p>
                <p className="mt-4 text-sm text-muted">{pillar.description}</p>
                <ul className="mt-6 space-y-2 border-t border-border pt-6">
                  {previewByPillar[pillar.slug].map((service) => (
                    <li
                      key={service.slug}
                      className="text-sm text-foreground before:mr-2 before:text-brand before:content-['—']"
                    >
                      {service.name}
                    </li>
                  ))}
                </ul>
                <Button href={pillar.href} variant="ghost" className="mt-6">
                  All {countByPillar[pillar.slug]} services →
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured work */}
      <section className="border-b border-border">
        <Container className="py-20">
          <div className="flex items-end justify-between gap-4">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Recent engagements
              </h2>
              <p className="mt-3 text-muted">
                A sample of the compliance rollouts, integrations, and AI
                systems we&apos;ve delivered.
              </p>
            </div>
            <Button href="/work/" variant="ghost" className="hidden shrink-0 md:inline-flex">
              View all →
            </Button>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {highlights.map((project) => (
              <div
                key={project.slug}
                className="rounded-xl border border-border bg-background p-6 shadow-sm"
              >
                <span
                  className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-medium ${
                    project.pillar === "erp"
                      ? "bg-brand-light text-brand"
                      : "bg-muted-bg text-foreground"
                  }`}
                >
                  {project.pillar === "erp" ? "ERP & Compliance" : "AI & Automation"}
                </span>
                <h3 className="mt-4 font-semibold text-foreground">{project.title}</h3>
                <p className="mt-1 text-sm text-muted">{project.client}</p>
              </div>
            ))}
          </div>
          <Button href="/work/" variant="ghost" className="mt-8 md:hidden">
            View all →
          </Button>
        </Container>
      </section>

      {/* CTA */}
      <section>
        <Container className="flex flex-col items-start gap-6 py-20 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-lg text-2xl font-semibold tracking-tight text-foreground">
            Have a compliance deadline, or a system that doesn&apos;t talk to
            itself?
          </h2>
          <Button href="/contact/" className="shrink-0">
            Get in touch
          </Button>
        </Container>
      </section>
    </>
  );
}
