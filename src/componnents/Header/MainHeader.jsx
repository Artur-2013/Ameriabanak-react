import { useState, useRef, useEffect } from "react";

const logo =
  "https://ameriabank.am/Portals/0/Logo/Ameriabank%20green.svg?ver=2020-06-23-132200-427";
const myAmeriaIcon =
  "https://ameriabank.am/Portals/0/Icons/Redesign/myameria.png";
const internetBankIcon =
  "https://ameriabank.am/Portals/0/Icons/Redesign/Internet-bank.png";

function MainHeader() {
  const [open, setOpen] = useState(false);
  const dropRef = useRef(null);

  const menu = [
    "Քարտեր",
    "Վարկեր",
    "Հաշիվներ",
    "Փոխանցումներ",
    "Խնայողություններ",
    "Թվային",
  ];

  const bankingItems = [
    { label: "Ինտերնետ բանկինգ", icon: internetBankIcon, href: "#" },
    { label: "MyAmeria", icon: myAmeriaIcon, href: "#" },
  ];

  // դրսում սեղմելիս փակել
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="main-header">
      <a href="#" className="main-header__logo">
        <img src={logo} alt="Ameriabank" />
      </a>

      <nav className="main-header__menu">
        {menu.map((item) => (
          <a key={item} href="#" className="main-header__item">
            {item}
          </a>
        ))}
      </nav>

      <div className="online-bank" ref={dropRef}>
        <button className="online-bank__btn" onClick={() => setOpen(!open)}>
          Օնլայն բանկինգ
          <span className={`online-bank__arrow ${open ? "open" : ""}`}></span>
        </button>

        {open && (
          <ul className="online-bank__list">
            {bankingItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="online-bank__link">
                  <img src={item.icon} alt={item.label} />
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default MainHeader;