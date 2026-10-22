import Container from "@/components/Container";
import { caseStudies } from "@/lib/data";
import ArrowLink from "./ArrowLink";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import WorkDiagram, { type DiagramNode } from "./WorkDiagram";

type DiagramConfig = {
  caption: string;
  inputsLabel?: string;
  outputsLabel?: string;
  inputs: DiagramNode[];
  core: string;
  outputs: string[];
};

const toNodes = (labels: string[]): DiagramNode[] =>
  labels.map((label) => ({ label }));

const diagramBySlug: Record<string, DiagramConfig> = {
  "nigeria-firs-multi-erp-rollout": {
    caption: "Cross-ERP e-invoicing pipeline",
    inputsLabel: "ERP families",
    outputsLabel: "Compliance result",
    inputs: [
      { label: "SAP" },
      { label: "Oracle", logo: "oracle.png" },
      { label: "Sage", logo: "sage.png" },
      { label: "Dynamics 365", logo: "dynamics-365.png" },
    ],
    core: "Cross-ERP transformation layer",
    outputs: [
      "Normalised FIRS / NRS payloads",
      "IRN & QR injection",
      "No manual intervention",
    ],
  },
  "erpnext-fmcg-manufacturing": {
    caption: "ERPNext implementation",
    inputsLabel: "Modules",
    inputs: toNodes([
      "Procurement",
      "Inventory",
      "Production",
      "Accounting",
    ]),
    core: "One ERPNext instance",
    outputs: ["Unified stock & production", "Custom dashboards", "Workflow approvals"],
  },
  "as2-edi-pernod-ricard": {
    caption: "AS2 / EDI middleware",
    inputsLabel: "Source",
    inputs: toNodes(["Global ERP"]),
    core: "AS2 middleware",
    outputs: ["FIRS access point", "Automated B2B exchange"],
  },
  "computer-vision-fashion-tagging": {
    caption: "Computer vision pipeline",
    inputsLabel: "Input",
    inputs: toNodes(["Product imagery"]),
    core: "CV + NLP pipeline",
    outputs: [
      "Automated tagging",
      "Visual similarity search",
      "45,000+ daily data points",
    ],
  },
};

const flagship = caseStudies.find(
  (c) => c.slug === "nigeria-firs-multi-erp-rollout"
)!;

const supportingSlugs = [
  "erpnext-fmcg-manufacturing",
  "as2-edi-pernod-ricard",
  "computer-vision-fashion-tagging",
];
const supporting = supportingSlugs
  .map((slug) => caseStudies.find((c) => c.slug === slug))
  .filter((c): c is NonNullable<typeof c> => Boolean(c));

function CategoryTag({ pillar }: { pillar: "erp" | "ai" }) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full px-3 py-1 font-mono-label text-[10px] uppercase ${
        pillar === "erp"
          ? "bg-brand-light text-brand-dark"
          : "bg-foreground text-paper"
      }`}
    >
      {pillar === "erp" ? "ERP & compliance" : "AI & automation"}
    </span>
  );
}

export default function FeaturedWork() {
  return (
    <section className="border-b border-border">
      <Container className="py-20 md:py-28">
        <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Eyebrow>Selected work</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-medium leading-[1.02] text-foreground md:text-5xl">
              Built in production, under real constraints.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <p className="max-w-sm text-muted lg:text-right">
              Compliance rollouts across four ERP families, integrations with
              global brands, and AI systems handling tens of thousands of
              records a day.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <article className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            <WorkDiagram
              caption={diagramBySlug[flagship.slug].caption}
              inputsLabel={diagramBySlug[flagship.slug].inputsLabel}
              outputsLabel={diagramBySlug[flagship.slug].outputsLabel}
              inputs={diagramBySlug[flagship.slug].inputs}
              core={diagramBySlug[flagship.slug].core}
              outputs={diagramBySlug[flagship.slug].outputs}
            />

            <div className="lg:py-1">
              <CategoryTag pillar={flagship.pillar} />
              <h3 className="mt-5 font-display text-3xl font-medium leading-[1.05] text-foreground md:text-[2.1rem]">
                {flagship.title}
              </h3>
              <p className="mt-2 font-mono-label text-[10px] uppercase text-muted">
                {flagship.client}
              </p>
              <p className="mt-5 max-w-xl leading-relaxed text-muted">
                {flagship.summary}
              </p>

              <blockquote className="mt-7 border-l-2 border-brand pl-5">
                <p className="font-display text-2xl font-medium text-foreground">
                  16+ Tier-1 clients
                </p>
                <p className="mt-1 text-sm text-muted">
                  rolled onto one compliance pipeline without disrupting existing
                  invoicing operations.
                </p>
              </blockquote>

              <ul className="mt-7 flex flex-wrap gap-2">
                {flagship.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md bg-muted-bg px-2.5 py-1 font-mono-label text-[10px] uppercase text-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <ArrowLink href="/work/" className="mt-7">
                Read more engagements
              </ArrowLink>
            </div>
          </article>
        </Reveal>

        <div className="mt-16 grid gap-12 border-t border-border pt-14 md:grid-cols-3 md:gap-0 md:divide-x md:divide-border">
          {supporting.map((project, index) => {
            const diagram = diagramBySlug[project.slug];
            return (
              <Reveal
                key={project.slug}
                delay={index * 70}
                className="md:px-8 md:first:pl-0 md:last:pr-0"
              >
                <WorkDiagram
                  caption={diagram.caption}
                  inputsLabel={diagram.inputsLabel}
                  outputsLabel={diagram.outputsLabel}
                  inputs={diagram.inputs}
                  core={diagram.core}
                  outputs={diagram.outputs}
                  orientation="vertical"
                />
                <div className="mt-6">
                  <CategoryTag pillar={project.pillar} />
                  <h3 className="mt-4 font-display text-xl font-medium leading-snug text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 font-mono-label text-[10px] uppercase text-muted">
                    {project.client}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {project.summary}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
