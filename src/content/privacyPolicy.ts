/** Legal placeholders — confirm effective date after attorney review */
export const PRIVACY_EFFECTIVE_DATE = "May 11, 2026";
export const PRIVACY_EFFECTIVE_DATE_ISO = "2026-05-11";

export type PrivacySectionBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type PrivacySection = {
  id: string;
  title: string;
  blocks: PrivacySectionBlock[];
};

export function privacySections(vars: {
  companyName: string;
  websiteUrlDisplay: string;
  contactEmail: string;
}): PrivacySection[] {
  const { companyName, websiteUrlDisplay, contactEmail } = vars;

  return [
    {
      id: "introduction",
      title: "Overview",
      blocks: [
        {
          type: "p",
          text: `${companyName} (“us”, “we”, or “our”) operates ${websiteUrlDisplay}. The Site and related communications are referred to as the “Service”.`,
        },
        {
          type: "p",
          text:
            "This policy describes how we collect, use, and disclose personal information when you use the Service, and certain choices available to you. We collect this information to provide and maintain the Site and to respond when you reach out.",
        },
        {
          type: "p",
          text: "By using the Service, you agree to the practices described here.",
        },
        {
          type: "p",
          text: "Separate agreements (such as BAAs where applicable with clients or vendors) govern professional services and HIPAA-regulated PHI; this Notice focuses on ordinary website interactions and voluntarily submitted contact details.",
        },
      ],
    },
    {
      id: "definitions",
      title: "Definitions",
      blocks: [
        {
          type: "p",
          text: `Service refers to ${websiteUrlDisplay} and related outreach channels ${companyName} uses to communicate with prospective and current clients.`,
        },
        {
          type: "p",
          text:
            "Personal Data means information about an identifiable individual. If you inquire about engagements that may involve health information covered by HIPAA, additional obligations apply.",
        },
        {
          type: "p",
          text:
            "Usage Data refers to technical information generated automatically as you browse (for example log files, referrer headers, and pages viewed).",
        },
        {
          type: "p",
          text:
            "Cookies are small text files saved on your device to support basic site operation, preference storage, diagnostics, or security.",
        },
      ],
    },
    {
      id: "collection",
      title: "Information collection and use",
      blocks: [
        {
          type: "p",
          text:
            "We gather limited categories of data to administer the Site, answer questions, analyze aggregate traffic, and safeguard our infrastructure.",
        },
        {
          type: "p",
          text: "Personal Data you may choose to exchange with us:",
        },
        {
          type: "ul",
          items: [
            "Email address",
            "Given and family names",
            "Phone number",
            "Practice name, role, specialty, billing volume summaries you choose to disclose",
            "Address segments you voluntarily submit (street, city, state, postal code)",
            "Any information voluntarily included in inquiry forms—please avoid sending PHI publicly",
          ],
        },
        {
          type: "p",
          text:
            "Usage Data captured automatically might include pseudonymous identifiers, inferred locations from IP prefixes, timestamps, clicks, referrer URLs, and browser or OS metadata.",
        },
        {
          type: "p",
          text:
            "Cookies and analogous technologies help us authenticate sessions, understand traffic patterns, and remember limited preferences.",
        },
        {
          type: "p",
          text: "Browsers commonly allow rejecting cookies outright; rejecting necessary cookies might disable portions of our Site.",
        },
      ],
    },
    {
      id: "cookie-types",
      title: "Common cookie classifications",
      blocks: [
        {
          type: "ul",
          items: [
            "Session Cookies that keep transient state while navigating between pages.",
            "Preference Cookies that remember benign choices until they expire.",
            "Security Cookies that rate-limit abuse signals or correlate secure sessions.",
          ],
        },
      ],
    },
    {
      id: "use-of-data",
      title: "How we use data",
      blocks: [
        {
          type: "p",
          text: `${companyName} employs collected data across activities such as:`,
        },
        {
          type: "ul",
          items: [
            "Delivering, maintaining, and protecting the Site",
            "Notifying practitioners about substantive policy or service updates where appropriate",
            "Facilitating voluntarily interactive workflows (booking, intake forms)",
            "Corresponding regarding proposals, contracts, onboarding, billing questions, support cases",
            "Aggregating telemetry to tighten performance, tighten security, prioritize features",
            "Detecting anomalies, diagnosing outages, safeguarding infrastructure",
          ],
        },
      ],
    },
    {
      id: "transfer",
      title: "International transfers",
      blocks: [
        {
          type: "p",
          text:
            "Information may reside on servers housed in jurisdictions with differing privacy regimes. Whenever we relocate information we rely upon commercially reasonable safeguards, including contractual protections with subprocessors that process personal information on our behalf.",
        },
        {
          type: "p",
          text:
            "Your continued use constitutes acknowledgment that transmissions may traverse networks and facilities outside your home geography.",
        },
      ],
    },
    {
      id: "disclosure",
      title: "Disclosure obligations",
      blocks: [
        {
          type: "p",
          text:
            "We may disclose Personal Data when we believe in good faith that doing so is necessary to:",
        },
        {
          type: "ul",
          items: [
            "Satisfy legal, regulatory, or judicial requirements",
            "Assert, exercise, or defend legal claims",
            "Investigate fraud, abuse, or suspected violations of law",
            "Protect personnel, practitioners, vendors, Site visitors, or the public where serious harm appears imminent",
            "Maintain insurance, audit, ethics, records retention, cyber incident response workflows",
          ],
        },
      ],
    },
    {
      id: "security",
      title: "Data security posture",
      blocks: [
        {
          type: "p",
          text:
            "Protecting entrusted information matters to us—encryption in transit where appropriate, hardened infrastructure, privileged access workflows, backups, auditing, layered authentication, periodic reviews.",
        },
        {
          type: "p",
          text:
            "Electronic communications cannot be flawless. Accordingly we cannot promise absolute immunity from compromise.",
        },
      ],
    },
    {
      id: "service-providers",
      title: "Subprocessors",
      blocks: [
        {
          type: "p",
          text:
            "We engage specialist vendors spanning hosting, transactional email delivery, calendars, ticketing, fraud screening, analytics, collaboration tools, and payment processors. They only access personal information as needed to deliver their services and under confidentiality or data processing commitments.",
        },
      ],
    },
    {
      id: "links",
      title: "External links",
      blocks: [
        {
          type: "p",
          text:
            "Pages may hyperlink to payer portals, EHR vendors, or reference materials. Visiting those domains subjects you solely to those operators’ notices—research them independently.",
        },
      ],
    },
    {
      id: "children",
      title: "Minors",
      blocks: [
        {
          type: "p",
          text:
            "Business visitors under 18 should not submit identifiable information absent verified parental oversight. Inform us promptly if you suspect a guardian’s contact information was mistakenly collected so we may delete inconsistent records promptly.",
        },
      ],
    },
    {
      id: "changes",
      title: "Policy revisions",
      blocks: [
        {
          type: "p",
          text:
            "We may refine this statement as laws or services evolve. Material changes will be reflected by updating this page and adjusting the effective date above. Check back periodically—continued use after publication constitutes acceptance of the updated terms unless otherwise prohibited by law.",
        },
      ],
    },
    {
      id: "contact",
      title: "Contact",
      blocks: [
        {
          type: "p",
          text: "Questions about this Privacy Policy may be directed to:",
        },
        {
          type: "p",
          text: `Email: ${contactEmail}`,
        },
      ],
    },
  ];
}
