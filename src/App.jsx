import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Service from "./pages/Service";
import Recruit from "./pages/Recruit";
import News from "./pages/News";
import Contact from "./pages/Contact";

/**
 * ハッシュベースのシンプルなルーター。
 * Next.js / React Router への移行を前提に、hash を読み替えるだけのラッパーにしている。
 */
const useHashRoute = () => {
  const [hash, setHash] = useState(() =>
    typeof window !== "undefined" ? window.location.hash || "#/" : "#/"
  );
  useEffect(() => {
    const onChange = () => {
      setHash(window.location.hash || "#/");
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return hash;
};

export default function App() {
  const hash = useHashRoute();
  const page = useMemo(() => {
    if (hash.startsWith("#/company")) return <Company />;
    if (hash.startsWith("#/service")) return <Service />;
    if (hash.startsWith("#/recruit")) return <Recruit />;
    if (hash.startsWith("#/news")) return <News />;
    if (hash.startsWith("#/contact")) return <Contact />;
    return <Home />;
  }, [hash]);

  return (
    <>
      <Header />
      <main>{page}</main>
      <Footer />
    </>
  );
}
