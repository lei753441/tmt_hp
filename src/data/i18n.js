// 多言語対応翻訳データ (JA / EN / ZH)
// すべての表示テキストをここで管理する。

// ─── サービス一覧 ────────────────────────────────────────────
const SERVICES_JA = [
  {
    title: "クラウドネイティブなシステム設計",
    en: "CLOUD NATIVE",
    desc: "IaaS / PaaS / SaaS を組み合わせたモダンな情報基盤。サーバレスや DevOps、ゼロトラストを前提に設計します。",
    long: "要件定義から論理設計・物理設計、コスト最適化、運用設計までを一貫して担います。認証認可や監視、コスト可視化など、運用してはじめて効いてくる非機能領域を重視した提案を行います。",
    tags: ["Microsoft Azure", "AWS", "Google Cloud", "Serverless", "DevOps / GitOps", "認証認可 / SSO"],
  },
  {
    title: "コンテナベースのアプリケーション設計",
    en: "CONTAINER PLATFORM",
    desc: "Azure AKS / AWS EKS / ECS を中心に、マイクロサービスのための可搬性の高い実行基盤を設計・構築します。",
    long: "コンテナオーケストレーションを単なる技術選定で終わらせず、CI/CD、Observability、セキュリティ（OPA / Zero Trust）まで含めた、長く使える基盤として設計します。",
    tags: ["Kubernetes", "AKS / EKS / ECS", "Istio / Service Mesh", "CI/CD", "可観測性", "ゼロトラスト"],
  },
  {
    title: "Microsoft 製品群の導入・活用",
    en: "MICROSOFT SOLUTION",
    desc: "Azure・Microsoft 365・AD / SSO・Power Platform・RPA。Microsoft 技術での DX をワンストップで支援します。",
    long: "Azure / Microsoft 365 / Entra を軸に、既存環境との統合・ID 基盤の再設計・RPA 導入まで対応。中堅・大企業での導入実績をベースに最短ルートを描きます。",
    tags: ["Microsoft Azure", "Microsoft 365", "Active Directory", "SSO / Entra", "Power Automate", "RPA"],
  },
  {
    title: "オンプレミス環境の構築と保守",
    en: "ON-PREMISE",
    desc: "クラウド全盛の時代にも欠かせないオンプレミス基盤。設計・構築から監視・運用保守まで一貫して対応します。",
    long: "クラウドへ寄せない選択も選択肢のひとつ。データ保護要件や性能要件、コストなどから最適解を見極め、オンプレ／クラウドのハイブリッド構成を設計します。",
    tags: ["サーバ構築", "仮想化基盤", "監視 / 運用", "DR / BCP", "セキュリティ", "非機能要件"],
  },
  {
    title: "SAP / BTP の導入・活用支援",
    en: "SAP · BTP",
    desc: "S/4HANA を軸に SAP BTP（Business Technology Platform）を活用した業務プロセスの拡張・統合・モダナイズを支援します。",
    long: "SAP BTP を軸に、Integration Suite・CAP フレームワーク・SAP Build を活用した拡張開発・システム統合・SAP から外部サービスへの連携を設計します。S/4HANA との深い連携実績が強みです。",
    tags: ["SAP BTP", "S/4HANA", "CAP / CAPM", "Integration Suite", "SAP Build Apps", "ABAP / RAP"],
  },
];

const SERVICES_EN = [
  {
    title: "Cloud-Native System Design",
    en: "CLOUD NATIVE",
    desc: "A modern information infrastructure combining IaaS / PaaS / SaaS. We design with Serverless, DevOps, and Zero Trust as foundational principles.",
    long: "We take full responsibility from requirements definition through logical/physical design, cost optimization, and operational design. We place particular emphasis on non-functional areas—authentication, monitoring, cost visibility—that prove their value through long-term operation.",
    tags: ["Microsoft Azure", "AWS", "Google Cloud", "Serverless", "DevOps / GitOps", "Auth / SSO"],
  },
  {
    title: "Container-Based Application Design",
    en: "CONTAINER PLATFORM",
    desc: "Centered on Azure AKS / AWS EKS / ECS, we design and build highly portable execution platforms for microservices.",
    long: "We go beyond container orchestration as a mere technical choice, designing it as a long-lasting foundation that encompasses CI/CD, Observability, and security (OPA / Zero Trust).",
    tags: ["Kubernetes", "AKS / EKS / ECS", "Istio / Service Mesh", "CI/CD", "Observability", "Zero Trust"],
  },
  {
    title: "Microsoft Solution Implementation",
    en: "MICROSOFT SOLUTION",
    desc: "Azure, Microsoft 365, AD/SSO, Power Platform, RPA. We provide one-stop support for DX transformation through Microsoft technologies.",
    long: "Centered on Azure / Microsoft 365 / Entra, we handle integration with existing environments, identity platform redesign, and RPA implementation. Drawing on our track record with mid-to-large enterprises, we chart the most efficient path forward.",
    tags: ["Microsoft Azure", "Microsoft 365", "Active Directory", "SSO / Entra", "Power Automate", "RPA"],
  },
  {
    title: "On-Premise Infrastructure",
    en: "ON-PREMISE",
    desc: "On-premise infrastructure remains essential even in the cloud era. We provide comprehensive support from design and construction to monitoring and operational maintenance.",
    long: "Not moving to the cloud is also a valid option. We identify the optimal solution based on data protection requirements, performance requirements, and cost, designing hybrid configurations of on-premise and cloud.",
    tags: ["Server Setup", "Virtualization", "Monitoring / Ops", "DR / BCP", "Security", "Non-Functional Req."],
  },
  {
    title: "SAP / BTP Implementation",
    en: "SAP · BTP",
    desc: "Centered on S/4HANA, we support the extension, integration, and modernization of business processes using SAP BTP (Business Technology Platform).",
    long: "Centered on SAP BTP, we design extension development, system integration, and SAP-to-external service connectivity using Integration Suite, CAP Framework, and SAP Build. Deep integration experience with S/4HANA is our strength.",
    tags: ["SAP BTP", "S/4HANA", "CAP / CAPM", "Integration Suite", "SAP Build Apps", "ABAP / RAP"],
  },
];

const SERVICES_ZH = [
  {
    title: "云原生系统设计",
    en: "CLOUD NATIVE",
    desc: "结合IaaS/PaaS/SaaS的现代化信息基础设施。以Serverless、DevOps、零信任为前提进行设计。",
    long: "全面承担从需求定义到逻辑/物理设计、成本优化及运营设计的全过程。特别重视认证授权、监控、成本可视化等在长期运营中才能体现价值的非功能领域。",
    tags: ["Microsoft Azure", "AWS", "Google Cloud", "Serverless", "DevOps / GitOps", "认证授权 / SSO"],
  },
  {
    title: "基于容器的应用设计",
    en: "CONTAINER PLATFORM",
    desc: "以Azure AKS/AWS EKS/ECS为核心，设计和搭建适用于微服务的高度可移植执行环境。",
    long: "不仅仅将容器编排视为技术选型，而是将其设计为涵盖CI/CD、可观测性、安全（OPA/零信任）的长效基础平台。",
    tags: ["Kubernetes", "AKS / EKS / ECS", "Istio / Service Mesh", "CI/CD", "可观测性", "零信任"],
  },
  {
    title: "Microsoft产品导入与应用",
    en: "MICROSOFT SOLUTION",
    desc: "Azure、Microsoft 365、AD/SSO、Power Platform、RPA。提供以Microsoft技术实现数字化转型的一站式支持。",
    long: "以Azure/Microsoft 365/Entra为核心，处理与现有环境的集成、身份平台重设计及RPA导入。基于在中大型企业的丰富导入经验，为客户规划最优路径。",
    tags: ["Microsoft Azure", "Microsoft 365", "Active Directory", "SSO / Entra", "Power Automate", "RPA"],
  },
  {
    title: "本地化环境搭建与维护",
    en: "ON-PREMISE",
    desc: "即便在云计算盛行的时代，本地化基础设施依然不可或缺。我们提供从设计搭建到监控运维的全方位支持。",
    long: "不迁移至云端也是一种选择。我们综合考量数据保护要求、性能需求和成本，设计本地与云端混合的最优方案。",
    tags: ["服务器搭建", "虚拟化平台", "监控 / 运维", "DR / BCP", "安全", "非功能需求"],
  },
  {
    title: "SAP/BTP导入与应用支持",
    en: "SAP · BTP",
    desc: "以S/4HANA为核心，利用SAP BTP（Business Technology Platform）支持业务流程的扩展、集成与现代化。",
    long: "以SAP BTP为核心，利用Integration Suite、CAP框架、SAP Build进行扩展开发、系统集成及SAP与外部服务的连接设计。与S/4HANA的深度集成经验是我们的优势。",
    tags: ["SAP BTP", "S/4HANA", "CAP / CAPM", "Integration Suite", "SAP Build Apps", "ABAP / RAP"],
  },
];

// ─── 強み ────────────────────────────────────────────────────
const STRENGTHS_JA = [
  { title: "非機能要件に強い設計力", desc: '「効いてくる」非機能要件（セキュリティ・可用性・性能・運用性）を起点に、長期運用に耐えうる情報基盤を設計します。' },
  { title: "SAP BTP の専門設計力", desc: "SAP BTP を中核に、Integration Suite・CAP フレームワーク・SAP Build を組み合わせた拡張・統合設計を得意とします。S/4HANA との深い連携実績が強みです。" },
  { title: "マルチクラウド・Microsoft・SAP の実装力", desc: "Azure / AWS / GCP、Microsoft 365、SAP BTP を横断的に組み合わせ、ベンダーロックインに縛られない最適な構成を設計します。" },
  { title: "設計から運用までの一貫体制", desc: "設計・構築で終わらず、モニタリング、運用、改善までを同じチームで担当。「作って終わり」にしない伴走型のスタイルが特徴です。" },
];

const STRENGTHS_EN = [
  { title: "Strong Non-Functional Design Capability", desc: 'Starting from "impactful" non-functional requirements—security, availability, performance, and operability—we design information infrastructure that withstands long-term operation.' },
  { title: "SAP BTP Expertise", desc: "We specialize in extension and integration design centered on SAP BTP, combining Integration Suite, CAP Framework, and SAP Build. Deep integration experience with S/4HANA is our strength." },
  { title: "Multi-Cloud, Microsoft & SAP Implementation", desc: "We design optimal configurations that avoid vendor lock-in by combining Azure / AWS / GCP, Microsoft 365, and SAP BTP across platforms." },
  { title: "End-to-End from Design to Operations", desc: "We don't stop at design and construction—monitoring, operations, and improvements are all handled by the same team. Our hallmark is an accompaniment-style approach that doesn't end with delivery." },
];

const STRENGTHS_ZH = [
  { title: "卓越的非功能需求设计能力", desc: '以安全性、可用性、性能、运维性等"长期见效"的非功能需求为出发点，设计能够经受长期运营考验的信息基础设施。' },
  { title: "SAP BTP专业设计能力", desc: "以SAP BTP为核心，结合Integration Suite、CAP框架、SAP Build进行扩展与集成设计。与S/4HANA的深度集成经验是我们的强项。" },
  { title: "多云·Microsoft·SAP的实施能力", desc: "横向整合Azure/AWS/GCP、Microsoft 365、SAP BTP，设计不受供应商锁定限制的最优方案。" },
  { title: "从设计到运营的一贯体制", desc: '不止于设计与搭建，监控、运营和改进全部由同一团队负责。我们的特点是"交付不是终点"的陪伴式服务风格。' },
];

// ─── ニュース ─────────────────────────────────────────────────
const NEWS_JA = [
  { date: "2026.04.12", tag: "RELEASE", title: "コーポレートサイトをリニューアルいたしました。" },
  { date: "2026.03.01", tag: "NEWS", title: "AWS / Azure を組み合わせたマルチクラウド支援メニューを拡充いたしました。" },
  { date: "2026.01.15", tag: "MEDIA", title: "「クラウドネイティブ時代の非機能要件」について専門誌に寄稿しました。" },
];
const NEWS_MORE_JA = [
  { date: "2025.12.20", tag: "NEWS", title: "年末年始休業のお知らせ（12/29 - 1/4）" },
  { date: "2025.10.10", tag: "EVENT", title: "社内勉強会「Kubernetes × Zero Trust」を開催しました。" },
  { date: "2025.08.01", tag: "NEWS", title: "夏季休業のお知らせ。" },
  { date: "2025.04.02", tag: "NEWS", title: "新卒・中途採用エントリーを受付中です。" },
];

const NEWS_EN = [
  { date: "2026.04.12", tag: "RELEASE", title: "We have relaunched our corporate website." },
  { date: "2026.03.01", tag: "NEWS", title: "We have expanded our multi-cloud support menu combining AWS and Azure." },
  { date: "2026.01.15", tag: "MEDIA", title: 'We contributed an article on "Non-Functional Requirements in the Cloud-Native Era" to a technical journal.' },
];
const NEWS_MORE_EN = [
  { date: "2025.12.20", tag: "NEWS", title: "Year-End / New Year Holiday Notice (Dec 29 – Jan 4)" },
  { date: "2025.10.10", tag: "EVENT", title: 'We held an in-house study session on "Kubernetes × Zero Trust".' },
  { date: "2025.08.01", tag: "NEWS", title: "Summer Holiday Notice." },
  { date: "2025.04.02", tag: "NEWS", title: "We are now accepting applications for new graduate and mid-career positions." },
];

const NEWS_ZH = [
  { date: "2026.04.12", tag: "RELEASE", title: "公司官网已全面改版上线。" },
  { date: "2026.03.01", tag: "NEWS", title: "我们已扩充结合AWS/Azure的多云支持服务菜单。" },
  { date: "2026.01.15", tag: "MEDIA", title: "我们在专业期刊上发表了关于\"云原生时代的非功能需求\"的文章。" },
];
const NEWS_MORE_ZH = [
  { date: "2025.12.20", tag: "NEWS", title: "年末年初假期通知（12/29 - 1/4）" },
  { date: "2025.10.10", tag: "EVENT", title: "我们举办了\"Kubernetes × Zero Trust\"内部技术分享会。" },
  { date: "2025.08.01", tag: "NEWS", title: "暑期休假通知。" },
  { date: "2025.04.02", tag: "NEWS", title: "现正接受应届毕业生及社会人才的招聘申请。" },
];

// ─── 採用 ─────────────────────────────────────────────────────
const POSITIONS_JA = [
  { title: "クラウドインフラエンジニア", desc: "Azure / AWS を中心としたクラウドインフラの設計・構築・運用をお任せします。", skills: ["AZURE", "AWS", "TERRAFORM", "KUBERNETES", "CI / CD"] },
  { title: "Microsoft ソリューションコンサルタント", desc: "Microsoft 365 / Entra / Power Platform の導入提案・設計・展開を担当します。", skills: ["M365", "ENTRA ID", "POWER PLATFORM", "RPA"] },
  { title: "SRE / 運用エンジニア", desc: "クラウドネイティブなシステムの運用設計・改善・オンコール対応をお任せします。", skills: ["SRE", "OBSERVABILITY", "INCIDENT MGMT", "LINUX"] },
  { title: "SAP BTP エンジニア", desc: "SAP BTP を活用した拡張開発・システム統合・移行支援をお任せします。S/4HANA や CAP の経験を活かせる環境です。", skills: ["SAP BTP", "CAP / CAPM", "S/4HANA", "INTEGRATION SUITE", "ABAP"] },
  { title: "プロジェクトマネージャー", desc: "複数プロジェクトの推進・お客様折衝・チームビルディングを担っていただきます。", skills: ["PMO", "STAKEHOLDER", "AGILE", "CLOUD"] },
];

const POSITIONS_EN = [
  { title: "Cloud Infrastructure Engineer", desc: "You will be responsible for designing, building, and operating cloud infrastructure centered on Azure / AWS.", skills: ["AZURE", "AWS", "TERRAFORM", "KUBERNETES", "CI / CD"] },
  { title: "Microsoft Solutions Consultant", desc: "You will handle proposal, design, and deployment for Microsoft 365 / Entra / Power Platform implementations.", skills: ["M365", "ENTRA ID", "POWER PLATFORM", "RPA"] },
  { title: "SRE / Operations Engineer", desc: "You will be responsible for operational design, improvement, and on-call response for cloud-native systems.", skills: ["SRE", "OBSERVABILITY", "INCIDENT MGMT", "LINUX"] },
  { title: "SAP BTP Engineer", desc: "You will handle extension development, system integration, and migration support using SAP BTP. An environment where you can leverage your S/4HANA and CAP experience.", skills: ["SAP BTP", "CAP / CAPM", "S/4HANA", "INTEGRATION SUITE", "ABAP"] },
  { title: "Project Manager", desc: "You will drive multiple projects, manage client relationships, and build high-performing teams.", skills: ["PMO", "STAKEHOLDER", "AGILE", "CLOUD"] },
];

const POSITIONS_ZH = [
  { title: "云基础设施工程师", desc: "负责以Azure/AWS为核心的云基础设施的设计、搭建与运维。", skills: ["AZURE", "AWS", "TERRAFORM", "KUBERNETES", "CI / CD"] },
  { title: "Microsoft解决方案顾问", desc: "负责Microsoft 365/Entra/Power Platform的导入提案、设计与推广。", skills: ["M365", "ENTRA ID", "POWER PLATFORM", "RPA"] },
  { title: "SRE/运维工程师", desc: "负责云原生系统的运营设计、改进与值班响应。", skills: ["SRE", "OBSERVABILITY", "INCIDENT MGMT", "LINUX"] },
  { title: "SAP BTP工程师", desc: "利用SAP BTP进行扩展开发、系统集成及迁移支持。可充分发挥S/4HANA和CAP经验的工作环境。", skills: ["SAP BTP", "CAP / CAPM", "S/4HANA", "INTEGRATION SUITE", "ABAP"] },
  { title: "项目经理", desc: "负责推进多个项目、客户沟通与团队建设。", skills: ["PMO", "STAKEHOLDER", "AGILE", "CLOUD"] },
];

const BENEFITS_JA = [
  { title: "フレキシブルな働き方", desc: "リモート／ハイブリッドでの勤務を前提に、フレックスタイム制で集中できる環境を用意しています。" },
  { title: "技術への投資", desc: "書籍購入・カンファレンス参加費・資格取得費用を会社が支援。学び続けるエンジニアを後押しします。" },
  { title: "長く働ける基盤", desc: "評価は技術力と顧客貢献の両輪で。年齢やポジションに依らず、公平に評価される仕組みを整えています。" },
];

const BENEFITS_EN = [
  { title: "Flexible Work Style", desc: "We provide a focused environment with remote/hybrid work as the default and flex-time scheduling." },
  { title: "Investment in Technology", desc: "The company supports book purchases, conference attendance fees, and certification costs. We encourage engineers who keep learning." },
  { title: "A Foundation for Long-Term Employment", desc: "Performance is evaluated on both technical ability and client contribution. We have built a fair evaluation system that doesn't depend on age or position." },
];

const BENEFITS_ZH = [
  { title: "灵活的工作方式", desc: "以远程/混合办公为前提，实行弹性工时制，为员工打造专注高效的工作环境。" },
  { title: "对技术的投资", desc: "公司支持购书费用、参加会议费用及资格考试费用，鼓励持续学习的工程师。" },
  { title: "可长期工作的基础", desc: "以技术能力和客户贡献为双轮评价标准，建立了不受年龄或职位影响的公平评价体系。" },
];

// ─── 企業概要 ─────────────────────────────────────────────────
const OVERVIEW_JA = [
  ["COMPANY", "東森テクノロジー株式会社（Tomori Technology Co., Ltd.）"],
  ["ESTABLISHED", "2022年2月18日"],
  ["ADDRESS", "〒105-0021 東京都港区東新橋2丁目6番3号 昭栄ビル5階"],
  ["BUSINESS", "システムエンジニアリングサービス（設計 / 構築 / 運用保守）／ クラウドネイティブ・コンテナ基盤設計 / Microsoft ソリューション / SAP BTP 導入・活用支援 / オンプレミス基盤構築 / DX 推進支援"],
  ["TECHNOLOGY", "Microsoft Azure / AWS / Google Cloud / Kubernetes / SAP BTP / S/4HANA / CAP Framework / Integration Suite / Microsoft 365 / Active Directory / SSO / RPA / DevOps"],
  ["CORPORATE NO.", "8020001145306"],
];

const OVERVIEW_EN = [
  ["COMPANY", "Tomori Technology Co., Ltd."],
  ["ESTABLISHED", "February 18, 2022"],
  ["ADDRESS", "5F, Shōei Building, 2-6-3 Higashi-Shimbashi, Minato-ku, Tokyo 105-0021"],
  ["BUSINESS", "Systems Engineering Services (Design / Build / Operations) / Cloud-Native & Container Platform Design / Microsoft Solutions / SAP BTP Implementation / On-Premise Infrastructure / DX Acceleration"],
  ["TECHNOLOGY", "Microsoft Azure / AWS / Google Cloud / Kubernetes / SAP BTP / S/4HANA / CAP Framework / Integration Suite / Microsoft 365 / Active Directory / SSO / RPA / DevOps"],
  ["CORPORATE NO.", "8020001145306"],
];

const OVERVIEW_ZH = [
  ["COMPANY", "东森科技株式会社（Tomori Technology Co., Ltd.）"],
  ["ESTABLISHED", "2022年2月18日"],
  ["ADDRESS", "〒105-0021 东京都港区东新桥2丁目6番3号 昭荣大厦5楼"],
  ["BUSINESS", "系统工程服务（设计/搭建/运维）/ 云原生·容器平台设计 / Microsoft解决方案 / SAP BTP导入与应用 / 本地化基础设施搭建 / 数字化转型推进支持"],
  ["TECHNOLOGY", "Microsoft Azure / AWS / Google Cloud / Kubernetes / SAP BTP / S/4HANA / CAP Framework / Integration Suite / Microsoft 365 / Active Directory / SSO / RPA / DevOps"],
  ["CORPORATE NO.", "8020001145306"],
];

// ─── メイン翻訳オブジェクト ─────────────────────────────────
export const TRANSLATIONS = {
  ja: {
    // データ
    services: SERVICES_JA,
    strengths: STRENGTHS_JA,
    news: NEWS_JA,
    newsMore: NEWS_MORE_JA,
    positions: POSITIONS_JA,
    benefits: BENEFITS_JA,
    overview: OVERVIEW_JA,

    // ナビゲーション
    nav: {
      home: "トップ",
      company: "会社概要",
      service: "事業内容",
      recruit: "採用情報",
      news: "お知らせ",
      contact: "お問い合わせ",
    },

    // フッター
    footer: {
      tagline: "クラウドネイティブな設計思想で、\n企業の情報基盤と DX をかたちにする。",
      navigate: ["トップ", "会社概要", "事業内容"],
      serviceLinks: ["クラウドネイティブ", "コンテナ基盤", "Microsoft ソリューション", "オンプレミス運用"],
      contactLinks: ["お問い合わせ", "採用情報"],
    },

    // ホームページ
    home: {
      heroTagline: "SYSTEM ENGINEERING · CLOUD NATIVE",
      heroH1: "想いをかたちに、",
      heroH1b: "技術で未来を動かす。",
      heroLead: "設計からデリバリー、運用保守まで。クラウドネイティブなシステム設計と DX 推進で、企業の成長を支えるシステムエンジニアリングパートナーです。",
      heroCta1: "事業内容をみる",
      heroCta2: "お問い合わせ",
      capabilities: ["設計から運用まで一貫対応", "非機能要件に強みを持つ", "マルチクラウド実績", "DX 推進支援"],
      aboutSectionJp: "東森テクノロジーとは",
      aboutH3: "「情報」で事業の\n推進力を、\nひとつ上へ。",
      aboutP1: "東森テクノロジー株式会社は、IaaS・PaaS・SaaS を横断するクラウドネイティブな設計思想で、お客様の情報基盤を設計から構築、運用保守までワンストップで支援するシステムエンジニアリング企業です。",
      aboutP2: "単なる開発受託ではなく、セキュリティ、可用性、拡張性、運用性といった非機能要件の設計を起点に、Microsoft 製品群や主要パブリッククラウドを組み合わせ、企業の DX を着実に前進させるパートナーとして歩みます。",
      statLabels: ["設立年", "オフィス拠点", "対応技術領域"],
      serviceSectionJp: "事業内容",
      serviceLead: "クラウドネイティブなシステム設計から、コンテナ基盤、Microsoft 製品群の導入、オンプレミス環境の運用保守まで。お客様の課題に合わせて最適な組み合わせをご提案します。",
      strengthSectionJp: "東森の強み",
      newsSectionJp: "お知らせ",
      ctaH2: "そのクラウド活用、\n相談するところから。",
      ctaCta1: "お問い合わせ",
      ctaCta2: "採用情報",
    },

    // 会社概要ページ
    company: {
      pageJp: "会社概要",
      pageLead: "私たちについて。東森テクノロジー株式会社の企業情報です。",
      messageSectionJp: "代表メッセージ",
      messageH3: "お客様の成長を、\n技術で支え続けるために。",
      messageP1: "当社は、クラウド・インフラ・アプリケーションの境界をこえたシステムエンジニアリングを通じて、お客様の事業成長に寄り添うことを使命としています。",
      messageP2: "技術は目的ではなく、手段。ビジネスの要請から逆算し、非機能要件まで含めたトータル設計で、持続可能な情報基盤を共に創っていきます。",
      messageP3: "これからも誠実に、確実に、歩みを重ねてまいります。",
      overviewSectionJp: "企業情報",
      accessSectionJp: "アクセス",
      accessAddress: "〒105-0021\n東京都港区東新橋2丁目6番3号\n昭栄ビル5階",
      accessTrain: "JR・ゆりかもめ「新橋」駅 徒歩5分",
      accessMetro: "都営浅草線「新橋」駅 徒歩4分",
      mapLabel: "MAP · 東新橋 SHIOEI BLDG.",
    },

    // サービスページ
    service: {
      pageJp: "事業内容",
      pageLead: "クラウドネイティブ設計から運用保守まで。東森テクノロジーの提供領域です。",
    },

    // 採用ページ
    recruit: {
      pageJp: "採用情報",
      pageLead: "技術を追求し、お客様と伴走する仲間を募集しています。",
      messageJp: "私たちが求める人物像",
      messageP1: "東森テクノロジーでは、技術への好奇心と、お客様課題への責任感を併せ持つ仲間を歓迎します。",
      messageP2: "特定の技術に閉じず、クラウド・コンテナ・Microsoft 製品群を横断的に学び続けられる方と、長く一緒に歩んでいきたいと考えています。",
      positionJp: "募集職種",
      benefitsJp: "働く環境",
    },

    // ニュースページ
    newsPage: {
      pageJp: "お知らせ",
      pageLead: "東森テクノロジーからの最新情報をお届けします。",
    },

    // お問い合わせページ
    contact: {
      pageJp: "お問い合わせ",
      pageLead: "お仕事のご相談、採用に関するご質問など、お気軽にご連絡ください。",
      formLead: "下記フォームよりお問い合わせください。",
      replyTime: "2営業日以内にご返信いたします。",
      businessHours: "営業時間 平日 9:30 - 18:30",
      categoryLabel: "お問い合わせ種別",
      categoryOptions: ["サービスに関するお問い合わせ", "採用に関するお問い合わせ", "取材・協業に関するお問い合わせ", "その他"],
      companyLabel: "会社名",
      nameLabel: "お名前",
      emailLabel: "メールアドレス",
      telLabel: "電話番号",
      messageLabel: "お問い合わせ内容",
      privacyText: "プライバシーポリシーに同意の上、送信します。",
      submitBtn: "送信する",
      thankYouTitle: "送信が完了しました",
      thankYouMsg: "ご連絡ありがとうございます。担当よりご返信いたします。",
    },
  },

  // ─────────────────────────────────────────────────────
  en: {
    services: SERVICES_EN,
    strengths: STRENGTHS_EN,
    news: NEWS_EN,
    newsMore: NEWS_MORE_EN,
    positions: POSITIONS_EN,
    benefits: BENEFITS_EN,
    overview: OVERVIEW_EN,

    nav: {
      home: "Home",
      company: "About",
      service: "Services",
      recruit: "Careers",
      news: "News",
      contact: "Contact",
    },

    footer: {
      tagline: "Shaping enterprise information infrastructure\nand DX through cloud-native design philosophy.",
      navigate: ["Home", "About", "Services"],
      serviceLinks: ["Cloud Native", "Container Platform", "Microsoft Solution", "On-Premise"],
      contactLinks: ["Contact", "Careers"],
    },

    home: {
      heroTagline: "SYSTEM ENGINEERING · CLOUD NATIVE",
      heroH1: "Turning Vision into Reality,",
      heroH1b: "Shaping the Future with Technology.",
      heroLead: "From design to delivery, operations, and maintenance. We are your system engineering partner, supporting enterprise growth through cloud-native system design and DX acceleration.",
      heroCta1: "Our Services",
      heroCta2: "Contact Us",
      capabilities: ["End-to-End: Design through Operations", "Strength in Non-Functional Requirements", "Multi-Cloud Track Record", "DX Acceleration Support"],
      aboutSectionJp: "About Tomori Technology",
      aboutH3: "Elevating Business\nMomentum Through\nTechnology.",
      aboutP1: "Tomori Technology Co., Ltd. is a systems engineering company that supports clients' information infrastructure from design through construction and operational maintenance—all in one stop, guided by a cloud-native design philosophy spanning IaaS, PaaS, and SaaS.",
      aboutP2: "Rather than simple development outsourcing, we act as a partner who steadily advances enterprise DX by combining Microsoft products and major public clouds, starting from the design of non-functional requirements such as security, availability, scalability, and operability.",
      statLabels: ["Founded", "Office Locations", "Technology Domains"],
      serviceSectionJp: "Services",
      serviceLead: "From cloud-native system design and container platforms to Microsoft solution implementation and on-premise operational maintenance. We propose the optimal combination tailored to your challenges.",
      strengthSectionJp: "Our Strengths",
      newsSectionJp: "News",
      ctaH2: "Your Cloud Journey\nStarts with a Conversation.",
      ctaCta1: "Contact Us",
      ctaCta2: "Careers",
    },

    company: {
      pageJp: "About Us",
      pageLead: "About us. Company information for Tomori Technology Co., Ltd.",
      messageSectionJp: "CEO Message",
      messageH3: "To Continuously Support\nOur Clients' Growth\nThrough Technology.",
      messageP1: "Our mission is to support client business growth through systems engineering that transcends the boundaries of cloud, infrastructure, and applications.",
      messageP2: "Technology is a means, not an end. Working backward from business requirements, we co-create sustainable information infrastructure through total design that includes non-functional requirements.",
      messageP3: "We will continue to move forward sincerely and steadily.",
      overviewSectionJp: "Company Overview",
      accessSectionJp: "Access",
      accessAddress: "5F, Shōei Building\n2-6-3 Higashi-Shimbashi\nMinato-ku, Tokyo 105-0021",
      accessTrain: "5 min walk from Shimbashi Stn. (JR / Yurikamome)",
      accessMetro: "4 min walk from Shimbashi Stn. (Toei Asakusa Line)",
      mapLabel: "MAP · HIGASHI-SHIMBASHI SHIOEI BLDG.",
    },

    service: {
      pageJp: "Services",
      pageLead: "From cloud-native design to operational maintenance. The service domains of Tomori Technology.",
    },

    recruit: {
      pageJp: "Careers",
      pageLead: "We are looking for colleagues who pursue technology and walk alongside our clients.",
      messageJp: "Who We're Looking For",
      messageP1: "At Tomori Technology, we welcome colleagues who combine curiosity for technology with a sense of responsibility toward client challenges.",
      messageP2: "We seek individuals who can continuously learn across cloud, container, and Microsoft technologies without limiting themselves to a single domain, and we look forward to a long-term journey together.",
      positionJp: "Open Positions",
      benefitsJp: "Work Environment",
    },

    newsPage: {
      pageJp: "News",
      pageLead: "The latest information from Tomori Technology.",
    },

    contact: {
      pageJp: "Contact",
      pageLead: "Please feel free to contact us regarding business inquiries, recruitment questions, and more.",
      formLead: "Please use the form below to contact us.",
      replyTime: "We will respond within 2 business days.",
      businessHours: "Mon–Fri  9:30 – 18:30",
      categoryLabel: "Category",
      categoryOptions: ["Service Inquiry", "Recruitment Inquiry", "Press / Partnership Inquiry", "Other"],
      companyLabel: "Company",
      nameLabel: "Name",
      emailLabel: "Email",
      telLabel: "Phone",
      messageLabel: "Message",
      privacyText: "I agree to the Privacy Policy and submit this form.",
      submitBtn: "Submit",
      thankYouTitle: "Message Sent",
      thankYouMsg: "Thank you for your message. Our team will get back to you shortly.",
    },
  },

  // ─────────────────────────────────────────────────────
  zh: {
    services: SERVICES_ZH,
    strengths: STRENGTHS_ZH,
    news: NEWS_ZH,
    newsMore: NEWS_MORE_ZH,
    positions: POSITIONS_ZH,
    benefits: BENEFITS_ZH,
    overview: OVERVIEW_ZH,

    nav: {
      home: "首页",
      company: "公司简介",
      service: "业务内容",
      recruit: "招聘信息",
      news: "新闻动态",
      contact: "联系我们",
    },

    footer: {
      tagline: "以云原生设计理念，\n塑造企业信息基础设施与数字化转型。",
      navigate: ["首页", "公司简介", "业务内容"],
      serviceLinks: ["云原生设计", "容器平台", "Microsoft解决方案", "本地化运维"],
      contactLinks: ["联系我们", "招聘信息"],
    },

    home: {
      heroTagline: "SYSTEM ENGINEERING · CLOUD NATIVE",
      heroH1: "将愿景化为现实，",
      heroH1b: "以技术驱动未来。",
      heroLead: "从设计到交付，运维到保障。我们是您的系统工程合作伙伴，以云原生系统设计和数字化转型推进，支撑企业持续增长。",
      heroCta1: "了解业务内容",
      heroCta2: "联系我们",
      capabilities: ["设计到运营的全程覆盖", "非功能需求的卓越能力", "多云丰富经验", "数字化转型推进支持"],
      aboutSectionJp: "关于东森科技",
      aboutH3: "以「信息」将事业\n推进力提升\n至新高度。",
      aboutP1: "东森科技株式会社是一家系统工程企业，以横跨IaaS、PaaS、SaaS的云原生设计理念，为客户提供从信息基础设施设计、搭建到运维的一站式全方位支持。",
      aboutP2: "我们不仅仅承接开发外包，而是以安全性、可用性、扩展性、运维性等非功能需求的设计为出发点，结合Microsoft产品群及主要公有云，作为持续推进企业数字化转型的合作伙伴与您同行。",
      statLabels: ["成立年份", "办公地点", "覆盖技术领域"],
      serviceSectionJp: "业务内容",
      serviceLead: "从云原生系统设计、容器平台，到Microsoft产品导入及本地化环境运维，我们根据客户需求提供最优组合方案。",
      strengthSectionJp: "东森的优势",
      newsSectionJp: "新闻动态",
      ctaH2: "从一次咨询开始，\n开启您的云端之旅。",
      ctaCta1: "联系我们",
      ctaCta2: "招聘信息",
    },

    company: {
      pageJp: "公司简介",
      pageLead: "关于我们。东森科技株式会社的企业信息。",
      messageSectionJp: "总裁致辞",
      messageH3: "以技术持续\n支撑客户成长。",
      messageP1: "我们的使命是通过跨越云、基础设施和应用程序边界的系统工程，支撑客户事业的持续增长。",
      messageP2: "技术是手段而非目的。我们从业务需求出发，通过涵盖非功能需求的整体设计，与客户共同构建可持续发展的信息基础设施。",
      messageP3: "我们将继续以诚恳、踏实的态度，持续前行。",
      overviewSectionJp: "企业信息",
      accessSectionJp: "交通路线",
      accessAddress: "〒105-0021\n东京都港区东新桥2丁目6番3号\n昭荣大厦5楼",
      accessTrain: "JR·百合海鸥线「新桥」站 步行5分钟",
      accessMetro: "都营浅草线「新桥」站 步行4分钟",
      mapLabel: "MAP · 东新桥 昭荣大厦",
    },

    service: {
      pageJp: "业务内容",
      pageLead: "从云原生设计到运维保障。东森科技的服务领域。",
    },

    recruit: {
      pageJp: "招聘信息",
      pageLead: "我们正在寻找追求技术、与客户并肩同行的伙伴。",
      messageJp: "我们期待的人才",
      messageP1: "在东森科技，我们欢迎兼具技术好奇心与客户责任感的伙伴加入。",
      messageP2: "我们希望与能够跨越云、容器、Microsoft产品等领域持续学习的人才长期携手共进。",
      positionJp: "招聘岗位",
      benefitsJp: "工作环境",
    },

    newsPage: {
      pageJp: "新闻动态",
      pageLead: "东森科技最新动态。",
    },

    contact: {
      pageJp: "联系我们",
      pageLead: "欢迎就业务咨询、招聘问题等随时与我们联系。",
      formLead: "请通过以下表单与我们联系。",
      replyTime: "我们将在2个工作日内回复。",
      businessHours: "工作日  9:30–18:30",
      categoryLabel: "咨询类别",
      categoryOptions: ["服务咨询", "招聘咨询", "媒体/合作咨询", "其他"],
      companyLabel: "公司名称",
      nameLabel: "姓名",
      emailLabel: "邮箱地址",
      telLabel: "电话号码",
      messageLabel: "咨询内容",
      privacyText: "同意隐私政策并提交。",
      submitBtn: "提交",
      thankYouTitle: "发送成功",
      thankYouMsg: "感谢您的联系，相关负责人将尽快回复您。",
    },
  },
};

export const LANGS = [
  { code: "ja", label: "JA" },
  { code: "en", label: "EN" },
  { code: "zh", label: "中文" },
];
