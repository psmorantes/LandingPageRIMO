🚀 RIMO - Landing Page Corporativa

Bienvenido al repositorio de la Landing Page oficial de RIMO, una empresa familiar estructurada en dos líneas de negocio de excelencia: Docencia y Servicios.

Este proyecto es una interfaz web moderna, ultrarrápida y orientada a la conversión (High-Conversion Landing Page), diseñada con un fuerte enfoque en UI/UX corporativo, animaciones fluidas y accesibilidad.

✨ Características Principales

Diseño UI/UX Premium: Interfaz limpia con uso intensivo de whitespace, paleta de colores seria/corporativa (Azul Pizarra y Dorado Ámbar) y efectos de Glassmorphism.

Totalmente Responsivo (Mobile First): Se adapta perfectamente a dispositivos móviles, tablets y pantallas de escritorio.

Animaciones al hacer Scroll (Scroll Reveal): Implementadas nativamente con IntersectionObserver de JavaScript para un rendimiento óptimo sin librerías pesadas.

Widget Flotante de WhatsApp: Botón de contacto altamente visible con badge de notificación animado y tooltip interactivo.

Gráficos SVG Nativos: Logotipos y Favicon incrustados directamente mediante código matemático (SVG) para carga instantánea y calidad infinita sin depender de imágenes externas.

🛠️ Tecnologías Utilizadas

HTML5: Estructura semántica.

Tailwind CSS (CDN): Framework de utilidades para un diseño rápido, coherente y altamente personalizable.

CSS3 Custom: Para animaciones avanzadas (@keyframes), variables globales y estilos específicos (glassmorphism).

JavaScript (Vanilla): Lógica del menú móvil, cambios de estado en el navbar y observador de intersección para animaciones.

Google Fonts: Tipografías modernas (Montserrat para títulos, Inter para cuerpos de texto).

FontAwesome 6: Iconografía profesional.

📂 Estructura de Archivos

El proyecto sigue una arquitectura modular clásica y limpia:

📁 rimo-landing-page/
│
├── 📄 index.html      # Estructura principal, configuración Tailwind y contenido
├── 📄 styles.css      # Variables globales, animaciones y estilos no-Tailwind
├── 📄 script.js       # Lógica interactiva (Menú, Navbar-scroll, Reveal animations)
└── 📄 README.md       # Documentación del proyecto


🚀 Cómo ejecutar el proyecto localmente

Este proyecto es estático y no requiere de compiladores complejos ni de Node.js para ejecutarse en su forma base.

Clona este repositorio:

git clone https://github.com/tu-usuario/rimo-landing-page.git


Navega a la carpeta del proyecto:

cd rimo-landing-page


Abre la página:
Simplemente haz doble clic en el archivo index.html para abrirlo en tu navegador web predeterminado (Chrome, Firefox, Safari, Edge).
Opcional: Si usas VS Code, puedes usar la extensión "Live Server" para tener recarga automática al hacer cambios.

🎨 Personalización Rápida

Colores Corporativos: Puedes modificar la paleta de colores directamente en el archivo index.html dentro del objeto tailwind.config.

Contacto: Para actualizar el número de WhatsApp o los correos, busca la sección #contacto en index.html y el contenedor .wa-widget al final del documento.

Redes Sociales: Los enlaces se encuentran en el bloque de la etiqueta <footer>.

📄 Licencia

Este proyecto es de uso exclusivo para RIMO. Todos los derechos reservados © 2026