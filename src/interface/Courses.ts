export interface Courses {
    slug: string;
   acf: Acf;
}

export interface Acf {
   id: string;
   
   image: Image;
   descripcion: string;
   modulos: Modulo[];
}

export interface Image {
   ID: number;
   id: number;
   title: string;
   filename: string;
   filesize: number;
   url: string;
   link: string;
   alt: string;
   author: string;
   description: string;
   caption: string;
   name: string;
   status: string;
   uploaded_to: number;
   date: Date;
   modified: Date;
   menu_order: number;
   mime_type: string;
   type: string;
   subtype: string;
   icon: string;
   width: number;
   height: number;
   sizes: Sizes;
}

export interface Sizes {
   thumbnail: string;
   'thumbnail-width': number;
   'thumbnail-height': number;
   medium: string;
   'medium-width': number;
   'medium-height': number;
   medium_large: string;
   'medium_large-width': number;
   'medium_large-height': number;
   large: string;
   'large-width': number;
   'large-height': number;
   '1536x1536': string;
   '1536x1536-width': number;
   '1536x1536-height': number;
   '2048x2048': string;
   '2048x2048-width': number;
   '2048x2048-height': number;
}

export interface Modulo {
   id_modulo: string;
   semanas: Semana[];
}

export interface Semana {
   temas: Tema[];
}

export interface Tema {
   data: string;
}
