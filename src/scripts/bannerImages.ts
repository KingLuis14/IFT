import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// Tipo para la función de procesamiento de archivos
type FileStat = {
  isFile: () => boolean;
};

// Directorios de entrada y salida
const __dirname = path.resolve();
const inputDir = path.join(__dirname, 'public/img-banner');
const outputDir = path.join(__dirname, 'public/img');
const outputDirTxt = path.join(__dirname, 'public/base64-img');

// Crear el directorio de salida si no existe
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

if (!fs.existsSync(outputDirTxt)) {
  fs.mkdirSync(outputDirTxt, { recursive: true });
}

// Función para generar imágenes en formato WebP
async function generateImagesBanner(): Promise<void> {
  try {
    const files: string[] = await fs.promises.readdir(inputDir);

    for (const file of files) {
      const inputPath = path.join(inputDir, file);
      const outputBannerSmallPath = path.join(outputDir, `${path.parse(file).name}-banner-small-lcpi.webp`);
      const outputBannerPath = path.join(outputDir, `${path.parse(file).name}-banner.webp`);
      const outputBannerLargePath = path.join(outputDir, `${path.parse(file).name}-banner-large-lcpi.webp`);

      try {
        const stat: FileStat = await fs.promises.stat(inputPath);
        if (stat.isFile()) {
          await sharp(inputPath).toFormat('webp').toFile(outputBannerPath);
          await sharp(inputPath).resize(420).toFormat('webp').toFile(outputBannerSmallPath);
          await sharp(inputPath).resize(720).toFormat('webp').toFile(outputBannerLargePath);
        }
        console.log('Proceso completado.');
      } catch (err) {
        console.error(`Error al procesar ${file}:`, err);
      }
    }

    
  } catch (err) {
    console.error('Error al procesar las imágenes:', err);
  }
}

// Función para generar imágenes en formato Base64
async function generateImageBase64(): Promise<void> {
  try {
    const files: string[] = await fs.promises.readdir(inputDir);

    for (const file of files) {
      const inputPath = path.join(inputDir, file);

      try {
        const stat: FileStat = await fs.promises.stat(inputPath);
        if (stat.isFile()) {
          const base64Image: string = await sharp(inputPath)
            .resize(20)
            .toFormat('webp')
            .toBuffer()
            .then((buffer) => buffer.toString('base64'));

          const dataUri: string = `data:image/webp;base64,${base64Image}`;

          // Ruta del archivo de salida en el directorio especificado
          const outputPath = path.join(outputDirTxt, `${path.parse(file).name}-base64_image.txt`);
          fs.writeFileSync(outputPath, dataUri);
          console.log(`Base64 guardado en ${outputPath}`);
          console.log('Proceso completado.');
        }
      } catch (err) {
        console.error(`Error al procesar ${file}:`, err);
      }
    }
  } catch (err) {
    console.error('Error al procesar las imágenes:', err);
  }
}

// Ejecutar las funciones
(async () => {
  await generateImagesBanner();
  await generateImageBase64();
})();
