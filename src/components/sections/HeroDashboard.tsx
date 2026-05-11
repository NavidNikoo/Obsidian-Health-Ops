import { ArrowUpRight, CheckCircle2, Circle } from "lucide-react";

const claims = [
  { id: "CLM-21847", payer: "Aetna", amount: "$182.40", status: "paid" },
  { id: "CLM-21846", payer: "BCBS TX", amount: "$214.00", status: "paid" },
  { id: "CLM-21845", payer: "Optum", amount: "$96.20", status: "submitted" },
  { id: "CLM-21844", payer: "Cigna", amount: "$148.00", status: "paid" },
  { id: "CLM-21843", payer: "Magellan", amount: "$132.50", status: "scrubbing" },
];

const statusStyle: Record<string, string> = {
  paid:
    "text-[var(--color-accent)] bg-[var(--color-accent-soft)] ring-[var(--color-accent-line)]",
  submitted:
    "text-[var(--color-violet)] bg-[var(--color-violet-soft)] ring-[var(--color-violet-line)]",
  scrubbing:
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
              meridian / claims
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-1 text-xs text-[var(--color-fg-subtle)]">
            <span className="size-1.5 rounded-full bg-[var(--color-accent)]" />
            Live
          </div>
        </div>

        <div className="grid gap-3 p-4 sm:grid-cols-3">
          <Stat label="Clean rate" value="98.4%" delta="+1.2%" />
          <Stat label="Days in AR" value="12" delta="-3" tone="violet" />
          <Stat label="Collected MTD" value="$184,210" delta="+8.7%" />
        </div>

        <div className="mx-4 mb-4 rounded-[var(--radius-lg)] border border-white/[0.05] bg-[var(--color-surface-2)]">
          <div className="flex items-center justify-between border-b border-white/[0.05] px-4 py-3">
            <div className="text-sm font-medium text-[var(--color-fg)]">
              Recent claims
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-xs text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]"
              aria-label="View all claims"
            >
              View all <ArrowUpRight className="size-3" />
            </a>
          </div>
          <ul className="divide-y divide-white/[0.04]">
            {claims.map((c) => (
              <li
                key={c.id}
                className="grid grid-cols-12 items-center gap-2 px-4 py-3 text-sm"
              >
                <div className="col-span-4 font-mono text-[12px] text-[var(--color-fg-muted)]">
                  {c.id}
                </div>
                <div className="col-span-3 text-[var(--color-fg)]">
                  {c.payer}
                </div>
                <div className="col-span-2 text-right tabular-nums text-[var(--color-fg-muted)]">
                  {c.amount}
                </div>
                <div className="col-span-3 flex justify-end">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium tracking-tight ring-1 ring-inset ${statusStyle[c.status]}`}
                  >
                    {c.status === "paid" ? (
                      <CheckCircle2 className="size-3" />
                    ) : (
                      <Circle className="size-2.5" />
                    )}
                    {c.status}
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

function Stat({
  label,
  value,
  delta,
  tone = "accent",
}: {
  label: string;
  value: string;
  delta: string;
  tone?: "accent" | "violet";
}) {
  const color =
    tone === "violet" ? "text-[var(--color-violet)]" : "text-[var(--color-accent)]";
  return (
    <div className="rounded-[var(--radius-md)] border border-white/[0.05] bg-[var(--color-surface-2)] p-4">
      <div className="text-xs text-[var(--color-fg-subtle)]">{label}</div>
      <div className="mt-2 flex items-baseline justify-between">
        <div className="text-xl font-semibold tracking-tight text-[var(--color-fg)] tabular-nums">
          {value}
        </div>
        <div className={`text-xs tabular-nums ${color}`}>{delta}</div>
      </div>
    </div>
  );
}
