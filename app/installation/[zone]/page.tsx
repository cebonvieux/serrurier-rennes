import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, zones, services } from "@/config/site";
import { getPageContent, getZoneBySlug } from "@/lib/content";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import faqData from "@/content/faq.json";
import pageData from "@/content/pages/installation-zone.json";

interface Props {
  params: { zone: string };
}

// Générer toutes les pages de zones
export function generateStaticParams() {
  return zones.map((zone) => ({
    zone: zone.slug,
  }));
}

// Générer les métadonnées
export function generateMetadata({ params }: Props): Metadata {
  const zone = getZoneBySlug(params.zone);

  if (!zone) {
    return { title: "Page non trouvée" };
  }

  const title = `Installation de Serrure ${zone.name} - ${siteConfig.name}`;
  const description = `Installation et changement de serrure à ${zone.name} (${zone.postalCode}). Serrures certifiées A2P, cylindres haute sécurité, blindage de porte. Devis gratuit. ☎️ ${siteConfig.phone}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

export default function InstallationZonePage({ params }: Props) {
  const zone = getZoneBySlug(params.zone);

  if (!zone) {
    notFound();
  }

  // Charger le contenu avec les variables remplacées
  const content = getPageContent(pageData, {
    zone: zone.name,
    zoneSlug: zone.slug,
    zonePostal: zone.postalCode,
  });

  // FAQ adaptée
  const zoneFaq = getPageContent(faqData, {
    zone: zone.name,
    zoneSlug: zone.slug,
    zonePostal: zone.postalCode,
  }).filter(q => 
    q.question.toLowerCase().includes('serrure') || 
    q.question.toLowerCase().includes('marque') ||
    q.question.toLowerCase().includes('garantie')
  ).slice(0, 4);

  // Autres zones pour le maillage interne
  const otherZones = zones.filter(z => z.slug !== zone.slug).slice(0, 6);

  // Autres services pour le maillage interne
  const otherServices = services.filter(s => s.hasPage).slice(0, 4);

  return (
    <main className="pt-20">
      {/* Fil d'Ariane */}
      <Breadcrumb items={[
        { label: "Installation", href: "/installation" },
        { label: zone.name }
      ]} />

      {/* Hero Installation */}
      <section className="relative min-h-[calc(100svh-5.5rem)] pb-16 md:pb-20 overflow-hidden flex flex-col">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/services/changement-de-serrure-rennes-35.webp"
            alt={`Installation de serrure ${zone.name}`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-700/90 via-primary-600/75 to-primary-500/50 md:from-primary-600/80 md:via-primary-500/60 md:to-primary-400/30" />
        </div>

        <div className="container relative z-10 w-full flex-1 flex flex-col md:block pt-6 md:pt-10">
          <div className="md:max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-xl bg-white/15 backdrop-blur-md border border-white/25 text-white text-sm md:text-base font-semibold mb-4 md:mb-6">
              {content.hero.badge}
            </span>
            
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-6 leading-[1.05]">
              {content.hero.title}
            </h1>
            
            <div className="max-w-[65%] sm:max-w-xs md:max-w-lg">
              <p className="text-lg md:text-xl text-white mb-2 md:mb-4 leading-snug font-medium">
                {content.hero.subtitle}
              </p>
            </div>
          </div>

          {/* Espace flexible sur mobile */}
          <div className="flex-1 md:hidden" />

          <div className="max-w-xl">
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-4 md:mb-8">
              <a href={siteConfig.phoneLink} className="btn-phone text-base md:text-lg shadow-xl text-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Devis gratuit
              </a>
              <a href="/tarifs" className="btn-secondary bg-white text-center justify-center">
                Voir nos tarifs
              </a>
            </div>

            {/* Certifications */}
            <div className="grid grid-cols-3 gap-2 md:flex md:flex-wrap md:gap-3">
              {content.certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-2 px-3 py-2.5 md:px-4 md:py-2 bg-white/15 backdrop-blur-md rounded-xl border border-white/25">
                  <span className="text-xl md:text-2xl flex-shrink-0">{cert.icon}</span>
                  <span className="text-xs md:text-sm font-medium text-white">{cert.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Installation */}
      <section className="section bg-gradient-to-r from-white via-slate-100 to-slate-300">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="section-title">Nos prestations à {zone.name}</h2>
            <p className="section-subtitle mx-auto">
              Du simple changement de cylindre au blindage complet de porte.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {content.prestations.map((item, index) => (
              <div key={index} className="relative overflow-hidden rounded-2xl min-h-[220px] group">
                {/* Image de fond */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 group-hover:from-black/85 transition-all duration-300" />
                
                {/* Contenu */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl mb-3 border border-white/20">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-lg text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-3">
                    {item.description}
                  </p>
                  <p className="text-primary-300 font-semibold">
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marques */}
      <section className="section bg-gradient-to-r from-white via-slate-100 to-slate-300">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="section-title">Marques de serrures</h2>
            <p className="section-subtitle mx-auto">
              Nous installons toutes les grandes marques de serrurerie à {zone.name}.
            </p>
          </div>

          {/* Marques avec images */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-10">
            {content.brandsWithImages.map((brand) => (
              <div
                key={brand.name}
                className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="aspect-[3/2] relative mb-3 rounded-xl overflow-hidden bg-gray-50">
                  <Image
                    src={brand.image}
                    alt={`Serrures ${brand.name}`}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="font-bold text-gray-900 text-center">{brand.name}</p>
              </div>
            ))}
          </div>

          {/* Autres marques en liste */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-center text-gray-600 mb-3 text-sm font-medium">Nous travaillons également avec :</p>
            <p className="text-center text-gray-800 font-semibold">
              {content.otherBrands.join(" • ")}
            </p>
          </div>
        </div>
      </section>

      {/* Maillage : Autres services dans cette zone */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="section-title text-center mb-8">
            Nos autres services à {zone.name}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherServices.map((s) => (
              <Link
                key={s.id}
                href={`/${s.slug}/${zone.slug}`}
                className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center gap-3"
              >
                <span className="text-2xl">{s.icon}</span>
                <span className="font-medium text-gray-900">{s.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Maillage : Installation dans d'autres zones */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title text-center mb-8">
            Installation de serrure dans les villes voisines
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {otherZones.map((z) => (
              <Link
                key={z.slug}
                href={`/installation/${z.slug}`}
                className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 hover:bg-primary-100 hover:text-primary-700 transition-colors"
              >
                Installation {z.name}
              </Link>
            ))}
            <Link
              href="/installation"
              className="px-4 py-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors"
            >
              Voir toutes les zones →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={zoneFaq}
        title={`Questions sur l'installation à ${zone.name}`}
      />

      {/* CTA */}
      <CTA
        title={content.cta.title}
        subtitle={content.cta.subtitle}
      />
    </main>
  );
}

