import { useEffect, useState } from "react";
import Logo from "./Logo";

const NAV = [
  { href: "#/", label: "HOME", jp: "トップ" },
  { href: "#/company", label: "COMPANY", jp: "会社概要" },
  { href: "#/service", label: "SERVICE", jp: "事業内容" },
  { href: "#/recruit", label: "RECRUIT", jp: "採用情報" },
  { href: "#/news", label: "NEWS", jp: "お知らせ" },
];

export default function Header() {
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
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="group">
              <span className="block en text-[11px] tracking-widest2 text-accent">{n.label}</span>
              <span className="block text-sm font-medium text-ink link-underline">{n.jp}</span>
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a href="#/contact" className="btn-primary text-sm">
            <span>お問い合わせ</span>
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
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="flex items-baseline gap-4">
                <span className="en text-[11px] tracking-widest2 text-accent w-20">{n.label}</span>
                <span className="text-sm font-medium text-ink">{n.jp}</span>
              </a>
            ))}
            <a
              href="#/contact"
              onClick={() => setOpen(false)}
              className="btn-primary w-full justify-center text-sm mt-4"
            >
              <span>お問い合わせ</span>
              <span>→</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
