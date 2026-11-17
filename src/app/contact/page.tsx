"use client";

import { useId, useState } from "react";
import { Mail, MapPin, Phone, CheckCircle2 } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { contactPage, site } from "@/content/site";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setStatus("sending");
    setError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          company: form.get("company"),
          phone: form.get("phone"),
          message: form.get("message"),
          interests: form.getAll("interest"),
          website: form.get("website"),
        }),
      });
      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong");
      }
      setSubmitted(true);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
        <div
          className="absolute -top-1/3 left-1/2 h-[55vh] w-[55vh] -translate-x-1/2 rounded-full opacity-[0.14] blur-3xl"
          style={{ background: "radial-gradient(circle, #f5b544 0%, transparent 65%)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-12 md:pt-48 md:pb-16">
          <Eyebrow>{contactPage.eyebrow}</Eyebrow>
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl tracking-tight max-w-5xl text-white leading-[1]">
            {contactPage.heading[0]}
            <br />
            <span className="italic font-light text-white/70">{contactPage.heading[1]}</span>
          </h1>
          <p className="mt-10 max-w-2xl text-lg text-[var(--muted)] leading-relaxed">
            {contactPage.intro}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="grid lg:grid-cols-3 gap-8">
          <Reveal className="space-y-6 lg:col-span-1">
            <div className="rounded-2xl border border-white/10 bg-white/[0.015] p-7">
              <Eyebrow className="mb-5">Direct</Eyebrow>
              <ul className="space-y-4 text-sm text-white/85">
                <li className="flex items-center gap-3">
                  <Mail size={15} className="text-white/55 shrink-0" />
                  <a href={`mailto:${site.contact.email}`} className="link-underline hover:text-white">
                    {site.contact.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={15} className="text-white/55 shrink-0" />
                  <a href={site.contact.phoneHref} className="link-underline hover:text-white">
                    {site.contact.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={15} className="text-white/55 shrink-0 mt-0.5" />
                  <span>
                    {site.contact.locations}
                    <br />
                    <span className="text-[var(--muted)] text-xs">{site.contact.regionNote}</span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.015] p-7">
              <Eyebrow className="mb-5">What happens next</Eyebrow>
              <ol className="space-y-4 text-sm text-[var(--muted)]">
                {contactPage.nextSteps.map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="font-display text-white/85 tabular-nums">
                      0{i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            {submitted ? (
              <div className="rounded-2xl border border-white/10 bg-white/[0.015] p-12 md:p-16 text-center">
                <div className="h-12 w-12 mx-auto rounded-full border border-white/15 bg-white/[0.04] grid place-items-center mb-6">
                  <CheckCircle2 size={20} className="text-[var(--accent-amber)]" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl tracking-tight text-white">
                  {contactPage.success.title[0]}
                  <br />
                  <span className="italic font-light text-white/70">{contactPage.success.title[1]}</span>
                </h2>
                <p className="mt-5 text-[var(--muted)] max-w-md mx-auto">
                  {contactPage.success.body} {site.contact.email}
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-white/10 bg-white/[0.015] p-8 md:p-10 space-y-7"
                aria-label="Contact form"
              >
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Full name" name="name" autoComplete="name" required />
                  <Field label="Work email" name="email" type="email" autoComplete="email" required />
                  <Field label="Company" name="company" autoComplete="organization" required />
                  <Field label="Phone (optional)" name="phone" type="tel" autoComplete="tel" />
                </div>

                <fieldset>
                  <legend className="block text-[11px] uppercase tracking-[0.22em] text-white/55 mb-3">
                    Service of interest
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {contactPage.interests.map((i) => (
                      <label
                        key={i}
                        className="cursor-pointer rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1.5 text-xs text-white/70 hover:border-white/25 hover:text-white has-[:checked]:bg-white/[0.07] has-[:checked]:border-white/40 has-[:checked]:text-white transition-colors focus-within:ring-1 focus-within:ring-white/40"
                      >
                        <input type="checkbox" name="interest" value={i} className="sr-only" />
                        {i}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <Field
                  label="Project context"
                  name="message"
                  textarea
                  required
                  placeholder={contactPage.messagePlaceholder}
                />

                <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

                {status === "error" && (
                  <p role="alert" className="text-sm text-red-300">
                    {error}. You can also write to {site.contact.email}.
                  </p>
                )}

                <div className="flex items-center justify-between flex-wrap gap-4 pt-2">
                  <p className="text-xs text-[var(--muted)]">
                    {contactPage.consent}
                  </p>
                  <Button type="submit" size="md" variant="primary" magnetic disabled={status === "sending"}>
                    {status === "sending" ? "Sending…" : "Send message"}
                  </Button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
  placeholder,
  textarea = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  textarea?: boolean;
}) {
  const id = useId();
  const inputId = `${id}-${name}`;
  const cls =
    "w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-white/30 focus:bg-white/[0.04] transition-colors";

  return (
    <label htmlFor={inputId} className="block">
      <span className="block text-[11px] uppercase tracking-[0.22em] text-white/55 mb-2">
        {label}
        {required && <span aria-hidden className="text-[var(--accent-amber)] ml-1">*</span>}
      </span>
      {textarea ? (
        <textarea
          id={inputId}
          name={name}
          required={required}
          aria-required={required || undefined}
          rows={5}
          placeholder={placeholder}
          className={cls}
        />
      ) : (
        <input
          id={inputId}
          type={type}
          name={name}
          required={required}
          aria-required={required || undefined}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className={cls}
        />
      )}
    </label>
  );
}
