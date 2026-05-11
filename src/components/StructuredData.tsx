import { site } from "@/lib/site";

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}#organization`,
        name: site.name,
        url: site.url,
        description: site.description,
        email: site.contactEmail,
        telephone: site.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: `${site.address.line1}, ${site.address.line2}`,
          addressLocality: site.address.city,
          addressRegion: site.address.state,
          postalCode: site.address.zip,
          addressCountry: "US",
        },
        sameAs: [site.social.linkedin],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}#website`,
        url: site.url,
        name: site.name,
        publisher: { "@id": `${site.url}#organization` },
        inLanguage: "en-US",
      },
      {
        "@type": "Service",
        name: "Behavioral Health Medical Billing",
        provider: { "@id": `${site.url}#organization` },
        areaServed: "US",
        serviceType: "Revenue Cycle Management",
        description:
          "End to end revenue cycle management for behavioral health practices including eligibility, claims, ERA posting, AR follow-up, and reporting.",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
