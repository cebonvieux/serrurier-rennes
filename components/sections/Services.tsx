import Link from "next/link";
import Image from "next/image";
import { siteConfig, services } from "@/config/site";
import { getServiceIcon } from "@/components/ui/ServiceIcons";

interface ServicesProps {
  title?: string;
  subtitle?: string;
  showAll?: boolean;
  zoneSlug?: string; // Slug de la zone actuelle pour le maillage interne
}

export function Services({
  title = "Nos Services",
  subtitle,
  showAll = true,
  zoneSlug,
}: ServicesProps) {
  const defaultSubtitle = `${siteConfig.name} propose une gamme complète de services de serrurerie à ${siteConfig.city} et ses environs.`;

  // Générer l'URL du service : avec zone si fournie, sinon vers la page service principale
  const getServiceUrl = (serviceSlug: string) => {
    return zoneSlug ? `/${serviceSlug}/${zoneSlug}` : `/${serviceSlug}`;
  };

  return (
    <section className="section relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/backgrounds/serrurier-rennes-rapide-pas-cher.webp"
          alt="Services serrurerie Rennes"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/80" />
      </div>
      
      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="section-title text-white">{title}</h2>
          <p className="section-subtitle mx-auto text-white/70">
            {subtitle || defaultSubtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const hasBgImage = 'bgImage' in service && service.bgImage;
            const hasExternalUrl = 'externalUrl' in service && service.externalUrl;
            const serviceUrl = hasExternalUrl ? service.externalUrl as string : getServiceUrl(service.slug);
            
            const cardContent = (
              <>
                {/* Image de fond si disponible */}
                {hasBgImage && (
                  <>
                    <Image
                      src={service.bgImage as string}
                      alt={service.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 group-hover:from-black/80 transition-all duration-300" />
                  </>
                )}
                
                <div className={`relative z-10 h-full flex flex-col ${hasBgImage ? 'p-6 justify-end' : ''}`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors ${
                      hasBgImage 
                        ? 'bg-white/20 backdrop-blur-sm' 
                        : 'bg-primary-100 group-hover:bg-primary-200'
                    }`}>
                      {(() => {
                        const IconComponent = getServiceIcon(service.id);
                        return IconComponent ? (
                          <IconComponent className={`w-7 h-7 ${hasBgImage ? 'text-white' : 'text-primary-600'}`} />
                        ) : (
                          <span className="text-2xl">{service.icon}</span>
                        );
                      })()}
                    </div>
                    <div>
                      <h3 className={`font-bold text-lg mb-1 transition-colors ${
                        hasBgImage 
                          ? 'text-white' 
                          : 'text-gray-900 group-hover:text-primary-600'
                      }`}>
                        {service.name}
                      </h3>
                      <p className={`text-sm ${hasBgImage ? 'text-gray-200' : 'text-gray-600'}`}>
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>
                  <div className={`mt-4 flex items-center text-sm font-semibold ${
                    hasBgImage ? 'text-white' : 'text-primary-600'
                  }`}>
                    <span>{hasExternalUrl ? 'Voir le site partenaire' : 'En savoir plus'}</span>
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </>
            );

            const cardClasses = `relative overflow-hidden rounded-2xl group transition-all duration-300 ${
              hasBgImage 
                ? 'min-h-[200px]' 
                : 'card hover:border-primary-200'
            }`;

            // Lien externe ou interne selon le service
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

        {/* CTA */}
        {showAll && (
          <div className="text-center mt-10">
            <a href={siteConfig.phoneLink} className="inline-flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 px-7 py-3.5 text-base font-semibold text-white shadow-md hover:bg-white/20 transition-all duration-200">
              Appelez-nous : {siteConfig.phone}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

