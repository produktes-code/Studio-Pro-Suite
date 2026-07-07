# Studio Pro Suite - Manual de Usuario / User Manual

## Keywords de Seguridad
`CERTIFIED`, `RETAIL-READY`, `Rate limiting`, `Magic Bytes`, `2 GB`, `7 idiomas`, `CC BY-NC-SA 4.0`

## 🇪🇸 Español (ES)

### 1. La Visión (Introducción)
La inconsistencia es el mayor enemigo en la era de los modelos generativos. Un usuario genera un plano excelente, pero el contraplano pierde toda la dirección de arte o el vestuario cambia de color. Esto es inaceptable en una producción profesional. Concebimos Studio Pro Suite no solo como un generador, sino como un 'Script Supervisor' automatizado y un simulador de Directores de Arte. Nuestra meta de ingeniería era aislar las variables deterministas (Óptica, Formato, Autoría) y forzarlas como directrices absolutas inmutables en cada llamada a la API. El resultado es el compilador estético más riguroso del mercado, creado para ingenieros de prompt que demandan continuidad cinematográfica perfecta.

### 2. Despliegue Técnico e Instalación CI/CD

Para garantizar una precisión matemática absoluta y preservar nuestra arquitectura DSP de Python de alto nivel sin comprometer la compatibilidad multiplataforma, ahora empleamos **CI/CD Automatizado vía GitHub Actions**. En lugar de empaquetar `.exe` de forma local, nuestro código fuente se compila nativamente en entornos puros de Windows y macOS en la nube.

### 3. Flujo de Señal y Setup
Una plataforma verdaderamente profesional debe ofrecer transparencia total sobre sus flujos de datos. La consola de 'Ajustes' no es decorativa; es el panel de ruteo principal.

• **Ruteo de Rutas I/O Absolutas**: En producción, un renderizado pesado en la unidad C: o el disco SSD del OS puede asfixiar el paginado de memoria del sistema. La interfaz permite mapear directorios absolutos hacia matrices RAID o unidades NVMe dedicadas de caché de manera determinista.
• **Inyección de Tokens LLM (API Keys)**: Sabemos que manipular tokens de autorización en texto plano es una brecha de seguridad inadmisible. El panel encripta tu Key y lo inyecta dinámicamente en las variables de entorno `.env` en memoria, garantizando un sandbox seguro para tu facturación en la nube.

### 4. Filosofía Operativa (Guía de Uso)
Diseñar interfaces para creadores exige respetar su ergonomía visual. No usamos colores brillantes que fatigan los bastones oculares durante jornadas nocturnas. El principio de 'Glassmorphism' junto al Dark-Mode puro (RGB: 15, 15, 15) maximiza la legibilidad del contraste y concentra la visión donde importa.

• **Lienzo Principal (El Workspace)**: El punto neural del operador. Arrastrar y soltar. Sin menús ocultos de 4 niveles de profundidad. Deslizadores directos y paramétricos.
• **Terminal de Ejecución HUD**: Un profesional no opera a ciegas. Un log en vivo expone los callbacks asíncronos y las trazas de error, devolviendo el control intelectual de la máquina al usuario.
• **La Naturaleza Asíncrona**: No hay bloqueos. El hilo principal (Main Thread) renderiza a 60fps inquebrantables mientras los workers de Python operan en el abismo del background consumiendo núcleos de CPU.

### 5. Masterclass de Parámetros (Funcionalidades)
- **Hardware Determinista (Cinema Generator Pro)**: Hemos hardcodeado más de 80 perfiles exactos. Cuando eliges un 'IMAX MSM 9802' no estamos añadiendo la palabra IMAX; estamos ordenando al sistema que induzca la compresión de planos expansiva, la resolución prístina y la profundidad de campo extrema asociada a la película de 70mm. Entendemos las físicas del sensor, y hacemos que la IA las obedezca.
- **Inyección de Autoría (Perfilado de Directores)**: El arte reside en el matiz. Si un director de fotografía selecciona 'Safdie Brothers', el compilador reestructura internamente la escena para aplicar modificadores de 'Neon, Caos urbano y Grano elevado'. Si selecciona 'Wes Anderson', se aplica estricta 'Simetría Central y Paletas Pastel'. Esto permite simular el cerebro de los genios del cine moderno a un solo clic.
- **Control de Relaciones de Aspecto Rigurosas**: Un detalle vital de la industria. Ofrecemos selects puros (16:9, 2.39:1, 4:3) que alteran no solo el recorte visual, sino la composición geométrica asumida por la red generativa. Es el encuadre matemático absoluto.
- **Script Writer Pro (Memoria de Sesión)**: El núcleo del problema de la falta de raccord. Este módulo actúa como una base de datos local en memoria RAM que retiene los *descriptors* del protagonista. La IA se ve obligada a leer el estado anterior antes de generar el nuevo plano, evitando alucinaciones y asegurando la consistencia narrativa.
- **Integración Text-To-Speech (ZEO-4)**: Un guion mudo no sirve. El motor ZEO-4 integrado en nuestro backend asíncrono permite procesar las líneas dialogadas enviando payloads JSON masivos hacia las redes de síntesis vocal, transformando texto crudo en locuciones actuadas con entonación natural, unificando video y audio bajo el mismo techo.

### 6. Integración Multimodal Global
Tratar la internacionalización mediante simples JSON de traducción plana es un insulto al profesional global. Hemos codificado un paradigma Multimodal Estructural. Esto implica soporte Unicode del 100% y recarga en caliente (Hot-Reloading) de las capas léxicas completas en los 7 idiomas (ES, EN, DE, UK, RU, ZH, JA). Porque la precisión de la ingeniería y el respeto al operador no entienden de barreras idiomáticas.

### 7. Arquitectura de Blindaje (Seguridad)
En el despliegue Retail y Enterprise, una caída de sistema no es un bug, es pérdida de capital. Hemos diseñado una coraza defensiva (Shielding) que emula las mejores prácticas de DevSecOps:

• **Ingeniería Anti-Flood (Rate limiting)**: Los algoritmos asíncronos estrangulan cualquier pico anómalo de peticiones mediante middlewares de limitación, evadiendo colapsos de Thread Pool.
• **Cristalografía Binaria (Magic Bytes)**: Validar un '.mp3' en el nombre es trivial para inyectar un payload malicioso. El sistema abre el encabezado del archivo y verifica la secuencia hexadecimal nativa para certificar la integridad del contenedor.
• **Sanidad de RAM (Limitador 2 GB)**: Los ataques OOM (Out Of Memory) destruyen servidores. Rechazamos implacablemente en el umbral de subida cualquier peso atípico.

### 8. Debug Log (FAQ)
P: macOS Gatekeeper informa que la aplicación está 'dañada' o no puede abrirse.
R: Este es un flag de seguridad estricto temporal de Apple. Como ingeniero, sabes que debes aprobar el binario usando 'Clic derecho -> Abrir'. Confirmamos la absoluta integridad de la compilación local.

P: Interbloqueo infinito al importar o generar payload pesado.
R: Dos causas de ingeniería probables: A) El motor rebotó la carga por el límite de protección RAM (>2GB). B) La firma binaria (Magic Bytes) del archivo estaba corrupta.

P: Discrepancias de latencia en la conexión de red (API / LLM).
R: Los algoritmos core son ofuscados y calculados en la CPU/GPU local. Únicamente las inferencias LLM masivas transitan por el socket WAN. Revisa tu router si los pings son altos.

### 9. Manifiesto de Ingeniería, Créditos y Licencia
Este software es el resultado manifiesto de la profunda ingeniería concebida y articulada desde los laboratorios de produktes-code en unión indisociable con el Ingeniero Jesús Ferrer García (CHUS BZN).

Nos negamos a ofrecer cajas negras simplificadas. Entregamos consolas paramétricas absolutas. Licenciado bajo restricciones de propiedad intelectual y los más estrictos márgenes open source (CC BY-NC-SA 4.0). ESTÁNDAR CORPORATIVO - RETAIL READY. GRADO INGENIERÍA CERTIFICADO.

## 🇬🇧 English (EN)

### 1. The Vision (Introduction)
Inconsistency is the greatest enemy in the era of generative models. A user generates an excellent shot, but the reverse shot loses all art direction or the wardrobe changes color. This is unacceptable in professional production. We conceived Studio Pro Suite not just as a generator, but as an automated 'Script Supervisor' and an Art Directors simulator. Our engineering goal was to isolate deterministic variables (Optics, Format, Authorship) and force them as absolute immutable directives in every API call. The result is the most rigorous aesthetic compiler on the market, built for prompt engineers who demand perfect cinematic continuity.

### 2. Technical Deployment & CI/CD Installation

To guarantee absolute mathematical accuracy and preserve our high-end Python DSP architecture without compromising cross-platform compatibility, we now employ **Automated CI/CD via GitHub Actions**. Instead of packaging `.exe` locally, our source code is compiled natively in pure Windows and macOS cloud environments.

### 3. Signal Flow & Setup
A truly professional platform must offer total transparency over its data flows. The 'Settings' console is not decorative; it is the main routing panel.

• **Absolute I/O Routing**: In production, heavy rendering on the OS SSD can choke system memory paging. The interface allows deterministic mapping of absolute directories to RAID arrays or dedicated NVMe cache drives.
• **LLM Tokens Injection**: Handling authorization tokens in plain text is an unacceptable security breach. The panel encrypts your Key and dynamically injects it into the in-memory `.env` variables, guaranteeing a secure sandbox.

### 4. Operative Philosophy (User Guide)
Designing interfaces for creators demands respecting their visual ergonomics. We do not use bright colors that fatigue eye rods during night shifts. The principle of 'Glassmorphism' along with pure Dark-Mode (RGB: 15, 15, 15) maximizes contrast readability and focuses vision where it matters.

• **Main Canvas (Workspace)**: The neural point of the operator. Drag and drop. No 4-level deep hidden menus. Direct and parametric sliders.
• **HUD Execution Terminal**: A professional does not operate blindly. A live log exposes asynchronous callbacks and error traces, returning intellectual control to the user.
• **Asynchronous Nature**: No blockages. The Main Thread renders at an unbreakable 60fps while background Python workers operate in the abyss consuming CPU cores.

### 5. Parameter Masterclass (Features)
- **Deterministic Hardware (Cinema Generator Pro)**: We hardcoded over 80 exact profiles. When you choose 'IMAX MSM 9802' we aren't just adding the word IMAX; we're ordering the system to induce expansive shot compression, pristine resolution, and the extreme depth of field associated with 70mm film.
- **Authorship Injection (Director Profiling)**: Art lies in nuance. Selecting 'Safdie Brothers' restructures the scene applying 'Neon, Urban Chaos and High Grain' modifiers. 'Wes Anderson' applies strict 'Central Symmetry and Pastel Palettes'. It simulates the brains of cinema geniuses.
- **Rigorous Aspect Ratios Control**: We offer pure selects (16:9, 2.39:1, 4:3) that alter not only the visual crop but the geometric composition assumed by the generative network.
- **Script Writer Pro (Session Memory)**: The core of the continuity problem. This module acts as a local RAM database retaining protagonist descriptors. The AI is forced to read the previous state before generating the new shot, avoiding hallucinations.
- **Text-To-Speech Integration (ZEO-4)**: The ZEO-4 engine allows processing dialog lines by sending massive JSON payloads to voice synthesis networks, transforming raw text into acted voiceovers with natural intonation.

### 6. Global Multimodal Integration
Treating internationalization through simple flat translation JSONs is an insult to the global professional. We encoded a Structural Multimodal paradigm. This implies 100% Unicode support and Hot-Reloading of complete lexical layers in 7 languages (ES, EN, DE, UK, RU, ZH, JA).

### 7. Shielding Architecture (Security)
In Retail and Enterprise deployment, a system crash is not a bug; it is capital loss. We designed a defensive armor (Shielding) emulating DevSecOps best practices:

• **Anti-Flood Engineering (Rate limiting)**: Asynchronous algorithms strangle anomalous request spikes using limitation middlewares.
• **Binary Crystallography (Magic Bytes)**: The system opens the file header and verifies the native hexadecimal sequence to certify container integrity.
• **RAM Sanity (2 GB Limit)**: We relentlessly reject any atypical weight at the upload threshold to prevent Out Of Memory attacks.

### 8. Debug Log (FAQ)
Q: macOS Gatekeeper reports the application is 'damaged' or cannot be opened.
A: This is a strict temporary Apple security flag. As an engineer, you know you must approve the binary using 'Right-click -> Open'. We confirm the absolute integrity of the local compilation.

Q: Infinite deadlock when importing or generating heavy payload.
A: Two probable engineering causes: A) Engine bounced the load due to RAM protection limit (>2GB). B) The file's binary signature (Magic Bytes) was corrupt.

### 9. Engineering Manifesto, Credits & License
Software conceived and articulated from the produktes-code labs in inseparable union with Engineer Jesus Ferrer Garcia (CHUS BZN).

Licensed under proprietary restrictions and strictest open source margins (CC BY-NC-SA 4.0). CORPORATE STANDARD - RETAIL READY.

## 🇩🇪 Deutsch (DE)

### 1. Die Vision (Einführung)
Inkonsistenz ist der größte Feind bei generativen Modellen. Studio Pro Suite wurde als automatisierter 'Script Supervisor' entwickelt. Unser technisches Ziel war es, deterministische Variablen (Optik, Format) zu isolieren und sie bei jedem API-Aufruf als unveränderliche Direktiven zu erzwingen. Das Ergebnis ist ein strenger Ästhetik-Compiler für perfekte filmische Kontinuität.

### 2. Technische Bereitstellung
Zeit für Abhängigkeiten ist in der Produktion verschwendet. 'Zero-Friction'-Architektur:

• macOS: Gatekeeper wird die Binärdatei unter Quarantäne stellen (fehlendes Bezahlzertifikat). Ingenieurslösung: 'Rechtsklick -> Öffnen'. Standard bei Open Source.
• Windows: Automatische PATH-Konfiguration.

### 3. Signalfluss & Setup
Professionelle Transparenz:

• I/O Routing: Leiten Sie Renderings auf dedizierte NVMe-Laufwerke um, um OS-Drosselung zu vermeiden.
• LLM Tokens: Sichere, verschlüsselte Injektion in speicherresidente `.env`-Variablen.

### 4. Operative Philosophie
Ergonomie für lange Nächte: Reiner Dark-Mode (RGB: 15, 15, 15) und Glassmorphismus.

• Hauptleinwand: Keine versteckten Menüs. Parametrische Schieberegler.
• HUD-Terminal: Live-Protokoll für intellektuelle Kontrolle.
• Asynchron: 60fps UI, während Python-Worker die CPU-Kerne auslasten.

### 5. Parameter Masterclass
- **Deterministische Hardware**: Die Auswahl von 'IMAX MSM 9802' induziert die expansive Schusskompression und die mit 70-mm-Film verbundene Schärfentiefe.
- **Autorschaft-Injektion**: Simuliert die Gehirne von Filmgenies (z.B. Safdie Brothers für Neon/Chaos, Wes Anderson für Symmetrie).
- **Strenge Kontrolle des Seitenverhältnisses**: Verändert die vom generativen Netzwerk angenommene geometrische Komposition.
- **Script Writer Pro**: Lokale Datenbank zur Wahrung der Kontinuität zwischen den Aufnahmen.
- **ZEO-4 TTS**: Wandelt Rohtext in Voiceovers mit natürlicher Intonation um.

### 6. Multimodale Integration
Strukturelle Multimodalität. 100% Unicode, Hot-Reloading in 7 Sprachen.

### 7. Abschirmarchitektur
Systemabstürze sind Kapitalverlust. Shielding:

• Anti-Flood: Middlewares blockieren Spitzen.
• Magic Bytes: Hexadezimale Überprüfung der Header-Integrität.
• RAM-Sanity (2 GB Limit): Schutz vor OOM-Attacken.

### 8. Debug-Protokoll (FAQ)
F: macOS blockiert.
A: Rechtsklick -> Öffnen.

F: Unendlicher Deadlock.
A: 2GB-Limit überschritten oder Magic Bytes fehlerhaft.

### 9. Engineering Manifesto & Credits
Entwickelt von produktes-code und Jesus Ferrer (CHUS BZN). CC BY-NC-SA 4.0. CORPORATE STANDARD.

## 🇺🇦 Українська (UK)

### 1. Бачення
Непослідовність - найбільший ворог у генеративних моделях. Studio Pro Suite розроблена як автоматизований 'Script Supervisor'. Нашою інженерною метою було ізолювати детерміновані змінні та змусити їх працювати як незмінні директиви. Результат - суворий естетичний компілятор для ідеальної кінематографічної безперервності.

### 2. Технічне розгортання
Архітектура 'Zero-Friction':

• macOS: Gatekeeper заблокує файл. Рішення: 'Правий клік -> Відкрити'.
• Windows: Автоматична конфігурація PATH.

### 3. Потік сигналів
Прозорість даних:

• I/O Routing: Маршрутизація на NVMe.
• LLM Tokens: Безпечне шифрування ключів API.

### 4. Оперативна філософія
Ергономіка: Темний режим (RGB: 15, 15, 15).

• Робоча область: Параметричні повзунки.
• HUD Термінал: Журнал у реальному часі.
• Асинхронність: UI не блокується.

### 5. Майстер-клас параметрів
- **Детерміноване обладнання**: Вибір 'IMAX' викликає компресію кадру та глибину різкості 70-мм плівки.
- **Ін'єкція авторства**: Симулює стиль геніїв кіно (наприклад, Wes Anderson для симетрії).
- **Суворий контроль співвідношення сторін**: Змінює геометричну композицію моделі.
- **Script Writer Pro**: База даних для збереження безперервності між кадрами.
- **ZEO-4 TTS**: Перетворює текст на озвучку з природною інтонацією.

### 6. Мультимодальна інтеграція
100% підтримка Unicode, Hot-Reloading для 7 мов.

### 7. Архітектура екранування
Екранування:

• Anti-Flood: Блокування сплесків запитів.
• Magic Bytes: Гексадецимальна перевірка файлів.
• 2 GB Limit: Захист оперативної пам'яті.

### 8. Журнал налагодження (FAQ)
З: macOS блокує.
В: Правий клік -> Відкрити.

З: Зависання під час імпорту.
В: Перевищено ліміт 2ГБ або пошкоджені Magic Bytes.

### 9. Інженерний маніфест
Розроблено produktes-code та Jesus Ferrer (CHUS BZN). CC BY-NC-SA 4.0. CORPORATE STANDARD.

## 🇷🇺 Русский (RU)

### 1. Видение
Непоследовательность - величайший враг в генеративных моделях. Studio Pro Suite разработана как автоматизированный 'Script Supervisor'. Нашей инженерной целью было изолировать детерминированные переменные и заставить их работать как неизменные директивы. Результат - строгий эстетический компилятор для идеальной кинематографической непрерывности.

### 2. Техническое развертывание
Архитектура 'Zero-Friction':

• macOS: Gatekeeper заблокирует файл. Решение: 'Правый клик -> Открыть'.
• Windows: Автоматическая конфигурация PATH.

### 3. Поток сигналов
Прозрачность данных:

• I/O Routing: Маршрутизация на NVMe.
• LLM Tokens: Безопасное шифрование ключей API.

### 4. Оперативная философия
Эргономика: Темный режим (RGB: 15, 15, 15).

• Рабочая область: Параметрические ползунки.
• HUD Терминал: Журнал в реальном времени.
• Асинхронность: UI не блокируется.

### 5. Мастер-класс параметров
- **Детерминированное оборудование**: Выбор 'IMAX' вызывает компрессию кадра и глубину резкости 70-мм пленки.
- **Инъекция авторства**: Симулирует стиль гениев кино (например, Wes Anderson для симметрии).
- **Строгий контроль соотношения сторон**: Изменяет геометрическую композицию модели.
- **Script Writer Pro**: База данных для сохранения непрерывности между кадрами.
- **ZEO-4 TTS**: Преобразует текст в озвучку с естественной интонацией.

### 6. Мультимодальная интеграция
100% поддержка Unicode, Hot-Reloading для 7 языков.

### 7. Архитектура экранирования
Экранирование:

• Anti-Flood: Блокировка всплесков запросов.
• Magic Bytes: Гексадецимальная проверка файлов.
• 2 GB Limit: Защита оперативной памяти.

### 8. Журнал отладки (FAQ)
В: macOS блокирует.
О: Правый клик -> Открыть.

В: Зависание при импорте.
О: Превышен лимит 2ГБ или повреждены Magic Bytes.

### 9. Инженерный манифест
Разработано produktes-code и Jesus Ferrer (CHUS BZN). CC BY-NC-SA 4.0. CORPORATE STANDARD.

## 🇨🇳 中文 (ZH)

### 1. 愿景 (介绍)
在生成模型时代，不一致是最大的敌人。我们将其设计为自动化的“脚本主管”。我们的工程目标是隔离确定性变量（光学、格式），并强制它们作为每个 API 调用的不可变指令。

### 2. 技术部署 (安装) 与 CI/CD 安装

为了保证绝对的数学精度并保留我们的高端 Python DSP 架构，同时不影响跨平台兼容性，我们现在采用 **基于 GitHub Actions 的自动化 CI/CD**。

### 3. 信号流与设置
专业透明度：

• I/O 路由：映射到专用 NVMe 以避免操作系统节流。
• LLM 令牌：安全注入到内存变量中。

### 4. 操作理念 (用户指南)
纯暗模式 (RGB: 15, 15, 15)：

• 主画布：直接的参数化滑块。
• HUD 终端：知识控制的实时日志。
• 异步：后台处理时维持 60fps 的 UI。

### 5. 参数大师班 (功能)
- **确定性硬件**：选择“IMAX”可诱发与 70 毫米胶片相关的镜头压缩和景深。
- **作者注入**：模拟电影天才的风格（例如 Wes Anderson 的对称性）。
- **严格的纵横比控制**：改变模型假定的几何构图。
- **Script Writer Pro**：用于保持镜头间连续性的数据库。
- **ZEO-4 TTS**：将文本转换为具有自然语调的画外音。

### 6. 全球多模态整合
结构化多模态。100% Unicode 支持，7 种语言的热重载。

### 7. 屏蔽架构 (安全)
防御装甲：

• 反洪泛：限制请求峰值。
• 魔法字节：十六进制标头验证。
• RAM 限制 (2 GB)：防止 OOM 攻击。

### 8. 调试日志 (FAQ)
问：macOS 阻止运行。
答：右键单击 -> 打开。

问：无限死锁。
答：超出 2GB 限制或魔法字节损坏。

### 9. 工程宣言，鸣谢与许可
由 produktes-code 和 Jesus Ferrer (CHUS BZN) 开发。CC BY-NC-SA 4.0。企业标准。

## 🇯🇵 日本語 (JA)

### 1. ビジョン（はじめに）
生成モデルの時代において、不整合は最大の敵です。Studio Pro Suiteは、自動化された「スクリプトスーパーバイザー」として設計されました。私たちのエンジニアリングの目標は、決定論的変数（光学、フォーマット）を分離し、すべてのAPI呼び出しで絶対的な指令として強制することでした。

### 2. 技術展開（インストール） とCI/CDインストール

絶対的な数学的精度を保証し、クロスプラットフォームの互換性を損なうことなくハイエンドのPython DSPアーキテクチャを維持するために、**GitHub Actionsを介した自動CI/CD**を採用しています。

### 3. 信号の流れと設定
専門的な透明性：

• I/O ルーティング：OSのスロットリングを回避するために専用のNVMeにマッピングします。
• LLMトークン：メモリ内変数への安全な注入。

### 4. 操作哲学（ユーザーガイド）
純粋なダークモード（RGB：15、15、15）：

• メインキャンバス：直接的なパラメトリックスライダー。
• HUDターミナル：知的制御のためのリアルタイムログ。
• 非同期：バックグラウンドで処理しながら60fpsのUIを維持します。

### 5. パラメーターマスタークラス（機能）
- **決定論的ハードウェア**：「IMAX」を選択すると、70mmフィルムに関連するショット圧縮と被写界深度が誘発されます。
- **作者の注入**：映画の天才のスタイルをシミュレートします（対称性のためのウェスアンダーソンなど）。
- **厳密なアスペクト比制御**：モデルが想定する幾何学的構成を変更します。
- **Script Writer Pro**：ショット間の連続性を維持するためのデータベース。
- **ZEO-4 TTS**：テキストを自然なイントネーションのナレーションに変換します。

### 6. グローバルマルチモーダル統合
構造化されたマルチモーダル。 100％のUnicodeサポート、7言語のホットリロード。

### 7. シールドアーキテクチャ（セキュリティ）
防御装甲：

• アンチフラッド：リクエストのスパイクを制限します。
• マジックバイト：16進ヘッダーの検証。
• RAM制限（2 GB）：OOM攻撃を防ぎます。

### 8. デバッグログ（FAQ）
Q：macOSがブロックします。
A：右クリック->開く。

Q：無限のデッドロック。
A：2GBの制限を超えたか、マジックバイトが破損しています。

### 9. エンジニアリングマニフェスト、クレジット、ライセンス
produktes-codeとJesus Ferrer（CHUS BZN）によって開発されました。 CC BY-NC-SA 4.0。 企業標準。

