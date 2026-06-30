<p align="center">
  <img src="build/icon.png" width="128" height="128" style="border-radius: 28px; box-shadow: 0 8px 24px rgba(0,0,0,0.25);" alt="Studio Pro Suite Logo" />
</p>

<h1 align="center">Studio Pro Suite (DE)</h1>

<p align="center">
  <b>Das ultimative Ökosystem für KI-Kinoerstellung und parametrische Kameraautomatisierung</b><br/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Version-v1.0.0-blue?style=for-the-badge" alt="Version 1.0.0" />
  <img src="https://img.shields.io/badge/Status-Production_Ready-success?style=for-the-badge" alt="Status" />
  <img src="https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-red?style=for-the-badge" alt="Lizenz" />
</p>

---

## 🎯 Überblick
**Studio Pro Suite** ist eine hochmoderne parametrische Prompt-Generierungs-Engine und ein Layout-Manager für die narrative Vorproduktion, der für professionelle Kameraleute, Filmregisseure und generative KI-Prompt-Designer entwickelt wurde. Es fungiert als präziser Compiler, der abstrakte kinematografische Absichten in mathematisch und physisch genaue Befehle für moderne Video- und Bildgenerierungs-Engines (wie Sora, Veo, Runway, Kling AI und Pollinations AI) übersetzt.

---

## 🛠️ Hauptmerkmale
*   **Cinema Generator Pro:** Wählen Sie anamorphotische oder sphärische Objektive, reale Kameragehäuse (z. B. IMAX, ARRI), Beleuchtungs-Setups und visuelle Stile legendärer Filmemacher.
*   **Script Writer Pro:** Erstellen Sie technische Szenen-Breakdowns (Shot Cards) aus einer Logline und verwalten Sie die visuelle Kontinuität über den integrierten Charakterspeicher.
*   **ZEO 4 Cinema Studio:** Ein spezialisiertes Modul zum Animieren von Aufnahmen und Generieren von 3D-Kamerabahnen (Pan, Tilt, Zoom, Roll), kompilliert in präzise JSON-Payloads und CLI-Befehle.
*   **Pollinations AI-Integration:** Echtzeit-Rendering über das Flux-Modell zur Vorschau der generierten Prompts direkt in der Anwendung.

---

## ⚙️ Installation und Einrichtung

### Lokale Ausführung (Entwicklung)
1. Stellen Sie sicher, dass Node.js installiert ist.
2. Öffnen Sie ein Terminal im Projektordner.
3. Starten Sie das Skript:
   ```bash
   ./Iniciar_StudioPro.command
   ```
   *(Geben Sie dem Skript bei Bedarf Ausführungsrechte mit `chmod +x Iniciar_StudioPro.command`)*.
4. Die Anwendung öffnet sich automatisch in Ihrem Webbrowser unter `http://localhost:5175`.

---

## 🖥️ Technologie-Stack
*   **Schnittstelle:** React 19, Vite 8, Tailwind CSS mit einem Premium Dark-Theme Glassmorphism Design.
*   **Desktop-Shell:** Electron-Wrapper für die Erstellung nativer Desktop-Anwendungen.

---

## 📖 Dokumentation und Links
*   Mehrsprachiges Benutzerhandbuch (PDF): **[manual.pdf](./manual.pdf)**
*   Handbuch im Markdown-Format: **[manual_master.md](./manual_master.md)**

---

## ⚖️ Lizenz und Urheberrecht
*   **Eigentümer:** Erstellt von **produktes-code** und lizenziert unter Creative Commons **CC BY-NC-SA 4.0** (Namensnennung - Nicht-kommerziell - Weitergabe unter gleichen Bedingungen 4.0 International).


## Security & Limits
- **Rate limiting:** API endpoints are protected to prevent abuse.
- **Magic Bytes:** File uploads are verified via magic bytes analysis.
- **Upload limits:** Maximum file size is 2 GB.

## License
Licensed under CC BY-NC-SA 4.0. Creado por produktes-code.
