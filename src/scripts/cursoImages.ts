import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

type FileStat = {
  isFile: () => boolean;
};

// Directorios de entrada y salida
const __dirname = path.resolve();
const inputDir = path.join(__dirname, 'public/img-placeholder');
const outputDir = path.join(__dirname, 'public/img');

// Crear el directorio de salida si no existe
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Función para generar y mover imágenes
async function generateAndMoveImages(): Promise<void> {
  try {
    const files: string[] = await fs.promises.readdir(inputDir);

    for (const file of files) {
      const inputPath = path.join(inputDir, file);
      const outputPlaceholderPath = path.join(outputDir, `placeholder_${path.parse(file).name}.webp`);
      const outputOriginalPath = path.join(outputDir, `${path.parse(file).name}.webp`);

      try {
        const stat: FileStat = await fs.promises.stat(inputPath);
        if (stat.isFile()) {
          await sharp(inputPath).resize(20).toFormat('webp').blur(3).toFile(outputPlaceholderPath);
          await sharp(inputPath).webp({ quality: 80 }).toFile(outputOriginalPath);
          console.log(`Archivo ${file} procesado y guardado.`);
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

// Ejecutar la función
generateAndMoveImages();
