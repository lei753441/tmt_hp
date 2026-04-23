import { PageHead, useFadeUp } from "../components/Shared";
import { useLang } from "../context/LanguageContext";

export default function Service() {
  useFadeUp();
  const { t, d } = useLang();
  const services = d("services");

  return (
    <>
      <PageHead
        num="02"
        en="SERVICE"
        jp={t("service.pageJp")}
        lead={t("service.pageLead")}
      />
      <section className="py-20 lg:py-28">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10 space-y-20">
          {services.map((s, i) => (
            <article
              key={i}
              className={`fade-up grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start ${
                i % 2 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <span className="en text-[11px] tracking-widest2 text-accent mono-num">
                  {`SERVICE 0${i + 1}`}
                </span>
                <h3 className="mt-3 text-2xl lg:text-3xl font-bold text-ink leading-[1.5]">{s.title}</h3>
                <p className="mt-2 en text-gray-400 text-sm tracking-widest2">{s.en}</p>
                <div className="mt-6 aspect-[4/3] hero-bg relative overflow-hidden">
                  <div className="absolute inset-0 dot-grid opacity-60" />
                  <div className="absolute bottom-6 left-6 en text-[11px] tracking-widest2 text-white/70">{s.en}</div>
                </div>
              </div>
              <div className="pt-2 text-[15px] text-gray-700 leading-[2.1]">
                <p className="mb-6">{s.long}</p>
                <p className="en text-[11px] tracking-widest2 text-accent mb-3">TECHNOLOGY / KEYWORDS</p>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-[14px]">
                  {s.tags.map((tag) => (
                    <li key={tag} className="flex items-center gap-3 text-ink">
                      <span className="w-1 h-1 bg-accent" />
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
