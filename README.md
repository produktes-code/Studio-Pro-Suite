# Studio Pro Suite V3.0 - AI Cinematic Creation Ecosystem

![Status](https://img.shields.io/badge/Status-Production_Ready-success) ![License](https://img.shields.io/badge/License-Proprietary-red) ![Version](https://img.shields.io/badge/Version-3.0.0-blue)

**Studio Pro Suite** is the ultimate B2B parametric prompt generation engine and narrative layout creator for professional Directors of Photography, movie directors, and prompt engineers. This software serves as a technical bridge that translates abstract narrative concepts into highly specific, physically accurate camera and light payloads for state-of-the-art generative video AI engines (such as Sora, Veo, Runway, Midjourney, and Luma).

**Developed in collaboration by Antigravity AI and Jesús Ferrer (CHUS BZN).**

---

## 🎯 Core Purpose
Studio Pro Suite solves the problem of unpredictability in generative video prompting. By providing a structured, parameter-based dashboard, it allows creators to write and structure prompts using the exact grammar of real-world film sets—controlling camera bodies, anamorphic lenses, lighting schemes, atmospheres, and VFX parameters directly.

---

## 🏗️ Technical Architecture
Studio Pro Suite is built using a modern desktop application architecture:

*   **Frontend (UI):** Powered by **React 19**, compiled with **Vite 8**, and styled with **Tailwind CSS v4** utilizing custom design tokens (Stitch System) for hardware-acceleration and premium dark aesthetics.
*   **Shell (Desktop):** Structured in **Electron** for a native macOS and Windows desktop shell.
*   **Data Models:** Persistent state managed via local memory and local storage, ensuring cross-platform coherence and local cache persistence for user prompts.

---

## ⚙️ Key Features & Modules

### 1. Cinema Generator Pro
A multi-parameter prompt constructor divided into 8 logic sections:
*   **Concept & Setup:** Enter your core prompt. Utilize **Enhance Prose** (powered by local LLM nodes) to enrich the text or **Auto-fill** to randomize variables.
*   **Camera & Lenses:** Select camera bodies (IMAX 15/70mm, RED V-Raptor, Arri Alexa 65), lenses (Cooke Anamorphic, Zeiss Super Speed), focal lengths, and aperture settings (f-stop).
*   **Physical Lighting:** Configure high-key, low-key, or neon-noir lighting, specifying direction, time of day, and modifiers.
*   **Atmosphere & VFX:** Select weather conditions, color grading styles, and VFX composition rules.
*   **Prompt Compiler:** View the constructed prompt and tokens in real-time, adjust weights, and simulation-render a preview frame.

### 2. Script Writer Pro
A narrative pre-production engine to translate story ideas into scenes:
*   **Story Premise:** Configure logline, emotional tone, and narrative structures (3-Act, Hero's Journey).
*   **AI Cast & Crew:** Assign virtual directors (Kubrick, Villeneuve) and virtual DoPs (Roger Deakins, Greig Fraser) whose styles the compiler will adopt.
*   **Character Memory:** Build characters with specific trigger words and physical traits to maintain visual continuity across shots.
*   **Scene Breakdown:** Generate shot breakdown lists, export prompts, or send them to ZEO 4.

### 3. ZEO 4 Cinema Studio
The ultimate advanced camera movement vector engine:
*   **Physical Vector Controls:** Adjust 3D coordinate sliders representing camera motion: `Pan (X)`, `Tilt (Y)`, `Zoom (Z)`, `Roll (Rot-Z)`.
*   **Keyframe Conditioning:** Feed starting and ending frames to control the video generator.
*   **Payload Output:** Compile payloads directly to JSON structures and CLI commands ready to copy and paste into enterprise rendering APIs.

---

## 🚀 Installation & Usage (Desktop Mode)

### macOS Setup
1. Download the installation DMG package: `Studio Pro Suite-0.0.0.dmg`.
2. Mount the DMG and drag **Studio Pro Suite** to your **Applications** folder.
3. If running from source/development:
   ```bash
   npm install
   npm run electron:dev
   ```

### Production Build
To pack native desktop installers for Windows and macOS:
```bash
npm run pack:all
```
This outputs a `.dmg` and `.exe` package under the `dist-electron` folder.

---

## 📋 Technical User Manual

📥 **[Download Comprehensive PDF Manual](./manual.pdf)**

For a complete step-by-step tutorial on parameter usage, installation, and APIs in the 7 supported languages (Spanish, English, German, Russian, Japanese, Ukrainian, and Chinese), refer to the pre-compiled PDF manual located in the root of the folder.

---

*© Studio Pro Suite 3.0 — Jesús Ferrer (CHUS BZN) & Antigravity AI. All rights reserved.*
