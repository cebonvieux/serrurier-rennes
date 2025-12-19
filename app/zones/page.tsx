import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, zones } from "@/config/site";
import { CTA } from "@/components/sections/CTA";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: `Zones d'intervention - Serrurier`,
  description: `Serrurier à ${siteConfig.city} et environs. Intervention rapide dans toute l'agglomération : ${zones.slice(0, 5).map(z => z.name).join(', ')}... ☎️ ${siteConfig.phone}`,
};

export default function ZonesPage() {
  // Séparer la ville principale des autres
  const mainCity = zones.find(z => 'isMain' in z && z.isMain);
  const otherZones = zones.filter(z => !('isMain' in z && z.isMain));

  return (
    <main className="pt-20">
      {/* Fil d'Ariane */}
      <Breadcrumb items={[{ label: "Zones d'intervention" }]} />

      {/* Header avec image de fond */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/backgrounds/serrurier-rennes-centre-bretagne.webp"
            alt="Rennes centre-ville Bretagne"
            fill
            sizes="100vw"
            className="object-cover"
            priority
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-700/90 via-primary-600/75 to-primary-500/50" />
        </div>
        <div className="container relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/15 backdrop-blur-md border border-white/25 text-white text-sm font-semibold mb-6">
            📍 Zones d&apos;intervention
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Serrurier {siteConfig.city} et environs
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Notre équipe intervient dans tout {siteConfig.city} et son agglomération.
            Intervention rapide.
          </p>
        </div>
      </section>

      {/* Zones */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="section-title text-center mb-12">
            Toutes nos zones d&apos;intervention
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {otherZones.map((zone) => (
              <Link
                key={zone.slug}
                href={`/zones/${zone.slug}`}
                className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md hover:border-primary-200 border border-gray-100 transition-all"
              >
                <svg 
                  className="w-8 h-8 text-primary-600 mx-auto mb-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">
                  {zone.name}
                </h3>
                <p className="text-xs text-gray-500">
                  {zone.postalCode}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Infos intervention */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Intervention rapide</h3>
              <p className="text-gray-600 text-sm">
                Nos serruriers interviennent rapidement sur toutes les communes listées.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Service de qualité</h3>
              <p className="text-gray-600 text-sm">
                Travail soigné et professionnel. Serruriers expérimentés et équipés.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📞</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Disponible 24h/24</h3>
              <p className="text-gray-600 text-sm">
                Nos équipes sont disponibles jour et nuit, week-ends et jours fériés compris.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </main>
  );
}

