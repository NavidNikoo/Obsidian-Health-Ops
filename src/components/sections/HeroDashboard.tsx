import { ArrowUpRight, CheckCircle2, Circle } from "lucide-react";

const claims = [
  { id: "CLM-A", payer: "Commercial", stage: "Paid" },
  { id: "CLM-B", payer: "Medicaid MCO", stage: "Paid" },
  { id: "CLM-C", payer: "Commercial", stage: "Submitted" },
  { id: "CLM-D", payer: "BH Carve-out", stage: "Posting" },
  { id: "CLM-E", payer: "Commercial", stage: "Scrubbing" },
];

const stageStyle: Record<string, string> = {
  Paid:
    "text-[var(--color-accent)] bg-[var(--color-accent-soft)] ring-[var(--color-accent-line)]",
  Submitted:
    "text-[var(--color-violet)] bg-[var(--color-violet-soft)] ring-[var(--color-violet-line)]",
  Posting:
    "text-[var(--color-violet)] bg-[var(--color-violet-soft)] ring-[var(--color-violet-line)]",
  Scrubbing:
    "text-[var(--color-fg-muted)] bg-white/[0.04] ring-white/10",
};

export function HeroDashboard() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-8 -z-10 rounded-[28px] bg-gradient-to-br from-[var(--color-accent-soft)] via-transparent to-[var(--color-violet-soft)] blur-2xl"
      />
      <div className="relative rounded-[var(--radius-2xl)] border border-white/[0.07] bg-gradient-to-b from-[var(--color-surface)] to-[var(--color-bg-raised)] p-3 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)] noise">
        <div className="flex items-center justify-between rounded-[var(--radius-lg)] border border-white/[0.05] bg-[var(--color-bg-raised)] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-[#FF5F57]/70" />
            <span className="size-2.5 rounded-full bg-[#FEBC2E]/70" />
            <span className="size-2.5 rounded-full bg-[#28C840]/70" />
            <span className="ml-3 text-xs text-[var(--color-fg-subtle)]">
              workflow / claims
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--color-fg-subtle)] ring-1 ring-inset ring-white/10">
            Illustrative preview
          </span>
        </div>

        <div className="grid gap-3 p-4 sm:grid-cols-3">
          <Capability label="Eligibility" value="Verified" />
          <Capability label="Authorizations" value="Tracked" tone="violet" />
          <Capability label="Reporting" value="Transparent" />
        </div>

        <div className="mx-4 mb-4 rounded-[var(--radius-lg)] border border-white/[0.05] bg-[var(--color-surface-2)]">
          <div className="flex items-center justify-between border-b border-white/[0.05] px-4 py-3">
            <div className="text-sm font-medium text-[var(--color-fg)]">
              Claims workflow
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-xs text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]"
              aria-label="Example queue view"
            >
              View queue <ArrowUpRight className="size-3" />
            </a>
          </div>
          <ul className="divide-y divide-white/[0.04]">
            {claims.map((c) => (
              <li
                key={c.id}
                className="grid grid-cols-12 items-center gap-2 px-4 py-3 text-sm"
              >
                <div className="col-span-3 font-mono text-[12px] text-[var(--color-fg-muted)]">
                  {c.id}
                </div>
                <div className="col-span-5 text-[var(--color-fg)]">
                  {c.payer}
                </div>
                <div className="col-span-4 flex justify-end">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium tracking-tight ring-1 ring-inset ${stageStyle[c.stage]}`}
                  >
                    {c.stage === "Paid" ? (
                      <CheckCircle2 className="size-3" />
                    ) : (
                      <Circle className="size-2.5" />
                    )}
                    {c.stage}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Capability({
  label,
  value,
  tone = "accent",
}: {
  label: string;
  value: string;
  tone?: "accent" | "violet";
}) {
  const color =
    tone === "violet"
      ? "text-[var(--color-violet)]"
      : "text-[var(--color-accent)]";
  return (
    <div className="rounded-[var(--radius-md)] border border-white/[0.05] bg-[var(--color-surface-2)] p-4">
      <div className="text-xs uppercase tracking-[0.12em] text-[var(--color-fg-subtle)]">
        {label}
      </div>
      <div className={`mt-2 text-lg font-medium tracking-tight ${color}`}>
        {value}
      </div>
    </div>
  );
}
