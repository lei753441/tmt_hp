import { useEffect, useState } from "react";
import Logo from "./Logo";
import { useLang } from "../context/LanguageContext";
import { LANGS } from "../data/i18n";

const NAV_KEYS = [
  { href: "#/", key: "home" },
  { href: "#/company", key: "company" },
  { href: "#/service", key: "service" },
  { href: "#/recruit", key: "recruit" },
  { href: "#/news", key: "news" },
];

const NAV_EN = ["HOME", "COMPANY", "SERVICE", "RECRUIT", "NEWS"];

export default function Header() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "bg-white/95 backdrop-blur shadow-sm" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-9">
          {NAV_KEYS.map((n, i) => (
            <a key={n.href} href={n.href} className="group">
              <span className="block en text-[11px] tracking-widest2 text-accent">{NAV_EN[i]}</span>
              <span className="block text-sm font-medium text-ink link-underline">{t(`nav.${n.key}`)}</span>
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          {/* 言語切り替え */}
          <div className="flex items-center gap-1 border border-line rounded-sm overflow-hidden">
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-2.5 py-1 text-[11px] en tracking-widest2 transition-colors ${
                  lang === l.code
                    ? "bg-ink text-white"
                    : "text-ink hover:bg-paper"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
          <a href="#/contact" className="btn-primary text-sm">
            <span>{t("nav.contact")}</span>
            <span>→</span>
          </a>
        </div>

        <button
          className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          <span className={`block w-6 h-px bg-ink transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block w-6 h-px bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-ink transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-white">
          <div className="px-6 py-6 space-y-4">
            {NAV_KEYS.map((n, i) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="flex items-baseline gap-4">
                <span className="en text-[11px] tracking-widest2 text-accent w-20">{NAV_EN[i]}</span>
                <span className="text-sm font-medium text-ink">{t(`nav.${n.key}`)}</span>
              </a>
            ))}
            {/* モバイル言語切り替え */}
            <div className="flex items-center gap-1 pt-2">
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`px-3 py-1.5 text-[11px] en tracking-widest2 border transition-colors ${
                    lang === l.code
                      ? "bg-ink text-white border-ink"
                      : "border-line text-ink hover:bg-paper"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <a
              href="#/contact"
              onClick={() => setOpen(false)}
              className="btn-primary w-full justify-center text-sm mt-4"
            >
              <span>{t("nav.contact")}</span>
              <span>→</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
