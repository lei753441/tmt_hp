import { SectionLabel, useFadeUp } from "../components/Shared";
import { SERVICES, STRENGTHS, NEWS } from "../data/content";

export default function Home() {
  useFadeUp();

  return (
    <>
      {/* HERO */}
      <section className="hero-bg text-white relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-60" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-40 pb-28 lg:pt-52 lg:pb-40 relative">
          <p className="en text-[12px] tracking-widest2 text-white/60 mb-6 fade-up">
            SYSTEM ENGINEERING · CLOUD NATIVE
          </p>
          <h1 className="fade-up text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.15] max-w-4xl">
            想いをかたちに、
            <br />
            <span className="text-white">技術で未来を動かす。</span>
          </h1>
          <p className="fade-up mt-8 text-base md:text-lg text-white/80 max-w-2xl leading-8">
            設計からデリバリー、運用保守まで。クラウドネイティブなシステム設計と DX 推進で、
            企業の成長を支えるシステムエンジニアリングパートナーです。
          </p>
          <div className="fade-up mt-10 flex flex-wrap gap-4">
            <a href="#/service" className="btn-primary" style={{ background: "#fff", color: "#0A1C3B" }}>
              <span>事業内容をみる</span>
              <span>→</span>
            </a>
            <a href="#/contact" className="btn-ghost" style={{ borderColor: "#fff", color: "#fff" }}>
              <span>お問い合わせ</span>
              <span>→</span>
            </a>
          </div>

          <div className="fade-up mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10">
            {[
              ["01", "設計から運用まで一貫対応"],
              ["02", "非機能要件に強みを持つ"],
              ["03", "マルチクラウド実績"],
              ["04", "DX 推進支援"],
            ].map(([n, l]) => (
              <div key={n} className="border-l border-white/15 pl-5">
                <p className="en text-[11px] tracking-widest2 text-white/50">{`CAPABILITY ${n}`}</p>
                <p className="mt-2 text-sm md:text-base font-medium text-white/95">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-28 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
          <div className="fade-up">
            <SectionLabel num="01" en="ABOUT US" jp="東森テクノロジーとは" />
            <p className="en text-accent text-lg tracking-widest2 mb-4">Who we are</p>
            <h3 className="text-3xl lg:text-4xl font-bold text-ink leading-[1.4]">
              「情報」で事業の
              <br />
              推進力を、
              <br />
              ひとつ上へ。
            </h3>
          </div>
          <div className="fade-up pt-2 text-[15px] leading-[2] text-gray-700">
            <p className="mb-6">
              東森テクノロジー株式会社は、IaaS・PaaS・SaaS を横断するクラウドネイティブな設計思想で、
              お客様の情報基盤を設計から構築、運用保守までワンストップで支援する
              システムエンジニアリング企業です。
            </p>
            <p>
              単なる開発受託ではなく、セキュリティ、可用性、拡張性、運用性といった
              <strong className="text-ink">非機能要件の設計</strong>を起点に、
              Microsoft 製品群や主要パブリッククラウドを組み合わせ、
              企業の DX を着実に前進させるパートナーとして歩みます。
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-line pt-8">
              {[
                ["2022", "設立年"],
                ["3", "オフィス拠点"],
                ["15+", "対応技術領域"],
              ].map(([n, l]) => (
                <div key={l}>
                  <p className="en text-3xl lg:text-4xl font-light text-ink mono-num">{n}</p>
                  <p className="text-xs text-gray-500 mt-1">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="hairline max-w-[1400px] mx-auto" />

      {/* SERVICE */}
      <section className="py-28 lg:py-36 bg-paper">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionLabel num="02" en="SERVICE" jp="事業内容" />
          <p className="fade-up text-[15px] text-gray-700 leading-[2] max-w-3xl mb-14">
            クラウドネイティブなシステム設計から、コンテナ基盤、Microsoft 製品群の導入、
            オンプレミス環境の運用保守まで。お客様の課題に合わせて最適な組み合わせをご提案します。
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES.map((s, i) => (
              <article key={s.title} className="fade-up card-hover bg-white border border-line p-8 lg:p-10 flex flex-col">
                <div className="flex items-start justify-between">
                  <span className="en text-[11px] tracking-widest2 text-accent mono-num">
                    {`0${i + 1} / ${String(SERVICES.length).padStart(2, "0")}`}
                  </span>
                  <span className="en text-[11px] tracking-widest2 text-gray-400">{s.en}</span>
                </div>
                <h3 className="mt-6 text-xl lg:text-2xl font-bold text-ink leading-[1.5]">{s.title}</h3>
                <p className="mt-4 text-[14px] text-gray-600 leading-[2]">{s.desc}</p>
                <ul className="mt-6 space-y-2 text-[13px] text-gray-700">
                  {s.tags.map((t) => (
                    <li key={t} className="flex items-center gap-3">
                      <span className="w-1 h-1 bg-accent" />
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <a href="#/service" className="en text-[12px] tracking-widest2 text-ink link-underline inline-flex items-center gap-2">
                    VIEW MORE <span>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-28 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionLabel num="03" en="OUR STRENGTH" jp="東森の強み" />
          <div className="grid lg:grid-cols-3 gap-6 mt-6">
            {STRENGTHS.map((s, i) => (
              <div key={s.title} className="fade-up border border-line p-10 bg-white card-hover">
                <p className="en text-5xl font-light text-accent mono-num">{`0${i + 1}`}</p>
                <h3 className="mt-4 text-xl font-bold text-ink">{s.title}</h3>
                <p className="mt-4 text-[14px] text-gray-600 leading-[2]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="py-28 lg:py-36 bg-paper">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-10">
            <SectionLabel num="04" en="NEWS" jp="お知らせ" />
            <a
              href="#/news"
              className="hidden md:inline-flex en text-[12px] tracking-widest2 text-ink link-underline items-center gap-2"
            >
              VIEW ALL
              <span>→</span>
            </a>
          </div>
          <ul className="divide-y divide-line bg-white border border-line">
            {NEWS.map((n) => (
              <li
                key={n.title}
                className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8 px-6 lg:px-8 py-6 hover:bg-paper transition"
              >
                <time className="en text-sm text-gray-500 mono-num w-28">{n.date}</time>
                <span className="inline-block text-[11px] en tracking-widest2 border border-ink px-3 py-1 w-max text-ink">
                  {n.tag}
                </span>
                <span className="flex-1 text-[15px] text-ink">{n.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="relative hero-bg text-white py-24">
        <div className="absolute inset-0 dot-grid opacity-60" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="en text-[11px] tracking-widest2 text-white/60 mb-4">CONTACT</p>
            <h2 className="text-3xl lg:text-5xl font-bold leading-[1.3]">
              そのクラウド活用、
              <br />
              相談するところから。
            </h2>
          </div>
          <div className="flex flex-wrap gap-4 lg:justify-end">
            <a href="#/contact" className="btn-primary" style={{ background: "#fff", color: "#0A1C3B" }}>
              <span>お問い合わせ</span>
              <span>→</span>
            </a>
            <a href="#/recruit" className="btn-ghost" style={{ borderColor: "#fff", color: "#fff" }}>
              <span>採用情報</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
