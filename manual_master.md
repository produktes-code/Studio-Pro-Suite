<p align="center">
  <img src="build/icon.png" width="150" height="150" alt="Logo" />
</p>

# Studio Pro Suite V1.0.0 - Technical Manual
**Engineered by Chus BZN / Versión Final 1.0.0**

---

## 🌐 Table of Contents / Índice de Idiomas

| 🏳️ | Idioma / Language | Página |
|-----|-------------------|--------|
| | [Español](#-español) | |\n| | [English](#-english) | |\n| | [Deutsch](#-deutsch) | |\n| | [Русский](#-русский) | |\n| | [日本語](#-日本語) | |\n| | [Українська](#-українська) | |\n| | [中文](#-中文) | |\n
---

<div style="page-break-after: always;"></div>
\n# 🏳️ Español\n\n
# Manual de Usuario y Guía Técnica: Studio Pro Suite V1.0.0

### 1. Introducción y Propósito del Software
**Studio Pro Suite V1.0.0** es un ecosistema avanzado de automatización cinematográfica y generación audiovisual asistida por Inteligencia Artificial de nivel profesional. Diseñado para integrarse en flujos de preproducción y curaduría de contenidos, el sistema permite simular el comportamiento de cámaras físicas, simular la renderización y cálculo de latencia con Nodos ZEO-4, estilizar video (V2V), aplicar intercambios de rostro (Face Swap / Lip-Sync) y estructurar prompts avanzados para generadores de imagen y vídeo.

---

### 2. Módulos y Arquitectura Técnica
El software se compone de cuatro módulos clave:

#### 2.1 Procesador de Nodos ZEO-4
Simula un backend en la nube que gestiona la carga de datos (payloads).
*   **Métrica de Latencia:** Muestra el rendimiento del renderizado en tiempo real.
*   **Conversor de Texto a Audio:** Permite convertir indicaciones textuales en señales de audio simuladas mediante síntesis de voz, evaluando el tiempo de respuesta.

#### 2.2 CinemaGenerator Pro
El núcleo del motor estético. Permite parametrizar el estilo visual del renderizado mediante la combinación de:
*   **Cámaras:** Más de 80 perfiles que incluyen IMAX 70mm, Arri Alexa LF, RED V-Raptor, cámaras térmicas y de seguridad.
*   **Directores de Fotografía:** Perfiles de estilo de leyendas como Roger Deakins, Greig Fraser, Emmanuel Lubezki y Robert Richardson.
*   **Lentes y Ópticas:** Selección de lentes anamórficas (Cooke, Panavision) y esféricas clásicas, regulando la apertura focal de T1.2 a T22.
*   **Formatos y Relaciones de Aspecto:** Opciones desde el cinematográfico 2.39:1 hasta el vertical 9:16 para redes sociales.

#### 2.3 Domo AI (Video-to-Video V2V) & Akool (Face Swap)
*   **V2V Stylization:** Módulo para previsualizar la conversión de metraje real a estilos alternativos (Anime de los 90, Render 3D, CGI, Boceto).
*   **Identity Swap & Lip-Sync:** Interfaz gráfica para cargar rostros de origen y destino, configurando la fidelidad y sincronía de labios para fines publicitarios.

#### 2.4 ScriptWriter Pro
Un generador estructurado de prompts cinematográficos que ayuda al usuario a formular descripciones ricas en detalles estéticos basadas en el modelo de variables del cine tradicional.

---

### 3. Guía de Parámetros y Valores
*   **Apertura del Lente (Aperture):** Define la profundidad de campo. Valores bajos (T1.2 - T2.0) generan un fondo desenfocado (bokeh); valores altos (T11 - T22) mantienen la escena en foco.
*   **ISO y Ruido:** Simula la sensibilidad a la luz. A mayor ISO (ej. 3200), mayor nivel de grano de película analógica en la previsualización.
*   **Fidelidad de Rostro (Fidelity):** Regulable de 0 a 100%. Define el grado de fusión geométrica en el proceso de Face Swap.

---

### 4. Flujo de Trabajo Didáctico
1.  **Paso 1:** Abre la aplicación en tu Mac. El panel principal oscuro se adaptará a tu resolución de pantalla.
2.  **Paso 2 (CinemaGenerator):** Configura la óptica, el perfil de director y la relación de aspecto. Observa cómo se actualiza la consola técnica.
3.  **Paso 3 (ScriptWriter):** Genera tu prompt estructurado usando las plantillas incorporadas.
4.  **Paso 4 (ZEO-4):** Escribe el prompt y ejecuta la prueba de latencia de carga en el botón de procesamiento.
5.  **Paso 5:** Copia el prompt generado en la consola para usarlo en tu motor de vídeo definitivo.
\n\n<div style='page-break-after: always;'></div>\n\n# 🏳️ English\n\n
# User Manual and Technical Guide: Studio Pro Suite V1.0.0

### 1. Introduction and Software Purpose
**Studio Pro Suite V1.0.0** is an advanced professional-grade cinematic automation and AI-assisted audiovisual generation ecosystem. Designed to integrate into content pre-production and curation workflows, the system simulates physical camera behaviors, estimates ZEO-4 Node rendering latency, applies V2V video styling, processes Face Swap/Lip-Sync operations, and structures complex prompts for text-to-video engines.

---

### 2. Modules and Technical Architecture
The software comprises four key modules:

#### 2.1 ZEO-4 Node Processor
Simulates a cloud backend managing incoming data payloads.
*   **Latency Metric:** Displays rendering performance and latency calculations in real time.
*   **Text-to-Audio Converter:** Converts textual descriptions into simulated audio signals via voice synthesis, evaluating response times.

#### 2.2 CinemaGenerator Pro
The core of the aesthetic engine. It parametrizes the visual rendering style by combining:
*   **Cameras:** Over 80 profiles, including IMAX 70mm, Arri Alexa LF, RED V-Raptor, thermal, and security cameras.
*   **Directors of Photography:** Style profiles of cinematographers like Roger Deakins, Greig Fraser, Emmanuel Lubezki, and Robert Richardson.
*   **Lenses and Optics:** Select anamorphic (Cooke, Panavision) or spherical lenses, with focal apertures ranging from T1.2 to T22.
*   **Formats & Aspect Ratios:** Options ranging from cinematic 2.39:1 to vertical 9:16.

#### 2.3 Domo AI (Video-to-Video V2V) & Akool (Face Swap)
*   **V2V Stylization:** Preview conversion of real footage into alternative styles (90s Anime, 3D Render, CGI, Sketch).
*   **Identity Swap & Lip-Sync:** Graphic interface to map source and target faces, configuring fidelity and lip synchronicity.

#### 2.4 ScriptWriter Pro
A structured cinematic prompt generator helping users build prompts rich in aesthetic details based on traditional cinema variables.

---

### 3. Parameters and Values Guide
*   **Aperture (T-Stop):** Controls depth of field. Low values (T1.2 - T2.0) generate background bokeh; high values (T11 - T22) keep the entire scene in focus.
*   **ISO & Noise:** Simulates light sensitivity. Higher ISO (e.g., 3200) renders more analog film grain in the preview.
*   **Fidelity (Face Swap):** Adjustable from 0 to 100%. Defines the geometric fusion weight during face swap.

---

### 4. Step-by-Step Production Workflow
1.  **Step 1:** Open the app on your Mac. The dark glassmorphic dashboard auto-adjusts to your display resolution.
2.  **Step 2 (CinemaGenerator):** Set the optics, director style, and aspect ratio. Watch the technical console update.
3.  **Step 3 (ScriptWriter):** Draft your cinematic script prompt using the included templates.
4.  **Step 4 (ZEO-4):** Input the prompt and run the latency loading test by clicking the process button.
5.  **Step 5:** Copy the resulting prompt from the console to use in your target video generation engine.
\n\n<div style='page-break-after: always;'></div>\n\n# 🏳️ Deutsch\n\n
# Benutzerhandbuch und Technische Anleitung: Studio Pro Suite V1.0.0

### 1. Einführung und Softwarezweck
**Studio Pro Suite V1.0.0** ist eine hochentwickelte, professionelle kinematografische Automatisierungs- und KI-gestützte audiovisuelle Generierungsumgebung. Sie wurde entwickelt, um in Vorproduktions- und Kurations-Workflows integriert zu werden, und simuliert physische Kameras, ZEO-4-Knoten-Latenzen, V2V-Videostile und Face-Swap/Lip-Sync-Vorgänge.

---

### 2. Module und Technische Architektur
#### 2.1 ZEO-4 Knotenprozessor
Simuliert ein Cloud-Backend zur Verarbeitung von Payload-Daten und Text-zu-Audio-Rendering.
#### 2.2 CinemaGenerator Pro
Kombiniert über 80 Kameras (IMAX 70mm, Arri LF), legendäre Kameramänner (Roger Deakins, Greig Fraser) und professionelle Optiken (Cooke Anamorphic) von T1.2 bis T22.
#### 2.3 Domo AI (V2V) & Akool (Face Swap)
Stilisierung von Videos in Anime/3D-Renderings und fotorealistischer Gesichtsaustausch mit Lippensynchronisation.
#### 2.4 ScriptWriter Pro
Strukturierter Prompt-Generator zur Erstellung filmischer Beschreibungen.
\n\n<div style='page-break-after: always;'></div>\n\n# 🏳️ Русский\n\n
# Руководство пользователя и техническое руководство: Studio Pro Suite V1.0.0

### 1. Введение и назначение ПО
**Studio Pro Suite V1.0.0** — это передовая профессиональная экосистема автоматизации кинематографа и генерации аудиовизуального контента на базе искусственного интеллекта. Предназначена для интеграции в рабочие процессы препродакшна и курирования контента.

---

### 2. Модули и техническая архитектура
#### 2.1 Процессор узлов ZEO-4
Моделирует облачный бэкенд, вычисляет задержку рендеринга и преобразует текст в аудиосигналы.
#### 2.2 CinemaGenerator Pro
Параметризация визуального стиля с использованием более 80 профилей камер (IMAX 70mm, Arri Alexa LF), легендарных операторов (Роджер Дикинс) и оптики от T1.2 до T22.
#### 2.3 Domo AI (V2V) & Akool (Face Swap)
Стилизация видео (V2V) в Аниме/3D и высокоточная замена лиц с синхронизацией губ.
#### 2.4 ScriptWriter Pro
Конструктор промптов на основе кинематографических переменных.
\n\n<div style='page-break-after: always;'></div>\n\n# 🏳️ 日本語\n\n
# ユーザーマニュアルと技術ガイド：Studio Pro Suite V1.0.0

### 1. はじめにとソフトウェアの目的
**Studio Pro Suite V1.0.0** は、プロフェッショナル向けの高度なシネマ自動化およびAI支援による映像生成エコシステムです。カメラの挙動、ZEO-4ノードのレンダリング遅延シミュレーション、V2Vビデオスタイライズ、Face Swapなどを統合的に行います。

---

### 2. モдуールと技術アーキテクチャ
#### 2.1 ZEO-4 ノードプロセッサ
クラウドバックエンドをシミュレートし、遅延測定とテキスト・オーディオ変換を行います。
#### 2.2 CinemaGenerator Pro
80以上のカメラ（IMAXなど）、撮影監督（ロジャー・ディーキンスなど）、プロ用レンズ（T1.2〜T22）を組み合わせます。
#### 2.3 Domo AI (V2V) & Akool (Face Swap)
動画のスタイル変換（アニメ/3D）および高精度なフェイススワップ/リップシンクインターフェース。
#### 2.4 ScriptWriter Pro
シネマティックプロンプトを構築するための構造化ツール。
\n\n<div style='page-break-after: always;'></div>\n\n# 🏳️ Українська\n\n
# Посібник користувача та технічний посібник: Studio Pro Suite V1.0.0

### 1. Вступ та призначення програмного забезпечення
**Studio Pro Suite V1.0.0** — це передова професійна екосистема кінематографічної автоматизації та генерації аудіовізуального контенту на базі ШІ.

---

### 2. Модулі та технічна архітектура
#### 2.1 Процесор вузлів ZEO-4
Симулює хмарний бекенд для обробки даних та вимірювання затримки рендерингу.
#### 2.2 CinemaGenerator Pro
Більше 80 профілів камер (IMAX, Arri), стилі відомих операторів (Роджер Дікінс) та налаштування оптики (T1.2 - T22).
#### 2.3 Domo AI (V2V) & Akool (Face Swap)
Стилізація відео в Аніме/3D та реалістична заміна облич з ліпсінком.
#### 2.4 ScriptWriter Pro
Структурований конструктор промптів для генераторів відео.
\n\n<div style='page-break-after: always;'></div>\n\n# 🏳️ 中文\n\n
# 用户手册与技术指南：Studio Pro Suite V1.0.0

### 1. 简介与软件用途
**Studio Pro Suite V1.0.0** 是一款先进 foresighted 的专业级电影制作自动化及人工智能辅助视听生成系统。用于视频预制、特效模拟、ZEO-4 节点延迟估算和镜头参数化设计。

---

### 2. 功能模块与技术架构
#### 2.1 ZEO-4 节点处理器
模拟云端后端，处理数据载荷，提供实时渲染延迟估算与语音合成测试。
#### 2.2 CinemaGenerator Pro
整合 80+ 种相机配置文件（IMAX 70mm, Arri Alexa LF 等）、传奇摄影师风格（Roger Deakins 等）以及专业镜头光学（T1.2 - T22）。
#### 2.3 Domo AI (V2V) 与 Akool (Face Swap)
提供视频风格化（动漫、3D渲染）预监和高保真面部替换及唇形同步接口。
#### 2.4 ScriptWriter Pro
电影级结构化提示词生成器，将画面描述翻译为标准的提示词。
\n\n<div style='page-break-after: always;'></div>\n\n*© All rights reserved / Todos los derechos reservados — Jesús Ferrer García (CHUS BZN) — 2026*\n