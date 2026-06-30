<p align="center">
  <img src="build/icon.png" width="128" height="128" style="border-radius: 28px; box-shadow: 0 8px 24px rgba(0,0,0,0.25);" alt="Studio Pro Suite Logo" />
</p>

<h1 align="center">Studio Pro Suite (UK)</h1>

<p align="center">
  <b>Ультимативна екосистема для створення ШІ-кінематографу та параметричної автоматизації камер</b><br/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Version-v1.0.0-blue?style=for-the-badge" alt="Версія 1.0.0" />
  <img src="https://img.shields.io/badge/Status-Production_Ready-success?style=for-the-badge" alt="Статус" />
  <img src="https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-red?style=for-the-badge" alt="Ліцензія" />
</p>

---

## 🎯 Опис проекту
**Studio Pro Suite** — це ультрасучасний параметричний генератор промптів та менеджер макетів попереднього виробництва сценаріїв, створений для професійних кінооператорів, режисерів та розробників промптів генеративного ШІ. Він працює як точний транслятор художнього задуму в математично вивірені команди для сучасних систем генерації відео та зображень (таких як Sora, Veo, Runway, Kling AI та Pollinations AI).

---

## 🛠️ Основні можливості
*   **Cinema Generator Pro:** Вибір анаморфотних або сферичних об'єктивів, реальних камер (наприклад, IMAX, ARRI), схем освітлення та візуальних стилів на основі легендарних режисерів.
*   **Script Writer Pro:** Створення технічних розкадровок (карток кадрів) з логлайну з контролем безперервності сцен завдяки вбудованій пам'яті персонажів.
*   **ZEO 4 Cinema Studio:** Спеціалізований модуль для анімації кадрів та побудови 3D-траєкторій руху камер (Pan, Tilt, Zoom, Roll), що компілюються в точні JSON-дані та CLI-команди.
*   **Інтеграція Pollinations AI:** Візуалізація в реальному часі з використанням моделі Flux для попереднього перегляду створених промптів безпосередньо в інтерфейсі програми.

---

## ⚙️ Встановлення та запуск

### Локальний запуск для розробки
1. Переконайтеся, що у вас встановлено Node.js.
2. Відкрийте термінал у папці проекту.
3. Запустіть скрипт запуску:
   ```bash
   ./Iniciar_StudioPro.command
   ```
   *(За необхідності попередньо надайте права на виконання командою `chmod +x Iniciar_StudioPro.command`)*.
4. Програма автоматично відкриється у вашому браузері за адресою `http://localhost:5175`.

---

## 🖥️ Технологічний стек
*   **Інтерфейс:** React 19, Vite 8, Tailwind CSS з преміальним темним дизайном у стилі glassmorphism.
*   **Оболонка десктопа:** Контейнеризація на Electron для створення нативних настільних додатків.

---

## 📖 Документація та посилання
*   Багатомовний посібник користувача (PDF): **[manual.pdf](./manual.pdf)**
*   Основний посібник у форматі Markdown: **[manual_master.md](./manual_master.md)**

---

## ⚖️ Ліцензія та авторські права
*   **Власник:** Створено **produktes-code** та поширюється на умовах ліцензії Creative Commons **CC BY-NC-SA 4.0** (Із зазначенням авторства — Некомерційна — Розповсюдження на тих самих умовах 4.0 Міжнародна).


## Security & Limits
- **Rate limiting:** API endpoints are protected to prevent abuse.
- **Magic Bytes:** File uploads are verified via magic bytes analysis.
- **Upload limits:** Maximum file size is 2 GB.

## License
Licensed under CC BY-NC-SA 4.0. Creado por produktes-code.
