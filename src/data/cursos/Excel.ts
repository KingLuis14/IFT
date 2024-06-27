import type { ImageType } from "../../interface/Image";

const Excel = {
    id: "excel",
    titulo: "Microsoft Excel",
    descripcion: "Aprenda habilidades esenciales de Excel, incluyendo Excel Básico, Excel Intermedio y Excel Avanzado.  Certificación al completar el curso que mejora las perspectivas laborales.",
    url: "/excel",
    imagenesBanner: {
          base64: "data:image/webp;base64,UklGRtQAAABXRUJQVlA4TMgAAAAvCQABAI/BIJKkRntk/w4xAB/JsDbYSJKtZL/jcP+LERO5RN+NQSNJinb3WMD5V3YO+J5x5j8AauC891TCigR2fbT/NvOl8lvVh+luvb21cGEF2A9BmLxSNiigy4kcRvkxGSGKs4BmQsDeayI+OmoCUijb4SNscwSrdQD5WfUIMuhdVzYBE316gSEre/B95MiFnzZx3aSagGEAAGWT2c22zYj+R6HrJoy6B9y5EYzydP1hZiUmSI3+N8SOW1a91+7vtsznlATHBQ==",
          imagen: "excel-banner"
      },
    imagenes: {
      "base64": "",
      original: {
        imgName: 'Diseño-grafico',
        alt: 'imagen de about 1',
        type: ['avif', 'webp'],
        get imagen(): ImageType[] {
          return this.type.map((ty: string) => {
            return { url: `${this.imgName}.${ty}`, type: ty };
          })
        }
      }
    },
    modulos: [
      {
        id: "Excel Basico",
        semanas: [
          {
            temas: [
              "Interface gráfica de Excel",
              "Formatos",
              "Bordes y sombreado",
              "Diseño de cuadros",
              "Funciones Básica",
              "Suma, Promedio, Max, Min",
              "Moda.uno, Mediana",
              "K.esimo.mayor",
              "K.esimo.menor"
            ]
          },
          {
            temas: [
              "Funciones de conteo",
              "Contara, Contar",
              "Contar.blanco",
              "Contar.si, Sumar.si",
              "Promedio.si"
            ]
          },
          {
            temas: [
              "Contar.si.conjunto",
              "Sumar.si.conjunto",
              "Promedio.si.conjunto",
              "Funciones de fecha",
              "Hoy, Ahora, Fecha",
              "Dia, Mes, Año",
              "Frac.año",
              "Dias360, Dias.lab",
              "Dias.lab.intl",
              "Diassem"
            ]
          },
          {
            temas: [
              "Funciones de texto",
              "Mayusc, Minusc, Nompropio",
              "Izquierda, Derecha, Extrae",
              "Concat, Largo",
              "Combinación de correspondencia",
              "Funciones condicionales",
              "Si, Si.conjunto, Si.error",
              "Operadores logicos",
              "Operador Y, Operador O"
            ]
          }
        ]
      },
      {
        id: "Excel Intermedio",
        semanas: [
          {
            temas: [
              "Repaso de Funciones lógicas",
              "Operadores lógicos y, o",
              "Funciones de búsqueda",
              "Buscar",
              "BuscarV, BuscarH",
              "Indirecto",
              "Practicas Guiadas"
            ]
          },
          {
            temas: [
              "Tablas y formatos condicionales",
              "Filtros comunes",
              "Filtros avanzados",
              "Gráficos estadísticos",
              "Subtotales"
            ]
          },
          {
            temas: [
              "Introducción a Tablas Dinámicas",
              "Tablas Dinámicas",
              "Gráficos Dinámicos",
              "Consolidación de datos",
              "validación de datos"
            ]
          },
          {
            temas: [
              "Protección de hojas, celdas",
              "Proteger libros",
              "Controles de formularios",
              "Función Indice",
              "Ejercicios Prácticos",
              "Evaluación"
            ]
          }
        ]
      },
      {
        id: "Excel Avanzado",
        semanas: [
          {
            temas: [
              "Introducción a Macros",
              "Grabación y edición",
              "Controles de formulario y macros",
              "Usos de funciones de revisión y comentarios"
            ]
          },
          {
            temas: [
              "Compartir libros en la nube",
              "Importación de datos de otras aplicaciones",
              "Exportación de datos",
              "Ejercicios prácticos"
            ]
          },
          {
            temas: [
              "Introducción a la programación VBA",
              "Crear macros desde Visual Basic",
              "Uso de condicionales",
              "Uso de Bucles",
              "Creación de formularios y controles de usuario"
            ]
          },
          {
            temas: [
              "Automatización de tareas con Macros",
              "Ejercicios prácticos de desarrollo de habilidades con programación",
              "Importación de SQL, Access"
            ]
          }
        ]
      }
    ]
  }

  export default Excel