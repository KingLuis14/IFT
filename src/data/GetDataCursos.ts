import Data from './CursosData.ts';
import type { ImageType } from "../interface/Image";

interface Curso {
    id: string;
    titulo: string;
    descripcion: string;
    url: string;
    imagenesBanner : imagenesBanner;
    imagenes: {
      base64: string;
      original: ImagenOriginal;
    };
    modulos: Modulo[];
  }

  interface imagenesBanner {
    base64: string;
    imagen: string;
}

export interface ImagenOriginal {
  imgName: string;
  alt: string;
  type: string[];
  imagen: ImageType[];
}
  
 interface Modulo {
    id: string;
    semanas: Semana[];
  }
  
 interface Semana {
    temas: string[];
  }

  

const CursosData: Curso[] = Data;

export default CursosData;
