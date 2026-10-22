import Container from "@/components/Container";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

const problems = [
  {
    number: "01",
    title: "Systems that don't talk to each other",
    impact:
      "Finance, sales, and operations run on different tools. Somebody retypes the same data into each one, and nobody can say which number is the right one.",
    response:
      "We connect the systems you already run into one flow, so data is entered once and stays consistent everywhere.",
  },
  {
    number: "02",
    title: "E-invoicing mandates with real deadlines",
    impact:
      "Tax authorities increasingly require invoices to be submitted digitally, in their format, on the day they are issued. Falling behind means rejected invoices and blocked payments.",
    response:
      "We wire your ERP directly to the authority, so every invoice goes out compliant without manual submission.",
  },
  {
    number: "03",
    title: "Manual work that eats the week",
    impact:
      "Approvals sit in inboxes, leads are pasted between tools, stock is reconciled by spreadsheet. Skilled people spend their days moving data instead of acting on it.",
    response:
      "We automate the workflow end to end, with alerts when something genuinely needs a human.",
  },
  {
    number: "04",
    title: "Reporting that never quite agrees",
    impact:
      "The sales dashboard, the finance export, and the operations sheet tell three different stories, and month-end becomes a reconciliation exercise.",
    response:
      "We build one reporting layer over your ERP and source systems, so the numbers agree before the meeting starts.",
  },
];

export default function Problems() {
  return (
    <section className="border-b border-border">
      <Container className="py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>The problems we are called in to fix</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-medium leading-[1.02] text-foreground md:text-5xl">
              Disconnected systems cost more than they save.
            </h2>
            <p className="mt-5 max-w-sm text-muted">
              They show up as rejected invoices, duplicated data, missed
              handoffs, and reports nobody fully trusts. Here is what that looks
              like in practice, and what we do about it.
            </p>
          </Reveal>

          <ol>
            {problems.map((problem, index) => (
              <Reveal key={problem.number} delay={index * 60} as="li" className="list-none">
                <div className="group grid gap-x-8 gap-y-3 border-t border-border py-9 transition-transform duration-300 md:grid-cols-[4rem_1fr] md:group-hover:translate-x-1 first:border-t-0 first:pt-0">
                  <span className="font-display text-outline text-5xl font-medium leading-none md:text-6xl">
                    {problem.number}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-medium leading-tight text-foreground md:text-[1.75rem]">
                      {problem.title}
                    </h3>
                    <p className="mt-3 max-w-2xl leading-relaxed text-muted">
                      {problem.impact}
                    </p>
                    <p className="mt-4 flex max-w-2xl gap-3 text-sm leading-relaxed text-foreground">
                      <span className="text-brand" aria-hidden="true">
                        →
                      </span>
                      <span>
                        <span className="font-mono-label text-[10px] uppercase text-brand-dark">
                          What we do
                        </span>{" "}
                        {problem.response}
                      </span>
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
