import { z, defineCollection } from 'astro:content';

// 2. Definir un `type` y `schema` para cada colección
const Curso = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    titulo: z.string(),
    descripcion: z.string(),
    url: z.string(),
    categoria : z.string().optional(),
    imagenesBanner: z.object({
      base64: z.string(),
      imagen: z.string()
    }),
    images: z.object({
      placeholder: z.object({
        imgName: z.string(),
        formats: z.string(),
      }),
      original: z.object({
        imgName: z.string(),
        alt: z.string(),
        formats: z.array(z.string())
      })
    }),
    modulos: z.array(z.object({
      id: z.string(),
      semanas: z.array(z.object({
        temas: z.array(z.string())
      }))
    }))
  })
});

// 3. Exportar un único objeto `collections` para registrar tu(s) colección(es)
export const collections = {
  'curso': Curso,
};
