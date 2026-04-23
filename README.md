# 東森テクノロジー株式会社 — コーポレートサイト刷新

現サイト `https://www.tomori-tech.com/` のコンテンツを踏襲しつつ、
参照UI `https://www.arkconsulting.co.jp/` のトーン（清潔なコーポレート・和文サンセリフ・ネイビー×アクセントブルー）で刷新した、
React ベースのリニューアル案です。

## すぐに見る

`index.html` をブラウザで開く（ダブルクリック可）だけでプレビューできます。
React / Tailwind / Babel すべて CDN で読み込む「1ファイルで動く」構成です。

## ページ構成

| ページ       | ハッシュ           | 元サイトの該当 |
| ------------ | ------------------ | -------------- |
| トップ       | `#/`               | `/`            |
| 会社概要     | `#/company`        | `/company_introduction` |
| 事業内容     | `#/service`        | （新設：現 TOP 掲載の事業内容を独立） |
| 採用情報     | `#/recruit`        | （新設：ark 参照） |
| お知らせ     | `#/news`           | （新設） |
| お問い合わせ | `#/contact`        | `/contact_Us`  |

> 元サイトで確認できたのは TOP / 会社概要 / お問合せ の 3 ページ。
> 採用／お知らせ／事業内容詳細は、ark 風の情報設計に合わせてセクション化しています。

## デザイン

- **カラー**: ネイビー `#0A1C3B` をベースに、アクセントブルー `#1E5BD6`、ブラス `#B7A77A`
- **タイポ**: 見出し/本文＝Noto Sans JP、数値/英字＝Inter、エディトリアル用＝Cormorant Garamond
- **レイアウト**: 1400px 最大幅、dot-grid 背景の濃紺ヒーロー、カード＋ハイブリッドで余白多めの和文コーポレート
- **インタラクション**: スクロールに合わせた fade-up、カードの hover リフト、下線 hover、ticker アニメーション

## ファイル構成

```
tomori-renewal/
├── index.html               ← ブラウザで即プレビュー可能（CDN版・デモ用）
├── README.md
└── src/                     ← Vite / Next.js 等に移植するためのコンポーネント群
    ├── App.jsx
    ├── components/
    │   ├── Header.jsx
    │   ├── Footer.jsx
    │   ├── Logo.jsx
    │   └── Shared.jsx       ← SectionLabel / PageHead / useFadeUp
    ├── pages/
    │   ├── Home.jsx
    │   ├── Company.jsx
    │   ├── Service.jsx
    │   ├── Recruit.jsx
    │   ├── News.jsx
    │   └── Contact.jsx
    └── data/
        └── content.js       ← 原稿データ（ここを差し替えれば全体に反映）
```

## 本番化するには（例：Vite）

```bash
npm create vite@latest tomori-site -- --template react
cd tomori-site
npm i -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
# src/ ディレクトリを本リポジトリのものに差し替え
# tailwind.config.js に index.html 内 tailwind.config の extend を移植
npm run dev
```

Tailwind の `extend` 部分（`colors.ink`, `accent`, `brass`, `paper`, `line`, `fontFamily`, `letterSpacing.widest2`）と、
`index.html` 内の `<style>` で定義している `hero-bg` / `dot-grid` / `btn-primary` / `link-underline` 等のユーティリティを
`src/index.css` に移すだけで Vite / Next.js に載せ替えできます。

## 差し替えポイント

- `src/data/content.js` のテキスト（代表メッセージ、事業内容の詳細、ニュース、求人、会社情報）
- ヒーローに実画像を使いたい場合は `hero-bg` クラスの `radial-gradient / linear-gradient` を `url(...)` に置き換え
- 「REPRESENTATIVE」「MAP」のプレースホルダーを正式素材に差し替え
- `#/contact` のフォーム送信を formspree / SES / Slack webhook など実サービスに接続

## 現サイトとの対応

- 会社情報（所在地 東京都港区東新橋2-6-3 昭栄ビル5階、設立 2022/02/18、法人番号 8020001145306）は取得情報をベースに記載
- 事業内容（クラウドネイティブ設計 / コンテナ基盤 / Microsoft 製品 / オンプレミス運用）は現サイトの説明に忠実
- 本文に `// TODO:` 相当のダミーを含む箇所（代表メッセージ、ニュース本文、採用条件詳細）は、差し替えいただくと本番品質になります
