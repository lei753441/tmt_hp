import { PageHead, useFadeUp } from "../components/Shared";
import { useLang } from "../context/LanguageContext";

export default function News() {
  useFadeUp();
  const { t, d } = useLang();
  const news = d("news");
  const newsMore = d("newsMore");

  return (
    <>
      <PageHead
        num="04"
        en="NEWS"
        jp={t("newsPage.pageJp")}
        lead={t("newsPage.pageLead")}
      />
      <section className="py-16 lg:py-24">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <ul className="divide-y divide-line bg-white border border-line">
            {[...news, ...newsMore].map((n) => (
              <li
                key={n.title}
                className="fade-up flex flex-col md:flex-row md:items-center gap-3 md:gap-8 px-6 lg:px-8 py-6 hover:bg-paper"
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
    </>
  );
}
