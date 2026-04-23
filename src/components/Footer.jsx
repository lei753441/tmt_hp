import Logo from "./Logo";

const FooterCol = ({ title, items }) => (
  <div>
    <p className="en text-[11px] tracking-widest2 text-white/60 mb-5">{title}</p>
    <ul className="space-y-3 text-sm">
      {items.map(([label, href]) => (
        <li key={label}>
          <a href={href} className="link-underline text-white/90 hover:text-white">
            {label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 grid lg:grid-cols-[1.3fr_1fr_1fr_1fr] gap-10">
        <div>
          <Logo light />
          <p className="mt-6 text-sm leading-7 text-white/70">
            クラウドネイティブな設計思想で、
            <br />
            企業の情報基盤と DX をかたちにする。
          </p>
          <p className="mt-6 text-xs text-white/50 en tracking-widest2">SHIMBASHI · TOKYO</p>
        </div>
        <FooterCol
          title="NAVIGATE"
          items={[
            ["トップ", "#/"],
            ["会社概要", "#/company"],
            ["事業内容", "#/service"],
          ]}
        />
        <FooterCol
          title="SERVICE"
          items={[
            ["クラウドネイティブ", "#/service"],
            ["コンテナ基盤", "#/service"],
            ["Microsoft ソリューション", "#/service"],
            ["オンプレミス運用", "#/service"],
          ]}
        />
        <FooterCol
          title="CONTACT"
          items={[
            ["お問い合わせ", "#/contact"],
            ["採用情報", "#/recruit"],
          ]}
        />
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-5 flex flex-col md:flex-row justify-between text-xs text-white/50 en tracking-widest2">
          <span>© {new Date().getFullYear()} TOMORI TECHNOLOGY CO., LTD.</span>
          <span>PRIVACY POLICY / SITEMAP</span>
        </div>
      </div>
    </footer>
  );
}
