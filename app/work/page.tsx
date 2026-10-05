import type { Metadata } from "next";
import Container from "@/components/Container";
import Button from "@/components/Button";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected engagements across ERP integration, e-invoicing compliance, and AI automation.",
};

export default function WorkPage() {
  return (
    <>
      <section className="border-b border-border">
        <Container className="py-20">
          <p className="font-mono-label text-xs uppercase text-brand">
            Work
          </p>
          <h1 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Selected engagements
          </h1>
          <p className="mt-6 max-w-2xl text-muted">
            A representative sample of compliance rollouts, ERP integrations,
            and AI systems delivered for clients across Nigeria, Pakistan,
            Saudi Arabia, India, and the UK.
          </p>
        </Container>
      </section>

      <section>
        <Container className="py-16">
          <div className="grid gap-6 md:grid-cols-2">
            {caseStudies.map((project) => (
              <article
                key={project.slug}
                className="flex flex-col rounded-xl border border-border bg-background p-7 shadow-sm"
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
                <h2 className="mt-4 text-lg font-semibold text-foreground">
                  {project.title}
                </h2>
                <p className="mt-1 text-sm text-muted">{project.client}</p>
                <p className="mt-4 text-sm text-foreground">{project.summary}</p>
                <ul className="mt-4 space-y-1.5">
                  {project.details.map((d) => (
                    <li
                      key={d}
                      className="text-sm text-muted before:mr-2 before:text-brand before:content-['—']"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md bg-muted-bg px-2.5 py-1 text-xs text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border">
        <Container className="flex flex-col items-start gap-6 py-16 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-lg text-xl font-semibold tracking-tight text-foreground">
            Something like this on your plate?
          </h2>
          <Button href="/contact/" className="shrink-0">
            Start a conversation
          </Button>
        </Container>
      </section>
    </>
  );
}
