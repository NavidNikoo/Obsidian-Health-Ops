export const site = {
  name: "Meridian Billing",
  shortName: "Meridian",
  tagline: "Behavioral health billing, engineered for clarity.",
  description:
    "Specialized revenue cycle management for behavioral and mental health practices. Cleaner claims, faster reimbursement, calmer operations.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  contactEmail: "hello@meridianbilling.co",
  phone: "(555) 010-0184",
  address: {
    line1: "1180 Mission Street",
    line2: "Suite 410",
    city: "San Francisco",
    state: "CA",
    zip: "94103",
  },
  hours: "Mon to Fri, 7am to 6pm PT",
  social: {
    linkedin: "https://www.linkedin.com",
  },
} as const;

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Compliance", href: "/compliance" },
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
      { label: "Compliance", href: "/compliance" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Resources", href: "/resources" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Clients",
    links: [
      { label: "Client Login", href: "/client-login" },
      { label: "Privacy", href: "/compliance#privacy" },
      { label: "Security", href: "/compliance#security" },
    ],
  },
];
