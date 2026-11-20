import TopSegments from "./TopSegments";
import UtilityBar from "./UtilityBar";
import NavbarLogo from "./NavbarLogo";
import MainNav from "./MainNav";

export default function Header({ 
  activeSegment, 
  setActiveSegment, 
  langOpen, 
  setLangOpen, 
  lang, 
  setLang, 
  langs, 
  activeNav, 
  setActiveNav 
}) {
  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar__inner">
          <TopSegments activeSegment={activeSegment} setActiveSegment={setActiveSegment} />
          <UtilityBar 
            langOpen={langOpen} 
            setLangOpen={setLangOpen} 
            lang={lang} 
            setLang={setLang} 
            langs={langs} 
          />
        </div>
      </div>

      <div className="mainbar">
        <div className="container mainbar__inner">
          <NavbarLogo />
          <MainNav activeNav={activeNav} setActiveNav={setActiveNav} />
          <a href="#" className="cta">Օնլայն բանկինգ →</a>
        </div>
      </div>
    </header>
  );
}