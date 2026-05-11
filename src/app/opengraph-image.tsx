import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(ellipse 80% 60% at 30% 0%, rgba(79,209,197,0.18), transparent 70%), radial-gradient(ellipse 60% 50% at 80% 100%, rgba(167,139,250,0.18), transparent 70%), #07091A",
          color: "#E8EAF2",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "linear-gradient(135deg, #4FD1C5 0%, #A78BFA 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#06121A"
              strokeWidth={2.6}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 18 L9 8 L13 16 L17 11 L20 14" />
            </svg>
          </div>
          <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: "-0.01em" }}>
            {site.shortName}{" "}
            <span style={{ color: "#6E7693", fontWeight: 400 }}>Billing</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 22,
              color: "#4FD1C5",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            Behavioral health billing
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              maxWidth: 980,
            }}
          >
            The quiet operating layer behind calmer revenue cycles.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#A4ABC2",
            fontSize: 18,
          }}
        >
          <div>{site.url.replace(/^https?:\/\//, "")}</div>
          <div style={{ display: "flex", gap: 24 }}>
            <span>HIPAA-aligned</span>
            <span style={{ color: "#4B5273" }}>/</span>
            <span>Specialized in BH</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
