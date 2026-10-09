import type { Metadata } from "next";
import Container from "@/components/Container";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing the use of phrowler.com and Phrowler's services.",
};

const sections = [
  {
    title: "1. Who we are",
    body: [
      `Phrowler is the trading name of ${site.legal.entityName}, CR No. ${site.legal.registrationNumber}, License No. ${site.legal.licenseNumber}, ${site.legal.jurisdiction}. These Terms of Service govern your use of ${"phrowler.com"} (the "Site") and any services described on it.`,
    ],
  },
  {
    title: "2. What this Site is",
    body: [
      "This Site is informational. It describes our ERP implementation, e-invoicing integration, AI automation, and web and mobile development services, along with indicative pricing. Nothing on this Site constitutes a binding offer or contract. A specific engagement only begins once we have agreed a scope and price with you in writing, typically through a signed proposal or agreement.",
    ],
  },
  {
    title: "3. Proposals, pricing, and engagements",
    body: [
      "Pricing shown on this Site or in any proposal document is indicative and valid only for the period stated in that proposal. Final scope and pricing are confirmed in writing after a scoping call, before any work begins.",
      "Each engagement is governed by the terms of its own signed proposal or agreement. Where those terms differ from this page, the signed agreement controls.",
    ],
  },
  {
    title: "4. Payment",
    body: [
      "One-time fees and recurring (monthly) fees are payable according to the terms agreed in your specific proposal or agreement. We reserve the right to pause or suspend ongoing services, including hosting and support, if payment is significantly overdue.",
    ],
  },
  {
    title: "5. Intellectual property",
    body: [
      "You retain ownership of your own business data, content, and any pre-existing systems you provide to us. Upon full payment for a specific engagement, custom deliverables built for you under that engagement transfer to you as agreed in the applicable proposal.",
      "We retain ownership of our own pre-existing tools, methodologies, and general-purpose code or components not specific to your engagement, and may reuse non-confidential techniques and approaches across other client work.",
    ],
  },
  {
    title: "6. Confidentiality",
    body: [
      "We treat business and technical information you share with us as confidential, and use it only to scope and deliver your engagement. We expect the same treatment of our proprietary methods and any non-public information we share with you.",
    ],
  },
  {
    title: "7. Third-party platforms",
    body: [
      "Our work frequently involves third-party platforms we do not own or control, including ERPNext/Frappe, Sage, Microsoft Dynamics 365, Oracle, Zoho Books, QuickBooks, Odoo, Frappe Cloud, and government systems such as Oman's Fawtara e-invoicing network. We are not responsible for outages, policy changes, pricing changes, or discontinuation of these third-party platforms, though we will work with you to adapt where reasonably possible.",
    ],
  },
  {
    title: "8. Limitation of liability",
    body: [
      "To the maximum extent permitted by law, Phrowler's total liability arising from any engagement is limited to the fees paid to us for that specific engagement in the twelve months preceding the claim. We are not liable for indirect, incidental, or consequential damages, including lost profits or lost data, except where such limitation is not permitted by applicable law.",
    ],
  },
  {
    title: "9. Support and warranty",
    body: [
      "Support windows, response times, and any warranty on delivered work are as described in your specific proposal or agreement. Where no specific term is agreed, we provide a reasonable period of support after go-live to address defects in the work we delivered, with further work billed separately.",
    ],
  },
  {
    title: "10. Governing law",
    body: [
      `These Terms are governed by the laws of the ${site.legal.jurisdiction}. Any dispute arising from these Terms or an engagement with us is subject to the exclusive jurisdiction of the courts of Oman, unless a signed agreement for a specific engagement states otherwise.`,
    ],
  },
  {
    title: "11. Changes to these Terms",
    body: [
      "We may update these Terms from time to time to reflect changes to our services or for legal or operational reasons. The version in effect at the time you use this Site or engage us applies.",
    ],
  },
  {
    title: "12. Contact",
    body: [
      `Questions about these Terms can be sent to ${site.email}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="border-b border-border">
        <Container className="py-20">
          <p className="font-mono-label text-xs uppercase text-brand">Legal</p>
          <h1 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-6 max-w-2xl text-muted">
            Last updated October 2026. These terms govern your use of this
            website and the services we describe on it.
          </p>
        </Container>
      </section>

      <section>
        <Container className="max-w-3xl py-16">
          <div className="space-y-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-lg font-semibold text-foreground">{s.title}</h2>
                {s.body.map((p, i) => (
                  <p key={i} className="mt-3 text-sm text-muted">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
