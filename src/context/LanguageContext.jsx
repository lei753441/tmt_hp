import { createContext, useCallback, useContext, useState } from "react";
import { TRANSLATIONS } from "../data/i18n";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem("tmr_lang") || "ja"; } catch { return "ja"; }
  });

  const changeLang = useCallback((code) => {
    setLang(code);
    try { localStorage.setItem("tmr_lang", code); } catch {}
  }, []);

  /** キーパス（"home.heroH1" 等）で翻訳文字列を返す */
  const t = useCallback(
    (key) => {
      const keys = key.split(".");
      let val = TRANSLATIONS[lang];
      for (const k of keys) val = val?.[k];
      return val ?? key;
    },
    [lang]
  );

  /** 配列データ（services / strengths 等）をそのまま返す */
  const d = useCallback(
    (key) => TRANSLATIONS[lang]?.[key] ?? [],
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang: changeLang, t, d }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
