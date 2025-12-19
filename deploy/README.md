# 🚀 Guide de Déploiement - Serrurier Template

## Prérequis

- Un VPS avec Nginx installé
- Accès SSH au serveur
- Domaine pointant vers l'IP du VPS

## Déploiement Rapide

### 1. Configurer le script

Éditez `deploy/deploy.sh` et modifiez ces variables :

```bash
DOMAIN="serrurier-rennes35.fr"    # Votre domaine
VPS_USER="root"                    # Utilisateur SSH
VPS_HOST="123.456.789.0"          # IP du VPS
```

### 2. Optimiser les images (IMPORTANT !)

Avant chaque déploiement, optimisez les images :

```bash
node scripts/optimize-images.js
```

Cela réduit drastiquement la taille des images (ex: 70 MB → 1 MB).

### 3. Déployer

```bash
chmod +x deploy/deploy.sh
./deploy/deploy.sh
```

Le script va automatiquement :
1. ✅ Build le site Next.js
2. ✅ Upload les fichiers sur le VPS
3. ✅ Configurer Nginx avec cache optimisé
4. ✅ Recharger Nginx

## Configuration SSL (HTTPS)

Après le premier déploiement, installez le certificat SSL :

```bash
ssh root@votre-vps
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d votre-domaine.fr -d www.votre-domaine.fr
```

## Vérifier le Cache

Pour vérifier que le cache est bien appliqué :

```bash
curl -I https://votre-domaine.fr/images/logos/votre-logo.webp
```

Vous devez voir :
```
Cache-Control: public, max-age=31536000, immutable
```

## Problèmes PageSpeed - Solutions

### ❌ "Utiliser des durées de mise en cache efficaces"

**Cause** : Le serveur ne renvoie pas les headers de cache.

**Solution** : S'assurer que :
1. La configuration Nginx est correctement appliquée
2. Nginx est rechargé après modification

```bash
# Sur le VPS
nginx -t                    # Tester la config
systemctl reload nginx      # Recharger
```

### ❌ Images trop lourdes

**Cause** : Images originales non optimisées.

**Solution** :
```bash
node scripts/optimize-images.js
npm run build
./deploy/deploy.sh
```

### ❌ YouTube Video (thumbnail) - TTL 5min

C'est normal ! Les ressources tierces (YouTube) ont leur propre politique de cache.
C'est hors de votre contrôle et PageSpeed le mentionne comme "tiers".

## Structure des fichiers

```
deploy/
├── deploy.sh      # Script de déploiement automatique
├── nginx.conf     # Configuration Nginx (cache, gzip, SSL)
└── README.md      # Ce fichier
```

## Dépannage

### Le cache ne fonctionne toujours pas

1. Vérifiez que le fichier nginx.conf est bien sur le serveur :
```bash
ssh root@votre-vps "cat /etc/nginx/sites-available/votre-domaine.fr.conf"
```

2. Vérifiez le lien symbolique :
```bash
ssh root@votre-vps "ls -la /etc/nginx/sites-enabled/"
```

3. Vérifiez les logs Nginx :
```bash
ssh root@votre-vps "tail -f /var/log/nginx/error.log"
```

### Les images ne se chargent pas

Vérifiez les permissions :
```bash
ssh root@votre-vps "chown -R www-data:www-data /var/www/votre-domaine.fr"
```

## Maintenance

### Mettre à jour le site

```bash
# Modifier vos fichiers localement
npm run build
./deploy/deploy.sh
```

### Renouveler SSL (automatique normalement)

```bash
ssh root@votre-vps "certbot renew"
```
