import { PageHead, SectionLabel, useFadeUp } from "../components/Shared";
import { OVERVIEW } from "../data/content";

export default function Company() {
  useFadeUp();
  return (
    <>
      <PageHead
        num="01"
        en="COMPANY"
        jp="会社概要"
        lead="私たちについて。東森テクノロジー株式会社の企業情報です。"
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <SectionLabel num="01" en="MESSAGE" jp="代表メッセージ" />
          <div className="fade-up grid lg:grid-cols-[1fr_1.6fr] gap-10">
            <div className="aspect-[4/5] hero-bg relative">
              <div className="absolute inset-0 dot-grid opacity-50" />
              <div className="absolute inset-0 flex items-end p-8">
                <p className="text-white/70 en tracking-widest2 text-xs">REPRESENTATIVE</p>
              </div>
            </div>
            <div className="text-[15px] leading-[2.1] text-gray-700">
              <p className="en text-accent tracking-widest2 text-[12px] mb-3">GREETINGS</p>
              <h3 className="text-2xl lg:text-3xl font-bold text-ink mb-8 leading-[1.6]">
                お客様の成長を、
                <br />
                技術で支え続けるために。
              </h3>
              <p className="mb-5">
                当社は、クラウド・インフラ・アプリケーションの境界をこえたシステムエンジニアリングを通じて、
                お客様の事業成長に寄り添うことを使命としています。
              </p>
              <p className="mb-5">
                技術は目的ではなく、手段。ビジネスの要請から逆算し、非機能要件まで含めたトータル設計で、
                持続可能な情報基盤を共に創っていきます。
              </p>
              <p>これからも誠実に、確実に、歩みを重ねてまいります。</p>
              <p className="mt-8 en tracking-widest2 text-xs text-gray-500">CEO · TOMORI TECHNOLOGY</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-paper">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <SectionLabel num="02" en="OVERVIEW" jp="企業情報" />
          <dl className="fade-up bg-white border border-line divide-y divide-line">
            {OVERVIEW.map(([k, v]) => (
              <div key={k} className="grid grid-cols-1 md:grid-cols-[220px_1fr]">
                <dt className="px-6 lg:px-8 py-5 text-[13px] font-semibold text-ink bg-paper/60 border-b md:border-b-0 md:border-r border-line en tracking-widest2">
                  {k}
                </dt>
                <dd className="px-6 lg:px-8 py-5 text-[15px] text-gray-800 leading-[1.9]">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <SectionLabel num="03" en="ACCESS" jp="アクセス" />
          <div className="fade-up grid lg:grid-cols-2 gap-6 border border-line">
            <div className="aspect-[4/3] bg-paper relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,#e5e7eb_0%,#f5f6f8_100%)]" />
              <div className="absolute inset-0 flex items-center justify-center text-ink/60 text-sm">
                MAP · 東新橋 SHIOEI BLDG.
              </div>
              <span className="absolute top-1/2 left-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 bg-accent rounded-full animate-ping" />
              <span className="absolute top-1/2 left-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 bg-accent rounded-full" />
            </div>
            <div className="p-8 lg:p-10">
              <p className="en text-[11px] tracking-widest2 text-accent mb-3">HEAD OFFICE</p>
              <p className="text-lg font-bold text-ink leading-[1.7]">
                〒105-0021
                <br />
                東京都港区東新橋2丁目6番3号
                <br />
                昭栄ビル5階
              </p>
              <div className="mt-6 border-t border-line pt-6 space-y-2 text-[14px] text-gray-700">
                <p>
                  <span className="en text-[11px] tracking-widest2 text-gray-500 inline-block w-24">TRAIN</span>
                  JR・ゆりかもめ「新橋」駅 徒歩5分
                </p>
                <p>
                  <span className="en text-[11px] tracking-widest2 text-gray-500 inline-block w-24">METRO</span>
                  都営浅草線「新橋」駅 徒歩4分
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
