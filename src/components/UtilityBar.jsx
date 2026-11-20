export default function UtilityBar({ langOpen, setLangOpen, lang, setLang, langs }) {
  return (
    <div className="utility">
      <a href="#" className="utility__item">IR</a>
      <a href="#" className="utility__item">Բանկի մասին</a>
      <a href="tel:+37410561111" className="utility__item">+374 10 56 11 11</a>
      <a href="#" className="utility__item">Մասնաճյուղեր</a>
      
      <div className="lang">
        <button
          type="button"
          className="lang__button"
          onClick={() => setLangOpen((o) => !o)}
        >
          {lang}
          <span className={`lang__caret${langOpen ? " is-open" : ""}`} />
        </button>
        {langOpen && (
          <ul className="lang__menu">
            {langs.map((l) => (
              <li key={l}>
                <button
                  type="button"
                  onClick={() => {
                    setLang(l);
                    setLangOpen(false);
                  }}
                >
                  {l}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}