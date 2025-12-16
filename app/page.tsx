import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Zones } from "@/components/sections/Zones";
import { Tarifs } from "@/components/sections/Tarifs";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { siteConfig } from "@/config/site";
import { getPageContent } from "@/lib/content";

// Importer le contenu
import faqData from "@/content/faq.json";
import tarifsData from "@/content/tarifs.json";

export default function HomePage() {
  // FAQ avec contexte de la ville principale
  const faq = getPageContent(faqData, { zone: siteConfig.city });

  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Services */}
      <Services />

      {/* Pourquoi nous choisir */}
      <WhyUs />

      {/* Zones d'intervention */}
      <Zones limit={12} />

      {/* Tarifs */}
      <Tarifs 
        items={tarifsData}
        title="Nos Tarifs"
        subtitle="Des prix transparents, sans surprise. Devis gratuit communiqué avant toute intervention."
      />

      {/* FAQ */}
      <FAQ 
        items={faq}
        title={`Questions Fréquentes - Serrurier ${siteConfig.city}`}
      />

      {/* CTA Final */}
      <CTA />
    </main>
  );
}

