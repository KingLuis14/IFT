export interface Cursos {
    data:       Data;
    extensions: Extensions;
}

export interface Data {
    cursosDatas: CursosDatas;
}

export interface CursosDatas {
    nodes: Node[];
}

export interface Node {
    slug:        string;
    cursosMalla: CursosMalla;
}

export interface CursosMalla {
    id:          string;
    descripcion: string;
    imageBanner: ImageBanner | null;
    image:       Image;
    modulos:     Modulo[];
}

export interface Image {
    mediaDetails: MediaDetails;
    mediaItemUrl: string;
}

export interface MediaDetails {
    height: number;
    width:  number;
}

export interface ImageBanner {
    mediaItemUrl: string;
}

export interface Modulo {
    idModulo: string;
    semanas:  Semana[];
}

export interface Semana {
    temas: Tema[];
}

export interface Tema {
    data: string;
}

export interface Extensions {
    debug: Debug[];
}

export interface Debug {
    type:    string;
    message: string;
}
