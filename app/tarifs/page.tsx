import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { getPageContent } from "@/lib/content";
import { Tarifs } from "@/components/sections/Tarifs";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import tarifsData from "@/content/tarifs.json";
import faqData from "@/content/faq.json";

export const metadata: Metadata = {
  title: `Tarifs Serrurier - Prix Transparents`,
  description: `Découvrez nos tarifs serrurier à ${siteConfig.city}. Prix transparents, devis gratuit avant intervention. Ouverture de porte à partir de 89€. ☎️ ${siteConfig.phone}`,
};

export default function TarifsPage() {
  return (
    <main className="pt-20">
      {/* Fil d'Ariane */}
      <Breadcrumb items={[{ label: "Tarifs" }]} />

      {/* Header */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/backgrounds/interventions-serrurerie-rennes-35.webp"
            alt="Tarifs serrurier Rennes"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/80 via-primary-500/60 to-primary-400/30" />
        </div>

        <div className="container relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-primary-600 text-sm font-semibold mb-6 shadow-sm">
            💰 Tarifs transparents
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tarifs Serrurier Rennes 35
          </h1>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto">
            Des prix clairs et transparents. Devis gratuit communiqué avant toute intervention.
          </p>
        </div>
      </section>

      {/* Tarifs */}
      <Tarifs items={tarifsData} />

      {/* Informations supplémentaires */}
      <section className="py-10 md:py-14 bg-gradient-to-r from-white via-slate-100 to-slate-300">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Devis gratuit</h3>
              <p className="text-gray-600 text-sm">
                Nous vous communiquons un devis précis avant d&apos;intervenir.
              </p>
            </div>

            <div className="text-center p-4">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">💳</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Paiement flexible</h3>
              <p className="text-gray-600 text-sm">
                CB, espèces ou virement. Paiement une fois l&apos;intervention terminée.
              </p>
            </div>

            <div className="text-center p-4">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📄</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Facture détaillée</h3>
              <p className="text-gray-600 text-sm">
                Facture complète pour vos démarches d&apos;assurance ou votre comptabilité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ tarifs */}
      <FAQ 
        items={getPageContent(faqData, { zone: siteConfig.city }).filter(q => 
          q.question.toLowerCase().includes('prix') || 
          q.question.toLowerCase().includes('coût') || 
          q.question.toLowerCase().includes('tarif') ||
          q.question.toLowerCase().includes('combien') ||
          q.question.toLowerCase().includes('paiement') || 
          q.question.toLowerCase().includes('devis') ||
          q.question.toLowerCase().includes('régler')
        )}
        title={`Questions fréquentes sur nos tarifs serrurier à ${siteConfig.city}`}
      />

      {/* CTA */}
      <CTA />
    </main>
  );
}

