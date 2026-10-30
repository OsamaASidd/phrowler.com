"use client";

import { useState, FormEvent } from "react";
import { CheckIcon } from "@/components/icons";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (!res.ok || !result.ok) {
        throw new Error(result.error || "Something went wrong. Please try again.");
      }

      setSubmittedName(String(data.name ?? ""));
      setStatus("success");
      form.reset();
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="md:col-span-3 flex flex-col items-start gap-4 rounded-lg border border-emerald-200 bg-emerald-50 p-8">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
          <CheckIcon className="h-5 w-5" />
        </span>
        <div>
          <h2 className="text-lg font-semibold text-emerald-900">
            Thanks for reaching out, {submittedName}
          </h2>
          <p className="mt-2 text-sm text-emerald-800">
            We&apos;ve got your message and usually reply within one business day.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-sm font-medium text-emerald-700 underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="md:col-span-3 space-y-6 border border-border p-8"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-sm border border-border px-4 py-2.5 text-sm outline-none focus:border-ink"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-sm border border-border px-4 py-2.5 text-sm outline-none focus:border-ink"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="text-sm font-medium text-foreground">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="mt-2 w-full rounded-lg border border-border px-4 py-2.5 text-sm outline-none focus:border-brand"
        />
      </div>

      <div>
        <label htmlFor="systems" className="text-sm font-medium text-foreground">
          What systems are involved?
        </label>
        <input
          id="systems"
          name="systems"
          type="text"
          placeholder="e.g. Odoo, Sage X3, ERPNext"
          className="mt-2 w-full rounded-lg border border-border px-4 py-2.5 text-sm outline-none focus:border-brand"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full rounded-lg border border-border px-4 py-2.5 text-sm outline-none focus:border-brand"
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-600">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-sm bg-ink px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-brand disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
