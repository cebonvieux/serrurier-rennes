import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, services } from "@/config/site";
import { getPageContent } from "@/lib/content";
import { getServiceIcon } from "@/components/ui/ServiceIcons";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import faqData from "@/content/faq.json";
import pageData from "@/content/pages/services.json";

// Charger le contenu avec les variables remplacées
const content = getPageContent(pageData);

export const metadata: Metadata = {
  title: `Services Serrurerie ${siteConfig.city} - Dépannage, Installation & Réparation`,
  description: `Découvrez tous nos services de serrurerie à ${siteConfig.city} : dépannage 24h/24, ouverture de porte, changement de serrure, blindage. Artisan qualifié. ☎️ ${siteConfig.phone}`,
};

export default function ServicesPage() {
  return (
    <main className="pt-20">
      {/* Fil d'Ariane */}
      <Breadcrumb items={[{ label: "Services" }]} />

      {/* Hero Section */}
      <section className="relative min-h-[55vh] py-10 md:py-16 overflow-hidden flex flex-col justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/backgrounds/interventions-serrurerie-rennes-35.webp"
            alt="Services serrurerie Rennes"
            fill
            sizes="100vw"
            className="object-cover"
            priority
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-700/90 via-primary-600/75 to-primary-500/50" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-xl bg-white/15 backdrop-blur-md border border-white/25 text-white text-sm md:text-base font-semibold mb-4 md:mb-6">
              {content.hero.badge}
            </span>
            
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-[1.05]">
              {content.hero.title}
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed max-w-2xl">
              {content.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a href={siteConfig.phoneLink} className="btn-phone text-base md:text-lg shadow-xl text-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {siteConfig.phone}
              </a>
              <a href="/contact" className="btn-secondary bg-white text-center justify-center">
                Demander un devis gratuit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">{content.intro.title}</h2>
            <p className="section-subtitle mx-auto">
              {content.intro.description}
            </p>
          </div>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <div className="grid gap-8 md:gap-10">
            {content.serviceDetails.map((service, index) => {
              // Vérifier si c'est un lien externe
              const isExternal = 'external' in service && service.external;
              
              // Trouver le service correspondant pour l'image
              const serviceData = !isExternal 
                ? services.find(s => s.slug === service.link.replace('/', ''))
                : services.find(s => 'externalUrl' in s);
              const bgImage = serviceData?.bgImage || "/images/backgrounds/serrurier-rennes-rapide-pas-cher.webp";
              const IconComponent = serviceData ? getServiceIcon(serviceData.id) : null;
              
              // Alterner la disposition gauche/droite
              const isReversed = index % 2 === 1;

              return (
                <div
                  key={index}
                  className={`grid md:grid-cols-2 gap-6 md:gap-10 items-center ${isReversed ? 'md:grid-flow-dense' : ''}`}
                >
                  {/* Image */}
                  <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ${isReversed ? 'md:col-start-2' : ''}`}>
                    <Image
                      src={bgImage}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  {/* Contenu */}
                  <div className={isReversed ? 'md:col-start-1' : ''}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center">
                        {IconComponent ? (
                          <IconComponent className="w-7 h-7 text-primary-600" />
                        ) : (
                          <span className="text-2xl">{service.icon}</span>
                        )}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {service.title}
                        {isExternal && <span className="ml-2 text-sm text-primary-500 font-normal">Partenaire</span>}
                      </h3>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3 text-gray-700">
                          <svg className="w-5 h-5 text-primary-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {isExternal ? (
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
                      >
                        Voir le site partenaire
                        <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <Link
                        href={service.link}
                        className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
                      >
                        En savoir plus
                        <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engagements qualité */}
      <section className="py-12 md:py-16 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/backgrounds/serrurier-rennes-centre-bretagne.webp"
            alt="Serrurier Rennes"
            fill
            sizes="100vw"
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-primary-900/85" />
        </div>

        <div className="container relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="section-title text-white">{content.guarantees.title}</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.guarantees.items.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all"
              >
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-3xl mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grille des services rapide */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="section-title">Accès rapide à nos services</h2>
            <p className="section-subtitle mx-auto">
              Cliquez sur un service pour découvrir les détails et demander un devis.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => {
              const IconComponent = getServiceIcon(service.id);
              const hasExternalUrl = 'externalUrl' in service && service.externalUrl;
              const serviceUrl = hasExternalUrl ? service.externalUrl as string : `/${service.slug}`;
              
              const cardContent = (
                <>
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 transition-colors">
                    {IconComponent ? (
                      <IconComponent className="w-6 h-6 text-primary-600" />
                    ) : (
                      <span className="text-xl">{service.icon}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {service.name}
                      {hasExternalUrl && <span className="ml-2 text-xs text-gray-400">↗</span>}
                    </h3>
                    <p className="text-sm text-gray-600">{service.shortDesc}</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 ml-auto group-hover:text-primary-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </>
              );

              const cardClasses = "flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-primary-300 hover:bg-primary-50 transition-all group";

              return hasExternalUrl ? (
                <a
                  key={service.id}
                  href={serviceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClasses}
                >
                  {cardContent}
                </a>
              ) : (
                <Link
                  key={service.id}
                  href={serviceUrl}
                  className={cardClasses}
                >
                  {cardContent}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={getPageContent(faqData, { zone: siteConfig.city }).slice(0, 5)}
        title={`Questions fréquentes sur nos services à ${siteConfig.city}`}
      />

      {/* CTA */}
      <CTA
        title={content.cta.title}
        subtitle={content.cta.subtitle}
      />
    </main>
  );
}

