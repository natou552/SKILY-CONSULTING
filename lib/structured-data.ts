import { siteConfig } from "./site-config";

export function getAccountingServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: siteConfig.name,
    description:
      "Cabinet d'expertise comptable à Paris 17 : tenue comptable, bilans, déclarations fiscales, optimisation fiscale et accompagnement des restaurateurs.",
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.postalCode,
      addressLocality: siteConfig.address.city,
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.address.lat,
      longitude: siteConfig.address.lng,
    },
    areaServed: {
      "@type": "City",
      name: "Paris",
    },
    founder: {
      "@type": "Person",
      name: siteConfig.legal.president,
      jobTitle: "Expert-comptable, Président",
    },
    priceRange: "Sur devis",
  };
}
