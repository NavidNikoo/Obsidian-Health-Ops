import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-40" />
        <div className="absolute inset-0 bg-radial-fade" />
      </div>
      <Container size="md">
        <div className="flex min-h-[60vh] flex-col items-center justify-center py-32 text-center">
          <div className="font-mono text-xs tracking-[0.2em] text-[var(--color-fg-subtle)]">
            404
          </div>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            <span className="text-gradient">This page is</span>{" "}
            <span className="text-gradient-accent">out of network.</span>
          </h1>
          <p className="mt-4 max-w-lg text-[var(--color-fg-muted)]">
            The link you followed does not exist or has moved. Try the home
            page or get in touch.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href="/" trailingIcon>
              Back to home
            </Button>
            <Link
              href="/contact"
              className="text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]"
            >
              or contact us
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
