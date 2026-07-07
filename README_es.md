<p align="center">
  <img src="build/icon.png" width="128" height="128" style="border-radius: 28px; box-shadow: 0 8px 24px rgba(0,0,0,0.25);" alt="Studio Pro Suite Logo" />
</p>

<h1 align="center">Studio Pro Suite V1.0.0</h1>

<p align="center">
  <b>The Ultimate AI Cinematic Creation & Parametric Camera Automation Ecosystem</b><br/>
  <i>El Ecosistema Definitivo de Creación Cinematográfica IA y Automatización de Cámara Paramétrica</i>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge" alt="Build" />
  <img src="https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge" alt="Version" />
  <img src="https://img.shields.io/badge/Status-Enterprise_Ready-success?style=for-the-badge" alt="Status" />
  <img src="https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-red?style=for-the-badge" alt="License" />
</p>

🌐 **Leer en:** [🇬🇧 English](README.md) | **🇪🇸 Español** | [🇩🇪 Deutsch](README_de.md) | [🇷🇺 Русский](README_ru.md) | [🇯🇵 日本語](README_ja.md) | [🇺🇦 Українська](README_uk.md) | [🇨🇳 中文](README_zh.md)

---

## 🎯 La Visión (Introducción)

La inconsistencia es el mayor enemigo en la era de los modelos generativos. Un usuario genera un plano excelente, pero el contraplano pierde toda la dirección de arte o el vestuario cambia de color. Esto es inaceptable en una producción profesional. Concebimos Studio Pro Suite no solo como un generador, sino como un 'Script Supervisor' automatizado y un simulador de Directores de Arte. Nuestra meta de ingeniería era aislar las variables deterministas (Óptica, Formato, Autoría) y forzarlas como directrices absolutas inmutables en cada llamada a la API. El resultado es el compilador estético más riguroso del mercado, creado para ingenieros de prompt que demandan continuidad cinematográfica perfecta.

> [!NOTE]
> Desarrollado por **produktes-code** y **Jesús Ferrer (CHUS BZN)** para establecer estándares profesionales en la ingeniería comercial.

---

## 📸 Interface / Ergonomics

![Desktop Interface](docs/screenshots/screenshot-Desktop.png)


---

## ⚙️ Masterclass de Parámetros (Funcionalidades)

- **Hardware Determinista (Cinema Generator Pro)**: Hemos hardcodeado más de 80 perfiles exactos. Cuando eliges un 'IMAX MSM 9802' no estamos añadiendo la palabra IMAX; estamos ordenando al sistema que induzca la compresión de planos expansiva, la resolución prístina y la profundidad de campo extrema asociada a la película de 70mm. Entendemos las físicas del sensor, y hacemos que la IA las obedezca.
- **Inyección de Autoría (Perfilado de Directores)**: El arte reside en el matiz. Si un director de fotografía selecciona 'Safdie Brothers', el compilador reestructura internamente la escena para aplicar modificadores de 'Neon, Caos urbano y Grano elevado'. Si selecciona 'Wes Anderson', se aplica estricta 'Simetría Central y Paletas Pastel'. Esto permite simular el cerebro de los genios del cine moderno a un solo clic.
- **Control de Relaciones de Aspecto Rigurosas**: Un detalle vital de la industria. Ofrecemos selects puros (16:9, 2.39:1, 4:3) que alteran no solo el recorte visual, sino la composición geométrica asumida por la red generativa. Es el encuadre matemático absoluto.
- **Script Writer Pro (Memoria de Sesión)**: El núcleo del problema de la falta de raccord. Este módulo actúa como una base de datos local en memoria RAM que retiene los *descriptors* del protagonista. La IA se ve obligada a leer el estado anterior antes de generar el nuevo plano, evitando alucinaciones y asegurando la consistencia narrativa.
- **Integración Text-To-Speech (ZEO-4)**: Un guion mudo no sirve. El motor ZEO-4 integrado en nuestro backend asíncrono permite procesar las líneas dialogadas enviando payloads JSON masivos hacia las redes de síntesis vocal, transformando texto crudo en locuciones actuadas con entonación natural, unificando video y audio bajo el mismo techo.

---

## 🛡️ Arquitectura de Blindaje (Seguridad)

En el despliegue Retail y Enterprise, una caída de sistema no es un bug, es pérdida de capital. Hemos diseñado una coraza defensiva (Shielding) que emula las mejores prácticas de DevSecOps:

• **Ingeniería Anti-Flood (Rate limiting)**: Los algoritmos asíncronos estrangulan cualquier pico anómalo de peticiones mediante middlewares de limitación, evadiendo colapsos de Thread Pool.
• **Cristalografía Binaria (Magic Bytes)**: Validar un '.mp3' en el nombre es trivial para inyectar un payload malicioso. El sistema abre el encabezado del archivo y verifica la secuencia hexadecimal nativa para certificar la integridad del contenedor.
• **Sanidad de RAM (Limitador 2 GB)**: Los ataques OOM (Out Of Memory) destruyen servidores. Rechazamos implacablemente en el umbral de subida cualquier peso atípico.

---

### 🚀 Despliegue Técnico e Instalación CI/CD

Para garantizar una precisión matemática absoluta y preservar nuestra arquitectura DSP de Python de alto nivel sin comprometer la compatibilidad multiplataforma, ahora empleamos **CI/CD Automatizado vía GitHub Actions**. 
En lugar de empaquetar `.exe` de forma local, nuestro código fuente se compila nativamente en entornos puros de Windows y macOS en la nube.

#### Cómo Descargar e Instalar
1. Navega a la sección **[Releases](https://github.com/produktes-code/Studio-Pro-Suite/releases)** de este repositorio.
2. Descarga la última versión compilada automáticamente para tu Sistema Operativo:
   - `Studio Pro Suite Setup.exe` (Windows)
   - `Studio Pro Suite.dmg` (macOS)

### 🍎 Usuarios de macOS (Gatekeeper)
Al no contar con un certificado de desarrollador de pago de Apple, Gatekeeper marcará el binario. El método legítimo de bypass local es hacer **Clic derecho sobre la app -> Abrir** (no hagas doble clic). No es un fallo, es el flujo estándar de software open-source de alto rendimiento.

### 🪟 Usuarios de Windows (SmartScreen)
Windows Defender puede mostrar un aviso azul de 'PC protegido' al ejecutar el instalador `.exe`. Haz clic en **'Más información'** y luego en **'Ejecutar de todas formas'**.

---

## 📚 Documentación y Manuales

Para una masterclass técnica exhaustiva, guías de resolución de problemas y detalles completos de la API, por favor descarga nuestro manual oficial:

📥 **[USER_MANUAL.pdf (PDF - 7 Languages)](docs/USER_MANUAL.pdf)**


---

## ⚖️ Manifiesto de Ingeniería, Créditos y Licencia

Este software es el resultado manifiesto de la profunda ingeniería concebida y articulada desde los laboratorios de produktes-code en unión indisociable con el Ingeniero Jesús Ferrer García (CHUS BZN).

Nos negamos a ofrecer cajas negras simplificadas. Entregamos consolas paramétricas absolutas. Licenciado bajo restricciones de propiedad intelectual y los más estrictos márgenes open source (CC BY-NC-SA 4.0). ESTÁNDAR CORPORATIVO - RETAIL READY. GRADO INGENIERÍA CERTIFICADO.


