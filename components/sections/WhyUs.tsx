import Image from "next/image";
import { siteConfig } from "@/config/site";
import { getPageContent } from "@/lib/content";
import homeContent from "@/content/pages/home.json";

// Charger le contenu avec variables remplacées
const content = getPageContent(homeContent);

interface Advantage {
  icon: string;
  title: string;
  description: string;
}

interface WhyUsProps {
  title?: string;
  subtitle?: string;
  advantages?: Advantage[];
}

export function WhyUs({
  title,
  subtitle,
  advantages,
}: WhyUsProps) {
  // Utiliser les props ou les valeurs du fichier de contenu
  const displayTitle = title || content.whyUs.title;
  const displaySubtitle = subtitle || content.whyUs.subtitle;
  const displayAdvantages = advantages || content.whyUs.advantages;

  return (
    <section className="py-10 md:py-14 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/backgrounds/serrurier-rennes-bretagne-pas-cher.webp"
          alt="Serrurier Rennes"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/40" />
      </div>
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[5/4] max-h-[380px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/gallery/serrurier-rennes-sr35-bretagne.webp"
                alt={`Serrurier professionnel ${siteConfig.city}`}
                fill
                className="object-cover"
              />
            </div>
            {/* Badge superposé */}
            <div className="absolute -bottom-4 -right-4 bg-primary-600/90 backdrop-blur-md text-white rounded-xl p-4 shadow-xl border border-primary-500/50">
              <p className="text-3xl font-bold">10+</p>
              <p className="text-primary-100 text-sm">ans d&apos;expérience</p>
            </div>
          </div>

          {/* Contenu */}
          <div className="order-1 lg:order-2">
            <span className="badge-primary mb-4">✨ Nos engagements</span>
            <h2 className="section-title">{displayTitle}</h2>
            <p className="section-subtitle mb-6">
              {displaySubtitle}
            </p>

            <div className="space-y-3">
              {displayAdvantages.map((advantage, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/80 shadow-sm hover:shadow-md hover:bg-white hover:border-primary-200 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary-50/80 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl flex-shrink-0 border border-primary-100">
                    {advantage.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
