import { MetadataRoute } from "next";
import { siteConfig, zones, services } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${siteConfig.domain}`;
  const currentDate = new Date();

  // Pages statiques principales
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tarifs`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/zones`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/confidentialite`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Pages services (ex: /depannage, /ouverture-de-porte, etc.)
  const servicePages: MetadataRoute.Sitemap = services
    .filter((service) => service.hasPage)
    .map((service) => ({
      url: `${baseUrl}/${service.slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    }));

  // Pages zones (ex: /zones/cesson-sevigne)
  const zonePages: MetadataRoute.Sitemap = zones.map((zone) => ({
    url: `${baseUrl}/zones/${zone.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Pages service × zone (ex: /depannage/cesson-sevigne)
  const serviceZonePages: MetadataRoute.Sitemap = services
    .filter((service) => service.hasPage)
    .flatMap((service) =>
      zones.map((zone) => ({
        url: `${baseUrl}/${service.slug}/${zone.slug}`,
        lastModified: currentDate,
        changeFrequency: "weekly" as const,
        priority: 0.8,
      }))
    );

  return [...staticPages, ...servicePages, ...zonePages, ...serviceZonePages];
}

