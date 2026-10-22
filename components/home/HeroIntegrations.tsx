import Image from "next/image";
import { CheckIcon } from "@/components/icons";
import { platforms } from "@/lib/data";

const shortNames: Record<string, string> = {
  ERPNext: "ERPNext",
  "Microsoft Dynamics 365": "Dynamics 365",
  Oracle: "Oracle",
  Sage: "Sage",
  Odoo: "Odoo",
  QuickBooks: "QuickBooks",
  "Zoho Books": "Zoho Books",
};

const outcomes = [
  {
    label: "Invoices clear the tax authority on their own",
    detail: "FIRS · FBR · ZATCA · GST · UK MTD",
  },
  {
    label: "Approvals & alerts land where you work",
    detail: "Slack · Email",
  },
  {
    label: "One set of numbers across every system",
    detail: "Dashboards & reporting",
  },
  {
    label: "AI grounded in your own business data",
    detail: "Assistants · agents · guardrails",
  },
];

function Flow({ flip = false }: { flip?: boolean }) {
  return (
    <div className="flex justify-center py-1" aria-hidden="true">
      <span
        className={`flow-connector block h-8 ${flip ? "rotate-180" : ""}`}
      />
    </div>
  );
}

/**
 * Hero visual: the Phrowler story as a single vertical pipeline. Systems feed
 * in from the top, pass through one integration layer, and leave as business
 * outcomes. Built from real platform assets, no invented screenshots.
 */
export default function HeroIntegrations() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-ink text-paper shadow-[0_30px_80px_-30px_rgba(12,12,15,0.7)] ring-1 ring-white/10">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
        <span className="font-mono-label text-[10px] uppercase text-paper/60">
          Reference architecture
        </span>
        <span className="flex items-center gap-2 font-mono-label text-[10px] uppercase text-brand-bright">
          <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-bright opacity-60 motion-reduce:animate-none" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-bright" />
          </span>
          Live pipelines
        </span>
      </div>

      <div className="bg-grid-dark px-5 py-6 sm:px-6 sm:py-7">
        <p className="font-mono-label text-[10px] uppercase text-paper/60">
          Your systems
        </p>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {platforms.map((platform) => (
            <li
              key={platform.name}
              className="flex items-center gap-2 rounded-md bg-paper/95 px-2 py-1.5"
            >
              <Image
                src={`/assets/logos/${platform.logo}`}
                alt=""
                width={40}
                height={20}
                className="h-4 w-8 shrink-0 object-contain"
              />
              <span className="text-[11px] font-medium text-ink">
                {shortNames[platform.name] ?? platform.name}
              </span>
            </li>
          ))}
        </ul>

        <Flow />

        <div className="flex items-center gap-3.5 rounded-xl bg-brand-bright px-4 py-3.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-ink">
            <Image
              src="/assets/phrowler-logo.png"
              alt=""
              width={36}
              height={36}
              className="h-full w-full"
            />
          </span>
          <div className="leading-tight">
            <p className="font-display text-lg font-semibold text-ink">
              Phrowler
            </p>
            <p className="font-mono-label text-[10px] uppercase text-ink">
              Integration &amp; automation layer
            </p>
          </div>
        </div>

        <Flow />

        <p className="font-mono-label text-[10px] uppercase text-paper/60">
          What comes out
        </p>
        <ul className="mt-3 divide-y divide-white/10">
          {outcomes.map((outcome) => (
            <li key={outcome.label} className="flex items-start gap-3 py-2.5">
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-bright" />
              <div>
                <p className="text-[13px] font-medium leading-snug text-paper">
                  {outcome.label}
                </p>
                <p className="mt-0.5 font-mono-label text-[10px] uppercase text-paper/60">
                  {outcome.detail}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
