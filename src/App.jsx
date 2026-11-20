
import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

const SEGMENTS = ["Անհատներին", "Բիզնեսին", "Ներդրումային"];
const LANGS = ["ՀԱՅ", "РУС", "ENG"];

export default function App() {
  const [activeNav, setActiveNav] = useState("Վարկեր");
  const [activeSegment, setActiveSegment] = useState(SEGMENTS[0]);
  const [lang, setLang] = useState(LANGS[0]);
  const [langOpen, setLangOpen] = useState(false);

  return (
    <div className="app-wrapper">
      <Header 
        activeSegment={activeSegment}
        setActiveSegment={setActiveSegment}
        langOpen={langOpen}
        setLangOpen={setLangOpen}
        lang={lang}
        setLang={setLang}
        langs={LANGS}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
      />

      <MainContent activeNav={activeNav} />

      <Footer />
    </div>
  );
}