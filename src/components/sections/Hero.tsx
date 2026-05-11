import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { heroCopy } from "@/content/siteCopy";
import { HeroDashboard } from "./HeroDashboard";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-60" />
        <div className="absolute inset-0 bg-radial-fade" />
        <div className="absolute inset-0 bg-violet-fade" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <Container>
        <div className="grid items-center gap-16 pt-24 pb-20 md:pt-32 md:pb-28 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6 anim-rise">
            <Badge tone="accent">{heroCopy.eyebrow}</Badge>
            <h1 className="mt-6 text-balance text-[44px] leading-[1.05] font-semibold tracking-[-0.025em] sm:text-[56px] lg:text-[64px]">
              <span className="text-gradient">{heroCopy.title}</span>{" "}
              <span className="text-gradient-accent">{heroCopy.titleAccent}</span>
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-[17px] leading-relaxed text-[var(--color-fg-muted)] sm:text-lg">
              {heroCopy.subtitle}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href={heroCopy.primaryCta.href} size="lg" trailingIcon>
                {heroCopy.primaryCta.label}
              </Button>
              <Button
                href={heroCopy.secondaryCta.href}
                variant="secondary"
                size="lg"
              >
                {heroCopy.secondaryCta.label}
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[var(--color-fg-subtle)]">
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-[var(--color-accent)]" />
                Specialized in behavioral health
              </div>
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-[var(--color-violet)]" />
                Works inside your EHR
              </div>
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-[var(--color-fg-subtle)]" />
                HIPAA-aligned operations
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <HeroDashboard />
          </div>
        </div>
      </Container>
    </section>
  );
}
