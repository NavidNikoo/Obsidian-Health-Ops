import type { ContactPayload } from "@/lib/validation/contact";

type EmailResult = { ok: true; channel: "resend" | "console" } | { ok: false; error: string };

export async function deliverContactEmail(
  payload: ContactPayload
): Promise<EmailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO;
  const from = process.env.CONTACT_EMAIL_FROM ?? "no-reply@meridianbilling.co";

  const subject = `New contact: ${payload.name}${payload.company ? ` (${payload.company})` : ""}`;
  const text = renderTextBody(payload);
  const html = renderHtmlBody(payload);

  if (!apiKey || !to) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact] Email provider not configured. Submission:");
      console.info(text);
      return { ok: true, channel: "console" };
    }
    return { ok: false, error: "Email is not configured." };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: payload.email,
        subject,
        text,
        html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("[contact] Email provider error", res.status, detail);
      return { ok: false, error: "Email provider rejected the request." };
    }

    return { ok: true, channel: "resend" };
  } catch (error) {
    console.error("[contact] Email send failed", error);
    return { ok: false, error: "Email send failed." };
  }
}

function renderTextBody(p: ContactPayload) {
  return [
    `New contact form submission`,
    `--------------------------------`,
    `Name:    ${p.name}`,
    `Email:   ${p.email}`,
    `Company: ${p.company || "-"}`,
    `Phone:   ${p.phone || "-"}`,
    `Volume:  ${p.volume || "-"}`,
    ``,
    `Message:`,
    p.message,
  ].join("\n");
}

function renderHtmlBody(p: ContactPayload) {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:6px 14px 6px 0;color:#6E7693;font-size:12px;text-transform:uppercase;letter-spacing:0.06em;">${label}</td><td style="padding:6px 0;color:#0E1226;font-size:14px;">${escapeHtml(value)}</td></tr>`;
  return `<!doctype html>
<html><body style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;background:#F4F5F8;padding:24px;color:#0E1226;">
  <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:14px;padding:28px;border:1px solid #E5E7EE;">
    <div style="font-size:12px;color:#6E7693;text-transform:uppercase;letter-spacing:0.12em;">New contact</div>
    <h1 style="margin:8px 0 0;font-size:20px;letter-spacing:-0.02em;">${escapeHtml(p.name)}${p.company ? ` <span style="color:#6E7693;font-weight:400;">— ${escapeHtml(p.company)}</span>` : ""}</h1>
    <table style="margin-top:18px;width:100%;border-collapse:collapse;">
      ${row("Email", p.email)}
      ${row("Phone", p.phone || "-")}
      ${row("Volume", p.volume || "-")}
    </table>
    <hr style="margin:22px 0;border:none;border-top:1px solid #E5E7EE;">
    <div style="font-size:12px;color:#6E7693;text-transform:uppercase;letter-spacing:0.12em;">Message</div>
    <p style="margin:10px 0 0;white-space:pre-wrap;font-size:14px;line-height:1.6;">${escapeHtml(p.message)}</p>
  </div>
</body></html>`;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
