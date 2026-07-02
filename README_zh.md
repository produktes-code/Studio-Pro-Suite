<p align="center">
  <img src="build/icon.png" width="128" height="128" style="border-radius: 28px; box-shadow: 0 8px 24px rgba(0,0,0,0.25);" alt="Studio Pro Suite Logo" />
</p>

<h1 align="center">Studio Pro Suite (ZH)</h1>

<p align="center">
  <b>终极 AI 电影创作与参数化摄像机自动化生态系统</b><br/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Version-v1.0.0-blue?style=for-the-badge" alt="Version 1.0.0" />
  <img src="https://img.shields.io/badge/Status-Production_Ready-success?style=for-the-badge" alt="Status" />
  <img src="https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-red?style=for-the-badge" alt="License" />
</p>

---

## 🎯 项目概述
**Studio Pro Suite** 是一款专为专业摄影指导、电影导演和生成式 AI 提示词工程师设计的先进参数化提示词生成引擎及叙事前期制作版面管理器。它作为一个精确的从硬件到美学的编译器，将抽象的电影拍摄意图转化为数学和物理上精确的参数，适用于现代视频和图像生成引擎（如 Sora、Veo、Runway、Kling AI 和 Pollinations AI）。

---

## 🛠️ 核心功能
*   **Cinema Generator Pro:** 选择变形或球面镜头、真实摄像机机身（例如 IMAX、ARRI）、灯光设置以及基于传奇导演风格的视觉配置。
*   **Script Writer Pro:** 根据一句话故事（Logline）构建技术场景分解（镜头卡片），并通过内置的角色记忆管理视觉连贯性。
*   **ZEO 4 Cinema Studio:** 专用于镜头动画和生成 3D 摄像机运动轨迹（水平摇移、垂直摇移、缩放、横滚）的模块。可直接编译为精确的 JSON 数据和 CLI 命令。
*   **Pollinations AI 集成:** 通过 Flux 模型进行实时渲染，直接在应用程序中预览生成的提示词图像。

---

## ⚙️ 安装与运行

### 本地开发运行
1. 确保已安装 Node.js。
2. 在项目目录中打开终端。
3. 运行启动脚本：
   ```bash
   ./Iniciar_StudioPro.command
   ```
   *(如果需要，请先通过 `chmod +x Iniciar_StudioPro.command` 授予执行权限)*。
4. 应用程序将在默认网页浏览器中自动打开 `http://localhost:5175`。

---

## 🖥️ 技术栈
*   **界面:** React 19, Vite 8, Tailwind CSS。采用高端暗黑主题的 glassmorphism 设计。
*   **桌面外壳:** 基于 Electron 封装，用于编译原生桌面应用程序。

---

## 📖 文档与链接
*   多语言用户手册 (PDF): **[manual.pdf](./manual.pdf)**
*   Markdown 格式手册: **[manual_master.md](./manual_master.md)**

---

## ⚖️ 许可与版权
*   **所有者:** 由 **produktes-code** 创建，并根据知识共享 **CC BY-NC-SA 4.0**（署名-非商业性使用-相同方式共享 4.0 国际）许可协议进行分发。


## Security & Limits
- **Rate limiting:** API endpoints are protected to prevent abuse.
- **Magic Bytes:** File uploads are verified via magic bytes analysis.
- **Upload limits:** Maximum file size is 2 GB.

## License
Licensed under CC BY-NC-SA 4.0. Creado por produktes-code.


⚠️ macOS 用户须知：首次打开应用程序时，macOS 可能会显示安全警告。解决方法：右键单击应用程序并选择"打开"，然后在对话框中单击"打开"。如果已被阻止，请前往系统设置 > 隐私与安全性，然后点击"仍然打开"。

