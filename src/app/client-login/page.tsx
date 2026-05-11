import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, Mail, Phone } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Client Login",
  description:
    "Existing client? Reach your secure portal or contact your account lead directly.",
  robots: { index: false, follow: false },
};

export default function ClientLoginPage() {
  return (
    <>
      <PageHeader
        eyebrow="Existing clients"
        title={
          <>
            <span className="text-gradient">Welcome back.</span>{" "}
            <span className="text-gradient-accent">Where would you like to go?</span>
          </>
        }
        description="Our client portal is hosted in your dedicated environment. If you cannot find your link, reach out and we will resend it."
      />

      <Section>
        <Container size="md">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-[var(--radius-xl)] border border-white/[0.06] bg-[var(--color-surface)] p-7">
              <div className="grid size-10 place-items-center rounded-[var(--radius-md)] border border-white/[0.06] bg-[var(--color-bg-raised)] text-[var(--color-accent)]">
                <ShieldCheck className="size-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">
                Open your secure portal
              </h3>
              <p className="mt-2 text-sm text-[var(--color-fg-muted)]">
                Use the unique portal URL provided during onboarding. We do not
                host a shared login on this site.
              </p>
              <Button
                href={`mailto:${site.contactEmail}?subject=Portal access`}
                variant="secondary"
                size="md"
                className="mt-6 w-full"
              >
                Lost your link? Email us
              </Button>
            </div>

            <div className="rounded-[var(--radius-xl)] border border-white/[0.06] bg-[var(--color-surface)] p-7">
              <div className="grid size-10 place-items-center rounded-[var(--radius-md)] border border-white/[0.06] bg-[var(--color-bg-raised)] text-[var(--color-violet)]">
                <Mail className="size-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">
                Reach your account lead
              </h3>
              <p className="mt-2 text-sm text-[var(--color-fg-muted)]">
                Your account lead replies within one business hour during
                normal hours.
              </p>
              <div className="mt-6 space-y-2 text-sm">
                <a
                  href={`mailto:${site.contactEmail}`}
                  className="flex items-center gap-2 text-[var(--color-fg)] hover:text-[var(--color-accent)]"
                >
                  <Mail className="size-4 text-[var(--color-fg-subtle)]" />
                  {site.contactEmail}
                </a>
                <a
                  href={`tel:${site.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-center gap-2 text-[var(--color-fg)] hover:text-[var(--color-accent)]"
                >
                  <Phone className="size-4 text-[var(--color-fg-subtle)]" />
                  {site.phone}
                </a>
              </div>
            </div>
          </div>

          <p className="mt-10 text-center text-xs text-[var(--color-fg-subtle)]">
            Please do not send protected health information through unencrypted
            email. Use your portal for any PHI-related requests.
          </p>
        </Container>
      </Section>
    </>
  );
}
