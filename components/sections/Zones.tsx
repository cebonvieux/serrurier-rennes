import Link from "next/link";
import Image from "next/image";
import { siteConfig, zones } from "@/config/site";

interface ZonesProps {
  title?: string;
  subtitle?: string;
  limit?: number;
}

export function Zones({
  title = "Zones d'intervention",
  subtitle,
  limit = 12,
}: ZonesProps) {
  const defaultSubtitle = `Nous intervenons à ${siteConfig.city} et dans toute l'agglomération. Intervention rapide.`;
  const displayedZones = zones.slice(0, limit);

  return (
    <section className="section relative overflow-hidden">
      {/* Background image - même que Services */}
      <div className="absolute inset-0">
        <Image
          src="/images/backgrounds/serrurier-rennes-rapide-pas-cher.webp"
          alt="Zones intervention serrurier Rennes"
          fill
          sizes="100vw"
          className="object-cover"
          loading="lazy"
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

        {/* Zones Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {displayedZones.map((zone) => (
            <Link
              key={zone.slug}
              href={`/zones/${zone.slug}`}
              className={`
                flex flex-col items-center p-4 rounded-xl text-center
                transition-all duration-300 hover:scale-105 backdrop-blur-sm
                ${'isMain' in zone && zone.isMain 
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30 border border-primary-400/50' 
                  : 'bg-white/10 shadow-sm hover:shadow-md border border-white/20 hover:border-white/40 hover:bg-white/20'
                }
              `}
            >
              <svg 
                className="w-6 h-6 mb-2 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-medium text-sm text-white">
                {zone.name}
              </span>
              <span className="text-xs text-white/70">
                {zone.postalCode}
              </span>
            </Link>
          ))}
        </div>

        {/* Lien vers toutes les zones */}
        {zones.length > limit && (
          <div className="text-center mt-8">
            <Link href="/zones" className="inline-flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 px-7 py-3.5 text-base font-semibold text-white shadow-md hover:bg-white/20 transition-all duration-200">
              Voir toutes nos zones ({zones.length} villes)
            </Link>
          </div>
        )}

        {/* Bandeau urgence */}
        <div className="mt-12 bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 text-white text-center border border-white/20 shadow-xl">
          <h3 className="text-xl md:text-2xl font-bold mb-2">
            Besoin d&apos;un serrurier en urgence ?
          </h3>
          <p className="text-white/70 mb-4">
            Intervention rapide 24h/24 dans toute l&apos;agglomération de {siteConfig.city}
          </p>
          <a href={siteConfig.phoneLink} className="btn-phone inline-flex">
            📞 {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

