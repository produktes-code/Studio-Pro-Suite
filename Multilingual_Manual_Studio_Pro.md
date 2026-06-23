# Multilingual User Manual / Manual de Usuario Multilingüe
## Studio Pro AI Suite 3.0

---

## 🌐 Table of Contents / Índice de Idiomas

| 🏳️ | Idioma / Language | Página |
|-----|-------------------|--------|
| 🇪🇸 | [Español](#-español) | 1 |
| 🇬🇧 | [English](#-english) | 2 |
| 🇩🇪 | [Deutsch](#-deutsch) | 3 |
| 🇷🇺 | [Русский](#-русский) | 4 |
| 🇯🇵 | [日本語](#-日本語) | 5 |
| 🇺🇦 | [Українська](#-українська) | 6 |
| 🇨🇳 | [中文](#-中文) | 7 |

---

<div style="page-break-after: always;"></div>

# 🇪🇸 Español

## Manual de Usuario y Tutorial Extensivo: Studio Pro AI Suite 3.0

### 1. Introducción
**Studio Pro AI Suite 3.0** es una herramienta de escritorio profesional diseñada para directores, guionistas y creadores de contenido audiovisual. Su objetivo principal es facilitar la creación de prompts (instrucciones) cinematográficos estructurados y de alta calidad para motores de Inteligencia Artificial generativa de vídeo e imagen (como Sora, Veo, Runway, Midjourney, etc.).

A diferencia de la creación de prompts tradicional (escribir texto libre y esperar un buen resultado), Studio Pro introduce un sistema paramétrico y metódico, muy similar a cómo se trabaja en un set de rodaje real, permitiéndote controlar la cámara, la luz, el etalonaje y la atmósfera.

### 2. Instalación y Puesta en Marcha
Si tienes la aplicación en tu escritorio de macOS, iniciarla es extremadamente sencillo:
1. Abre la carpeta `Studio-Pro-Suite` en tu Escritorio.
2. Localiza el archivo `Iniciar_StudioPro.command`.
3. *(Solo la primera vez)* Es posible que necesites darle permisos. Si es así, abre el Terminal y escribe: `chmod +x ~/Desktop/Studio-Pro-Suite/Iniciar_StudioPro.command`
4. Haz doble clic en el archivo `Iniciar_StudioPro.command`.
5. Esto arrancará el servidor local y abrirá automáticamente la aplicación en tu navegador predeterminado (generalmente en `http://localhost:5175`).

### 3. Interfaz Principal y Dashboard
Al iniciar, verás el **Dashboard de Control**. Desde aquí podrás monitorear el estado del sistema en tiempo real (uso de memoria, latencia, etc.) y acceder a los tres módulos principales de la suite a través del menú lateral:
1. Cinema Generator Pro
2. Script Writer Pro
3. ZEO 4 Cinema Studio

En la cabecera del programa, encontrarás un **Selector de Idioma**, que te permite cambiar la interfaz de forma nativa a 7 idiomas (Español, Inglés, Alemán, Ruso, Japonés, Ucraniano y Chino).

### 4. Módulo 1: Cinema Generator Pro
Este es el motor principal para construir imágenes y conceptos visuales. Está dividido en 8 secciones de parámetros.

**Paso a paso para crear una imagen/escena:**
1. **Definición del Concepto (Sección 1):** Escribe en la caja de texto tu idea base. Ejemplo: *"Un detective caminando por un callejón lluvioso"*.
   - **Botón Auto-fill:** Si no tienes claro qué parámetros usar, puedes pulsar "Auto" para que el sistema seleccione al azar combinaciones cinematográficas coherentes.
   - **Enhance Prose:** Si tu concepto es muy básico, esta herramienta lo reescribe añadiendo matices literarios y cinemáticos para que la IA lo entienda mejor.
2. **Cámara y Lentes (Sección 2):** Selecciona el tipo de plano (Primer plano, Plano general, etc.). Elige un cuerpo de cámara real (ej. ARRI, RED) y la lente (objetivos anamórficos, vintage o modernos). Puedes ajustar el movimiento de cámara (Pan, Tilt, Tracking) útil para generación de vídeo.
3. **Iluminación (Sección 3):** Define cómo está iluminada la escena. Selecciona un esquema general (ej. High Key, Claroscuro), la dirección de la luz, el momento del día (Golden Hour, Blue Hour) y el tipo de modificadores.
4. **Atmósfera y Color (Sección 4):** Elige el clima, la paleta de color y el periodo histórico para darle contexto temporal a la IA.
5. **Efectos Visuales - VFX (Sección 5):** Puedes agregar efectos como Motion Blur (desenfoque de movimiento), grano de película o reglas de composición (Regla de los Tercios, Simetría).
6. **Prompt Negativo (Sección 6):** Especifica lo que NO quieres que aparezca en la imagen (ej. *"deformidades, texto, marcas de agua"*).
7. **Exportación y Render:** A la derecha verás tu prompt construyéndose en tiempo real. Utiliza el botón de **Target Model** para adaptar el texto al modelo de IA que vayas a usar. **Simular Render** te mostrará un frame de referencia aproximado. Finalmente, copia el texto o descárgalo en `.txt`.

### 5. Módulo 2: Script Writer Pro (Narrative Engine)
Esta herramienta está pensada para la fase de guion y preproducción. Te ayuda a pasar de una idea literaria a un Scene Breakdown (desglose de escenas) técnico.
1. Escribe la **Logline** (premisa principal de tu historia) en el campo principal.
2. Selecciona el **Subgénero**, el **Tono Emocional** y la **Estructura Narrativa** (ej. Estructura de 3 actos, Viaje del Héroe).
3. **AI Cast & Crew** (El equipo de rodaje virtual): Asigna a tu proyecto un Director y un Director de Fotografía. La IA adoptará su "estilo visual".
4. **Memoria de Personajes:** Añade personajes. Ponles un nombre (Trigger Word), apariencia física y motivación. El sistema recordará a estos personajes para mantener coherencia (raccord).
5. **Generar Scene Breakdown:** Al pulsar este botón, la suite creará tarjetas de plano (Shot Cards).
6. A través de la Integración ZEO 4, puedes enviar cualquier plano generado aquí directamente al siguiente módulo para animarlo.

### 6. Módulo 3: ZEO 4 Cinema Studio
Este módulo está especializado en el control absoluto para la generación de vídeo.
1. Ingresa tu **Base Prompt**.
2. **Keyframe Conditioning** (Condicionamiento Visual): Sube un "Fotograma Inicial" o "Fotograma Final" para guiar a la IA en la animación.
3. **Director Paramétrico (Controles de Cámara 3D):** Utiliza los sliders para ajustar los movimientos de cámara a nivel técnico (Pan, Tilt, Zoom, Roll, Tracking, Pedestal).
4. **Parámetros de Render Engine:** Elige el Aspect Ratio, Duración del clip y Escala CFG.
5. Al pulsar **Initialize ZEO 4 Engine**, el software compila comandos de código (CLI Command y JSON Payload) listos para usar en APIs de producción.
6. El módulo cuenta con un simulador visual (HUD) para previsualizar metadatos.

### 7. Consejos Finales
Si el concepto te parece muy técnico, confía en la IA: escribe tu idea simple y usa el botón "Auto" o el compilador del motor. ¡No olvides guardar en `.txt` tus prompts favoritos!

---

<div style="page-break-after: always;"></div>

# 🇬🇧 English

## Extensive User Manual and Tutorial: Studio Pro AI Suite 3.0

### 1. Introduction
**Studio Pro AI Suite 3.0** is a professional desktop tool designed for directors, screenwriters, and audiovisual content creators. Its main objective is to facilitate the creation of highly structured cinematic prompts (instructions) for generative AI video and image engines (such as Sora, Veo, Runway, Midjourney, etc.).

Unlike traditional prompt creation (writing free text and hoping for a good result), Studio Pro introduces a parametric and methodical system, very similar to how a real film set operates, allowing you to control the camera, lighting, color grading, and atmosphere.

### 2. Installation and Setup
If you have the application on your macOS desktop, starting it is extremely simple:
1. Open the `Studio-Pro-Suite` folder on your Desktop.
2. Locate the `Iniciar_StudioPro.command` file.
3. *(First time only)* You may need to grant it permissions. If so, open the Terminal and type: `chmod +x ~/Desktop/Studio-Pro-Suite/Iniciar_StudioPro.command`
4. Double-click the `Iniciar_StudioPro.command` file.
5. This will start the local server and automatically open the application in your default browser (usually at `http://localhost:5175`).

### 3. Main Interface and Dashboard
Upon startup, you will see the **Control Dashboard**. From here you can monitor real-time system status (memory usage, latency, etc.) and access the three main modules of the suite via the sidebar:
1. Cinema Generator Pro
2. Script Writer Pro
3. ZEO 4 Cinema Studio

In the program header, you will find a **Language Selector**, which allows you to change the interface natively into 7 languages (Spanish, English, German, Russian, Japanese, Ukrainian, and Chinese).

### 4. Module 1: Cinema Generator Pro
This is the main engine for building images and visual concepts. It is divided into 8 parameter sections.

**Step by step to create an image/scene:**
1. **Concept Definition (Section 1):** Write your base idea in the text box. Example: *"A detective walking through a rainy alley"*.
   - **Auto-fill Button:** If you're unsure which parameters to use, click "Auto" for the system to randomly select coherent cinematic combinations.
   - **Enhance Prose:** If your concept is too basic, this tool rewrites it by adding literary and cinematic nuances.
2. **Camera and Lenses (Section 2):** Select the shot type (Close-up, Wide shot, etc.). Choose a real camera body (e.g. ARRI, RED) and lens (anamorphic, vintage, or modern lenses). Adjust camera movement (Pan, Tilt, Tracking) useful for video generation.
3. **Lighting (Section 3):** Define how the scene is lit. Select a general scheme (e.g. High Key, Chiaroscuro), light direction, time of day (Golden Hour, Blue Hour), and modifier types.
4. **Atmosphere and Color (Section 4):** Choose the weather, color palette, and historical period to give temporal context to the AI.
5. **Visual Effects - VFX (Section 5):** Add effects like Motion Blur, film grain, or composition rules (Rule of Thirds, Symmetry).
6. **Negative Prompt (Section 6):** Specify what you DO NOT want to appear in the image (e.g. *"deformities, text, watermarks"*).
7. **Export and Render:** On the right, you'll see your prompt being built in real-time. Use the **Target Model** button to adapt the text to the AI model you'll use. **Simulate Render** shows an approximate reference frame. Finally, copy the text or download it as `.txt`.

### 5. Module 2: Script Writer Pro (Narrative Engine)
This tool is designed for the screenwriting and pre-production phase. It helps you transition from a literary idea to a technical Scene Breakdown.
1. Write the **Logline** (main premise of your story) in the main field.
2. Select the **Subgenre**, **Emotional Tone**, and **Narrative Structure** (e.g. 3-Act Structure, Hero's Journey).
3. **AI Cast & Crew** (The virtual film crew): Assign a Director and a Director of Photography to your project. The AI will adopt their "visual style".
4. **Character Memory:** Add characters. Give them a name (Trigger Word), physical appearance, and motivation. The system will remember these characters to maintain continuity (raccord).
5. **Generate Scene Breakdown:** Clicking this button creates Shot Cards.
6. Through ZEO 4 Integration, you can send any generated shot directly to the next module for animation.

### 6. Module 3: ZEO 4 Cinema Studio
This module specializes in absolute control for video generation.
1. Enter your **Base Prompt**.
2. **Keyframe Conditioning** (Visual Conditioning): Upload an "Initial Frame" or "Final Frame" to guide the AI in animation.
3. **Parametric Director (3D Camera Controls):** Use sliders to technically adjust camera movements (Pan, Tilt, Zoom, Roll, Tracking, Pedestal).
4. **Render Engine Parameters:** Choose the Aspect Ratio, Clip duration, and CFG Scale.
5. Clicking **Initialize ZEO 4 Engine** compiles code commands (CLI Command and JSON Payload) ready for use in production APIs.
6. The module features a visual simulator (HUD) to preview metadata.

### 7. Final Tips
If the concept seems too technical, trust the AI: write your simple idea and use the "Auto" button or the engine compiler. Don't forget to save your favorite prompts in `.txt`!

---

<div style="page-break-after: always;"></div>

# 🇩🇪 Deutsch

## Ausführliches Benutzerhandbuch und Tutorial: Studio Pro AI Suite 3.0

### 1. Einführung
**Studio Pro AI Suite 3.0** ist ein professionelles Desktop-Tool für Regisseure, Drehbuchautoren und audiovisuelle Content-Ersteller. Sein Hauptziel ist es, die Erstellung von strukturierten und hochwertigen kinematografischen Prompts (Anweisungen) für generative KI-Video- und Bild-Engines (wie Sora, Veo, Runway, Midjourney usw.) zu erleichtern.

Im Gegensatz zur herkömmlichen Prompt-Erstellung (freier Text) führt Studio Pro ein parametrisches und methodisches System ein, das sehr ähnlich wie ein echtes Filmset funktioniert und es Ihnen ermöglicht, Kamera, Licht, Color Grading und Atmosphäre zu steuern.

### 2. Installation und Inbetriebnahme
Wenn Sie die Anwendung auf Ihrem macOS-Schreibtisch haben, ist der Start extrem einfach:
1. Öffnen Sie den Ordner `Studio-Pro-Suite` auf Ihrem Schreibtisch.
2. Suchen Sie die Datei `Iniciar_StudioPro.command`.
3. *(Nur beim ersten Mal)* Möglicherweise müssen Sie Berechtigungen erteilen. Öffnen Sie das Terminal und geben Sie ein: `chmod +x ~/Desktop/Studio-Pro-Suite/Iniciar_StudioPro.command`
4. Doppelklicken Sie auf die Datei `Iniciar_StudioPro.command`.
5. Dadurch wird der lokale Server gestartet und die Anwendung automatisch in Ihrem Standardbrowser geöffnet (normalerweise unter `http://localhost:5175`).

### 3. Hauptoberfläche und Dashboard
Beim Start sehen Sie das **Control Dashboard**. Von hier aus können Sie den Systemstatus in Echtzeit überwachen (Speichernutzung, Latenz usw.) und über die Seitenleiste auf die drei Hauptmodule zugreifen:
1. Cinema Generator Pro
2. Script Writer Pro
3. ZEO 4 Cinema Studio

In der Kopfzeile finden Sie einen **Sprachauswähler**, mit dem Sie die Benutzeroberfläche nativ in 7 Sprachen ändern können (Spanisch, Englisch, Deutsch, Russisch, Japanisch, Ukrainisch und Chinesisch).

### 4. Modul 1: Cinema Generator Pro
Dies ist die Haupt-Engine zum Erstellen von Bildern und visuellen Konzepten. Sie ist in 8 Parameterabschnitte unterteilt.

**Schritt für Schritt:**
1. **Konzeptdefinition (Abschnitt 1):** Schreiben Sie Ihre Grundidee in das Textfeld. Beispiel: *"Ein Detektiv, der durch eine regnerische Gasse geht"*.
   - **Auto-fill-Button:** Wenn Sie sich unsicher sind, klicken Sie auf "Auto" für kohärente kinematografische Kombinationen.
   - **Enhance Prose:** Verbessert grundlegende Konzepte durch Hinzufügen literarischer und kinoreifer Nuancen.
2. **Kamera und Objektive (Abschnitt 2):** Wählen Sie die Einstellungsgröße, einen realen Kamerabody (z. B. ARRI, RED) und das Objektiv (anamorphotisch, Vintage oder modern). Passen Sie Kamerabewegungen (Pan, Tilt, Tracking) an.
3. **Beleuchtung (Abschnitt 3):** Definieren Sie die Beleuchtung der Szene (z. B. High Key, Chiaroscuro), die Lichtrichtung, die Tageszeit und Modifikatoren.
4. **Atmosphäre und Farbe (Abschnitt 4):** Wählen Sie Wetter, Farbpalette und historische Periode.
5. **Visuelle Effekte - VFX (Abschnitt 5):** Fügen Sie Effekte wie Motion Blur, Filmkorn oder Kompositionsregeln hinzu.
6. **Negativer Prompt (Abschnitt 6):** Geben Sie an, was NICHT im Bild erscheinen soll.
7. **Export und Render:** Verwenden Sie den **Target Model**-Button, um den Text an das KI-Modell anzupassen. **Simulate Render** zeigt einen Referenz-Frame.

### 5. Modul 2: Script Writer Pro (Narrative Engine)
Für die Drehbuch- und Vorproduktionsphase.
1. Schreiben Sie die **Logline** in das Hauptfeld.
2. Wählen Sie **Subgenre**, **Emotionaler Ton** und **Erzählstruktur**.
3. **AI Cast & Crew:** Weisen Sie einen Regisseur und Kameramann zu. Die KI übernimmt ihren "visuellen Stil".
4. **Charakter-Speicher:** Fügen Sie Charaktere mit Namen, Aussehen und Motivation hinzu.
5. **Generate Scene Breakdown:** Erstellt Shot Cards.
6. Über die ZEO 4-Integration können Sie Shots direkt an das nächste Modul senden.

### 6. Modul 3: ZEO 4 Cinema Studio
Spezialisiert auf absolute Kontrolle der Videogenerierung.
1. Geben Sie Ihren **Base Prompt** ein.
2. **Keyframe Conditioning:** Laden Sie einen Anfangs- oder End-Frame hoch.
3. **Parametrischer Regisseur (3D-Kamerasteuerung):** Schieberegler für Kamerabewegungen (Pan, Tilt, Zoom, Roll, Tracking, Pedestal).
4. **Render Engine Parameter:** Seitenverhältnis, Cliplänge und CFG-Skala.
5. **Initialize ZEO 4 Engine** kompiliert CLI Command und JSON Payload für Produktions-APIs.

### 7. Abschließende Tipps
Wenn das Konzept zu technisch erscheint, vertrauen Sie der KI: Schreiben Sie Ihre einfache Idee und nutzen Sie den "Auto"-Button. Vergessen Sie nicht, Ihre Lieblings-Prompts als `.txt` zu speichern!

---

<div style="page-break-after: always;"></div>

# 🇷🇺 Русский

## Подробное руководство пользователя: Studio Pro AI Suite 3.0

### 1. Введение
**Studio Pro AI Suite 3.0** — это профессиональный настольный инструмент, разработанный для режиссёров, сценаристов и создателей аудиовизуального контента. Его главная цель — облегчить создание структурированных и высококачественных кинематографических промптов (инструкций) для систем генеративного ИИ видео и изображений (Sora, Veo, Runway, Midjourney и др.).

В отличие от традиционного создания промптов (ввод свободного текста), Studio Pro представляет параметрическую и методическую систему, очень похожую на работу на реальной съёмочной площадке, позволяя управлять камерой, светом, цветокоррекцией и атмосферой.

### 2. Установка и запуск
1. Откройте папку `Studio-Pro-Suite` на рабочем столе macOS.
2. Найдите файл `Iniciar_StudioPro.command`.
3. *(Только в первый раз)* Возможно, потребуется предоставить разрешения. Откройте Терминал и введите: `chmod +x ~/Desktop/Studio-Pro-Suite/Iniciar_StudioPro.command`
4. Дважды щёлкните файл `Iniciar_StudioPro.command`.
5. Будет запущен локальный сервер, приложение автоматически откроется в браузере (обычно `http://localhost:5175`).

### 3. Главный интерфейс и панель управления
При запуске вы увидите **Control Dashboard** (Панель управления). Здесь можно отслеживать состояние системы в реальном времени и получать доступ к трём основным модулям через боковое меню.
В заголовке программы находится **Селектор языка** для переключения интерфейса на 7 языков (испанский, английский, немецкий, русский, японский, украинский и китайский).

### 4. Модуль 1: Cinema Generator Pro
Основной движок для создания изображений и визуальных концепций. Разделён на 8 разделов параметров.

**Пошаговое создание изображения/сцены:**
1. **Определение концепции (Раздел 1):** Введите свою базовую идею в текстовое поле. Пример: *«Детектив, идущий по дождливой аллее»*.
   - **Auto-fill:** Автоматический подбор когерентных кинематографических комбинаций.
   - **Enhance Prose:** Улучшает базовый концепт, добавляя литературные и кинематографические нюансы.
2. **Камера и объективы (Раздел 2):** Выберите тип кадра, реальный корпус камеры (напр. ARRI, RED) и объектив (анаморфотные, винтажные, современные). Настройте движение камеры (Pan, Tilt, Tracking).
3. **Освещение (Раздел 3):** Определите, как освещена сцена (High Key, Кьяроскуро), направление света, время суток, модификаторы.
4. **Атмосфера и цвет (Раздел 4):** Выберите погоду, цветовую палитру и исторический период.
5. **Визуальные эффекты — VFX (Раздел 5):** Добавьте Motion Blur, зернистость плёнки, правила композиции.
6. **Негативный промпт (Раздел 6):** Укажите, что НЕ должно появляться на изображении.
7. **Экспорт и рендеринг:** Кнопка **Target Model** адаптирует текст под конкретную ИИ-модель. **Simulate Render** покажет примерный референсный кадр.

### 5. Модуль 2: Script Writer Pro (Narrative Engine)
Инструмент для фазы сценария и препродакшна.
1. Напишите **Логлайн** (главная посылка истории).
2. Выберите поджанр, эмоциональный тон и структуру повествования.
3. **AI Cast & Crew:** Назначьте режиссёра и оператора. ИИ примет их «визуальный стиль».
4. **Память персонажей:** Добавьте персонажей с именем (Trigger Word), внешностью и мотивацией. Система запомнит их для сохранения непрерывности (raccord).
5. **Generate Scene Breakdown:** Создаёт карточки кадров (Shot Cards).
6. Интеграция с ZEO 4 позволяет отправить любой кадр напрямую в следующий модуль для анимации.

### 6. Модуль 3: ZEO 4 Cinema Studio
Абсолютный контроль генерации видео.
1. Введите **Base Prompt**.
2. **Keyframe Conditioning:** Загрузите начальный или конечный кадр для направления ИИ.
3. **Параметрический режиссёр (3D-управление камерой):** Ползунки для Pan, Tilt, Zoom, Roll, Tracking, Pedestal.
4. **Параметры Render Engine:** Соотношение сторон, длительность клипа, шкала CFG.
5. **Initialize ZEO 4 Engine** компилирует CLI Command и JSON Payload.

### 7. Советы
Если концепт кажется слишком техническим, доверьтесь ИИ: напишите простую идею и используйте кнопку «Auto». Не забывайте сохранять любимые промпты в `.txt`!

---

<div style="page-break-after: always;"></div>

# 🇯🇵 日本語

## 詳細ユーザーマニュアル：Studio Pro AI Suite 3.0

### 1. はじめに
**Studio Pro AI Suite 3.0** は、映画監督、脚本家、映像コンテンツクリエイター向けに設計されたプロフェッショナルなデスクトップツールです。主な目的は、生成AIビデオおよび画像エンジン（Sora、Veo、Runway、Midjourneyなど）向けに、構造化された高品質の映画的プロンプトの作成を容易にすることです。

従来のプロンプト作成（自由記述テキスト）とは異なり、Studio Proは実際の映画撮影現場と非常に似たパラメトリックで体系的なシステムを導入しており、カメラ、照明、カラーグレーディング、雰囲気を制御できます。

### 2. インストールと起動
macOSのデスクトップにある場合、起動は非常に簡単です：
1. デスクトップの `Studio-Pro-Suite` フォルダを開きます。
2. `Iniciar_StudioPro.command` ファイルを見つけます。
3. *（初回のみ）* 権限の付与が必要な場合があります。ターミナルで次を入力：`chmod +x ~/Desktop/Studio-Pro-Suite/Iniciar_StudioPro.command`
4. `Iniciar_StudioPro.command` をダブルクリックします。
5. ローカルサーバーが起動し、デフォルトブラウザ（通常 `http://localhost:5175`）でアプリケーションが自動的に開きます。

### 3. メインインターフェースとダッシュボード
起動時に **Control Dashboard**（コントロールダッシュボード）が表示されます。ここからシステムのリアルタイムステータスを監視し、サイドバーから3つの主要モジュールにアクセスできます。
プログラムヘッダーの **言語セレクター** で、インターフェースを7言語（スペイン語、英語、ドイツ語、ロシア語、日本語、ウクライナ語、中国語）に切り替えられます。

### 4. モジュール1：Cinema Generator Pro
画像と視覚的コンセプトを構築するための主要エンジンです。8つのパラメーターセクションに分かれています。

**画像/シーンの作成手順：**
1. **コンセプト定義（セクション1）：** テキストボックスに基本アイデアを入力します。例：*「雨の路地を歩く探偵」*。
   - **Auto-fillボタン：** 一貫性のある映画的組み合わせを自動選択します。
   - **Enhance Prose：** 基本的なコンセプトに文学的・映画的ニュアンスを追加して改善します。
2. **カメラとレンズ（セクション2）：** ショットタイプ、実際のカメラボディ（ARRIなど）、レンズ（アナモルフィック、ビンテージ、モダン）を選択。カメラ移動（パン、ティルト、トラッキング）を調整。
3. **照明（セクション3）：** シーンの照明方法を定義。照明スキーム（ハイキー、キアロスクーロなど）、光の方向、時間帯、モディファイアを選択。
4. **雰囲気と色（セクション4）：** 天候、カラーパレット、時代を選択。
5. **視覚効果 — VFX（セクション5）：** モーションブラー、フィルムグレイン、構図ルールなどの効果を追加。
6. **ネガティブプロンプト（セクション6）：** 画像に表示させたくないものを指定。
7. **エクスポートとレンダリング：** **Target Model** ボタンでAIモデルに合わせてテキストを調整。**Simulate Render** で参照フレームを表示。

### 5. モジュール2：Script Writer Pro（ナラティブエンジン）
脚本とプリプロダクション段階向けツール。
1. メインフィールドに **ログライン** を書きます。
2. サブジャンル、感情的トーン、物語構造を選択。
3. **AI Cast & Crew：** 監督と撮影監督を割り当て。AIが彼らの「ビジュアルスタイル」を採用。
4. **キャラクターメモリ：** キャラクターを追加。システムが連続性（raccord）のために記憶。
5. **Scene Breakdown生成：** ショットカード (Shot Cards) を作成。
6. ZEO 4統合により、生成したショットを次のモジュールに直接送信可能。

### 6. モジュール3：ZEO 4 Cinema Studio
ビデオ生成の絶対的な制御に特化したモジュール。
1. **ベースプロンプト** を入力。
2. **Keyframe Conditioning：** AIをガイドするための初期/最終フレームをアップロード。
3. **パラメトリックディレクター（3Dカメラコントロール）：** スライダーでカメラ移動を調整（Pan, Tilt, Zoom, Roll, Tracking, Pedestal）。
4. **Render Engineパラメーター：** アスペクト比、クリップの長さ、CFGスケールを選択。
5. **Initialize ZEO 4 Engine** をクリックすると、CLI CommandとJSON Payloadがコンパイルされます。

### 7. ヒント
コンセプトが技術的すぎると感じたら、AIを信頼してください。シンプルなアイデアを書いて「Auto」ボタンを使いましょう。お気に入りのプロンプトを `.txt` で保存することをお忘れなく！

---

<div style="page-break-after: always;"></div>

# 🇺🇦 Українська

## Докладний посібник користувача: Studio Pro AI Suite 3.0

### 1. Вступ
**Studio Pro AI Suite 3.0** — це професійний настільний інструмент, розроблений для режисерів, сценаристів і творців аудіовізуального контенту. Його головна мета — полегшити створення структурованих та високоякісних кінематографічних промптів (інструкцій) для генеративних ШІ-двигунів відео та зображень (Sora, Veo, Runway, Midjourney тощо).

На відміну від традиційного створення промптів (вільний текст), Studio Pro представляє параметричну та методичну систему, дуже схожу на роботу на реальному знімальному майданчику, що дозволяє керувати камерою, освітленням, корекцією кольору та атмосферою.

### 2. Встановлення та запуск
Якщо програма знаходиться на робочому столі macOS:
1. Відкрийте папку `Studio-Pro-Suite` на робочому столі.
2. Знайдіть файл `Iniciar_StudioPro.command`.
3. *(Лише перший раз)* Можливо, знадобиться надати дозволи. Відкрийте термінал і введіть: `chmod +x ~/Desktop/Studio-Pro-Suite/Iniciar_StudioPro.command`
4. Двічі клацніть `Iniciar_StudioPro.command`.
5. Це запустить локальний сервер, і програма автоматично відкриється у вашому браузері (зазвичай `http://localhost:5175`).

### 3. Головний інтерфейс та панель керування
Після запуску ви побачите **Control Dashboard** (Панель керування). Звідси можна відстежувати стан системи в режимі реального часу та отримувати доступ до трьох основних модулів через бічне меню.
У заголовку програми ви знайдете **Селектор мови** для перемикання інтерфейсу на 7 мов (іспанська, англійська, німецька, російська, японська, українська та китайська).

### 4. Модуль 1: Cinema Generator Pro
Головний рушій для створення зображень та візуальних концепцій. Розділений на 8 розділів параметрів.

**Покрокове створення зображення/сцени:**
1. **Визначення концепції (Розділ 1):** Напишіть базову ідею в текстовому полі. Приклад: *«Детектив, що йде по дощовому провулку»*.
   - **Auto-fill:** Автоматичний підбір когерентних кінематографічних комбінацій.
   - **Enhance Prose:** Покращує базовий концепт, додаючи літературні та кінематографічні нюанси.
2. **Камера та об'єктиви (Розділ 2):** Виберіть тип кадру, реальний корпус камери (напр. ARRI, RED) та об'єктив (анаморфотні, вінтажні, сучасні). Налаштуйте рухи камери (Pan, Tilt, Tracking).
3. **Освітлення (Розділ 3):** Визначте освітлення сцени (High Key, К'яроскуро), напрямок світла, час доби, модифікатори.
4. **Атмосфера та колір (Розділ 4):** Виберіть погоду, кольорову палітру та історичний період.
5. **Візуальні ефекти — VFX (Розділ 5):** Додайте Motion Blur, зернистість плівки, правила композиції.
6. **Негативний промпт (Розділ 6):** Вкажіть, що НЕ повинно з'являтися на зображенні.
7. **Експорт та рендеринг:** Кнопка **Target Model** адаптує текст під конкретну ШІ-модель. **Simulate Render** покаже приблизний референсний кадр.

### 5. Модуль 2: Script Writer Pro (Narrative Engine)
Інструмент для фази сценарію та препродакшну.
1. Напишіть **Логлайн** у головному полі.
2. Виберіть піджанр, емоційний тон та структуру оповіді.
3. **AI Cast & Crew:** Призначте режисера та оператора-постановника. ШІ перейме їхній «візуальний стиль».
4. **Пам'ять персонажів:** Додайте персонажів з ім'ям (Trigger Word), зовнішністю та мотивацією. Система запам'ятає їх для збереження послідовності.
5. **Generate Scene Breakdown:** Створює картки кадрів (Shot Cards).
6. Інтеграція з ZEO 4 дозволяє надсилати кадри напряму до наступного модуля.

### 6. Модуль 3: ZEO 4 Cinema Studio
Абсолютний контроль генерації відео.
1. Введіть **Base Prompt**.
2. **Keyframe Conditioning:** Завантажте початковий або кінцевий кадр для спрямування ШІ.
3. **Параметричний режисер (3D-керування камерою):** Повзунки для Pan, Tilt, Zoom, Roll, Tracking, Pedestal.
4. **Параметри Render Engine:** Співвідношення сторін, тривалість кліпу, шкала CFG.
5. **Initialize ZEO 4 Engine** компілює CLI Command та JSON Payload.

### 7. Поради
Якщо концепт здається занадто технічним, довірте ШІ: напишіть просту ідею та використовуйте кнопку «Auto». Не забувайте зберігати улюблені промпти у `.txt`!

---

<div style="page-break-after: always;"></div>

# 🇨🇳 中文

## 详细用户手册：Studio Pro AI Suite 3.0

### 1. 简介
**Studio Pro AI Suite 3.0** 是一款为导演、编剧和视听内容创作者设计的专业桌面工具。其主要目标是为生成式人工智能视频和图像引擎（如Sora、Veo、Runway、Midjourney等）创建结构化和高质量的电影级提示词（prompts）。

与传统的自由文本提示词生成不同，Studio Pro引入了一种参数化和系统化的方法，非常类似于真实的电影拍摄现场，使您能够控制摄像机、光线、调色和氛围。

### 2. 安装与启动
如果您已将该应用程序放置在macOS桌面上，启动非常简单：
1. 打开桌面上的 `Studio-Pro-Suite` 文件夹。
2. 找到 `Iniciar_StudioPro.command` 文件。
3. *(仅限首次)* 可能需要授予权限。打开终端并输入：`chmod +x ~/Desktop/Studio-Pro-Suite/Iniciar_StudioPro.command`
4. 双击 `Iniciar_StudioPro.command` 文件。
5. 这将启动本地服务器，并在默认浏览器（通常为 `http://localhost:5175`）中自动打开应用程序。

### 3. 主界面与仪表板
启动时，您将看到 **Control Dashboard（控制仪表板）**。从这里可以实时监控系统状态（内存使用、延迟等），并通过侧边栏访问三个主要模块。
程序顶部有一个 **语言选择器**，可将界面原生切换为7种语言（西班牙语、英语、德语、俄语、日语、乌克兰语和中文）。

### 4. 模块1：Cinema Generator Pro
这是构建图像和视觉概念的主要引擎，分为8个参数部分。

**逐步创建图像/场景：**
1. **概念定义（第1部分）：** 在文本框中写下您的基本想法。例如：*"一名侦探走过雨夜的小巷"*。
   - **Auto-fill按钮：** 自动选择一致的电影级组合。
   - **Enhance Prose：** 通过添加文学和电影级的细微差别来改进基本概念。
2. **摄像机和镜头（第2部分）：** 选择镜头类型、真实摄像机机身（如ARRI、RED）和镜头（变形、复古或现代）。调整摄像机运动（Pan、Tilt、Tracking）。
3. **灯光（第3部分）：** 定义场景照明方式（High Key、明暗对比法等）、光线方向、时段和修饰符。
4. **氛围和颜色（第4部分）：** 选择天气、调色板和历史时期。
5. **视觉效果 — VFX（第5部分）：** 添加运动模糊、胶片颗粒、构图规则等效果。
6. **负面提示词（第6部分）：** 指定不希望在图像中出现的内容。
7. **导出和渲染：** 使用 **Target Model** 按钮调整文本以适应特定AI模型。**Simulate Render** 显示参考帧。

### 5. 模块2：Script Writer Pro（叙事引擎）
为剧本写作和前期制作阶段设计的工具。
1. 在主字段中编写 **一句话故事（Logline）**。
2. 选择子流派、情感基调和叙事结构。
3. **AI演职人员（AI Cast & Crew）：** 为项目分配导演和摄影指导。AI将采用他们的"视觉风格"。
4. **角色记忆：** 添加角色。系统会记住他们以保持连贯性（raccord）。
5. **生成场景分解：** 创建镜头卡片（Shot Cards）。
6. 通过ZEO 4集成，可以将生成的镜头直接发送到下一个模块进行动画制作。

### 6. 模块3：ZEO 4 Cinema Studio
专注于视频生成的绝对控制。
1. 输入 **基础提示词（Base Prompt）**。
2. **关键帧条件（Keyframe Conditioning）：** 上传初始或最终帧以引导AI。
3. **参数化导演（3D摄像机控制）：** 使用滑块调整摄像机运动（Pan、Tilt、Zoom、Roll、Tracking、Pedestal）。
4. **渲染引擎参数：** 选择宽高比、持续时间和CFG比例。
5. 点击 **Initialize ZEO 4 Engine** 编译CLI Command和JSON Payload，可直接用于生产环境API。

### 7. 提示
如果概念看起来太技术化，请信任AI：写下您的简单想法并使用"Auto"按钮。别忘了将您最喜欢的提示词保存为 `.txt`！

---

*© Studio Pro AI Suite 3.0 — Jesús Ferrer García (CHUS BZN) — All rights reserved / Todos los derechos reservados*
