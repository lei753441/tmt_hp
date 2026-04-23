import { PageHead, SectionLabel, useFadeUp } from "../components/Shared";
import { useLang } from "../context/LanguageContext";

export default function Recruit() {
  useFadeUp();
  const { t, d } = useLang();
  const positions = d("positions");
  const benefits = d("benefits");

  return (
    <>
      <PageHead
        num="03"
        en="RECRUIT"
        jp={t("recruit.pageJp")}
        lead={t("recruit.pageLead")}
      />
      <section className="py-20 lg:py-28">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <SectionLabel num="01" en="MESSAGE" jp={t("recruit.messageJp")} />
          <div className="fade-up text-[15px] leading-[2.1] text-gray-700 max-w-3xl">
            <p className="mb-5">{t("recruit.messageP1")}</p>
            <p>{t("recruit.messageP2")}</p>
          </div>

          <div className="mt-16">
            <SectionLabel num="02" en="POSITION" jp={t("recruit.positionJp")} />
            <div className="grid md:grid-cols-2 gap-6">
              {positions.map((p, i) => (
                <div key={i} className="fade-up card-hover border border-line p-8 bg-white">
                  <span className="en text-[11px] tracking-widest2 text-accent mono-num">{`0${i + 1}`}</span>
                  <h3 className="mt-3 text-xl font-bold text-ink">{p.title}</h3>
                  <p className="mt-3 text-[14px] text-gray-600 leading-[2]">{p.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.skills.map((s) => (
                      <span key={s} className="text-[11px] en tracking-widest2 border border-ink/20 text-ink px-3 py-1">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <SectionLabel num="03" en="BENEFITS" jp={t("recruit.benefitsJp")} />
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((b, i) => (
                <div key={i} className="fade-up border-t-2 border-accent bg-paper p-8">
                  <span className="en text-[11px] tracking-widest2 text-accent mono-num">{`0${i + 1}`}</span>
                  <h4 className="mt-3 text-lg font-bold text-ink">{b.title}</h4>
                  <p className="mt-3 text-[13px] text-gray-600 leading-[2]">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
