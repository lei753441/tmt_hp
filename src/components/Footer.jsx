import Logo from "./Logo";
import { useLang } from "../context/LanguageContext";

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
  const { t } = useLang();
  const tagline = t("footer.tagline").split("\n");
  const navigate = t("footer.navigate");
  const serviceLinks = t("footer.serviceLinks");
  const contactLinks = t("footer.contactLinks");

  return (
    <footer className="bg-ink text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 grid lg:grid-cols-[1.3fr_1fr_1fr_1fr] gap-10">
        <div>
          <Logo light />
          <p className="mt-6 text-sm leading-7 text-white/70">
            {tagline[0]}
            {tagline[1] && <><br />{tagline[1]}</>}
          </p>
          <p className="mt-6 text-xs text-white/50 en tracking-widest2">SHIMBASHI · TOKYO</p>
        </div>
        <FooterCol
          title="NAVIGATE"
          items={[
            [navigate[0], "#/"],
            [navigate[1], "#/company"],
            [navigate[2], "#/service"],
          ]}
        />
        <FooterCol
          title="SERVICE"
          items={[
            [serviceLinks[0], "#/service"],
            [serviceLinks[1], "#/service"],
            [serviceLinks[2], "#/service"],
            [serviceLinks[3], "#/service"],
          ]}
        />
        <FooterCol
          title="CONTACT"
          items={[
            [contactLinks[0], "#/contact"],
            [contactLinks[1], "#/recruit"],
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
