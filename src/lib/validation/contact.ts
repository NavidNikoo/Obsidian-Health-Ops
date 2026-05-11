export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  volume?: string;
  message: string;
  website?: string;
};

export type ValidationResult =
  | { ok: true; data: ContactPayload }
  | { ok: false; errors: Partial<Record<keyof ContactPayload, string>> };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContact(input: unknown): ValidationResult {
  const errors: Partial<Record<keyof ContactPayload, string>> = {};
  const safe = (v: unknown) =>
    typeof v === "string" ? v.trim().slice(0, 5000) : "";

  if (typeof input !== "object" || input === null) {
    return { ok: false, errors: { message: "Invalid submission." } };
  }

  const raw = input as Record<string, unknown>;

  const name = safe(raw.name);
  const email = safe(raw.email);
  const company = safe(raw.company);
  const phone = safe(raw.phone);
  const volume = safe(raw.volume);
  const message = safe(raw.message);
  const website = safe(raw.website);

  if (website.length > 0) {
    return { ok: false, errors: { message: "Submission blocked." } };
  }

  if (name.length < 2) errors.name = "Please share your name.";
  if (name.length > 120) errors.name = "Name is too long.";

  if (!EMAIL_RE.test(email)) errors.email = "A valid email is required.";

  if (message.length < 10)
    errors.message = "A short note (10+ characters) helps us route your request.";
  if (message.length > 5000) errors.message = "Message is too long.";

  if (phone && phone.length > 40) errors.phone = "Phone number looks too long.";
  if (company && company.length > 200) errors.company = "Company name is too long.";

  if (Object.keys(errors).length > 0) return { ok: false, errors };

  return {
    ok: true,
    data: { name, email, company, phone, volume, message },
  };
}
