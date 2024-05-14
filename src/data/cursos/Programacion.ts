// Modulos ...

const moduloPython = {
  id: "Python",
  semanas: [
    {
      temas: [
        "Introducción a Python: historia y características",
        "Instalación de Python y configuración del entorno de desarrollo",
        "Conceptos básicos: variables, tipos de datos, y operadores",
        "Estructuras de control: if, elif, else.",
        "Bucles: for y while."
      ]
    },
    {
      temas: [
        "Listas y tuplas: creación, acceso, modificación y métodos",
        "Manipulación de objetos: selección, agrupación, alineación y distribución",
        "Diccionarios: creación, acceso,modificación y métodos",
        "Sets: creación, acceso, modificación y métodos.",
        "Operaciones comunes con estructuras de datos."
      ]
    },
    {
      temas: [
        "Definición y llamada de funciones.",
        "Parámetros y argumentos en funciones",
        "Alcance de variables (scope).",
        "Funciones lambda y funciones de orden superior.",
        "Creación y uso de módulos."
      ]
    },
    {
      temas: [
        "Lectura y escritura de archivos en Python.",
        "Manipulación de archivos de texto y CSV.",
        "Introducción a la programación orientada a objetos.",
        "Breve introducción a librerías externas (por ejemplo, numpy, pandas, matplotlib).",
        "Conceptos básicos de Flask.",
        "Creación de una aplicación web simple."
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
        "Estructura Básica de un Programa Java",
        "Variables y Tipos de Datos",
        "Operadores y Expresiones"
      ]
    },
    {
      temas: [
        "Declaración de Variables en Java",
        "Tipos de Datos Primitivos",
        "Operadores Lógicos y de Bit",
        "Literales y Constantes",
        "Alcance de las Variables",
        "Strings y Concatenación",
        "Ejercicios Prácticos",
      ]
    },
    {
      temas: [
        "Excepciones en Java",
        "Entrada/Salida (E/S) Básica",
        "Archivos en Java",
        "Ejercicios Práctico",
        "Programación Robusta y Eficiente"
      ]
    },
    {
      temas: [
        "Introducción a GUI (Interfaz Gráfica de Usuario)",
        "Eventos y Manejo de Eventos en GUI",
        "Desarrollo de Proyecto Final",
        "Presentación de Proyectos Finales y Conclusiones",
        "Java Swing: Fundamentos",
        "Java Swing: Componentes Avanzados",
        "JavaFX: Fundamentos"
      ]
    }
  ]
};

const moduloJavaPOO = {
  id: "Java POO",
  semanas: [
    {
      temas: [
        "Introducción a Java y Programación Orientada a Objetos (POO)",
        "Variables y Estructuras de Control",
        "Clases y Objetos en Java",
        "Herencia y Polimorfismo",
        "Interfaces y Abstracción"
      ]
    },
    {
      temas: [
        "Introducción a Swing y Creación de Formularios",
        "Componentes de Swing: JLabel y JTextField",
        "Componentes de Swing: JButton y ActionListener",
        "Otros Componentes de Swing: JRadioButton y JCheckBox",
        "Gestión de Layouts en Java Swing"
      ]
    },
    {
      temas: [
        "Componentes de Swing: JComboBox y Jlist",
        "Creación de Formularios Complejos",
        "Conexión con Bases de Datos",
        "Consultas y Actualizaciones de Base de Datos",
      ]
    },
    {
      temas: [
        "Desarrollo del Proyecto Final - Parte 1",
        "Desarrollo del Proyecto Final - Parte 2",
        "Pruebas y Depuración del Proyecto Final",
        "Presentación del Proyecto Final y Cierre"
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
    original: "/img/Programacion"
  },
  modulos: [
    moduloPython,
    moduloJava,
    moduloJavaPOO
  ]
};



export default Programacion