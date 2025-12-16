import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { ContactForm } from "@/components/forms/ContactForm";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: `Contact - Serrurier`,
  description: `Contactez votre serrurier à ${siteConfig.city}. Disponible 24h/24 pour urgences et devis gratuit. ☎️ ${siteConfig.phone}`,
};

export default function ContactPage() {
  return (
    <main className="pt-20">
      {/* Fil d'Ariane */}
      <Breadcrumb items={[{ label: "Contact" }]} />

      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-primary-50 via-white to-blue-50">
        <div className="container text-center">
          <span className="badge-primary mb-4">📞 Contact</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contactez-nous
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Besoin d&apos;un serrurier ? Notre équipe est disponible 24h/24 pour répondre 
            à vos urgences et vos demandes de devis.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Infos de contact */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Nos coordonnées
              </h2>

              <div className="space-y-6">
                {/* Téléphone */}
                <a
                  href={siteConfig.phoneLink}
                  className="flex items-start gap-4 p-4 rounded-xl bg-green-50 hover:bg-green-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">{siteConfig.phone}</p>
                    <p className="text-green-700 text-sm">Disponible 24h/24 - 7j/7</p>
                    <p className="text-gray-500 text-xs mt-1">Appel gratuit depuis un fixe</p>
                  </div>
                </a>

                {/* Adresse */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50">
                  <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{siteConfig.address}</p>
                    <p className="text-gray-500 text-sm">Zone d&apos;intervention : {siteConfig.city} et agglomération</p>
                  </div>
                </div>

                {/* Horaires */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Horaires</p>
                    <p className="text-gray-500 text-sm">{siteConfig.openingHours}</p>
                    <p className="text-orange-600 text-xs mt-1">Y compris jours fériés</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire */}
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
