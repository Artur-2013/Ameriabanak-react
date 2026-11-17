import { useState } from "react";

function TopNav() {
  const [activeTab, setActiveTab] = useState("individuals");

  const tabs = [
    { id: "individuals", label: "Անհատներին" },
    { id: "business", label: "Բիզնեսին" },
    { id: "investment", label: "Ներդրումային" },
  ];

  return (
    <nav className="top-nav">
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
  );
}

export default TopNav;