import Image from "next/image";
import { siteConfig } from "@/config/site";

interface ServicePresentationProps {
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
}

/**
 * Section présentation d'un service avec image et texte SEO
 * Placée sous le hero des pages de service
 */
export function ServicePresentation({
  title,
  paragraphs,
  image,
  imageAlt,
  imagePosition = "left",
}: ServicePresentationProps) {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${imagePosition === "right" ? "lg:flex-row-reverse" : ""}`}>
          {/* Image */}
          <div className={`relative ${imagePosition === "right" ? "lg:order-2" : "lg:order-1"}`}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
            {/* Badge décoratif */}
            <div className="absolute -bottom-4 -right-4 bg-primary-600/90 backdrop-blur-md text-white rounded-xl p-4 shadow-xl border border-primary-500/50">
              <p className="text-2xl font-bold">24/7</p>
              <p className="text-primary-100 text-sm">Disponible</p>
            </div>
          </div>

          {/* Texte SEO */}
          <div className={`space-y-6 ${imagePosition === "right" ? "lg:order-1" : "lg:order-2"}`}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-50 text-primary-700 text-sm font-semibold">
              📍 {siteConfig.city} et {siteConfig.department}
            </span>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 leading-tight">
              {title}
            </h2>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              {paragraphs.map((paragraph, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={siteConfig.phoneLink}
                className="inline-flex items-center gap-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
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
                {siteConfig.phone}
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Devis gratuit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

