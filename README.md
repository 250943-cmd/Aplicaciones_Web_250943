# Practicas de la asignatura de Aplicaciones Web
## T.S.U en Desarrollo de Software Multiplataforma
#### Docente: M.T.I Marco.A Ramirez Hernández

Periodo:Septiembre -Diciembre 2026

# Practicas de la asignatura de Aplicaciones Web
## T.S.U en Desarrollo de Software Multiplataforma
#### Docente: M.T.I Marco.A Ramirez Hernández

Periodo:Septiembre -Diciembre 2026

---

# Práctica 02: Desarrollo de un Perfil Personal Web Responsivo
Estudiante: [Yair Sampayo Viveros]  
Asignatura: [Aplicacione Web]  

---

## 🎯 Objetivo
Desarrollar una página web de perfil personal utilizando HTML5 semántico, CSS3 avanzado (Flexbox, Grid, efectos visuales) y JavaScript básico para la manipulación del DOM. El proyecto busca comprender la estructuración, diseño estético responsivo y la interactividad de los contenidos digitales, gestionando el código mediante control de versiones en Git.

## 📝 Descripción del Proyecto
El proyecto consiste en un sitio web de una sola página (*Single Page Application* estética) que presenta información profesional y personal del estudiante. Integra componentes multimedia autónomos, efectos visuales modernos como *parallax* y *glassmorphism*, un carrusel interactivo para gustos personales y ventanas modales dinámicas para visualizar recursos sin salir de la página.

## 📂 Estructura de Directorios
El proyecto se organiza bajo una arquitectura limpia utilizando rutas relativas:

```text
Practica02/
├── index.html
├── README.md
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── assets/
    ├── images/
    │   ├── perfil.jpg
    │   ├── parallax-bg1.jpg
    │   └── favicon.ico
    ├── media/
    │   ├── cancion.mp3
    │   └── video-presentacion.mp4
    ├── docs/
    │   └── curriculum.pdf
    └── icons/
        └── social-icons.svg
```

## 🛠️ Tecnologías Utilizadas
* **HTML5:** Estructuración semántica y carga de recursos multimedia nativos.
* **CSS3:** Estilos personalizados, diseño responsivo (Media Queries, `clamp()`), Flexbox, CSS Grid y efectos visuales.
* **JavaScript (Vanilla JS):** Manipulación del DOM, lógica de control del carrusel y gestión de ventanas modales.
* **Git & GitHub:** Control de versiones mediante la rama `Practica02` y flujo de integración vía *Pull Request*.

## 🧱 Explicación de las Secciones HTML5
El documento `index.html` se estructuró con las siguientes etiquetas semánticas clave:
1. `<header>` y `<nav>`: Contienen el logotipo y el menú de navegación con enlaces internos (`href="#id"`) para un desplazamiento suave (*smooth scroll*).
2. `<main>`: Alberga el núcleo del contenido dividido en secciones independientes.
3. `<section id="perfil">`: Muestra la fotografía principal, presentación y aspiraciones utilizando `<article>` para separar los bloques de texto.
4. `<section id="intereses">`: Contenedor del carrusel multimedia para películas, canciones y libros.
5. `<footer>`: Incluye los derechos de autor y los enlaces a redes sociales usando iconos SVG embebidos.

## 🎨 Principales Propiedades CSS3 Aplicadas
* **Efecto Parallax:** Implementado en los contenedores de transición de fondo mediante:
  ```css
  background-image: url('../assets/images/parallax-bg1.jpg');
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  ```
* **Efecto Glassmorphism:** Aplicado en las tarjetas de perfil y menús para lograr transparencias modernas:
  ```css
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  ```
* **Diseño Responsivo Fluido:** Uso de funciones tipográficas adaptables sin saturar de media queries:
  ```css
  font-size: clamp(1rem, 2.5vw, 2rem);
  ```

## ⚡ Funcionalidades JavaScript Desarrolladas
* **Carrusel de Intereses:** Lógica basada en arreglos de elementos para alternar la clase `.active` mediante botones de dirección (prev/next), modificando la propiedad `transform: translateX()` del contenedor de tarjetas.
* **Ventanas Modales:** Escucha de eventos `click` en los elementos multimedia. Al activarse, cambia el estilo del modal a `display: flex` e inyecta dinámicamente las etiquetas `<video>`, `<audio>` o `<iframe>` para el PDF. Además, se añade `document.body.style.overflow = 'hidden'` para bloquear el scroll de fondo.

## 🚀 Instrucciones de Ejecución
1. Clona el repositorio en tu máquina local o descarga la carpeta `Practica02`.
2. Asegúrate de mantener intacta la estructura de carpetas (`css`, `js`, `assets`).
3. Abre el archivo `index.html` en cualquier navegador web moderno (Chrome, Edge, Firefox, Safari).
4. Para probar de manera óptima las ventanas modales y elementos multimedia, se recomienda levantar un servidor local (por ejemplo, usando la extensión *Live Server* en VS Code).

## 📸 Capturas de Pantalla

* **Captura 1 - Vista de Escritorio General:**

  ![Vista Escritorio](./Practica03/assets/images/CAP_1.png)

* **Captura 2 - Efecto Parallax y Transiciones:**

  ![Efecto Parallax](./Practica03/assets/images/CAP_2.png)

* **Captura 3 - Carrusel Multimedia (Películas y Música):**

  ![Carrusel de Intereses](./Practica03/assets/images/CAP_3.png)

* **Captura 4 - Ventana Modal Activa (Reproducción de Video/PDF):**

  ![Ventana Modal Abierta](./Practica03/assets/images/CAP_4.png)

* **Captura 5 - Adaptación Responsiva (Vista en Celular):**

  ![Vista Móvil](./Practica03/assets/images/CAP_5.png)

* **Captura 6 - Menú de Navegación Desplegable (Mobile):**

  ![Menú Responsivo](./Practica03/assets/images/CAP_6.png)
## 🏁 Conclusiones
El desarrollo de esta práctica permitió consolidar la importancia del HTML semántico para el SEO y la accesibilidad web. CSS Grid y Flexbox demostraron ser herramientas indispensables para construir estructuras complejas de forma eficiente, mientras que el uso de `clamp()` optimizó el flujo de diseño responsivo. Finalmente, la implementación de JavaScript nativo para los modales y el carrusel reforzó el entendimiento de la manipulación del DOM y el control de eventos sin depender de librerías externas.

---

### Tabla de practicas de la materia 

|No.

---

### Tabla de practicas de la materia 

|No. | Nombre | Descripción | Potenciador | Estatus |
| --- | --- | --- |--- | --- |
|1.|Metodologia  de evaluación de la Materia | Transcribir en libreta y comprender la metodologia  y fechas de evaluación de la asignatura|5| 🟢 Concluida |
|2.|Mi Primer Pagina web| Codificar la primera pagina web con HTML puro,sin estilos ni funcionalidades| 10 | 🟢 Concluida|

---