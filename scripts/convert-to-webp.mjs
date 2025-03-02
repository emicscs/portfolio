import sharp from 'sharp';
import { readdir } from 'fs/promises';
import path from 'path';

const PUBLIC_DIR = 'public';

async function convertToWebP() {
  try {
    const files = await readdir(PUBLIC_DIR);
    
    for (const file of files) {
      if (file.match(/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/i)) {
        const inputPath = path.join(PUBLIC_DIR, file);
        const outputPath = path.join(PUBLIC_DIR, `${path.parse(file).name}.webp`);
        
        console.log(`Converting ${file} to WebP...`);
        
        await sharp(inputPath)
          .webp({
            quality: 85,  // High quality
            effort: 6,    // Maximum compression effort
          })
          .toFile(outputPath);
          
        console.log(`Successfully converted ${file} to WebP`);
      }
    }
    
    console.log('All conversions completed!');
  } catch (error) {
    console.error('Error during conversion:', error);
  }
}

convertToWebP(); 