import { siteConfig } from "@/config/site";

interface JsonLdProps {
  type?: "LocalBusiness" | "Service" | "FAQPage";
  service?: string;
  zone?: string;
  faqItems?: Array<{ question: string; answer: string }>;
}

export function JsonLd({ type = "LocalBusiness", service, zone, faqItems }: JsonLdProps) {
  const baseUrl = `https://${siteConfig.domain}`;
  
  // Schema LocalBusiness (entreprise locale)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    "@id": `${baseUrl}/#organization`,
    name: siteConfig.fullName,
    alternateName: siteConfig.name,
    description: `Serrurier professionnel à ${siteConfig.city}. Dépannage 24h/24, ouverture de porte, changement de serrure. Intervention rapide dans toute la métropole rennaise.`,
    url: baseUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${baseUrl}/images/logos/serrurier-rennes35-sr35.webp`,
    logo: `${baseUrl}/images/logos/serrurier-rennes35-sr35.webp`,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.legalAddress,
      addressLocality: siteConfig.city,
      postalCode: siteConfig.postalCode,
      addressRegion: siteConfig.region,
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.lat,
      longitude: siteConfig.geo.lng,
    },
    areaServed: {
      "@type": "City",
      name: siteConfig.city,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: siteConfig.department,
      },
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "€€",
    aggregateRating: siteConfig.reviews
      ? {
          "@type": "AggregateRating",
          ratingValue: siteConfig.reviews.rating,
          reviewCount: siteConfig.reviews.count,
          bestRating: 5,
          worstRating: 1,
        }
      : undefined,
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.google,
    ].filter(Boolean),
  };

  // Schema Service (pour les pages de service)
  const serviceSchema = service
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        name: service,
        provider: {
          "@type": "Locksmith",
          name: siteConfig.fullName,
          telephone: siteConfig.phone,
        },
        areaServed: zone
          ? { "@type": "City", name: zone }
          : { "@type": "City", name: siteConfig.city },
        description: `${service} à ${zone || siteConfig.city}. Intervention rapide par ${siteConfig.name}.`,
      }
    : null;

  // Schema FAQPage
  const faqSchema =
    faqItems && faqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  // Combiner les schemas selon le type
  const schemas: Record<string, unknown>[] = [localBusinessSchema];
  if (serviceSchema) schemas.push(serviceSchema);
  if (faqSchema) schemas.push(faqSchema);

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

