import type { Metadata } from "next";
import Container from "@/components/Container";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Phrowler collects, uses, and protects your information.",
};

const sections = [
  {
    title: "1. Who this policy covers",
    body: [
      `This Privacy Policy explains how ${site.legal.entityName}, trading as Phrowler, handles information collected through ${"phrowler.com"} (the "Site") and through direct contact with us (email, WhatsApp, or phone).`,
    ],
  },
  {
    title: "2. Information we collect",
    body: [
      "Contact form submissions: when you fill out the contact form, we receive your name, email address, company name, the systems you mention, and your project details. This is submitted through Formspree, a third-party form-handling service, which processes it on our behalf.",
      "WhatsApp messages: if you contact us via WhatsApp, that conversation is handled within WhatsApp and governed by Meta's own privacy policy, not by this Site directly.",
      "Email: if you email us directly, we receive whatever you choose to include in that email.",
      "Standard hosting logs: our hosting provider automatically logs basic technical information (such as IP address and browser type) for security and performance purposes, as is standard for any website.",
    ],
  },
  {
    title: "3. What we don't collect",
    body: [
      "This Site does not use cookies, analytics scripts, advertising pixels, or any third-party tracking. We don't build a profile of your browsing activity.",
    ],
  },
  {
    title: "4. How we use your information",
    body: [
      "We use the information you provide to respond to your inquiry, prepare a proposal, and, if you engage us, deliver the agreed services. We do not sell your information to third parties, and we do not use it for advertising.",
    ],
  },
  {
    title: "5. Third parties we rely on",
    body: [
      "Formspree processes contact form submissions on our behalf. Vercel hosts this website. WhatsApp (Meta) handles any conversation you start with us there. Each of these providers has its own privacy policy governing how it handles data in its own systems.",
    ],
  },
  {
    title: "6. Data retention",
    body: [
      "We keep contact form inquiries for as long as reasonably needed to respond to you and for our own business records. If you become a client, project-related data is retained according to the terms of your specific signed agreement.",
    ],
  },
  {
    title: "7. Your rights",
    body: [
      `You can ask us to access, correct, or delete the personal information we hold about you by emailing ${site.email}. We will respond within a reasonable time.`,
    ],
  },
  {
    title: "8. Security",
    body: [
      "We take reasonable technical and organizational measures to protect the information you share with us. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    title: "9. Changes to this policy",
    body: [
      "We may update this policy from time to time. The version in effect at the time you use this Site applies.",
    ],
  },
  {
    title: "10. Contact",
    body: [
      `Questions about this policy can be sent to ${site.email}.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="border-b border-border">
        <Container className="py-20">
          <p className="font-mono-label text-xs uppercase text-brand">Legal</p>
          <h1 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-6 max-w-2xl text-muted">
            Last updated October 2026. This policy explains what information
            we collect through this site and how we use it.
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
