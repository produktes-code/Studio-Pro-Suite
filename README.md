# 🎬 Studio Pro AI Suite 3.0

<div align="center">

![Studio Pro AI Suite](https://img.shields.io/badge/Studio%20Pro-AI%20Suite%203.0-f43f5e?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIj48cGF0aCBkPSJNMjEgMTZWOGEyIDIgMCAwIDAtMS0xLjczbC03LTRhMiAyIDAgMCAwLTIgMGwtNyA0QTIgMiAwIDAgMCAzIDh2OGEyIDIgMCAwIDAgMSAxLjczbDcgNGEyIDIgMCAwIDAgMiAwbDctNEEyIDIgMCAwIDAgMjEgMTZ6Ii8+PC9zdmc+)
![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-8-646cff?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=for-the-badge&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge)

**Ecosistema profesional de generación de prompts cinemáticos para IA generativa**

[Despliegue Local](#-despliegue-local) · [Características](#-características-principales) · [Manual de Uso](#-manual-de-uso) · [Soporte Multi-idioma](#-soporte-multi-idioma-nativo) · [Sobre el Autor](#-sobre-el-autor)

</div>

---

## 📖 Concepto y Descripción

**Studio Pro AI Suite 3.0** es una suite creativa de escritorio diseñada para profesionales del audiovisual, directores de cine y creadores de contenido que trabajan con **Inteligencia Artificial generativa de vídeo e imagen**.

La herramienta funciona como un **motor paramétrico avanzado** que combina más de **700 assets cinematográficos curados** con una interfaz profesional inspirada en los estándares de la industria (DaVinci Resolve, Nuke) para construir, estructurar y exportar prompts de máxima calidad hacia modelos como **Google Veo, OpenAI Sora, Runway Gen-3, Midjourney v6, Kling AI** y muchos más.

El objetivo es eliminar el caos del *prompt engineering* manual, introduciendo una metodología sistemática, estructurada y reproducible para la creación de contenido audiovisual con IA.

---

## ✨ Características Principales

### 🎥 Cinema Generator Pro v3.0
- Motor de prompts **paramétrico de 8 secciones** con más de 700 assets cinematográficos organizados
- **Librería exhaustiva** de cámaras (ARRI, RED, Panavision), objetivos (Anamórficos, Vintage, Modernos), film stocks (Kodak, Fuji, Ilford), esquemas de iluminación, composición y efectos visuales
- **Modo Prompt Weights** para salidas optimizadas para Stable Diffusion / ComfyUI con pesos numéricos
- **Auto-fill inteligente** que selecciona combinaciones aleatorias coherentes
- **Enhance Prose** — mejorador de concepto narrativo con variaciones cinemáticas
- **Simulador de Render** visual con selección semántica de frame de referencia según el concepto escrito
- **Exportación** del prompt como `.txt` y **copia al portapapeles** con un clic
- Contador de **tokens en tiempo real**
- Selector de **Target Model** (Veo, Sora, Runway, Midjourney, Kling, DALL-E 3, etc.)
- **Sección de Prompt Negativo** con presets de exclusión y campo personalizable

### ✍️ Script Writer Pro — Narrative Engine
- **Motor narrativo estructurado** con 30 subgéneros, 20 tonos emocionales y 8 estructuras narrativas (3 actos, Viaje del Héroe, No-Lineal, Tiempo Real...)
- **AI Cast & Crew** con selección de directores virtuales (Kubrick, Tarantino, Fincher, Villeneuve, entre 50+) y Directores de Fotografía (Roger Deakins, Emmanuel Lubezki, Greig Fraser...)
- **Memoria de Personajes Persistente** — sistema de perfiles con nombre (Trigger Word), apariencia visual y motivación/arco narrativo
- **Scene Breakdown automático** — genera tarjetas de plano (Shot Cards) con tipo de plano, descripción en español y prompt exportable
- **Integración ZEO 4** — botón de envío directo de planos al motor de vídeo

### 🧠 ZEO 4 Cinema Studio
- Control **Director Paramétrico** completo con 6 ejes de cámara: Pan, Tilt, Zoom, Roll, Horizontal (Tracking) y Vertical (Pedestal)
- **Keyframe Conditioning** (Image-to-Video): carga de fotograma inicial y/o final para condicionamiento de la IA
- **Render Engine Params**: Aspect Ratio (16:9, 21:9, 9:16, 1:1, 4:3), Duración (4s–20s), CFG Scale y Seed Lock
- Generación de **CLI Command** y **JSON Payload** listos para copiar y pegar en entornos de producción
- **Neural Render Output Viewer** simulado con HUD de cine y metadatos de render

### 📊 Dashboard de Control
- Acceso rápido a los 3 módulos con descripción breve
- **Monitor de Estado del Sistema** en tiempo real (Latencia, VRAM Activa, Nodos, Assets)
- Barra de estado inferior persistente con métricas del motor

---

## 🛠️ Construido Con

| Tecnología | Versión | Propósito |
|---|---|---|
| [React](https://react.dev/) | v19 | Framework UI principal |
| [Vite](https://vite.dev/) | v8 | Bundler y servidor de desarrollo |
| [TailwindCSS v4](https://tailwindcss.com/) | v4.3 | Sistema de diseño utilitario |
| [@tailwindcss/vite](https://tailwindcss.com/docs/installation/using-vite) | v4.3 | Plugin de integración Vite |
| [Lucide React](https://lucide.dev/) | v1.17 | Librería de iconos SVG |
| [JetBrains Mono](https://www.jetbrains.com/legalnotice/fonts/) | – | Fuente monoespaciada (consola) |
| [Poppins](https://fonts.google.com/specimen/Poppins) | – | Fuente de display (títulos) |
| [Inter](https://fonts.google.com/specimen/Inter) | – | Fuente de UI (cuerpo de texto) |

---

## 📁 Estructura del Proyecto

```
Studio-Pro-Suite/
├── public/
│   └── favicon.svg              # Favicon SVG personalizado
├── src/
│   ├── data/
│   │   └── cinemaLibraryV3.js   # 700+ assets cinematográficos
│   ├── App.jsx                  # Shell principal + navegación lateral
│   ├── CinemaGenerator3.jsx     # Módulo Cinema Generator Pro v3.0
│   ├── ScriptWriterPro.jsx      # Módulo Script Writer Pro
│   ├── Zeo4.jsx                 # Módulo ZEO 4 Cinema Studio
│   ├── main.jsx                 # Entry point de React
│   ├── App.css                  # Estilos del shell principal
│   └── index.css                # Sistema de diseño global (Tailwind)
├── index.html                   # HTML raíz con SEO y metadatos
├── vite.config.js               # Configuración de Vite + Tailwind
├── tailwind.config.js           # Tokens de diseño personalizados
├── package.json                 # Dependencias y scripts
├── Iniciar_StudioPro.command    # Script de inicio rápido para macOS
└── .gitignore
```

---

## 🚀 Despliegue Local

### Requisitos Previos
- [Node.js](https://nodejs.org/) **v18 o superior** (recomendado v20 LTS)
- npm (incluido con Node.js)
- macOS, Windows o Linux

### Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/produktes-code/studio-pro-suite.git
cd studio-pro-suite

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## 🍎 Inicio Rápido en macOS

Si eres usuario de macOS, puedes usar el script de inicio incluido:

```bash
# Dar permisos de ejecución (solo la primera vez)
chmod +x Iniciar_StudioPro.command

# Hacer doble clic en el archivo Iniciar_StudioPro.command
# O ejecutar desde terminal:
./Iniciar_StudioPro.command
```

El script arranca el servidor automáticamente en el puerto `5175` y abre la aplicación en tu navegador principal.

---

## 📦 Build de Producción

Para compilar la aplicación optimizada para producción (los archivos listos se generarán en la carpeta `dist/`):

```bash
npm run build
```

---

## 🌍 Soporte Multi-idioma Nativo

Studio Pro Suite cuenta con traducción instantánea de la interfaz a los siguientes idiomas principales:

* 🇪🇸 **Español**
* 🇬🇧 **Inglés**
* 🇩🇪 **Alemán**
* 🇷🇺 **Ruso**
* 🇯🇵 **Japonés**
* 🇺🇦 **Ucraniano**
* 🇨🇳 **Chino**

El selector de idioma se encuentra en la cabecera del programa. Al cambiar el idioma de la interfaz, el motor de IA adaptará las instrucciones del sistema para devolver descripciones visuales en su idioma seleccionado, mientras compila el aviso técnico en inglés para asegurar la máxima compatibilidad con los modelos generativos (Midjourney, Sora, Wan 2.2).

---

## 📋 Manual de Uso

📥 **[Descargar Manual Extensivo y Tutorial en PDF](./Manual_Studio_Pro_Suite.pdf)**

### Cinema Generator Pro

1. **Define el Concepto** (Sección 01): Escribe tu concepto narrativo principal en el campo de texto. Pulsa **Auto** para que el sistema rellene automáticamente los parámetros técnicos.
2. **Selecciona la Cámara** (Sección 02): Elige el cuerpo de cámara, film stock, objetivo, focal, apertura, ángulo, tipo de plano y movimiento.
3. **Configura la Iluminación** (Sección 03): Define el esquema lumínico, dirección, calidad de luz y hora del día.
4. **Atmósfera y Color** (Sección 04): Clima, paleta de color, color grade y período histórico.
5. **Efectos Visuales** (Sección 05): FX de imagen, efectos de movimiento, filtros de lente y reglas de composición.
6. **Prompt Negativo** (Sección 06): Añade los elementos que quieres excluir del resultado.
7. El prompt se genera **en tiempo real** en el panel derecho. Pulsa **Copiar Prompt** o **Descargar** como `.txt`.
8. Usa **Simular Render** para obtener una referencia visual aproximada del frame generado.

> 💡 **Tip**: Activa el toggle **Weights** para formatear el prompt con pesos numéricos `(término:1.2)` compatible con Stable Diffusion / ComfyUI / Automatic1111.

### Script Writer Pro

1. Escribe la **Logline/Premisa** principal de tu historia.
2. Selecciona el **Subgénero**, **Tono Emocional** y **Estructura Narrativa**.
3. En **AI Cast & Crew**, asigna un director virtual y un DoP para imprimir su estilo visual al prompt.
4. Añade los **perfiles de personaje** con nombre (trigger word), apariencia física detallada y motivación.
5. Pulsa **Generar Scene Breakdown** para obtener las tarjetas de plano con prompts exportables.

### ZEO 4 Cinema Studio

1. Escribe el **Base Prompt** descriptivo de la escena.
2. (Opcional) Añade un **Prompt Negativo**.
3. Sube el **Fotograma Inicial** y/o **Fotograma Final** para condicionamiento Image-to-Video.
4. Ajusta los **controles de cámara** con los sliders de 6 ejes: Pan, Tilt, Zoom, Roll, Horizontal y Vertical. O activa **Static Camera** para cámara fija.
5. Configura los **parámetros de render**: Aspect Ratio, Duración, CFG Scale y Seed.
6. Pulsa **Initialize ZEO 4 Engine** para compilar el **CLI Command** y el **JSON Payload** listo para producción.

---

## 📸 Capturas de Pantalla

| Dashboard | Cinema Generator Pro |
|---|---|
| Vista general del ecosistema | Motor de prompts con 8 secciones |

| Script Writer Pro | ZEO 4 Cinema Studio |
|---|---|
| Motor narrativo con personajes | Control director paramétrico |

---

## 🗺️ Roadmap

- [x] Modo multi-idioma (Soporte nativo para 7 idiomas)
- [ ] Integración real con API de Google Veo / Gemini
- [ ] Persistencia de prompts con Local Storage o IndexedDB
- [ ] Exportación de proyectos completos como JSON
- [ ] Presets guardables (Noir Pack, Sci-Fi Pack, Documentary Pack...)
- [ ] Historial de prompts generados
- [ ] Integración con Runway API (Gen-3)
- [ ] Modo Colaborativo (compartir sesión por URL)

---

## 📄 Licencia

Este proyecto está bajo la Licencia **MIT**. Consulta el archivo de licencia para más detalles.

---

## 👤 Sobre el Autor

<div align="center">

**Jesús Ferrer García · CHUS BZN**

*Arquitecto de Sistemas Audiovisuales & Especialista en IA Generativa*

33 años de experiencia liderando infraestructuras críticas en cine, televisión, broadcast y entornos urbanos en Barcelona. Combina el conocimiento técnico profundo de los sistemas de producción audiovisual tradicional con el desarrollo de herramientas avanzadas de Inteligencia Artificial aplicada al sector creativo.

[![Portfolio](https://img.shields.io/badge/Portfolio-chusbzn.com-00a3ff?style=for-the-badge)](https://www.chusbzn.com)
[![GitHub](https://img.shields.io/badge/GitHub-produktes--code-181717?style=for-the-badge&logo=github)](https://github.com/produktes-code)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Jesús%20Ferrer-0077b5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/jesus-ferrer-garcia)

</div>

---

<div align="center">

Diseñado con ❤️ por **CHUS BZN** — *"El cine es mentira a 24 fotogramas por segundo. La IA lo hace a 1.000."*

</div>
