import { useState } from "react";
import { FiUser, FiBriefcase, FiPhone, FiMapPin, FiSearch } from "react-icons/fi";

function TopNav() {
  const [activeTab, setActiveTab] = useState("individuals");

  const tabs = [
    { id: "individuals", label: "Անհատներին" },
    { id: "business", label: "Բիզնեսին" },
    { id: "investment", label: "Ներդրումային" },
  ];

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
      </div>
    </div>
  );
}

export default TopNav;