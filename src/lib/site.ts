export const site = {
  name: "Meridian Billing",
  shortName: "Meridian",
  tagline: "Behavioral health billing, designed for clarity.",
  description:
    "A modern, boutique revenue cycle partner focused on behavioral and mental health practices. Built around clean claims, transparent reporting, and calmer operations.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  contactEmail: "meridianbillingco@gmail.com",
  /** Shown in UI (footer, contact, etc.) */
  phone: "(831) 273-2950",
  /** E.164 for tel: links and structured data */
  phoneTel: "+18312732950",
  address: {
    line1: "23832 Rockfield Blvd",
    line2: "STE 120",
    city: "Lake Forest",
    state: "CA",
    zip: "92630",
  },
  hours: "Mon to Fri, 8am to 4pm PT",
  social: {
    linkedin: "https://www.linkedin.com",
  },
} as const;

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export const footerNav: { title: string; links: NavItem[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Services", href: "/services" },
      { label: "Behavioral Health", href: "/services/behavioral-health-billing" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Resources", href: "/resources" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
];
