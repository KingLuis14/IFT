const DiseñoWeb = {
    id: "diseño-web",
    titulo: "Diseño Web",
    descripcion: "Aprenda habilidades esenciales de Html y CSS, incluyendo css FlexBox, CSS Grid , Java Scrip.  Certificación al completar el curso que mejora las perspectivas laborales.",
    url: "/diseño-web",
    imagenesBanner: {
          base64: "data:image/webp;base64,UklGRsYAAABXRUJQVlA4TLoAAAAvCQABAH+hoI0kZW/u0cv7t8Zgg4EkSYZ2evds3/3/fTZn2Lht5Mj2zO5dmcr7//uu2xzmP6QwWSARB/EAik44eXByiN0SiEQkJgi+BQ6H11SagIlY0PBgEuSLwXGJl4fu2m70wWH5LI+njS3avzVPvbuQRpQRQm1NCh+SNaC7fXZuf4pVKBrseoGBJEmGk7P22bYR0f8wdn3+6y2m2GPb+d3HXiU+XepyxADg5Nw3adgNXBMRRHnWKgQ=",
          imagen: "disenoweb-banner"
      },
    imagenes: {
      "base64": "",
      original: "/img/Diseno-Web"
    },
    modulos: [
      {
        id: "Html",
        semanas: [
          {
            temas: [
              "Introducción a HTML",
              "Estructura básica de una página web: etiquetas HTML, elementos y atributos",
              "Creación de títulos y párrafos",
              "Uso de etiquetas de texto: negrita, cursiva, subrayado.",
              "Creación de listas ordenadas y no ordenadas",
              "Enlaces: hipervínculos internos y externos",
              "Uso de imágenes"
            ]
          },
          {
            temas: [
              "Uso de elementos semánticos: header, footer, nav, section, article",
              "Mejorando la accesibilidad con etiquetas semánticas",
              "Integración de multimedia: imágenes, audio y video",
              "Atributos alt y title para imágenes: su importancia en accesibilidad y SEO.",
              "Incorporación de videos de YouTube",
              "Creación de mapas de imagen",
              "Práctica: Creación de una página web simple utilizando elementos semánticos y multimedia."
            ]
          },
          {
            temas: [
              "Creación de formularios: input, textarea, select, checkbox, radio, button",
              "Atributos de formulario: action, method, name, value, placeholder.",
              "Validación de formularios: required, minlength, maxlength.",
              "Uso de tablas: creación y estructura",
              "Atributos de tabla: colspan, rowspan",
              "Práctica: Creación de un formulario interactivo y una tabla de datos"
            ]
          },
          {
            temas: [
              "Proyecto 1: Construcción de un sitio web personal.",
              "Proyecto 2: Sitio web de una pequeña empresa local",
              "Pruebas y revisión de los proyectos",
              "Consejos para continuar aprendiendo y recursos adicionales"
            ]
          }
        ]
      },
      {
        id: "Css",
        semanas: [
          {
            temas: [
              "Introducción a CSS",
              "Selectores CSS",
              "Propiedades de estilo básicas (color, fondo, texto, tamaño, etc.)",
              "Modelo de caja (margin, border, padding)",
              "Posicionamiento de elementos (relative, absolute, fixed)",
              "Pseudo-clases y pseudo-elementos",
              "Unidades de medida y valores relativos (px, em, rem, %) ",
              "Práctica: Creación de estilos básicos para una página web."
            ]
          },
          {
            temas: [
              "Introducción a Flexbox",
              "Flex Container y Flex Items",
              "Propiedades de contenedor: display, flex-direction, flex-wrap, justify-content, align-items",
              "Propiedades de items: order, flex-grow, flex-shrink, flex-basis, align-self",
              "Diseño de diseños flexibles y responsivos",
              "Creación de menús de navegación flexibles",
              "Diseño de galerías de imágenes flexiblesflexibles."
            ]
          },
          {
            temas: [
              "Introducción a CSS Grid",
              "Creación de una cuadrícula CSS con grid-template-columns y grid-templaterows",
              "Propiedades de línea de cuadrícula (grid-column-start, grid-column-end, grid-row-start, grid-row-end) ",
              "Alineación de elementos en la cuadrícula: justify-items, align-items, justify-self, align-self",
              "Espaciado entre celdas: grid-columngap, grid-row-gap, grid-gap",
              "Creación de diseños responsivos con Grid y Media Queries"
            ]
          }, 
          {
            temas: [
              "Proyecto 1: Creación de un sitio web personal utilizando Flexbox y CSS básico.",
              "Proyecto 2: Diseño de una página de inicio para una pequeña empresa utilizando Grid y Flexbox",
              "Consejos para continuar aprendiendo y recursos adicionales."
            ]
          }
        ]
      },
      {
        "id": "JavaScript",
        semanas: [
          {
            temas: [
              "Introducción a JavaScript",
              "Variables y tipos de datos",
              "Operadores y expresiones",
              "Estructuras de control: if, else, switch",
              "Bucles: for, while, do-while, map",
              "Funciones"
            ]
          },
          {
            temas: [
              "Introducción al Document Object Model (DOM)",
              "Selección de elementos del DOM",
              "Manipulación de contenido: crear, modificar y eliminar elementos",
              "Eventos en JavaScript"
            ]
          },
          {
            temas: [
              "Arrays: creación, manipulación y recorrido",
              "Métodos de array: push, pop, shift, unshift, etc.",
              "Objetos en JavaScript: creación y propiedades",
              "Métodos de objeto: agregar, modificar y eliminar propiedades",
              "Iteración sobre objetos"
            ]
          },
          {
            temas: [
              "Introducción a la asincronía en JavaScript",
              "setTimeout y setInterval",
              "Promesas: síncronas y asíncronas",
              "Fetch API: realizar peticiones AJAX"
            ]
          }
        ]
      }
    ]
  };

export default DiseñoWeb