// Modulos ...

import type { ImageType } from "../../interface/Image";

const moduloPython = {
  id: "Python",
  semanas: [
    {
      temas: [
        "Breve historia y características del lenguaje Python.",
        "Instalación del intérprete de Python y configuración del entorno de desarrollo..",
        "Variables y tipos de datos básicos (enteros, flotantes, cadenas, booleanos).",
        "Operadores aritméticos, de comparación y lógicos.",
        "Estructuras de control de flujo (if, else, elseif, while, for).",
        "Funciones y definición de funciones personalizadas."
      ]
    },
    {
      temas: [
        "Creación y manipulación de listas.",
        "Operaciones comunes con listas (añadir, eliminar, modificar elementos).",
        "Acceso a elementos de una lista y slicing.",
        "Tuplas y sus características (inmutabilidad).",
        "Creación y manipulación de diccionarios.",
        "Acceso a elementos de un diccionario y operaciones comunes.",
        "Conjuntos y operaciones de conjuntos (unión, intersección, diferencia)."
      ]
    },
    {
      temas: [
        "Introducción a la programación orientada a objetos",
        "Clases y objetos en Python.",
        "Atributos y métodos de clase.",
        "Encapsulamiento y modificadores de acceso.",
        "Concepto de herencia y uso de la palabra clave super",
        "Sobrescritura de métodos y polimorfismo.",
        "Clases abstractas y métodos abstractos."
      ]
    },
    {
      temas: [
        "Creación y uso de módulos en Python.",
        "Importación de módulos y paquetes.",
        "Organización de código en varios archivos.",
        "Introducción a proyectos y aplicaciones reales.",
        "Desarrollo de pequeños proyectos utilizando los conocimientos adquiridos",
        "Mejores prácticas y recomendaciones para la escritura de código en Python."
      ]
    }
  ]
};

const moduloJava = {
  id: "Java",
  semanas: [
    {
      temas: [
        "Historia y Características de Java",
        "Instalación del Entorno de Desarrollo (IDE)",
        "Uso de un IDE (como IntelliJ IDEA, Eclipse o NetBeans).",
        "Primer programa en Java ('Hola Mundo').",
        "Estructura Básica de un Programa Java",
        "Variables y Tipos de Datos",
        "Operadores aritméticos, lógicos y relacionales.",
        "Estructuras de control de flujo (if, else, switch)."
      ]
    },
    {
      temas: [
        "Definición de clases y creación de objetos.",
        "Métodos y constructores.",
        "Encapsulamiento (modificadores de acceso:private, public, protected).",
        "Uso de this para referenciar el objeto actual.",
        "Concepto de herencia y uso de extends.",
        "Sobrescritura de métodos (override).",
        "Polimorfismo y clases abstractas.",
        "Interfaces y su implementación"
      ]
    },
    {
      temas: [
        "Listas (ArrayList, LinkedList).",
        "Conjuntos (HashSet, TreeSet)",
        "Mapas (HashMap, TreeMap).",
        "Manejo de Excepciones",
        "Concepto de excepciones y jerarquía de excepciones.",
        "Manejo de excepciones con try, catch, finally.",
        "Creación de excepciones personalizadas.",
        "Lectura y escritura de archivos con FileReader, FileWriter",
        "Uso de BufferedReader y BufferedWriter",
        "Serialización de objetos."
      ]
    },
    {
      temas: [
        "Conceptos básicos de hilos (threads)",
        "Creación de hilos mediante Thread y Runnable",
        "Sincronización de hilos y problemas de concurrencia.",
        "Uso de ExecutorService para gestión de hilos.",
        "Introducción a Swing y sus componentes básicos (JFrame, JPanel, JButton, etc.).",
        "Gestión de eventos en Swing.",
        "Diseño de interfaces gráficas de usuario (GUI) simples"
      ]
    }
  ]
};

const moduloPhp = {
  id: "PHP",
  semanas: [
    {
      temas: [
        "Breve historia y características de PHP",
        "Diferencias entre PHP y otros lenguajes de programación",
        "Aplicaciones comunes de PHP en el desarrollo web",
        "Instalación de un servidor web local (como XAMPP, WampServer o MAMP).",
        "Configuración del entorno de desarrollo (editor de texto, IDE).",
        "Creación de un archivo PHP básico y ejecución en el servidor local."
      ]
    },
    {
      temas: [
        "Variables y tipos de datos en PHP",
        "Componentes de Swing: JLabel y JTextField",
        "Operadores aritméticos, de comparación y lógicos.",
        "Estructuras de control de flujo (if, else, switch, while, for).",
        "Uso de funciones y definición de funciones personalizadas.",
        "Concepto de arrays en PHP.",
        "Trabajo con arrays (creación, acceso a elementos, modificación, eliminación).",
        "Arrays asociativos.",
        "Trabajo con matrices multidimensionales."
      ]
    },
    {
      temas: [
        "Creación de formularios HTML.",
        "Métodos de envío de datos (GET y POST).",
        "Recuperación y procesamiento de datos enviados desde un formulario en PHP.",
        "Concepto de sesiones y cookies.",
        "Uso de sesiones para mantener el estado de la aplicación.",
        "Almacenamiento y recuperación de datos en cookies"
      ]
    },
    {
      temas: [
        "Introducción a MySQL y bases de datos relacionales",
        "Configuración de la conexión a una base de datos MySQL en PHP",
        "Consultas básicas (SELECT, INSERT, UPDATE, DELETE).",
        "Integración de PHP con HTML para crear páginas web dinámicas.",
        "Uso de PHP para generar contenido dinámicamente en una página web.",
        "Prácticas recomendadas y medidas de seguridad en el desarrollo web con PHP."
      ]
    }
  ]
};


const Programacion = {
  id: "programacion",
  titulo: "Programación",
  descripcion: "Aprenda habilidades esenciales de Programción, incluyendo Python, Java Básico, Java POO y PHP.  Certificación al completar el curso que mejora las perspectivas laborales.",
  url: "/programacion",
  imagenesBanner: {
    base64: "data:image/webp;base64,UklGRhABAABXRUJQVlA4TAMBAAAvCYABACfCoJEkRTP3zPz+Zb0Q3N0DGwwjSTZ1e+/b9s8/np+JjWPbSJKi2WP4tyn/kD4HRov3bv6Dup//GZgRhCAEcQQAJAiJgBDSCzmx8Bq0SKGRpBg5yUgiM31fz2NhiVaSyuxBm+DTMk3Bt6h+qTSNDEn+CWJVIFEkyDWllF/SWA4FIvHMNIBoaCVDj8xwU7oVdoL1oZvWiTGnkgWlWxSxErkh/y8mp7gE7CWvw/m33EXsIePoXENHlJTqHhwEAEC24dm2bVs3IvofzTpqAksRCBQv8+/750kUSs/np508Doft4rgPZWAAmJjXj+vW+y6ohNX7tXUOI8lWluyRrtImAA==",
    imagen: "programacion-banner"
  },
  imagenes: {
    base64: "",
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
    moduloPython,
    moduloJava,
    moduloPhp
  ]
};



export default Programacion