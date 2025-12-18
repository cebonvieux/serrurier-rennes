"use client";

import { LazyYouTube } from "@/components/ui/LazyYouTube";
import { siteConfig } from "@/config/site";

/**
 * Section de présentation avec vidéo YouTube et texte SEO
 * Inspirée du design serrurier-montpellier-34.fr
 */
export function VideoPresentation() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Colonne gauche - Vidéo */}
          <div className="space-y-5">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <LazyYouTube
                videoId="ywOxtxRXtxQ"
                title={`Présentation ${siteConfig.fullName} - Artisan serrurier à ${siteConfig.city}`}
                className="w-full"
                aspectRatio="16:9"
                thumbnailQuality="maxresdefault"
              />
            </div>
            
            {/* Bouton Devis sous la vidéo */}
            <a
              href="/contact"
              className="flex items-center justify-center gap-3 w-full bg-slate-700 hover:bg-slate-800 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 shadow-md"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                />
              </svg>
              Demander un Devis Gratuit
            </a>
          </div>

          {/* Colonne droite - Texte SEO */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 leading-tight">
              Serrurier Professionnel en Bretagne,<br />
              <span className="text-primary-600">Intervention Express à {siteConfig.city}</span>
            </h2>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Une clé cassée dans la serrure ? Une porte qui refuse de s'ouvrir ? 
                Notre <strong className="text-slate-800">équipe de serruriers bretons</strong> se 
                déplace chez vous <strong className="text-slate-800">rapidement</strong> partout 
                dans la métropole rennaise et ses environs.
              </p>

              <p>
                De Saint-Malo à Vitré, de Fougères à Redon, nous sillonnons tout le département {siteConfig.departmentCode}. 
                Que vous soyez bloqué devant votre appartement à Cesson-Sévigné ou victime d'une tentative 
                d'effraction à Bruz, <strong className="text-slate-800">nos artisans interviennent à toute heure</strong>, 
                week-ends et jours fériés compris.
              </p>
            </div>

            {/* Liste des services avec coches */}
            <ul className="space-y-3 py-2">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-700">
                  <strong className="text-slate-800">Déblocage de porte</strong> en préservant votre serrure existante
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-700">
                  <strong className="text-slate-800">Installation de verrous certifiés</strong> A2P et cylindres anti-crochetage
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-700">
                  <strong className="text-slate-800">Devis gratuit</strong> communiqué avant intervention, sans mauvaise surprise
                </span>
              </li>
            </ul>

            <p className="text-slate-600">
              Professionnels formés et couverts par une assurance décennale. Chaque prestation 
              est garantie. Particuliers, syndics, commerces : nous répondons à tous vos besoins en serrurerie.
            </p>

            {/* Bouton CTA Téléphone */}
            <a
              href={siteConfig.phoneLink}
              className="inline-flex items-center gap-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                />
              </svg>
              Appeler le {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

