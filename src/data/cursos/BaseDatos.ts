import type { ImageType } from "../../interface/Image";

const BaseDatos = {
  id: "base-datos",
  titulo: "Base de datos",
  descripcion: "Aprenda habilidades esenciales de Base de datos, incluyendo Access, MySQL Básico y MySQL Avanzado.  Certificación al completar el curso que mejora las perspectivas laborales.",
  url: "/base-datos",
  imagenesBanner: {
    base64: "data:image/webp;base64,UklGRgIBAABXRUJQVlA4TPUAAAAvCUABAN/BKrZtJXPuve/hEoE2ZCcLf25XarBtJElR390z8+cfFVpvvskMbBtJUjR398zoYXKf56fzFjPN/MdEs6aQASidvJaMwsQyr0qY6LdAgP4OsifkXVh6ilSDiKArhSQfNfx7+DI09+f3PaMlZcMG/yM4kk+mDr9z6GVOrlcWoTuZ6AuenVTfNUaoxlZ/Prole361blmWztkRHpfOp/8xyPa4ylEArP04ktZqoANs5+6f6PF7c98CwwAAi2aHbNu2XUT/oxjKqp5eg/9lJWpaLzBVm6X0rk+yJQ4FThq3/cx9VyRpYp2143oYDO/UsdAHAAA=",
    imagen: "basedatos-banner"
  },
  imagenes: {
    "base64": "",
    original: {
      imgName: 'Base-de-datos',
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
      id: "CorelDraw",
      semanas: [
        {
          temas: [
            "Presentación del software CorelDRAW",
            "Interfaz de usuario y herramientas básicas.",
            "Creación y gestión de documentos.",
            "Trabajo con páginas y capas",
            "Importación y exportación de archivos."
          ]
        },
        {
          temas: [
            "Herramientas de dibujo básicas: formas geométricas, líneas, curvas.",
            "Manipulación de objetos: selección, agrupación, alineación y distribución",
            "Edición de nodos y curvas.",
            "Uso de herramientas de transformación: escalado, rotación, inclinación",
            "Trabajo con rellenos, contornos y efectos de sombra"
          ]
        },
        {
          temas: [
            "Herramientas de texto: creación, edición y formato",
            "Trabajo con estilos de texto y efectos especiales",
            "Creación y aplicación de efectos especiales: transparencias, efectos de distorsiones",
            "Creación de gráficos vectoriales complejos",
            "Uso de la herramienta de malla para efectos de degradado y deformacion"
          ]
        },
        {
          temas: [
            "Diseño de logotipos y marcas",
            "Creación de ilustraciones vectoriales complejas",
            "Preparación de archivos para impresión y web.",
            "Proyecto práctico: diseño de folletos, carteles o tarjetas de visita",
            "Consejos y trucos para optimizar el flujo de trabajo en CorelDraw"
          ]
        }
      ]
    },
    {
      id: "Adobe Photoshop",
      semanas: [
        {
          temas: [
            "Presentación del software Adobe Photoshop",
            "Interfaz de usuario y configuración inicial",
            "Conceptos básicos de edición de imágenes: tamaño, resolución, modo de color",
            "Herramientas de selección y recorte.",
            "Capas y máscaras de capa: conceptos fundamentales"
          ]
        },
        {
          temas: [
            "Herramientas de retoque básicas: pincel corrector, tampón de clonar, herramienta de parche.",
            "Ajustes de imagen: brillo/contraste, niveles, curvas y equilibrio de color",
            "Uso de filtros para efectos creativos y correcciones",
            "Trabajo con texto: herramientas de texto, estilos de texto, efectos de texto",
            "Creación y edición de formas vectoriales básicas."
          ]
        },
        {
          temas: [
            "Combinación de imágenes: técnicas de composición.",
            "Uso de ajustes de capa y estilos de capa para efectos avanzados",
            "Herramientas de transformación: escalado rotacion, deformacion",
            "Creación de composiciones panorámicas y fotomontajes",
            "Trabajo con objetos inteligentes y filtros inteligentes"
          ]
        },
        {
          temas: [
            "Creación de un proyecto de diseño gráfico desde cero",
            "Retoque avanzado de retratos: técnicas de piel suave, cambio de color de ojos, etc.",
            "Creación de efectos de texto avanzados: texto 3D, efectos de capa",
            "Automatización de tareas mediante acciones y lotes",
            "Preparación de archivos para impresión y web"
          ]
        }
      ]
    },
    {
      id: "Adobe Indesign",
      semanas: [
        {
          temas: [
            "Introducción a Adobe InDesign.",
            "Interfaz de usuario y paneles principales",
            "Creación y configuración de un nuevo documento",
            "Herramientas de selección y navegación",
            "Trabajo con marcos de texto y formas simples",
            "Formato de texto: tipografía, tamaño, espaciado"
          ]
        },
        {
          temas: [
            "Estilos de párrafo y de carácter",
            "Importación y manipulación de imágenes.",
            "Herramientas de dibujo y edición de formas",
            "Capas y organización del contenido."
          ]
        },
        {
          temas: [
            "Uso de tablas para organizar información.",
            "Creación y aplicación de estilos de objeto",
            "Herramientas de alineación y distribución",
            "Trabajo con efectos y transparencias.",
            "Preparación de documentos para impresión."
          ]
        },
        {
          temas: [
            "Exportación a formatos digitales (PDF, ePub)",
            "Previsualización y resolución de problemas.",
            "Automatización de tareas con Scripts y acciones.",
            "Consejos y mejores prácticas para el flujo de trabajo."
          ]
        }
      ]
    }
  ]
}

export default BaseDatos