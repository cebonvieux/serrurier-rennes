/**
 * ═══════════════════════════════════════════════════════════════════════════
 * CONFIGURATION DU SITE - PERSONNALISER POUR CHAQUE NOUVEAU SITE
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const siteConfig = {
  // ─────────────────────────────────────────────────────────────────────────
  // INFORMATIONS ENTREPRISE
  // ─────────────────────────────────────────────────────────────────────────
  name: "SR35",                              // Nom court / marque
  fullName: "Serrurier Rennes 35",           // Nom complet
  domain: "serrurier-rennes35.fr",           // Domaine sans https://
  
  // ─────────────────────────────────────────────────────────────────────────
  // CONTACT
  // ─────────────────────────────────────────────────────────────────────────
  phone: "02 30 96 40 53",                   // Téléphone affiché
  phoneLink: "tel:+33230964053",             // Lien téléphone (format international)
  email: "contact@serrurier-rennes35.fr",
  
  // ─────────────────────────────────────────────────────────────────────────
  // INFORMATIONS LÉGALES
  // ─────────────────────────────────────────────────────────────────────────
  legalName: "DRM",                              // Raison sociale
  legalAddress: "122 rue Amelot, 75011 Paris",   // Adresse du siège
  siret: "98942786900015",
  rcs: "989 427 869 R.C.S. Paris",
  host: {
    name: "OVH",
    address: "2 rue Kellermann, 59100 Roubaix, France",
    website: "https://www.ovhcloud.com",
  },
  
  // ─────────────────────────────────────────────────────────────────────────
  // LOCALISATION
  // ─────────────────────────────────────────────────────────────────────────
  city: "Rennes",
  postalCode: "35000",
  department: "Ille-et-Vilaine",
  departmentCode: "35",
  region: "Bretagne",
  address: "35000 Rennes, France",
  
  // Coordonnées GPS (pour Google Maps et Schema.org)
  geo: {
    lat: 48.1173,
    lng: -1.6778,
  },
  
  // ─────────────────────────────────────────────────────────────────────────
  // HORAIRES
  // ─────────────────────────────────────────────────────────────────────────
  openingHours: "24h/24, 7j/7",
  openingHoursSchema: ["Mo-Su 00:00-23:59"], // Format Schema.org
  
  // ─────────────────────────────────────────────────────────────────────────
  // RÉSEAUX SOCIAUX
  // ─────────────────────────────────────────────────────────────────────────
  social: {
    facebook: "https://facebook.com/sr35.serrurier.rennes",
    instagram: "https://instagram.com/sr35.serrurier",
    google: "https://g.page/serrurier-rennes-35", // Page Google Business
  },
  
  // ─────────────────────────────────────────────────────────────────────────
  // AVIS GOOGLE (pour affichage)
  // ─────────────────────────────────────────────────────────────────────────
  reviews: {
    rating: 4.9,
    count: 127,
    googleUrl: "https://g.page/serrurier-rennes-35/review",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // DESIGN - COULEURS (variables CSS)
  // Ces valeurs sont injectées dans les variables CSS
  // ─────────────────────────────────────────────────────────────────────────
  colors: {
    primary: {
      50: '#e8f4fc',
      100: '#c5e4f8',
      200: '#9dd2f3',
      300: '#75c0ee',
      400: '#4daeea',
      500: '#2196e3',
      600: '#1976d2',  // Couleur principale
      700: '#1565c0',
      800: '#0d47a1',
      900: '#0a3d8f',
    }
  },
} as const;

// ─────────────────────────────────────────────────────────────────────────
// ZONES D'INTERVENTION
// Liste des villes/communes desservies
// ─────────────────────────────────────────────────────────────────────────
export const zones = [
  { name: "Rennes", slug: "rennes", postalCode: "35000", isMain: true },
  { name: "Cesson-Sévigné", slug: "cesson-sevigne", postalCode: "35510" },
  { name: "Saint-Grégoire", slug: "saint-gregoire", postalCode: "35760" },
  { name: "Betton", slug: "betton", postalCode: "35830" },
  { name: "Pacé", slug: "pace", postalCode: "35740" },
  { name: "Chantepie", slug: "chantepie", postalCode: "35135" },
  { name: "Bruz", slug: "bruz", postalCode: "35170" },
  { name: "Chartres-de-Bretagne", slug: "chartres-de-bretagne", postalCode: "35131" },
  { name: "Saint-Jacques-de-la-Lande", slug: "saint-jacques-de-la-lande", postalCode: "35136" },
  { name: "Le Rheu", slug: "le-rheu", postalCode: "35650" },
  { name: "Vezin-le-Coquet", slug: "vezin-le-coquet", postalCode: "35132" },
  { name: "Mordelles", slug: "mordelles", postalCode: "35310" },
  { name: "Noyal-Châtillon-sur-Seiche", slug: "noyal-chatillon-sur-seiche", postalCode: "35230" },
  { name: "Vern-sur-Seiche", slug: "vern-sur-seiche", postalCode: "35770" },
  { name: "Thorigné-Fouillard", slug: "thorigne-fouillard", postalCode: "35235" },
  { name: "Acigné", slug: "acigne", postalCode: "35690" },
  { name: "Montgermont", slug: "montgermont", postalCode: "35760" },
  { name: "La Chapelle-des-Fougeretz", slug: "la-chapelle-des-fougeretz", postalCode: "35520" },
  { name: "Pont-Péan", slug: "pont-pean", postalCode: "35131" },
  { name: "Gévezé", slug: "geveze", postalCode: "35850" },
  // Communes élargies
  { name: "Liffré", slug: "liffre", postalCode: "35340" },
  { name: "Melesse", slug: "melesse", postalCode: "35520" },
  { name: "Saint-Médard-sur-Ille", slug: "saint-medard-sur-ille", postalCode: "35250" },
  { name: "Clayes", slug: "clayes", postalCode: "35590" },
  { name: "L'Hermitage", slug: "l-hermitage", postalCode: "35590" },
  { name: "Bréal-sous-Montfort", slug: "breal-sous-montfort", postalCode: "35310" },
  { name: "Chavagne", slug: "chavagne", postalCode: "35310" },
  { name: "Orgères", slug: "orgeres", postalCode: "35230" },
  { name: "Bourgbarré", slug: "bourgbarre", postalCode: "35230" },
  { name: "Corps-Nuds", slug: "corps-nuds", postalCode: "35150" },
  { name: "Janzé", slug: "janze", postalCode: "35150" },
  { name: "Domloup", slug: "domloup", postalCode: "35410" },
  { name: "Nouvoitou", slug: "nouvoitou", postalCode: "35410" },
  { name: "Servon-sur-Vilaine", slug: "servon-sur-vilaine", postalCode: "35530" },
  { name: "Noyal-sur-Vilaine", slug: "noyal-sur-vilaine", postalCode: "35530" },
  { name: "Châteaugiron", slug: "chateaugiron", postalCode: "35410" },
  { name: "Vitré", slug: "vitre", postalCode: "35500" },
  { name: "Fougères", slug: "fougeres", postalCode: "35300" },
  { name: "Saint-Malo", slug: "saint-malo", postalCode: "35400" },
  { name: "Dinard", slug: "dinard", postalCode: "35800" },
  { name: "Combourg", slug: "combourg", postalCode: "35270" },
  { name: "Redon", slug: "redon", postalCode: "35600" },
  { name: "Guichen", slug: "guichen", postalCode: "35580" },
  { name: "Bain-de-Bretagne", slug: "bain-de-bretagne", postalCode: "35470" },
  { name: "Montfort-sur-Meu", slug: "montfort-sur-meu", postalCode: "35160" },
] as const;

// ─────────────────────────────────────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────────────────────────────────────
export const navigation = [
  { label: "Accueil", href: "/" },
  { label: "Dépannage", href: "/depannage" },
  { label: "Installation", href: "/installation" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Zones", href: "/zones" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;

// ─────────────────────────────────────────────────────────────────────────
// SERVICES - Chaque service a sa propre page + pages localisées
// ─────────────────────────────────────────────────────────────────────────
export const services = [
  {
    id: "depannage",
    slug: "depannage",
    name: "Dépannage Urgence",
    shortDesc: "Intervention rapide 24h/24",
    longDesc: "Service de dépannage serrurerie en urgence, disponible 24h/24 et 7j/7.",
    icon: "🔓",
    hasPage: true, // A sa propre page /depannage et des pages localisées
    bgImage: "/images/backgrounds/depannage-serrurerie-rennes-35-urgence.webp",
  },
  {
    id: "ouverture-porte",
    slug: "ouverture-de-porte",
    name: "Ouverture de Porte",
    shortDesc: "Porte claquée ou bloquée",
    longDesc: "Ouverture de porte claquée, bloquée ou suite à perte de clés. Sans dégât.",
    icon: "🚪",
    hasPage: true,
    bgImage: "/images/services/ouverture-de-porte-rennes-35.webp",
  },
  {
    id: "changement-serrure",
    slug: "changement-serrure",
    name: "Changement de Serrure",
    shortDesc: "Remplacement toutes marques",
    longDesc: "Remplacement de serrure usée, cassée ou pour renforcer la sécurité.",
    icon: "🔐",
    hasPage: true,
    bgImage: "/images/services/changement-de-serrure-rennes-35.webp",
  },
  {
    id: "rideaux-metalliques",
    slug: "depannage-rideaux-metalliques",
    name: "Dépannage Rideaux Métalliques",
    shortDesc: "Réparation et déblocage",
    longDesc: "Dépannage, réparation et déblocage de rideaux métalliques pour commerces et locaux professionnels.",
    icon: "🏪",
    hasPage: false, // Redirige vers le site partenaire DRM
    externalUrl: "https://depannage-rideau-metallique-rennes.fr",
    bgImage: "/images/services/depannage-rideau-metallique-rennes-35.webp",
  },
  {
    id: "blindage",
    slug: "blindage-porte",
    name: "Blindage de Porte",
    shortDesc: "Renforcement sécurité",
    longDesc: "Blindage de porte existante pour une protection anti-effraction maximale.",
    icon: "🛡️",
    hasPage: true,
    bgImage: "/images/services/blindage-de-porte-rennes-35.webp",
  },
  {
    id: "cylindre",
    slug: "remplacement-cylindre",
    name: "Remplacement Cylindre",
    shortDesc: "Cylindres haute sécurité",
    longDesc: "Remplacement de cylindre par des modèles haute sécurité anti-crochetage.",
    icon: "🔑",
    hasPage: true,
    bgImage: "/images/services/changement-de-cylindre-serrurerie-rennes-35.webp",
  },
] as const;

// Type exports pour TypeScript
export type SiteConfig = typeof siteConfig;
export type Zone = typeof zones[number];
export type NavItem = typeof navigation[number];
export type Service = typeof services[number];

