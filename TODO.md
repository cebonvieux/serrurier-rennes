# TODO - Création de serrurier-rennes35.fr

Guide étape par étape pour créer le site de serrurerie Rennes à partir du template.

---

## 📋 Informations du projet

| Élément | Valeur |
|---------|--------|
| **Domaine** | serrurier-rennes35.fr |
| **Ville principale** | Rennes |
| **Département** | Ille-et-Vilaine (35) |
| **Région** | Bretagne |
| **Palette couleurs** | Noir & Blanc / Bleu marine (`#1d3557`) - Couleurs bretonnes |

---

## ✅ Étapes de création

### 1. Configuration principale (`config/site.ts`)

- [x] Modifier le nom de l'entreprise (ex: "SR35", "Serrurier Rennes 35")
- [x] Changer le domaine : `serrurier-rennes35.fr`
- [x] Mettre à jour le téléphone local (0230964053)
- [x] Configurer l'email de contact
- [x] Définir la ville : `Rennes`
- [x] Définir le code postal : `35000`
- [x] Définir le département : `Ille-et-Vilaine`
- [x] Définir la région : `Bretagne`

### 2. Zones d'intervention (`config/site.ts`)

Ajouter les communes de la métropole rennaise et alentours :

- [x] Rennes (35000)
- [x] Cesson-Sévigné (35510)
- [x] Saint-Grégoire (35760)
- [x] Betton (35830)
- [x] Pacé (35740)
- [x] Chantepie (35135)
- [x] Bruz (35170)
- [x] Chartres-de-Bretagne (35131)
- [x] Saint-Jacques-de-la-Lande (35136)
- [x] Le Rheu (35650)
- [x] Vezin-le-Coquet (35132)
- [x] Mordelles (35310)
- [x] Noyal-Châtillon-sur-Seiche (35230)
- [x] Vern-sur-Seiche (35770)
- [x] Thorigné-Fouillard (35235)
- [x] Acigné (35690)
- [x] Montgermont (35760)
- [x] La Chapelle-des-Fougeretz (35520)
- [x] Pont-Péan (35131)
- [x] Gévezé (35850)

### 3. Services proposés

Vérifier/adapter les services dans `config/site.ts` :

- [x] Dépannage urgence 24h/24
- [x] Ouverture de porte
- [x] Changement de serrure
- [x] Installation serrure
- [x] Blindage de porte
- [x] Remplacement cylindre

### 4. Contenu textuel

#### 4.1 Page d'accueil (`content/pages/home.json`)

- [x] Réécrire le titre hero (mentionner Rennes/Bretagne)
- [x] Réécrire le sous-titre
- [x] Adapter les badges de confiance
- [x] Réécrire les avantages (contexte local)

#### 4.2 Page dépannage (`content/pages/depannage.json`)

- [x] Réécrire le contenu hero
- [x] Adapter les statistiques
- [x] Réécrire les types d'interventions
- [x] Ajouter des références locales (quartiers rennais, etc.)

#### 4.3 Page installation (`content/pages/installation.json`)

- [x] Réécrire le contenu hero
- [x] Adapter les prestations
- [x] Mettre à jour les marques partenaires

#### 4.4 Pages services (`content/pages/services/*.json`)

- [x] `depannage.json` - Réécrire le contenu
- [x] `ouverture-de-porte.json` - Réécrire le contenu
- [x] `changement-serrure.json` - Réécrire le contenu
- [x] `installation-serrure.json` - Réécrire le contenu
- [x] `blindage-porte.json` - Réécrire le contenu
- [x] `remplacement-cylindre.json` - Réécrire le contenu

#### 4.5 FAQ (`content/faq.json`)

- [x] Réécrire toutes les questions/réponses
- [x] Adapter au contexte rennais
- [x] Mentionner des spécificités locales

#### 4.6 Tarifs (`content/tarifs.json`)

- [x] Vérifier/adapter la grille tarifaire
- [x] Ajuster les prix si nécessaire

### 5. Design et couleurs

#### 5.1 Palette couleurs (`tailwind.config.js`)

- [x] Générer une palette avec [uicolors.app](https://uicolors.app/create) à partir de `#1d3557` (bleu marine breton)
- [x] Remplacer les couleurs `primary` dans `tailwind.config.js`
- [x] Ajout d'une couleur `accent` dorée (rappel de l'hermine bretonne)

Palette appliquée pour Rennes :
```javascript
primary: {
  50: '#f0f4f8',
  100: '#d9e2ec',
  200: '#bcccdc',
  300: '#9fb3c8',
  400: '#6e8ca8',
  500: '#486581',
  600: '#1d3557',  // Couleur principale - bleu marine breton
  700: '#17293f',
  800: '#102a43',
  900: '#0a1929',
  950: '#061018',
}
```

#### 5.2 Typographie (`app/layout.tsx` + `tailwind.config.js`)

- [x] Police DM Sans configurée via next/font/google
- [x] Chargement optimisé avec font-display: swap

#### 5.3 Composants (`app/globals.css`)

- [x] Boutons avec coins arrondis légers (rounded-lg) - style sobre breton
- [x] Cards avec bordure subtile et effet hover élégant
- [x] Badges avec bordures légères
- [x] Ajout du composant `.card-accent` avec bordure gauche colorée
- [x] Ajout du `.section-divider` décoratif

### 6. Images (`public/images/`)

- [x] Logo entreprise (`logos/`)
- [x] Image hero (`hero/`)
- [x] Images services (`services/`)
- [x] Photos équipe (`team/`)
- [x] Images zones/ville de Rennes (`zones/`)
- [x] Arrière-plans (`backgrounds/`)
- [x] Favicon (utilise le logo)

**⚠️ IMPORTANT : Utiliser des images uniques, pas de copier-coller d'autres sites**

### 7. Mentions légales et contact

#### 7.1 Mentions légales (`app/mentions-legales/page.tsx`)

- [x] Raison sociale (DRM)
- [x] Adresse du siège (122 rue Amelot, 75011 Paris)
- [x] SIRET (98942786900015)
- [x] RCS (989 427 869 R.C.S. Paris)
- [x] Nom du responsable
- [x] Hébergeur (OVH)

#### 7.2 Politique de confidentialité (`app/confidentialite/page.tsx`)

- [x] Vérifier/adapter le contenu RGPD

#### 7.3 Page contact (`app/contact/page.tsx`)

- [x] Vérifier les informations affichées
- [x] Configurer le formulaire (webhook n8n : lioai.app.n8n.cloud)

### 8. SEO et métadonnées

- [x] Vérifier les métadonnées dans `app/layout.tsx`
- [x] Mettre à jour le titre du site (optimisé pour "Serrurier Rennes")
- [x] Mettre à jour la description (avec mots-clés et emoji)
- [x] Ajouter les balises Open Graph
- [x] Ajouter les Twitter Cards
- [x] Créer robots.txt
- [x] Créer sitemap.xml dynamique (génère ~350 URLs)
- [x] Ajouter Schema.org JSON-LD (LocalBusiness + Locksmith)
- [x] Vérifier toutes les balises alt des images

### 9. Fonctionnalités additionnelles (optionnel)

- [ ] Configurer Google Analytics
- [ ] Ajouter Google Search Console
- [ ] Configurer Google My Business
- [ ] Ajouter le pixel Facebook (si publicité)

---

## 🚀 Build et déploiement

### Test local

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
# → Vérifier sur http://localhost:3000
```

### Build de production

```bash
# Générer le site statique
npm run build
# → Le site est généré dans le dossier /out
```

### Déploiement

- [ ] Configurer `deploy/deploy.sh` avec les infos du serveur
- [ ] Configurer `deploy/nginx.conf` avec le domaine
- [ ] Exécuter le déploiement :

```bash
chmod +x deploy/deploy.sh
./deploy/deploy.sh
```

Ou déployer sur :
- [ ] Vercel
- [ ] Netlify
- [ ] VPS avec Nginx

---

## 🔍 Checklist finale avant mise en ligne

- [ ] Tous les textes ont été réécrits (pas de copier-coller)
- [ ] Les couleurs sont personnalisées (palette bretonne)
- [ ] Les images sont uniques et optimisées
- [ ] Le téléphone fonctionne (lien `tel:`)
- [ ] Le formulaire de contact fonctionne
- [ ] Les mentions légales sont complètes
- [ ] Le site est responsive (mobile, tablette, desktop)
- [ ] Les liens internes fonctionnent
- [ ] Le favicon est en place
- [ ] Les métadonnées SEO sont configurées
- [ ] Google Analytics est configuré
- [ ] Le certificat SSL est actif (HTTPS)

---

## 📊 Pages générées automatiquement

Une fois configuré, le template génère automatiquement :

| Type | Nombre estimé |
|------|---------------|
| Pages services | 6 |
| Pages zones | ~20 |
| Pages service × zone | ~120 |
| Pages statiques | 5 (accueil, tarifs, contact, mentions, confidentialité) |
| **Total** | ~150 pages optimisées SEO |

---

## 📝 Notes

- Toujours utiliser `npm run dev` pour prévisualiser les changements
- Les variables `{city}`, `{name}`, `{phone}` sont automatiquement remplacées
- Prendre des captures d'écran avant/après pour documenter les changements
- Sauvegarder régulièrement avec Git

---

*Dernière mise à jour : Décembre 2024*

