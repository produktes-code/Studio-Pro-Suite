<p align="center">
  <img src="build/icon.png" width="150" height="150" alt="Logo" />
</p>

# Studio Pro Suite V1.0.0 - Technical Manual
**Engineered by Chus BZN / Versión Final 1.0.0**

---

## 🌐 Table of Contents / Índice de Idiomas

| 🏳️ | Idioma / Language |
|-----|-------------------|
| 🏳️ | [Español](#-español) |\n| 🏳️ | [English](#-english) |\n| 🏳️ | [Deutsch](#-deutsch) |\n| 🏳️ | [Русский](#-русский) |\n| 🏳️ | [日本語](#-日本語) |\n| 🏳️ | [Українська](#-українська) |\n| 🏳️ | [中文](#-中文) |\n
---

<div style="page-break-after: always;"></div>
\n# 🏳️ Español\n\n
### Manual de Usuario y Guía Técnica: Studio Pro Suite V1.0.0

#### 1. Introducción y Conceptos Básicos
**Studio Pro Suite V1.0.0** es un ecosistema avanzado de automatización cinematográfica y generación de prompts de vídeo mediante Inteligencia Artificial de nivel profesional. Diseñado para integrarse en flujos de preproducción y curaduría de contenidos, el sistema permite simular el comportamiento de cámaras físicas, simular la renderización y cálculo de latencia con Nodos ZEO-4, estilizar video (V2V), aplicar intercambios de rostro (Face Swap / Lip-Sync) y estructurar prompts avanzados para generadores de imagen y vídeo.

#### 2. Instalación y Requisitos del Sistema
*   **Requisitos de Hardware:** macOS 12 (Monterey) o superior. 8 GB RAM mínimo, 10 GB de espacio libre en SSD.
*   **Instalación:**
    1. Localice el archivo `Studio Pro Suite-1.0.0.dmg`.
    2. Haga doble clic para montar la imagen de disco.
    3. Arrastre el icono de **Studio Pro Suite** hacia la carpeta **Aplicaciones**.
    4. Abra la aplicación desde su Launchpad o carpeta de Aplicaciones.

#### 3. Módulos y Características
*   **Nodos ZEO-4 (Carga de Datos y Audio):** Simula un backend en la nube que gestiona la carga de datos (payloads). Permite convertir indicaciones textuales en señales de audio simuladas mediante síntesis de voz, evaluando el tiempo de respuesta.
*   **CinemaGenerator Pro:** El núcleo del motor estético. Permite parametrizar el estilo visual de la toma cinematográfica mediante la combinación de más de 80 perfiles de cámara (IMAX, Arri Alexa, RED V-Raptor), perfiles de estilo de directores de fotografía legendarios (Roger Deakins, Greig Fraser) y ópticas reales de T1.2 a T22.
*   **Domo AI (Video-to-Video V2V) & Akool (Face Swap):** Módulo para previsualizar la conversión de metraje real a estilos alternativos e interfaz gráfica para cargar rostros de origen y destino para fines publicitarios.
*   **ScriptWriter Pro:** Generador estructurado de prompts que ayuda al usuario a formular descripciones ricas en detalles basados en el modelo de variables del cine tradicional.

#### 4. Guía de Parámetros y Valores
*   **Apertura del Lente (Aperture):** Define la profundidad de campo. Valores bajos (T1.2 - T2.0) generan un fondo desenfocado (bokeh); valores altos (T11 - T22) mantienen la escena en foco.
*   **ISO y Ruido:** Simula la sensibilidad a la luz. A mayor ISO (ej. 3200), mayor nivel de grano de película analógica en la previsualización.
*   **Fidelidad de Rostro (Fidelity):** Regulable de 0 a 100%. Define el grado de fusión geométrica en el proceso de Face Swap.

#### 5. Flujo de Trabajo Didáctico
1.  **Paso 1:** Abra la aplicación en su Mac. El panel principal oscuro se adaptará a su resolución.
2.  **Paso 2:** Configure la óptica, el perfil de director y la relación de aspecto en CinemaGenerator.
3.  **Paso 3:** Genere su prompt narrativo estructurado usando ScriptWriter.
4.  **Paso 4:** Escriba el prompt y ejecute la prueba de latencia de carga en ZEO-4.
5.  **Paso 5:** Copia el prompt generado en la consola para usarlo en tu motor de vídeo definitivo.

#### 6. Resolución de Problemas y Soporte
*   **Error de Carga ZEO-4:** Verifique su conexión de red. Si el backend simulado tarda demasiado, ajuste la latencia máxima en el panel de configuración.
*   **Face Swap Desalineado:** Asegure que la imagen de origen y destino tengan rostros claros, de frente y bien iluminados.
\n\n<div style='page-break-after: always;'></div>\n\n# 🏳️ English\n\n
### User Manual and Technical Guide: Studio Pro Suite V1.0.0

#### 1. Introduction and Core Concepts
**Studio Pro Suite V1.0.0** is an advanced professional-grade cinematic automation and AI-assisted video prompt generation ecosystem. Designed to integrate into content pre-production and curation workflows, the system simulates physical camera behaviors, estimates ZEO-4 Node rendering latency, applies V2V video styling, processes Face Swap/Lip-Sync operations, and structures complex prompts for text-to-video engines.

#### 2. Installation and System Requirements
*   **Hardware Requirements:** macOS 12 (Monterey) or higher. Minimum 8 GB RAM, 10 GB free space on SSD.
*   **Installation:**
    1. Locate the `Studio Pro Suite-1.0.0.dmg` file.
    2. Double-click to mount the disk image.
    3. Drag the **Studio Pro Suite** icon to the **Applications** folder.
    4. Open the application from your Launchpad or Applications folder.

#### 3. Modules and Features
*   **ZEO-4 Node Processor:** Simulates a cloud backend managing incoming data payloads. It converts textual descriptions into simulated audio signals via voice synthesis, evaluating response times.
*   **CinemaGenerator Pro:** The core of the aesthetic engine. It parametrizes the visual rendering style by combining over 80 camera profiles (IMAX, Arri Alexa, RED V-Raptor), legendary cinematographer style profiles (Roger Deakins, Greig Fraser), and optics aperture configurations from T1.2 to T22.
*   **Domo AI (Video-to-Video V2V) & Akool (Face Swap):** Preview conversion of real footage into alternative styles and graphic interface to map source and target faces for promotional assets.
*   **ScriptWriter Pro:** A structured cinematic prompt generator helping users build prompts rich in aesthetic details based on traditional cinema variables.

#### 4. Parameters and Values Guide
*   **Aperture (T-Stop):** Controls depth of field. Low values (T1.2 - T2.0) generate background bokeh; high values (T11 - T22) keep the entire scene in focus.
*   **ISO & Noise:** Simulates light sensitivity. Higher ISO (e.g., 3200) renders more analog film grain in the preview.
*   **Fidelity (Face Swap):** Adjustable from 0 to 100%. Defines the geometric fusion weight during face swap.

#### 5. Step-by-Step Production Workflow
1.  **Step 1:** Open the app on your Mac. The dark glassmorphic dashboard auto-adjusts to your display resolution.
2.  **Step 2:** Set the optics, director style, and aspect ratio in CinemaGenerator.
3.  **Step 3:** Draft your cinematic script prompt using ScriptWriter templates.
4.  **Step 4:** Input the prompt and run the latency loading test in ZEO-4.
5.  **Step 5:** Copy the resulting prompt from the console to use in your target video generation engine.

#### 6. Troubleshooting and Support
*   **ZEO-4 Load Error:** Check network connectivity. If the simulated backend times out, adjust the max latency in settings.
*   **Misaligned Face Swap:** Ensure that both source and target images feature clear, front-facing, well-lit faces.
\n\n<div style='page-break-after: always;'></div>\n\n# 🏳️ Deutsch\n\n
### Benutzerhandbuch und Technische Anleitung: Studio Pro Suite V1.0.0

#### 1. Einführung und Kernkonzepte
**Studio Pro Suite V1.0.0** ist eine hochentwickelte, professionelle kinematografische Automatisierungs- und KI-gestützte Video-Prompt-Generierungsumgebung. Sie wurde entwickelt, um in Vorproduktions- und Kurations-Workflows integriert zu werden, und simuliert physische Kameras, ZEO-4-Knoten-Latenzen, V2V-Videostile und Face-Swap/Lip-Sync-Vorgänge.

#### 2. Installation und Systemanforderungen
*   **Hardwareanforderungen:** macOS 12 (Monterey) oder höher. Mindestens 8 GB RAM, 10 GB freier Speicherplatz auf SSD.
*   **Installation:**
    1. Suchen Sie die Datei `Studio Pro Suite-1.0.0.dmg`.
    2. Doppelklicken Sie, um das Image zu aktivieren.
    3. Ziehen Sie das **Studio Pro Suite**-Symbol in den Ordner **Programme**.
    4. Öffnen Sie die App über Ihr Launchpad oder den Programme-Ordner.

#### 3. Module und Eigenschaften
*   **ZEO-4 Knotenprozessor:** Simuliert ein Cloud-Backend zur Verarbeitung von Payload-Daten und Sprach-zu-Audio-Rendering mit Latenzprüfung.
*   **CinemaGenerator Pro:** Das Herzstück der Ästhetik-Engine. Kombiniert über 80 Kameras (IMAX, Arri Alexa LF), legendäre Kameramänner (Roger Deakins, Greig Fraser) und professionelle Optiken (T1.2 bis T22).
*   **Domo AI (V2V) & Akool (Face Swap):** Stilisierung von Videos in Anime/3D-Renderings und Gesichtsaustausch mit Lippensynchronisation.
*   **ScriptWriter Pro:** Strukturierter Prompt-Generator zur Erstellung filmischer Beschreibungen basierend auf traditionellen Kinomedien-Variablen.

#### 4. Parameter- und Wertanleitung
*   **Blendenöffnung (Aperture):** Definiert die Schärfentiefe. Niedrige Werte (T1.2 - T2.0) erzeugen Bokeh-Effekte; hohe Werte (T11 - T22) halten die Szene im Fokus.
*   **ISO und Rauschen:** Simuliert Lichtempfindlichkeit. Höhere ISO-Werte (z.B. 3200) erzeugen analoges Filmkorn.
*   **Gesichtsfidelität (Fidelity):** Einstellbar von 0 bis 100%. Definiert den Grad der geometrischen Verschmelzung beim Face Swap.

#### 5. Didaktischer Arbeitsablauf Schritt für Schritt
1.  **Schritt 1:** Öffnen Sie die App auf Ihrem Mac. Das dunkle Dashboard passt sich der Auflösung an.
2.  **Schritt 2:** Konfigurieren Sie Optik, Regisseur und Bildformat in CinemaGenerator.
3.  **Schritt 3:** Erstellen Sie Ihr Skript mithilfe der ScriptWriter-Vorlagen.
4.  **Schritt 4:** Geben Sie den Prompt ein und starten Sie den Latenztest in ZEO-4.
5.  **Schritt 5:** Kopieren Sie den resultierenden Prompt für Ihre Video-Engine.

#### 6. Fehlerbehebung und Support
*   **ZEO-4 Verbindungsfehler:** Überprüfen Sie Ihre Netzwerkverbindung und passen Sie die Latenzgrenze an.
*   **Ungenaue Gesichtsausrichtung:** Stellen Sie sicher, dass Quell- und Zielgesichter gut beleuchtet und frontal aufgenommen sind.
\n\n<div style='page-break-after: always;'></div>\n\n# 🏳️ Русский\n\n
### Руководство пользователя и техническое руководство: Studio Pro Suite V1.0.0

#### 1. Введение и основные концепции
**Studio Pro Suite V1.0.0** — это передовая профессиональная экосистема автоматизации кинематографа и генерации видеопромптов на базе искусственного интеллекта. Предназначена для интеграции в рабочие процессы препродакшна и курирования аудиовизуального контента.

#### 2. Установка и системные требования
*   **Требования к оборудованию:** macOS 12 (Monterey) или выше. Минимум 8 ГБ ОЗУ, 10 ГБ свободного места на SSD.
*   **Установка:**
    1. Найдите файл `Studio Pro Suite-1.0.0.dmg`.
    2. Дважды щелкните, чтобы смонтировать образ диска.
    3. Перетащите иконку **Studio Pro Suite** в папку **Программы**.
    4. Запустите приложение из Launchpad или папки Программы.

#### 3. Модули и возможности
*   **Процессор узлов ZEO-4:** Моделирует облачный бэкенд, вычисляет задержку рендеринга и преобразует текст в аудиосигналы посредством голосового синтеза.
*   **CinemaGenerator Pro:** Ядро эстетического движка. Параметризует визуальный стиль с использованием более 80 профилей камер (IMAX, Arri Alexa LF), легендарных операторов (Роджер Дикинс, Грейг Фрейзер) и оптики от T1.2 до T22.
*   **Domo AI (V2V) & Akool (Face Swap):** Стилизация видео (V2V) в Аниме/3D и высокоточная замена лиц на видео с синхронизацией губ.
*   **ScriptWriter Pro:** Конструктор промптов на основе традиционных кинематографических переменных.

#### 4. Руководство по параметрам и значениям
*   **Диафрагма (Aperture):** Управляет глубиной резкости. Низкие значения (T1.2 - T2.0) создают размытие фона; высокие значения (T11 - T22) держат всю сцену в фокусе.
*   **ISO и шум:** Симулирует светочувствительность. Более высокое ISO (например, 3200) делает превью зернистым.
*   **Точность лица (Fidelity):** Регулируется от 0 до 100%. Определяет степень геометрического слияния при замене лица.

#### 5. Пошаговый рабочий процесс
1.  **Шаг 1:** Откройте приложение на вашем Mac. Интерфейс адаптируется под разрешение экрана.
2.  **Шаг 2:** Настройте параметры оптики, стиль оператора и соотношение сторон в CinemaGenerator.
3.  **Шаг 3:** Сгенерируйте сценарий с помощью шаблонов ScriptWriter.
4.  **Шаг 4:** Введите полученный текст в ZEO-4 и запустите тест задержки.
5.  **Шаг 5:** Скопируйте готовый промпт из консоли для использования во внешнем видеогенераторе.

#### 6. Устранение неполадок и поддержка
*   **Ошибка загрузки ZEO-4:** Проверьте интернет-соединение. Если виртуальный бэкенд не отвечает, увеличьте лимит задержки.
*   **Искажение лица при Face Swap:** Убедитесь, что исходные лица хорошо освещены и расположены прямо.
\n\n<div style='page-break-after: always;'></div>\n\n# 🏳️ 日本語\n\n
### ユーザーマニュアルと技術ガイド：Studio Pro Suite V1.0.0

#### 1. はじめにとコアコンセプト
**Studio Pro Suite V1.0.0** は、プロフェッショナル向けの高度なシネマ自動化およびAI支援による映像生成プロンプトエンジニアリングエコシステムです。カメラの挙動、ZEO-4ノードのレンダリング遅延シミュレーション、V2Vビデオスタイライズ、Face Swapなどを統合的に行います。

#### 2. インストール方法とシステム要件
*   **ハードウェア要件:** macOS 12 (Monterey) 以降。最低 8 GB RAM、10 GB 以上の SSD 空き容量。
*   **インストール方法:**
    1. `Studio Pro Suite-1.0.0.dmg` ファイルを見つけます。
    2. ダブルクリックしてディスクイメージをマウントします。
    3. **Studio Pro Suite** アイコンを **アプリケーション** フォルダにドラッグします。
    4. Launchpad またはアプリケーションフォルダからアプリを開きます。

#### 3. モジュールと機能
*   **ZEO-4 ノードプロセッサ:** クラウドバックエンドをシミュレートし、遅延測定とテキスト・オーディオ音声合成変換を行います。
*   **CinemaGenerator Pro:** 美的エンジンのコア。80以上のカメラ（IMAX、Arri Alexa LF）、撮影監督（ロジャー・ディーキンス、グレイグ・フレイザー）、プロ用レンズ（T1.2〜T22）の組み合わせによるスタイル構築を行います。
*   **Domo AI (V2V) & Akool (Face Swap):** 動画のスタイル変換（アニメ/3D）および高精度なフェイススワップ/リップシンクインターフェース。
*   **ScriptWriter Pro:** シネマティックプロンプトを構築するための構造化ツール。

#### 4. パラメータと設定値ガイド
*   **絞り値 (Aperture):** 被写界深度を制御します。低い値（T1.2 - T2.0）は背景ボケ（Bokeh）を生成し、高い値（T11 - T22）は全体に焦点を合わせます。
*   **ISOとノイズ:** 光感度をシミュレートします。ISO値が高いほど（例：3200）、アナログフィルムのような粒状感が現れます。
*   **顔の忠実度 (Fidelity):** 0〜100%の範囲で調整可能。フェイススワップ時のジオメトリ合成比率を定義します。

#### 5. 制作ワークフロー（ステップ・バイ・ステップ）
1.  **ステップ 1:** Macでアプリを開きます。ダークなガラスモフィズムUIが画面解像度に合わせて自動調整されます。
2.  **ステップ 2:** CinemaGeneratorでレンズ、監督のスタイル、アスペクト比を設定します。
3.  **ステップ 3:** ScriptWriterのテンプレートを使用してシナリオプロンプトを作成します。
4.  **ステップ 4:** プロンプトをZEO-4に入力し、遅延シミュレーションテストを実行します。
5.  **ステップ 5:** コンソールから完成したプロンプトをコピーして、外部のビデオ生成エンジンで使用します。

#### 6. トラブルシューティングとサポート
*   **ZEO-4 ロードエラー:** ネットワーク接続を確認してください。タイムアウトが発生する場合は、最大遅延時間を長く調整してください。
*   **フェイススワップのズレ:** ソース画像とターゲット画像が正面を向き、十分に明るいことを確認してください。
\n\n<div style='page-break-after: always;'></div>\n\n# 🏳️ Українська\n\n
### Посібник користувача та технічний посібник: Studio Pro Suite V1.0.0

#### 1. Вступ та основні концепції
**Studio Pro Suite V1.0.0** — це передова професійна екосистема кінематографічної автоматизації та генерації аудіовізуальних промптів за допомогою ШІ. Призначена для інтеграції в робочі процеси препродакшну та кураторства цифрового контенту.

#### 2. Встановлення та системні вимоги
*   **Вимоги до заліза:** macOS 12 (Monterey) або вище. Мінімум 8 ГБ ОЗУ, 10 ГБ вільного місця на SSD.
*   **Встановлення:**
    1. Знайдіть файл `Studio Pro Suite-1.0.0.dmg`.
    2. Двічі клацніть для монтування диска.
    3. Перетягніть іконку **Studio Pro Suite** до папки **Програми**.
    4. Запустіть програму з Launchpad або папки Програми.

#### 3. Модулі та характеристики
*   **Процесор вузлів ZEO-4:** Симулює хмарний бекенд для обробки даних, вимірювання затримки рендерингу та перетворення тексту на голосовий аудіосигнал.
*   **CinemaGenerator Pro:** Ядро художнього двигуна. Більше 80 профілів камер (IMAX, Arri Alexa LF), стилі відомих операторів (Роджер Дікінс, Грейг Фрейзер) та налаштування оптики (T1.2 - T22).
*   **Domo AI (V2V) & Akool (Face Swap):** Стилізація відео в Аніме/3D та реалістична заміна облич з ліпсінком.
*   **ScriptWriter Pro:** Структурований конструктор промптів на основі традиційних кінематографічних змінних.

#### 4. Гід по параметрах та значеннях
*   **Діафрагма (Aperture):** Визначає глибину різкості. Низькі значення (T1.2 - T2.0) створюють розмиття фону (боке); високі (T11 - T22) тримають усю сцену у фокусі.
*   **ISO та шум:** Симулює світлочутливість. Чим вище ISO (наприклад, 3200), тим більше зернистості аналогової плівки на прев'ю.
*   **Точність обличчя (Fidelity):** Регулюється від 0 до 100%. Визначає вагу геометричного злиття під час Face Swap.

#### 5. Покроковий робочий процес
1.  **Крок 1:** Відкрийте програму на вашому Mac. Інтерфейс підлаштується під вашу роздільну здатність.
2.  **Крок 2:** Налаштуйте оптику, стиль оператора та формат кадру в CinemaGenerator.
3.  **Крок 3:** Згенеруйте сценарій за допомогою шаблонів ScriptWriter.
4.  **Крок 4:** Введіть промпт у ZEO-4 і запустіть тест затримки.
5.  **Крок 5:** Скопіюйте готовий промпт із консолі для використання у зовнішньому відеогенераторі.

#### 6. Усунення несправностей та підтримка
*   **Помилка ZEO-4:** Перевірте мережеве з'єднання. Якщо віртуальний бекенд не відповідає, збільшіть ліміт затримки в налаштуваннях.
*   **Нерівний Face Swap:** Переконайтеся, що обличчя на обох зображеннях чіткі, добре освітлені та розташовані фронтально.
\n\n<div style='page-break-after: always;'></div>\n\n# 🏳️ 中文\n\n
### 用户手册与技术指南：Studio Pro Suite V1.0.0

#### 1. 简介与核心概念
**Studio Pro Suite V1.0.0** 是一款先进的专业级电影制作自动化及人工智能辅助提示词生成系统。用于视频预制、特效模拟、ZEO-4 节点延迟估算和镜头参数化设计。

#### 2. 安装与系统要求
*   **硬件要求:** macOS 12 (Monterey) 或更高版本。最低 8 GB RAM，固态硬盘（SSD）上至少 10 GB 可用空间。
*   **安装步骤:**
    1. 找到 `Studio Pro Suite-1.0.0.dmg` 文件。
    2. 双击挂载磁盘映像。
    3. 将 **Studio Pro Suite** 图标拖动到 **应用程序**（Applications）文件夹中。
    4. 从 Launchpad 或应用程序文件夹打开该程序。

#### 3. 功能模块与特性
*   **ZEO-4 节点处理器:** 模拟云端后端，处理数据载荷，提供实时渲染延迟估算与语音合成测试。
*   **CinemaGenerator Pro:** 美学引擎的核心。整合了 80+ 种相机配置文件（IMAX 70mm, Arri Alexa LF 等）、传奇摄影师风格（Roger Deakins, Greig Fraser 等）以及专业镜头光学（T1.2 - T22）。
*   **Domo AI (V2V) 与 Akool (Face Swap):** 提供视频风格化（动漫、3D渲染）预监和高保真面部替换及唇形同步接口。
*   **ScriptWriter Pro:** 电影级结构化提示词生成器，将画面描述翻译为标准的提示词变量。

#### 4. 参数与值设置指南
*   **镜头光圈 (Aperture):** 控制被写界深度。低数值（T1.2 - T2.0）会产生背景虚化（Bokeh）；高数值（T11 - T22）保持整个画面清晰。
*   **ISO 与噪点:** 模拟光敏感度。ISO 越高（例如 3200），预览中呈现的模拟胶片颗粒感就越强。
*   **面部保真度 (Fidelity):** 0 至 100% 可调。定义面部替换过程中的几何融合权重。

#### 5. 电影级视频生产工作流
1.  **第一步:** 在 Mac 上打开应用。深色的 Glassmorphism 界面将自动适应您的显示器分辨率。
2.  **第二步:** 在 CinemaGenerator 中设置镜头参数、导演风格和画幅比例。
3.  **第三步:** 使用 ScriptWriter 模板撰写您的电影脚本提示词。
4.  **第四步:** 将提示词输入 ZEO-4 模块，运行云端渲染延迟估算测试。
5.  **第五步:** 从控制台复制生成的提示词，直接用于外部视频生成引擎中。

#### 6. 故障排除与技术支持
*   **ZEO-4 载荷加载失败:** 请检查网络连接。如果模拟后端超时，请在设置中适当调大最大延迟时间。
*   **面部替换扭曲:** 确保源图像和目标图像的面部清晰、正面朝向且光线良好。
\n\n<div style='page-break-after: always;'></div>\n\n*© All rights reserved / Todos los derechos reservados — Jesús Ferrer García (CHUS BZN) — 2026*\n