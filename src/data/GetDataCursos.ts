import Data from './CursosData.json';

interface Curso {
    id: string;
    titulo: string;
    descripcion: string;
    url: string;
    imagenesBanner : imagenesBanner;
    imagenes: {
      base64: string;
      original: string;
    };
    modulos: Modulo[];
  }

  interface imagenesBanner {
    base64: string;
    imagen: string;
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
