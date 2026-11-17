import { useState, useRef, useEffect } from "react";
import { FiUser, FiBriefcase, FiPhone, FiMapPin, FiSearch } from "react-icons/fi";

function TopNav() {
  const [activeTab, setActiveTab] = useState("individuals");
  const [lang, setLang] = useState("ՀԱՅ");
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);

  const tabs = [
    { id: "individuals", label: "Անհատներին" },
    { id: "business", label: "Բիզնեսին" },
    { id: "investment", label: "Ներդրումային" },
  ];

  const languages = ["ՀԱՅ", "ENG", "РУС"];

  // դրսում սեղմելիս փակել ցանկը
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="top-nav">
      <nav className="top-nav__tabs">
        {tabs.map((tab) => (
          <a
            key={tab.id}
            href="#"
            className={`top-nav__tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              setActiveTab(tab.id);
            }}
          >
            {tab.label}
          </a>
        ))}
      </nav>

      <div className="top-nav__right">
        <a href="#" className="top-nav__link">
          <FiUser size={20} /> <span>IR</span>
        </a>
        <a href="#" className="top-nav__link">
          <FiBriefcase size={20} /> <span>Բանկի մասին</span>
        </a>
        <a href="tel:+37410561111" className="top-nav__link">
          <FiPhone size={20} /> <span>+374 10 56 11 11</span>
        </a>
        <a href="#" className="top-nav__link">
          <FiMapPin size={20} /> <span>Մասնաճյուղեր</span>
        </a>
        <button className="top-nav__search" aria-label="Search">
          <FiSearch size={24} />
        </button>

        <div className="top-nav__lang" ref={langRef}>
          <button
            className="top-nav__lang-btn"
            onClick={() => setLangOpen(!langOpen)}
          >
            {lang}
            <span className={`top-nav__arrow ${langOpen ? "open" : ""}`}></span>
          </button>

          {langOpen && (
            <ul className="top-nav__lang-list">
              {languages.map((l) => (
                <li
                  key={l}
                  className={l === lang ? "selected" : ""}
                  onClick={() => {
                    setLang(l);
                    setLangOpen(false);
                  }}
                >
                  {l}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopNav;