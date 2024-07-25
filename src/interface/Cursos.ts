// cursos.ts
export interface Tema {
    temas: string[];
}

export interface Curso {
    id: string;
    semanas: Tema[];
}

export interface Course {
    nombre: string;
    descripcion: string;
    url: string;
    categoria?: string; // Categoria es opcional ya que no está presente en todos los objetos
    imagenPlaceholder: string;
    imagenOriginal: string;
    imagenBanner: string;
    imagenBanner64: string;
    cursos: Curso[];
}

export interface ApiResponse {
    data: Course[];
}
