import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Button from "@/components/Button";
import { CatalogIcon, type IconKey } from "@/components/icons";

export const metadata: Metadata = {
  title: "Enterprise Knowledge AI",
  description:
    "Local AI trained exclusively on your business data — predicts risk, prescribes next actions, and helps leadership strategize. Runs on your own infrastructure, cites every answer.",
};

const stats = [
  { value: "42%", label: "of critical business knowledge is lost when people leave. Every year." },
  { value: "61%", label: "of businesses make decisions on data that is 6+ months stale." },
  { value: "900+", label: "disconnected apps — the average enterprise runs this many simultaneously." },
  { value: "$47M", label: "average annual cost of poor knowledge management. Per company." },
];

const chat = [
  { from: "you", text: "What's causing the Q3 revenue dip?" },
  {
    from: "ai",
    text: "Based on your last 18 months of sales data, the dip is driven by 3 factors: supplier delays (+14 days), 22% churn in SMB segments, and seasonal underspend. Here's what I recommend…",
  },
  { from: "you", text: "What should we do first?" },
  {
    from: "ai",
    text: "Priority 1: re-engage your top 40 churned accounts. I've drafted outreach scripts based on their purchase history.",
  },
];

type Feature = { icon: IconKey; name: string; body: string };

const meetPhrowler: Feature[] = [
  { icon: "trending", name: "Predict — Risk & Forecast", body: "Spot risks 30–90 days ahead, before they show up on a P&L." },
  { icon: "workflow", name: "Prescribe — Next Best Action", body: "Step-by-step next actions generated directly from your own data." },
  { icon: "chart", name: "Strategize — Market & Growth", body: "Beat competitors with live market intelligence built into every answer." },
];

const localAi: Feature[] = [
  { icon: "gauge", name: "Runs Locally", body: "The model is deployed on your own hardware or your own VPC. No prompts, documents, or employee questions are sent to a third-party API." },
  { icon: "scan", name: "Every Answer Cited", body: "Responses are retrieved from your actual documents and returned with the source attached. You can open the record the answer came from." },
  { icon: "eye", name: "Says “I Don’t Know”", body: "If the answer isn't in your data, it tells you instead of inventing something plausible. Silence beats a confident guess." },
  { icon: "layers", name: "Your Data Stays Yours", body: "Nothing is used to train anyone else's model. No external retention, no shared tenancy, no vendor reading your operations." },
];

const dataControl: Feature[] = [
  { icon: "layers", name: "Private Deployment", body: "Your instance runs on your infrastructure — cloud or on-premise. No data shared with any third party, ever." },
  { icon: "eye", name: "Role-Based Access", body: "Granular permissions by team, department, or individual. Your CFO sees financials; your ops team sees ops." },
  { icon: "scan", name: "Audit Trail", body: "Every query, every output is logged. Full visibility into what was asked, what was answered, and by whom." },
  { icon: "gauge", name: "Enterprise-Grade Encryption", body: "AES-256 at rest, TLS 1.3 in transit. SOC 2 Type II–compliant architecture as standard." },
];

const adoption: Feature[] = [
  { icon: "sparkle", name: "One-Click Functionality", body: "A modern, intuitive design language where every insight is one click away. No manuals, no learning curve." },
  { icon: "bot", name: "Ready-to-Use Platform", body: "No lengthy implementation cycles. Just plug in your data source and start asking questions from day one." },
  { icon: "swap", name: "Anytime, Anywhere Access", body: "Device-agnostic by design — the same seamless experience on your phone, tablet, or PC." },
  { icon: "eye", name: "One-Click Access Control", body: "Simple user management lets you control and restrict exactly what each user can see and view." },
  { icon: "layers", name: "One Stop Shop", body: "One simple solution for the data-analysis needs of every user, role, and department in your organization." },
];

const purposeBuilt: Feature[] = [
  { icon: "sparkle", name: "Customized for Your Business", body: "Eliminates the noise of generic GPT tools and delivers clear insights tailored to your specific business needs." },
  { icon: "chart", name: "Information Simplified", body: "Converts your data into simple, intuitive visuals and summaries — so decisions are quick and informed." },
  { icon: "trending", name: "Empowered Decision Making", body: "Every decision grounded in facts and data — not emotion and instinct." },
  { icon: "gauge", name: "Privacy & Security", body: "End-to-end encryption as standard, with an extra layer via dedicated cloud or on-premise deployment." },
  { icon: "receipt", name: "Cost Control & Management", body: "A dedicated module gives in-depth visibility of every token used, with easy-to-implement usage and cost controls." },
];

function FeatureGrid({ features, cols = "lg:grid-cols-3" }: { features: Feature[]; cols?: string }) {
  return (
    <div className={`mt-10 grid gap-5 sm:grid-cols-2 ${cols}`}>
      {features.map((f) => (
        <div key={f.name} className="rounded-xl border border-border bg-background p-6 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-light text-brand">
            <CatalogIcon icon={f.icon} />
          </div>
          <h3 className="mt-4 font-semibold text-foreground">{f.name}</h3>
          <p className="mt-2 text-sm text-muted">{f.body}</p>
        </div>
      ))}
    </div>
  );
}

export default function EnterpriseKnowledgeAiPage() {
  return (
    <>
      <section className="border-b border-border">
        <Container className="py-20">
          <Link href="/ai/" className="font-mono-label text-xs uppercase text-brand hover:underline">
            ← AI services
          </Link>
          <span className="mt-4 inline-block rounded-full bg-brand-light px-3 py-1 text-xs font-medium text-brand">
            Featured
          </span>
          <h1 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Enterprise GPT for your business data
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-brand">
            Your business already has the answers. You just can&apos;t hear them — yet.
          </p>
          <p className="mt-4 max-w-2xl text-muted">
            An always-on AI knowledge worker for decision-making — trained
            exclusively on your business data, so it predicts risk,
            prescribes next actions, and helps leadership strategize.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Button href="/contact/">Book a demo</Button>
            <Button href="#demo" variant="ghost">
              See how it works →
            </Button>
          </div>
        </Container>
      </section>

      <section className="border-b border-border">
        <Container className="flex flex-wrap gap-x-12 gap-y-6 py-10">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-mono-label text-2xl font-semibold text-foreground">
                {stat.value}
              </div>
              <div className="mt-1 max-w-[16rem] text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </Container>
      </section>

      <section id="demo" className="border-b border-border scroll-mt-16">
        <Container className="py-16">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            What if your business data could talk back to you?
          </h2>
          <div className="mt-8 max-w-2xl rounded-xl border border-border bg-background p-6 shadow-sm">
            <div className="space-y-4">
              {chat.map((m, i) => (
                <div key={i} className={m.from === "ai" ? "flex justify-start" : "flex justify-end"}>
                  <div
                    className={`max-w-sm rounded-lg px-4 py-3 text-sm ${
                      m.from === "ai"
                        ? "bg-brand-light text-foreground"
                        : "bg-muted-bg text-foreground"
                    }`}
                  >
                    <div className="font-mono-label text-[10px] uppercase text-muted">
                      {m.from === "ai" ? "Phrowler" : "You"}
                    </div>
                    <p className="mt-1">{m.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-border">
        <Container className="py-16">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Meet Phrowler — enterprise GPT, trained exclusively on your data
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted">
            Not generic AI. Not another dashboard. Your institutional
            knowledge, made intelligent.
          </p>
          <FeatureGrid features={meetPhrowler} />
        </Container>
      </section>

      <section className="border-b border-border bg-muted-bg">
        <Container className="py-16">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Local AI. Grounded answers. No slop.
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted">
            Runs inside your network and answers from your records — not
            from the open internet.
          </p>
          <FeatureGrid features={localAi} cols="lg:grid-cols-4" />
        </Container>
      </section>

      <section className="border-b border-border">
        <Container className="py-16">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Your data never leaves your control
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted">
            The first question every enterprise asks — and the right one.
          </p>
          <FeatureGrid features={dataControl} cols="lg:grid-cols-4" />
        </Container>
      </section>

      <section className="border-b border-border bg-muted-bg">
        <Container className="py-16">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Built for adoption, not adaptation
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted">
            From first login to enterprise-wide rollout.
          </p>
          <FeatureGrid features={adoption} />
        </Container>
      </section>

      <section className="border-b border-border">
        <Container className="py-16">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Purpose-built, not another generic GPT
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted">
            Clarity you can act on. Costs you can see.
          </p>
          <FeatureGrid features={purposeBuilt} />

          <div className="mt-6 max-w-sm rounded-xl border border-border bg-background p-5 shadow-sm">
            <p className="font-mono-label text-xs uppercase text-muted">
              Your token spend, live
            </p>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted-bg">
              <div className="h-full w-[64%] rounded-full bg-brand" />
            </div>
            <p className="mt-2 text-sm text-muted">
              64% of this week&apos;s token budget used
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container className="flex flex-col items-start gap-6 py-16 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-lg text-xl font-semibold tracking-tight text-foreground">
            Ready to hear what your business data has been trying to tell you?
          </h2>
          <Button href="/contact/" className="shrink-0">
            Book a demo
          </Button>
        </Container>
      </section>
    </>
  );
}
