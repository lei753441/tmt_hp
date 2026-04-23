// 現サイト（tomori-tech.com）のコンテンツを日本語そのままベースに、
// 情報が取得できなかった部分は自然なダミーで補完している。
// 差し替え箇所は `// TODO:` コメントを目印に。

export const SERVICES = [
  {
    title: "クラウドネイティブなシステム設計",
    en: "CLOUD NATIVE",
    desc:
      "IaaS / PaaS / SaaS を組み合わせたモダンな情報基盤。サーバレスや DevOps、ゼロトラストを前提に設計します。",
    tags: [
      "Microsoft Azure",
      "AWS",
      "Google Cloud",
      "Serverless",
      "DevOps / GitOps",
      "認証認可 / SSO",
    ],
  },
  {
    title: "コンテナベースのアプリケーション設計",
    en: "CONTAINER PLATFORM",
    desc:
      "Azure AKS / AWS EKS / ECS を中心に、マイクロサービスのための可搬性の高い実行基盤を設計・構築します。",
    tags: [
      "Kubernetes",
      "AKS / EKS / ECS",
      "Istio / Service Mesh",
      "CI/CD",
      "可観測性",
      "ゼロトラスト",
    ],
  },
  {
    title: "Microsoft 製品群の導入・活用",
    en: "MICROSOFT SOLUTION",
    desc:
      "Azure・Microsoft 365・AD / SSO・Power Platform・RPA。Microsoft 技術での DX をワンストップで支援します。",
    tags: [
      "Microsoft Azure",
      "Microsoft 365",
      "Active Directory",
      "SSO / Entra",
      "Power Automate",
      "RPA",
    ],
  },
  {
    title: "オンプレミス環境の構築と保守",
    en: "ON-PREMISE",
    desc:
      "クラウド全盛の時代にも欠かせないオンプレミス基盤。設計・構築から監視・運用保守まで一貫して対応します。",
    tags: ["サーバ構築", "仮想化基盤", "監視 / 運用", "DR / BCP", "セキュリティ", "非機能要件"],
  },
  {
    title: "SAP / BTP の導入・活用支援",
    en: "SAP · BTP",
    desc:
      "S/4HANA を軸に SAP BTP（Business Technology Platform）を活用した業務プロセスの拡張・統合・モダナイズを支援します。",
    tags: ["SAP BTP", "S/4HANA", "CAP / CAPM", "Integration Suite", "SAP Build Apps", "ABAP / RAP"],
  },
];

export const SERVICES_DETAIL = SERVICES.map((s) => ({
  ...s,
  long: s.title.includes("クラウドネイティブ")
    ? "要件定義から論理設計・物理設計、コスト最適化、運用設計までを一貫して担います。認証認可や監視、コスト可視化など、運用してはじめて効いてくる非機能領域を重視した提案を行います。"
    : s.title.includes("コンテナ")
    ? "コンテナオーケストレーションを単なる技術選定で終わらせず、CI/CD、Observability、セキュリティ（OPA / Zero Trust）まで含めた、長く使える基盤として設計します。"
    : s.title.includes("Microsoft")
    ? "Azure / Microsoft 365 / Entra を軸に、既存環境との統合・ID 基盤の再設計・RPA 導入まで対応。中堅・大企業での導入実績をベースに最短ルートを描きます。"
    : "クラウドへ寄せない選択も選択肢のひとつ。データ保護要件や性能要件、コストなどから最適解を見極め、オンプレ／クラウドのハイブリッド構成を設計します。",
}));

export const STRENGTHS = [
  {
    title: "非機能要件に強い設計力",
    desc:
      'セキュリティ・可用性・性能・運用性といった "効いてくる" 非機能要件を起点に、長期運用に耐えうる情報基盤を設計します。',
  },
  {
    title: "SAP BTP の専門設計力",
    desc:
      "SAP BTP を中核に、Integration Suite・CAP フレームワーク・SAP Build を組み合わせた拡張・統合設計を得意とします。S/4HANA との深い連携実績が強みです。",
  },
  {
    title: "マルチクラウド・Microsoft・SAP の実装力",
    desc:
      "Azure / AWS / GCP、Microsoft 365、SAP BTP を横断的に組み合わせ、ベンダーロックインに縛られない最適な構成を設計します。",
  },
  {
    title: "設計から運用までの一貫体制",
    desc:
      "設計・構築で終わらず、モニタリング、運用、改善までを同じチームで担当。「作って終わり」にしない伴走型のスタイルが特徴です。",
  },
];

export const NEWS = [
  { date: "2026.04.12", tag: "RELEASE", title: "コーポレートサイトをリニューアルいたしました。" },
  { date: "2026.03.01", tag: "NEWS", title: "AWS / Azure を組み合わせたマルチクラウド支援メニューを拡充いたしました。" },
  { date: "2026.01.15", tag: "MEDIA", title: "「クラウドネイティブ時代の非機能要件」について専門誌に寄稿しました。" },
];
export const NEWS_MORE = [
  { date: "2025.12.20", tag: "NEWS", title: "年末年始休業のお知らせ（12/29 - 1/4）" },
  { date: "2025.10.10", tag: "EVENT", title: "社内勉強会「Kubernetes × Zero Trust」を開催しました。" },
  { date: "2025.08.01", tag: "NEWS", title: "夏季休業のお知らせ。" },
  { date: "2025.04.02", tag: "NEWS", title: "新卒・中途採用エントリーを受付中です。" },
];

export const OVERVIEW = [
  ["COMPANY", "東森テクノロジー株式会社（Tomori Technology Co., Ltd.）"],
  ["ESTABLISHED", "2022年2月18日"],
  ["ADDRESS", "〒105-0021 東京都港区東新橋2丁目6番3号 昭栄ビル5階"],
  [
    "BUSINESS",
    "システムエンジニアリングサービス（設計 / 構築 / 運用保守）／ クラウドネイティブ・コンテナ基盤設計 / Microsoft ソリューション / SAP BTP 導入・活用支援 / オンプレミス基盤構築 / DX 推進支援",
  ],
  [
    "TECHNOLOGY",
    "Microsoft Azure / AWS / Google Cloud / Kubernetes / SAP BTP / S/4HANA / CAP Framework / Integration Suite / Microsoft 365 / Active Directory / SSO / RPA / DevOps",
  ],
  ["CORPORATE NO.", "8020001145306"],
];

export const POSITIONS = [
  {
    title: "クラウドインフラエンジニア",
    desc: "Azure / AWS を中心としたクラウドインフラの設計・構築・運用をお任せします。",
    skills: ["AZURE", "AWS", "TERRAFORM", "KUBERNETES", "CI / CD"],
  },
  {
    title: "Microsoft ソリューションコンサルタント",
    desc: "Microsoft 365 / Entra / Power Platform の導入提案・設計・展開を担当します。",
    skills: ["M365", "ENTRA ID", "POWER PLATFORM", "RPA"],
  },
  {
    title: "SRE / 運用エンジニア",
    desc: "クラウドネイティブなシステムの運用設計・改善・オンコール対応をお任せします。",
    skills: ["SRE", "OBSERVABILITY", "INCIDENT MGMT", "LINUX"],
  },
  {
    title: "SAP BTP エンジニア",
    desc: "SAP BTP を活用した拡張開発・システム統合・移行支援をお任せします。S/4HANA や CAP の経験を活かせる環境です。",
    skills: ["SAP BTP", "CAP / CAPM", "S/4HANA", "INTEGRATION SUITE", "ABAP"],
  },
  {
    title: "プロジェクトマネージャー",
    desc: "複数プロジェクトの推進・お客様折衝・チームビルディングを担っていただきます。",
    skills: ["PMO", "STAKEHOLDER", "AGILE", "CLOUD"],
  },
];

export const BENEFITS = [
  {
    title: "フレキシブルな働き方",
    desc: "リモート／ハイブリッドでの勤務を前提に、フレックスタイム制で集中できる環境を用意しています。",
  },
  {
    title: "技術への投資",
    desc: "書籍購入・カンファレンス参加費・資格取得費用を会社が支援。学び続けるエンジニアを後押しします。",
  },
  {
    title: "長く働ける基盤",
    desc: "評価は技術力と顧客貢献の両輪で。年齢やポジションに依らず、公平に評価される仕組みを整えています。",
  },
];
