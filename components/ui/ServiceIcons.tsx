// Icônes professionnelles avec Heroicons (Tailwind Labs)
import {
  LockOpenIcon,
  LockClosedIcon,
  KeyIcon,
  ShieldCheckIcon,
  BuildingStorefrontIcon,
  CheckBadgeIcon,
  CreditCardIcon,
  DocumentTextIcon,
  PhoneIcon,
  BoltIcon,
  StarIcon,
  MapPinIcon,
  CurrencyEuroIcon,
  SparklesIcon,
  ClockIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/24/solid";

// Pour avoir aussi les versions outline si besoin
import {
  LockOpenIcon as LockOpenOutline,
  KeyIcon as KeyOutline,
  PhoneIcon as PhoneOutline,
} from "@heroicons/react/24/outline";

type HeroIcon = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
    title?: string;
    titleId?: string;
  } & React.RefAttributes<SVGSVGElement>
>;

// Mapping des icônes de services
export const ServiceIconsMap: Record<string, HeroIcon> = {
  depannage: LockOpenIcon,
  "ouverture-porte": LockOpenIcon,
  "changement-serrure": LockClosedIcon,
  "rideaux-metalliques": BuildingStorefrontIcon,
  blindage: ShieldCheckIcon,
  cylindre: KeyIcon,
};

// Mapping des icônes UI génériques
export const UIIconsMap: Record<string, HeroIcon> = {
  check: CheckBadgeIcon,
  creditCard: CreditCardIcon,
  document: DocumentTextIcon,
  phone: PhoneIcon,
  zap: BoltIcon,
  star: StarIcon,
  mapPin: MapPinIcon,
  euro: CurrencyEuroIcon,
  sparkles: SparklesIcon,
  clock: ClockIcon,
  shield: ShieldCheckIcon,
  lock: LockClosedIcon,
  unlock: LockOpenIcon,
  key: KeyIcon,
};

// Export direct des icônes pour un usage simple
export const ServiceIcons = {
  Depannage: LockOpenIcon,
  OuverturePorte: LockOpenIcon,
  ChangementSerrure: LockClosedIcon,
  RideauxMetalliques: BuildingStorefrontIcon,
  Blindage: ShieldCheckIcon,
  Cylindre: KeyIcon,
};

export const UIIcons = {
  check: CheckBadgeIcon,
  creditCard: CreditCardIcon,
  document: DocumentTextIcon,
  phone: PhoneIcon,
  zap: BoltIcon,
  star: StarIcon,
  mapPin: MapPinIcon,
  euro: CurrencyEuroIcon,
  sparkles: SparklesIcon,
  clock: ClockIcon,
  shield: ShieldCheckIcon,
  lock: LockClosedIcon,
  unlock: LockOpenIcon,
  key: KeyIcon,
};

export function getServiceIcon(serviceId: string): HeroIcon | null {
  return ServiceIconsMap[serviceId] || null;
}

export function getUIIcon(iconName: string): HeroIcon | null {
  return UIIconsMap[iconName] || null;
}
