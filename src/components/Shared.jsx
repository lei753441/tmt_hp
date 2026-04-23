import { useEffect } from "react";

export const SectionLabel = ({ num, en, jp }) => (
  <div className="flex items-center gap-5 mb-8">
    <span className="section-num mono-num">{num}</span>
    <span className="h-px w-10 bg-accent" />
    <div>
      <p className="en text-[11px] tracking-widest2 text-accent">{en}</p>
      <h2 className="text-2xl lg:text-3xl font-bold text-ink mt-1">{jp}</h2>
    </div>
  </div>
);

export const PageHead = ({ num, en, jp, lead }) => (
  <section className="hero-bg text-white pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
    <div className="absolute inset-0 dot-grid opacity-60" />
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
      <p className="en text-[11px] tracking-widest2 text-white/60 mono-num">
        {num} · {en}
      </p>
      <h1 className="mt-3 text-4xl lg:text-6xl font-bold">{jp}</h1>
      {lead && <p className="mt-6 text-white/80 max-w-2xl leading-[2]">{lead}</p>}
    </div>
  </section>
);

// スクロールで .fade-up をふわっと出す
export function useFadeUp() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-up");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("on");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
