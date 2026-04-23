import { PageHead, SectionLabel, useFadeUp } from "../components/Shared";
import { useLang } from "../context/LanguageContext";

export default function Company() {
  useFadeUp();
  const { t, d } = useLang();
  const overview = d("overview");

  return (
    <>
      <PageHead
        num="01"
        en="COMPANY"
        jp={t("company.pageJp")}
        lead={t("company.pageLead")}
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <SectionLabel num="01" en="MESSAGE" jp={t("company.messageSectionJp")} />
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
                {t("company.messageH3").split("\n").map((line, i, arr) => (
                  <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                ))}
              </h3>
              <p className="mb-5">{t("company.messageP1")}</p>
              <p className="mb-5">{t("company.messageP2")}</p>
              <p>{t("company.messageP3")}</p>
              <p className="mt-8 en tracking-widest2 text-xs text-gray-500">CEO · TOMORI TECHNOLOGY</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-paper">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <SectionLabel num="02" en="OVERVIEW" jp={t("company.overviewSectionJp")} />
          <dl className="fade-up bg-white border border-line divide-y divide-line">
            {overview.map(([k, v]) => (
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
          <SectionLabel num="03" en="ACCESS" jp={t("company.accessSectionJp")} />
          <div className="fade-up grid lg:grid-cols-2 gap-6 border border-line">
            <div className="aspect-[4/3] bg-paper relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,#e5e7eb_0%,#f5f6f8_100%)]" />
              <div className="absolute inset-0 flex items-center justify-center text-ink/60 text-sm">
                {t("company.mapLabel")}
              </div>
              <span className="absolute top-1/2 left-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 bg-accent rounded-full animate-ping" />
              <span className="absolute top-1/2 left-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 bg-accent rounded-full" />
            </div>
            <div className="p-8 lg:p-10">
              <p className="en text-[11px] tracking-widest2 text-accent mb-3">HEAD OFFICE</p>
              <p className="text-lg font-bold text-ink leading-[1.7]">
                {t("company.accessAddress").split("\n").map((line, i, arr) => (
                  <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                ))}
              </p>
              <div className="mt-6 border-t border-line pt-6 space-y-2 text-[14px] text-gray-700">
                <p>
                  <span className="en text-[11px] tracking-widest2 text-gray-500 inline-block w-24">TRAIN</span>
                  {t("company.accessTrain")}
                </p>
                <p>
                  <span className="en text-[11px] tracking-widest2 text-gray-500 inline-block w-24">METRO</span>
                  {t("company.accessMetro")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
