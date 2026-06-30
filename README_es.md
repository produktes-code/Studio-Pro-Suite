<p align="center">
  <img src="build/icon.png" width="128" height="128" style="border-radius: 28px; box-shadow: 0 8px 24px rgba(0,0,0,0.25);" alt="Studio Pro Suite Logo" />
</p>

<h1 align="center">Studio Pro Suite (ES)</h1>

<p align="center">
  <b>El Ecosistema Definitivo de Creación Cinematográfica IA y Automatización de Cámara Paramétrica</b><br/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Version-v1.0.0-blue?style=for-the-badge" alt="Versión 1.0.0" />
  <img src="https://img.shields.io/badge/Status-Production_Ready-success?style=for-the-badge" alt="Estado" />
  <img src="https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-red?style=for-the-badge" alt="Licencia" />
</p>

---

## 🎯 Descripción General
**Studio Pro Suite** es un motor de generación de prompts paramétricos y un gestor de preproducción narrativa diseñado para directores de fotografía, cineastas y diseñadores de prompts de IA. Actúa como un compilador estético de alta precisión que traduce conceptos de dirección de escena abstractos en instrucciones físicas y de cámara precisas para motores de IA de vídeo y generación de imágenes (como Sora, Veo, Runway, Kling AI y Pollinations AI).

---

## 🛠️ Características Principales
*   **Cinema Generator Pro:** Selecciona lentes anamórficas o esféricas, cuerpos de cámara reales (ej. IMAX, ARRI), esquemas de iluminación y estilos visuales basados en cineastas legendarios.
*   **Script Writer Pro:** Construye desgloses de escena técnicos (Shot Cards) a partir de un logline, gestionando la continuidad visual gracias a la memoria de personajes integrada.
*   **ZEO 4 Cinema Studio:** Módulo especializado para animar planos y generar trayectorias 3D (Pan, Tilt, Zoom, Roll) en coordenadas precisas compiladas a comandos JSON y CLI.
*   **Integración Pollinations AI:** Renderizado en tiempo real a través del modelo Flux para previsualizar los prompts sin salir de la herramienta.

---

## ⚙️ Instalación y Configuración

### Ejecución Local de Desarrollo
1. Asegúrate de tener Node.js instalado.
2. Abre una terminal en la carpeta del proyecto.
3. Ejecuta el script de arranque:
   ```bash
   ./Iniciar_StudioPro.command
   ```
   *(Si es la primera vez, asegúrate de dar permisos de ejecución con `chmod +x Iniciar_StudioPro.command`)*.
4. La aplicación se abrirá automáticamente en tu navegador web en `http://localhost:5175`.

---

## 🖥️ Stack Tecnológico
*   **Interfaz:** React 19, Vite 8, Tailwind CSS con un diseño oscuro glassmorphism premium.
*   **Shell de Escritorio:** Envoltura de Electron para compilación de aplicaciones de escritorio nativas.

---

## 📖 Documentación y Enlaces
*   Manual de Usuario Multilingüe (PDF): **[manual.pdf](./manual.pdf)**
*   Manual en formato Markdown: **[manual_master.md](./manual_master.md)**

---

## ⚖️ Licencia y Créditos
*   **Vlae:** Creado por **produktes-code** y distribuido bajo la licencia Creative Commons **CC BY-NC-SA 4.0** (Atribución-NoComercial-CompartirIgual 4.0 Internacional).


## Security & Limits
- **Rate limiting:** API endpoints are protected to prevent abuse.
- **Magic Bytes:** File uploads are verified via magic bytes analysis.
- **Upload limits:** Maximum file size is 2 GB.

## License
Licensed under CC BY-NC-SA 4.0. Creado por produktes-code.
