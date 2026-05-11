"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, AlertCircle } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

const volumes = [
  "Less than 100 claims / month",
  "100 to 500 claims / month",
  "500 to 2,000 claims / month",
  "More than 2,000 claims / month",
  "Not sure yet",
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrors({});
    setErrorMessage(null);

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("success");
        event.currentTarget.reset();
        return;
      }

      const data = (await res.json().catch(() => ({}))) as {
        errors?: Record<string, string>;
        error?: string;
      };
      setErrors(data.errors ?? {});
      setErrorMessage(
        data.error ??
          "We could not send your message. Please email hello@meridianbilling.co directly."
      );
      setStatus("error");
    } catch {
      setErrorMessage(
        "Network error. Please email hello@meridianbilling.co directly."
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 rounded-[var(--radius-lg)] border border-[var(--color-accent-line)] bg-[var(--color-accent-soft)] p-8">
        <div className="flex items-center gap-3">
          <CheckCircle2 className="size-6 text-[var(--color-accent)]" />
          <h3 className="text-lg font-semibold text-[var(--color-fg)]">
            Message received.
          </h3>
        </div>
        <p className="text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
          Thank you. A member of our team will reach out within one business
          day. If your request is urgent, please email{" "}
          <a
            href="mailto:hello@meridianbilling.co"
            className="text-[var(--color-accent)] underline-offset-4 hover:underline"
          >
            hello@meridianbilling.co
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5"
      aria-busy={status === "submitting"}
    >
      <div className="hidden">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Your name"
          name="name"
          required
          autoComplete="name"
          error={errors.name}
        />
        <Field
          label="Work email"
          name="email"
          type="email"
          required
          autoComplete="email"
          error={errors.email}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Practice or company"
          name="company"
          autoComplete="organization"
          error={errors.company}
        />
        <Field
          label="Phone (optional)"
          name="phone"
          type="tel"
          autoComplete="tel"
          error={errors.phone}
        />
      </div>

      <div>
        <label
          htmlFor="volume"
          className="mb-2 block text-sm font-medium text-[var(--color-fg)]"
        >
          Monthly claim volume
        </label>
        <div className="relative">
          <select
            id="volume"
            name="volume"
            defaultValue=""
            className="block h-11 w-full appearance-none rounded-[var(--radius-md)] border border-white/[0.07] bg-[var(--color-surface)] px-4 pr-10 text-[15px] text-[var(--color-fg)] outline-none transition-colors hover:border-white/[0.12] focus:border-[var(--color-accent-line)] focus:ring-2 focus:ring-[var(--color-accent-line)]"
          >
            <option value="" disabled>
              Select an estimate
            </option>
            {volumes.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[var(--color-fg-subtle)]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <path d="M5 8l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-[var(--color-fg)]"
        >
          Tell us a bit about your practice <span className="text-[var(--color-danger)]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="block w-full resize-y rounded-[var(--radius-md)] border border-white/[0.07] bg-[var(--color-surface)] px-4 py-3 text-[15px] text-[var(--color-fg)] outline-none transition-colors placeholder:text-[var(--color-fg-faint)] hover:border-white/[0.12] focus:border-[var(--color-accent-line)] focus:ring-2 focus:ring-[var(--color-accent-line)]"
          placeholder="Specialty, current EHR, what you're hoping to fix or improve..."
        />
        {errors.message ? (
          <p className="mt-2 text-sm text-[var(--color-danger)]">{errors.message}</p>
        ) : null}
      </div>

      {errorMessage ? (
        <div className="flex items-start gap-3 rounded-[var(--radius-md)] border border-[var(--color-danger)]/30 bg-[var(--color-danger)]/10 p-4 text-sm text-[var(--color-fg)]">
          <AlertCircle className="mt-0.5 size-4 shrink-0 text-[var(--color-danger)]" />
          <span>{errorMessage}</span>
        </div>
      ) : null}

      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <p className="text-xs text-[var(--color-fg-subtle)]">
          We respond within one business day. No drip campaigns.
        </p>
        <Button
          type="submit"
          disabled={status === "submitting"}
          size="lg"
          trailingIcon
        >
          {status === "submitting" ? "Sending..." : "Send message"}
        </Button>
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  error?: string;
};

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  error,
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-[var(--color-fg)]"
      >
        {label}
        {required ? (
          <span className="text-[var(--color-danger)]"> *</span>
        ) : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="block h-11 w-full rounded-[var(--radius-md)] border border-white/[0.07] bg-[var(--color-surface)] px-4 text-[15px] text-[var(--color-fg)] outline-none transition-colors placeholder:text-[var(--color-fg-faint)] hover:border-white/[0.12] focus:border-[var(--color-accent-line)] focus:ring-2 focus:ring-[var(--color-accent-line)]"
      />
      {error ? (
        <p className="mt-2 text-sm text-[var(--color-danger)]">{error}</p>
      ) : null}
    </div>
  );
}
