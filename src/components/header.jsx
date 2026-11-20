import { useState } from "react";
import "../App.css";

const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const IconUser = () => (
  <svg {...svgProps}>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    <path d="M17 6h4M19 4v4" />
  </svg>
);

const IconBuilding = () => (
  <svg {...svgProps}>
    <rect x="4" y="3" width="11" height="18" rx="1" />
    <path d="M15 9h5v12h-5M8 7h3M8 11h3M8 15h3M8 21v-3h3v3" />
  </svg>
);

const IconPhone = () => (
  <svg {...svgProps}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
);

const IconPin = () => (
  <svg {...svgProps}>
    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

const IconSearch = () => (
  <svg {...svgProps}>
    <circle cx="11" cy="11" r="7" />
    <path d="M20 20l-4-4" />
  </svg>
);

const topLinks = ["Անհատներին", "Բիզնեսին", "Ներդրումային"];

const utilityLinks = [
  { Icon: IconUser, label: "IR" },
  { Icon: IconBuilding, label: "Բանկի մասին" },
  { Icon: IconPhone, label: "+374 00 00 00 00" },
  { Icon: IconPin, label: "Մասնաճյուղեր" },
];

const mainNav = [
  { label: "Քարտեր", href: "#cards" },
  { label: "Վարկեր", href: "#loans" },
  { label: "Հաշիվներ", href: "#accounts" },
  { label: "Փոխանցումներ", href: "#transfers" },
  { label: "Խնայողություններ", href: "#savings" },
  { label: "Թվային", href: "#digital" },
];

export default function Header() {
  const [active, setActive] = useState("Խնայողություններ");
  const [lang, setLang] = useState("ՀԱՅ");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="hdr">
      {/* Վերին շերտ */}
      <div className="hdr-top">
        <div className="hdr-container hdr-top-inner">
          <nav className="hdr-top-links">
            {topLinks.map((t) => (
              <a key={t} href="#">{t}</a>
            ))}
          </nav>

          <div className="hdr-utils">
            {utilityLinks.map(({ Icon, label }) => (
              <a key={label} href="#" className="hdr-util">
                <span className="hdr-util-icon"><Icon /></span>
                {label}
              </a>
            ))}
            <button className="hdr-search" aria-label="Որոնում">
              <IconSearch />
            </button>
            <button
              className="hdr-lang"
              onClick={() => setLang(lang === "ՀԱՅ" ? "ENG" : "ՀԱՅ")}
            >
              {lang} <span className="hdr-caret" />
            </button>
          </div>
        </div>
      </div>

      {/* Հիմնական շերտ */}
      <div className="hdr-main">
        <div className="hdr-container hdr-main-inner">
          <a href="/" className="hdr-logo">
            <span className="hdr-logo-mark">Λ</span>
            <span className="hdr-logo-text">
              <b>AMERIA</b>BANK
            </span>
          </a>

          <nav className={`hdr-nav ${menuOpen ? "open" : ""}`}>
            {mainNav.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className={active === n.label ? "active" : ""}
                onClick={() => {
                  setActive(n.label);
                  setMenuOpen(false);
                }}
              >
                {n.label}
              </a>
            ))}
            <a href="#online" className="hdr-cta hdr-cta-mobile">
              Օնլայն ծառայություն <span>›</span>
            </a>
          </nav>

          <a href="#online" className="hdr-cta">
            Օնլայն ծառայություն <span>›</span>
          </a>

          <button
            className={`hdr-burger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Մենյու"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}