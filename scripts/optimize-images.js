/**
 * Script d'optimisation des images - VERSION OPTIMISÉE
 * 
 * Usage: node scripts/optimize-images.js
 * 
 * Prérequis: npm install sharp --save-dev
 * 
 * Ce script :
 * - Convertit toutes les images en WebP
 * - Redimensionne pour le web (max 1200px largeur)
 * - Applique une compression agressive mais de qualité
 * - Vise des fichiers < 300 KB
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration de qualité par type d'image (valeurs agressives pour le web)
const COMPRESSION_QUALITY = {
  hero: 50,        // Images hero - qualité suffisante pour backgrounds
  backgrounds: 50, // Backgrounds - compression agressive
  service: 55,     // Images de services
  logo: 70,        // Logos - qualité plus haute
  gallery: 55,     // Galerie
  icons: 60,       // Icônes
  default: 55      // Par défaut
};

// Dimensions maximales par type d'image (optimisées web)
const MAX_DIMENSIONS = {
  hero: { width: 1200, height: 800 },      // Hero - suffisant pour le web
  backgrounds: { width: 1200, height: 800 }, // Backgrounds
  service: { width: 800, height: 600 },     // Services - pas besoin de 4K
  logo: { width: 400, height: 200 },        // Logos
  gallery: { width: 800, height: 600 },     // Galerie
  icons: { width: 200, height: 200 },       // Icônes
  default: { width: 1000, height: 800 }     // Par défaut
};

// Taille maximale cible en KB (on réessaie avec qualité réduite si dépassé)
const TARGET_SIZE_KB = 250;

// Dossier source des images
const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');

// Extensions supportées
const SUPPORTED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];

/**
 * Détermine le type d'image selon son chemin
 */
function getImageType(filePath) {
  const relativePath = filePath.toLowerCase();
  
  if (relativePath.includes('backgrounds')) {
    return 'backgrounds';
  }
  if (relativePath.includes('hero')) {
    return 'hero';
  }
  if (relativePath.includes('service')) {
    return 'service';
  }
  if (relativePath.includes('logo')) {
    return 'logo';
  }
  if (relativePath.includes('gallery')) {
    return 'gallery';
  }
  if (relativePath.includes('icon')) {
    return 'icons';
  }
  
  return 'default';
}

/**
 * Traite une image avec optimisation adaptative
 */
async function processImage(inputPath) {
  const imageType = getImageType(inputPath);
  let quality = COMPRESSION_QUALITY[imageType];
  const { width: maxWidth, height: maxHeight } = MAX_DIMENSIONS[imageType];
  
  const ext = path.extname(inputPath).toLowerCase();
  const baseName = path.basename(inputPath, ext);
  const dirName = path.dirname(inputPath);
  const outputPath = path.join(dirName, baseName + '.webp');
  
  try {
    const stats = fs.statSync(inputPath);
    const originalSize = stats.size / 1024; // KB

    // Première passe avec la qualité standard
    let buffer = await sharp(inputPath)
      .resize(maxWidth, maxHeight, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ 
        quality,
        effort: 6,        // Max compression effort
        smartSubsample: true,
        nearLossless: false
      })
      .toBuffer();

    let newSize = buffer.length / 1024;

    // Si trop gros, réduire la qualité progressivement
    while (newSize > TARGET_SIZE_KB && quality > 30) {
      quality -= 10;
      buffer = await sharp(inputPath)
        .resize(maxWidth, maxHeight, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .webp({ 
          quality,
          effort: 6,
          smartSubsample: true
        })
        .toBuffer();
      newSize = buffer.length / 1024;
    }

    // Écrire le fichier optimisé
    fs.writeFileSync(outputPath, buffer);

    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    
    const status = newSize <= TARGET_SIZE_KB ? '✅' : '⚠️';
    console.log(`${status} ${path.basename(inputPath)} → ${baseName}.webp`);
    console.log(`   ${originalSize.toFixed(0)}KB → ${newSize.toFixed(0)}KB (-${savings}%) [q:${quality}]`);

    // Supprimer l'original si différent du webp
    if (ext !== '.webp' && inputPath !== outputPath) {
      fs.unlinkSync(inputPath);
      console.log(`   🗑️  Ancien fichier supprimé`);
    }

    return { originalSize, newSize, savings: parseFloat(savings) };
  } catch (error) {
    console.error(`❌ Erreur sur ${inputPath}:`, error.message);
    return null;
  }
}

/**
 * Parcourt récursivement un dossier
 */
function getAllImages(dir, files = []) {
  if (!fs.existsSync(dir)) {
    console.log(`⚠️ Dossier non trouvé: ${dir}`);
    return files;
  }

  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      getAllImages(fullPath, files);
    } else if (stat.isFile()) {
      const ext = path.extname(item).toLowerCase();
      if (SUPPORTED_EXTENSIONS.includes(ext)) {
        files.push(fullPath);
      }
    }
  }

  return files;
}

/**
 * Point d'entrée principal
 */
async function main() {
  console.log('═══════════════════════════════════════════════════════════════');
  console.log('🖼️  Optimisation des images - VERSION AGRESSIVE');
  console.log('═══════════════════════════════════════════════════════════════');
  console.log(`📊 Objectif: < ${TARGET_SIZE_KB} KB par image`);
  console.log('═══════════════════════════════════════════════════════════════\n');

  const images = getAllImages(IMAGES_DIR);

  if (images.length === 0) {
    console.log('⚠️ Aucune image trouvée dans', IMAGES_DIR);
    return;
  }

  console.log(`📁 ${images.length} images trouvées\n`);

  let totalOriginal = 0;
  let totalNew = 0;
  let processedCount = 0;

  for (const image of images) {
    const result = await processImage(image);
    if (result) {
      totalOriginal += result.originalSize;
      totalNew += result.newSize;
      processedCount++;
    }
  }

  const totalSavings = ((totalOriginal - totalNew) / totalOriginal * 100).toFixed(1);

  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('📊 RÉSUMÉ');
  console.log('═══════════════════════════════════════════════════════════════');
  console.log(`Images traitées: ${processedCount}/${images.length}`);
  console.log(`Taille originale: ${(totalOriginal / 1024).toFixed(2)} MB`);
  console.log(`Taille optimisée: ${(totalNew / 1024).toFixed(2)} MB`);
  console.log(`Économie totale: ${totalSavings}% (${((totalOriginal - totalNew) / 1024).toFixed(2)} MB économisés)`);
  console.log('═══════════════════════════════════════════════════════════════');
  
  if (totalNew / 1024 > 3) {
    console.log('\n⚠️  ATTENTION: La taille totale dépasse encore 3 MB.');
    console.log('   Considérez utiliser des images plus petites ou un CDN.');
  } else {
    console.log('\n✅ Optimisation terminée avec succès !');
  }
  console.log('\n');
}

// Exécution
main().catch(console.error);
