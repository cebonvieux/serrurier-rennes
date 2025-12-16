import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: `Mentions légales du site ${siteConfig.domain}`,
};

export default function MentionsLegalesPage() {
  return (
    <main className="pt-20">
      {/* Fil d'Ariane */}
      <Breadcrumb items={[{ label: "Mentions légales" }]} />

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h1>Mentions Légales</h1>
            
            <h2>Éditeur du site</h2>
            <p>
              <strong>{siteConfig.legalName}</strong><br />
              {siteConfig.legalAddress}<br />
              SIRET : {siteConfig.siret}<br />
              RCS : {siteConfig.rcs}<br />
              Téléphone : {siteConfig.phone}<br />
              Email : {siteConfig.email}
            </p>

            <h2>Directeur de la publication</h2>
            <p>
              {siteConfig.legalName}
            </p>

            <h2>Hébergement</h2>
            <p>
              Ce site est hébergé par : <strong>{siteConfig.host.name}</strong><br />
              Adresse : {siteConfig.host.address}<br />
              Site web : <a href={siteConfig.host.website} target="_blank" rel="noopener noreferrer">{siteConfig.host.website}</a>
            </p>

            <h2>Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble de ce site relève de la législation française et internationale 
              sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de 
              reproduction sont réservés, y compris pour les documents téléchargeables 
              et les représentations iconographiques et photographiques.
            </p>

            <h2>Données personnelles</h2>
            <p>
              Les informations recueillies sur ce site sont enregistrées dans un fichier 
              informatisé par {siteConfig.fullName} pour la gestion de la relation client. 
              Elles sont conservées pendant 3 ans et sont destinées au service commercial.
            </p>
            <p>
              Conformément à la loi « informatique et libertés », vous pouvez exercer 
              votre droit d&apos;accès aux données vous concernant et les faire rectifier 
              en contactant : {siteConfig.email}
            </p>

            <h2>Cookies</h2>
            <p>
              Ce site utilise des cookies pour améliorer l&apos;expérience utilisateur et 
              analyser le trafic. Vous pouvez configurer votre navigateur pour refuser 
              les cookies.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

