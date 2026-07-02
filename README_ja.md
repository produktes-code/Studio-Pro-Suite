<p align="center">
  <img src="build/icon.png" width="128" height="128" style="border-radius: 28px; box-shadow: 0 8px 24px rgba(0,0,0,0.25);" alt="Studio Pro Suite Logo" />
</p>

<h1 align="center">Studio Pro Suite (JA)</h1>

<p align="center">
  <b>究極のAIシネマティック生成＆パラメトリックカメラ自動化エコシステム</b><br/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Version-v1.0.0-blue?style=for-the-badge" alt="バージョン 1.0.0" />
  <img src="https://img.shields.io/badge/Status-Production_Ready-success?style=for-the-badge" alt="ステータス" />
  <img src="https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-red?style=for-the-badge" alt="ライセンス" />
</p>

---

## 🎯 概要
**Studio Pro Suite** は、プロの撮影監督、映画監督、および生成AIプロンプトエンジニア向けに設計された、最先端のパラメトリックプロンプト生成エンジンおよびナラティブプリプロダクションレイアウトマネージャーです。抽象的な映画の意図を、最新のビデオおよび画像生成エンジン（Sora、Veo、Runway、Kling AI、Pollinations AIなど）向けに、数学的かつ物理的に正確なパラメータに変換する精密なコンパイラとして機能します。

---

## 🛠️ 主な機能
*   **Cinema Generator Pro:** アナモルフィックレンズまたは球面レンズ、実際のカメラボディ（IMAX、ARRIなど）、照明設定、および伝説的な映画監督に基づくビジュアルスタイルを選択。
*   **Script Writer Pro:** ログラインからテクニカルなシーンブレイクダウン（ショットカード）を構築し、内蔵のキャラクターメモリによって視覚的な一貫性を管理。
*   **ZEO 4 Cinema Studio:** ショットのアニメーションと3Dカメラ軌道（パン、ティルト、ズーム、ロール）の生成に特化したモジュール。精密なJSONデータとCLIコマンドにコンパイル。
*   **Pollinations AI 統合:** Fluxモデルによるリアルタイムレンダリングで、アプリケーションから離れることなく生成されたプロンプトをプレビュー。

---

## ⚙️ インストールとセットアップ

### ローカル開発環境での実行
1. Node.jsがインストールされていることを確認します。
2. プロジェクトディレクトリでターミナルを開きます。
3. 起動スクリプトを実行します：
   ```bash
   ./Iniciar_StudioPro.command
   ```
   *(必要に応じて、事前に `chmod +x Iniciar_StudioPro.command` で実行権限を付与してください)*。
4. アプリケーションが自動的にデフォルトブラウザ（`http://localhost:5175`）で開きます。

---

## 🖥️ 技術スタック
*   **インターフェース:** React 19、Vite 8、Tailwind CSS。プレミアムなダークテーマのグラスモフィズムデザイン。
*   **デスクトップシェル:** ネイティブデスクトップアプリを構築するためのElectronラッパー。

---

## 📖 ドキュメントとリンク
*   多言語ユーザーマニュアル (PDF): **[manual.pdf](./manual.pdf)**
*   Markdown版マニュアル: **[manual_master.md](./manual_master.md)**

---

## ⚖️ ライセンスとクレジット
*   **所有者:** **produktes-code** によって作成され、クリエイティブ・コモンズ **CC BY-NC-SA 4.0**（表示 - 非営利 - 継承 4.0 国際）ライセンスの下で配布されています。


## Security & Limits
- **Rate limiting:** API endpoints are protected to prevent abuse.
- **Magic Bytes:** File uploads are verified via magic bytes analysis.
- **Upload limits:** Maximum file size is 2 GB.

## License
Licensed under CC BY-NC-SA 4.0. Creado por produktes-code.


⚠️ macOSユーザーへの注意：アプリケーションを初めて開くとき、macOSがセキュリティ警告を表示する場合があります。解決方法：アプリケーションを右クリックして「開く」を選択し、ダイアログで「開く」をクリックします。既にブロックされている場合は、システム設定 > プライバシーとセキュリティに移動し、「このまま開く」をクリックします。

