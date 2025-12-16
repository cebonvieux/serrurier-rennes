import { siteConfig } from "@/config/site";

interface CTAProps {
  title?: string;
  subtitle?: string;
}

export function CTA({
  title,
  subtitle,
}: CTAProps) {
  const defaultTitle = `Besoin d'un serrurier à ${siteConfig.city} ?`;
  const defaultSubtitle = `Notre équipe intervient 24h/24 et 7j/7. Appelez-nous pour une intervention rapide ou un devis gratuit.`;

  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-900 to-slate-800" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary-500/20 via-transparent to-transparent" />
      
      <div className="container relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          {title || defaultTitle}
        </h2>
        <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
          {subtitle || defaultSubtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={siteConfig.phoneLink} className="btn-phone text-lg shadow-lg shadow-primary-500/30">
            📞 {siteConfig.phone}
          </a>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 text-base font-semibold text-white hover:bg-white/20 transition-all"
          >
            Demander un devis
          </a>
        </div>
        <p className="text-sm text-white/50 mt-6">
          Disponible 24h/24 • 7j/7 • Intervention en 30 min
        </p>
      </div>
    </section>
  );
}

