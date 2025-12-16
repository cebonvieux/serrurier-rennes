import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingButton } from "@/components/ui/FloatingButton";
import { JsonLd } from "@/components/seo/JsonLd";

// Police DM Sans - moderne et professionnelle
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${siteConfig.domain}`),
  title: {
    default: `Serrurier ${siteConfig.city} - Dépannage 24h/24 | ${siteConfig.name}`,
    template: `%s | Serrurier ${siteConfig.city} - ${siteConfig.name}`,
  },
  description: `🔐 Serrurier ${siteConfig.city} : intervention rapide 24h/24 et 7j/7. Ouverture de porte, changement de serrure, dépannage urgence. Devis gratuit ☎️ ${siteConfig.phone}`,
  keywords: [
    `serrurier ${siteConfig.city.toLowerCase()}`,
    `serrurier ${siteConfig.city.toLowerCase()} urgence`,
    `dépannage serrurerie ${siteConfig.city.toLowerCase()}`,
    `ouverture de porte ${siteConfig.city.toLowerCase()}`,
    `changement serrure ${siteConfig.city.toLowerCase()}`,
    `serrurier 35`,
    `serrurier ${siteConfig.department.toLowerCase()}`,
    `serrurier pas cher ${siteConfig.city.toLowerCase()}`,
  ],
  authors: [{ name: siteConfig.fullName }],
  creator: siteConfig.fullName,
  publisher: siteConfig.fullName,
  icons: {
    icon: "/images/icons/serrurier-rennes35-sr35.webp",
    apple: "/images/icons/serrurier-rennes35-sr35.webp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: `https://${siteConfig.domain}`,
    siteName: siteConfig.fullName,
    title: `Serrurier ${siteConfig.city} - Dépannage Urgence 24h/24 | ${siteConfig.name}`,
    description: `Votre serrurier de confiance à ${siteConfig.city}. Intervention rapide pour ouverture de porte, changement de serrure, blindage. Devis gratuit.`,
    images: [
      {
        url: "/images/backgrounds/serrurier-rennes-35-centre.webp",
        width: 1200,
        height: 630,
        alt: `Serrurier ${siteConfig.city} - ${siteConfig.fullName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Serrurier ${siteConfig.city} - Dépannage 24h/24`,
    description: `Serrurier professionnel à ${siteConfig.city}. Intervention rapide, devis gratuit. ☎️ ${siteConfig.phone}`,
    images: ["/images/backgrounds/serrurier-rennes-35-centre.webp"],
  },
  alternates: {
    canonical: `https://${siteConfig.domain}`,
  },
  verification: {
    // À remplir après inscription Google Search Console
    // google: "votre-code-verification",
  },
  category: "Serrurerie",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        {/* Script pour charger le CSS de manière asynchrone et non-bloquante */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function makeCSSAsync(link) {
                  if (link.getAttribute('data-async') === 'true') return;
                  link.setAttribute('data-async', 'true');
                  if (link.sheet) return;
                  link.media = 'print';
                  link.onload = function() {
                    this.media = 'all';
                  };
                  if ('onload' in link === false) {
                    setTimeout(function() {
                      link.media = 'all';
                    }, 0);
                  }
                }
                
                var cssLinks = document.querySelectorAll('link[rel="stylesheet"]:not([data-async])');
                for (var i = 0; i < cssLinks.length; i++) {
                  makeCSSAsync(cssLinks[i]);
                }
                
                var observer = new MutationObserver(function(mutations) {
                  mutations.forEach(function(mutation) {
                    mutation.addedNodes.forEach(function(node) {
                      if (node.nodeName === 'LINK' && node.rel === 'stylesheet') {
                        makeCSSAsync(node);
                      }
                    });
                  });
                });
                
                if (document.head) {
                  observer.observe(document.head, {
                    childList: true,
                    subtree: true
                  });
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${dmSans.variable} font-sans antialiased`}>
        <JsonLd />
        <Header />
        {children}
        <Footer />
        <FloatingButton />
      </body>
    </html>
  );
}
