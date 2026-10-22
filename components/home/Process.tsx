import Container from "@/components/Container";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Scope it honestly",
    body: "We map the systems, constraints, and deadline you are working with, then tell you what is a two-week integration and what is a two-month one, before any contract is signed.",
  },
  {
    number: "02",
    title: "Design against your landscape",
    body: "Architecture built around the ERPs you actually run and the formats your tax authority actually requires, not a demo environment that does not match reality.",
  },
  {
    number: "03",
    title: "Build & connect",
    body: "Implementation, integrations, and automation delivered as working software on staging environments you can log into, so progress is something you can see.",
  },
  {
    number: "04",
    title: "Test, then hand over",
    body: "We test against real instances and real production load, then hand over documentation and a clean runbook, with ongoing support if you want it.",
  },
];

export default function Process() {
  return (
    <section className="border-b border-border bg-background-2">
      <Container className="py-20 md:py-28">
        <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow>How we work</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-medium leading-[1.02] text-foreground md:text-5xl">
              A short path from first call to something running.
            </h2>
          </div>
          <p className="text-muted lg:col-span-5">
            No multi-month discovery phase and no army of account managers. You
            work directly with the people building the system.
          </p>
        </Reveal>

        <ol className="relative mt-16 grid gap-10 border-l border-border-strong pl-8 md:grid-cols-4 md:gap-8 md:border-l-0 md:pl-0">
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-[7px] hidden h-px bg-border-strong md:block"
          />
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 70} as="li" className="relative list-none">
              <span
                aria-hidden="true"
                className="absolute -left-8 top-1 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-brand bg-background-2 md:static md:translate-x-0"
              />
              <div className="md:mt-6">
                <p className="font-mono-label text-xs uppercase text-brand-dark">
                  {step.number}
                </p>
                <h3 className="mt-2 font-display text-xl font-medium text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
