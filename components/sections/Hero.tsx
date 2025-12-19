import Image from "next/image";
import { siteConfig } from "@/config/site";
import { getPageContent } from "@/lib/content";
import homeContent from "@/content/pages/home.json";

// Charger le contenu avec variables remplacées
const content = getPageContent(homeContent);

interface HeroProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  showReviews?: boolean;
}

export function Hero({
  badge,
  title,
  subtitle,
  showReviews = true,
}: HeroProps) {
  // Utiliser les props ou les valeurs du fichier de contenu
  const displayBadge = badge || content.hero.badge;
  const displayTitle = title || content.hero.title;
  const displaySubtitle = subtitle || content.hero.subtitle;

  return (
    <section className="relative min-h-[100svh] md:min-h-0 pt-24 pb-20 md:pt-32 md:pb-24 overflow-hidden flex flex-col">
      {/* Background - Image de Rennes */}
      <div className="absolute inset-0">
        <Image
          src="/images/backgrounds/serrurier-rennes-35-centre.webp"
          alt="Rennes centre-ville"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          fetchPriority="high"
        />
        {/* Overlay pour lisibilité du texte - opacité augmentée */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-700/90 via-primary-600/75 to-primary-500/50 md:from-primary-600/80 md:via-primary-500/60 md:to-primary-400/30" />
      </div>

      <div className="container relative z-10 w-full flex-1 flex flex-col md:block">
        {/* Partie haute : Texte */}
        <div className="md:max-w-2xl">
          {/* Badge - pleine largeur */}
          <span className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-xl bg-white/15 backdrop-blur-md border border-white/25 text-white text-sm md:text-base font-semibold mb-4 md:mb-6">
            {displayBadge}
          </span>

          {/* Titre - pleine largeur */}
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-6 leading-[1.05]">
            {displayTitle}
          </h1>

          {/* Sous-titres - largeur limitée sur mobile pour voir le technicien */}
          <div className="max-w-[65%] sm:max-w-xs md:max-w-lg">
            {/* Sous-titre principal */}
            <p className="text-lg md:text-xl text-white mb-2 md:mb-4 leading-snug font-medium">
              {displaySubtitle}
            </p>

            {/* Sous-titre secondaire - plus petit */}
            <p className="text-base md:text-base text-white/70 mb-0 md:mb-8 leading-snug">
              {content.hero.subtitleSecondary}
            </p>
          </div>
        </div>

        {/* Espace flexible sur mobile */}
        <div className="flex-1 md:hidden" />

        {/* Partie basse : CTAs et Badges */}
        <div className="max-w-xl">
          {/* CTAs - Stack vertical sur mobile */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-4 md:mb-8">
            <a 
              href={siteConfig.phoneLink} 
              className="btn-phone text-base md:text-lg shadow-xl text-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {siteConfig.phone}
            </a>
            <a 
              href="/contact" 
              className="btn-secondary bg-white text-center justify-center"
            >
              Demander un devis
            </a>
          </div>

          {/* Badges de confiance - Grille 2x2 sur mobile */}
          <div className="grid grid-cols-2 gap-2 md:flex md:flex-wrap md:gap-3">
            {content.trustBadges.map((badge, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2 px-3 py-2.5 md:px-4 md:py-2 bg-white/15 backdrop-blur-md rounded-xl border border-white/25"
              >
                <span className="text-xl md:text-2xl flex-shrink-0">{badge.icon}</span>
                <div className="min-w-0">
                  <p className="font-bold text-white text-sm md:text-base leading-tight">{badge.title}</p>
                  <p className="text-[11px] md:text-xs text-white/70 leading-tight truncate">{badge.subtitle}</p>
                </div>
              </div>
            ))}
            
            {/* Avis Google - même taille que les autres badges */}
            {showReviews && siteConfig.reviews && (
              <a
                href={siteConfig.reviews.googleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2.5 md:px-4 md:py-2 bg-white/15 backdrop-blur-md rounded-xl border border-white/25 hover:bg-white/25 transition-colors"
              >
                <div className="flex flex-shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-3.5 h-3.5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-white text-sm md:text-base leading-tight">
                    {siteConfig.reviews.rating}/5
                  </p>
                  <p className="text-[11px] md:text-xs text-white/70 leading-tight truncate">
                    {siteConfig.reviews.count} avis
                  </p>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
