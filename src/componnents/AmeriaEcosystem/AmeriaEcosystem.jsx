import React, { useState } from "react";
import "./AmeriaEcosystem.css";

const ecosystemTabs = [
  {
    id: "myhome",
    label: "MyHome",
    title: "MyHome",
    subtitle: "Տուն գնելը երբեք այսքան հեշտ չի եղել",
    description:
      "Ընտրի՛ր քո նոր բնակարանը, ստացի՛ր վարկային հայտի պատասխանն օնլայն մի քանի րոպեում, այցելի՛ր նոտարական գրասենյակ և ստորագրի՛ր...",
    buttonText: "Իմանալ ավելին",
    bgImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "mycar",
    label: "MyCar",
    title: "MyCar",
    subtitle: "Ավտոմեքենա գնելու ամենահարմար հարթակը",
    description:
      "Ընտրի՛ր քո երազանքի ավտոմեքենան, համեմատի՛ր առաջարկները և ձևակերպի՛ր ավտովարկն օնլայն՝ հաշված րոպեների ընթացքում:",
    buttonText: "Իմանալ ավելին",
    bgImage:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "myinvest",
    label: "MyInvest",
    title: "MyInvest",
    subtitle: "Ներդրումներ միջազգային շուկաներում",
    description:
      "Ձեռք բե՛ր բաժնետոմսեր, պարտատոմսեր և այլ ֆինանսական գործիքներ անմիջապես MyAmeria հավելվածից՝ պարզ և ապահով:",
    buttonText: "Իմանալ ավելին",
    bgImage:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "mybusiness",
    label: "MyBusiness",
    title: "MyBusiness",
    subtitle: "Բիզնեսի կառավարման թվային գործիքներ",
    description:
      "Բացի՛ր բիզնես հաշիվ օնլայն, կառավարի՛ր դրամական հոսքերը և օգտվի՛ր բիզնես վարկավորման ճկուն լուծումներից:",
    buttonText: "Իմանալ ավելին",
    bgImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function AmeriaEcosystem() {
  const [activeTab, setActiveTab] = useState("myhome");

  const current =
    ecosystemTabs.find((tab) => tab.id === activeTab) || ecosystemTabs[0];

  return (
    <section
      className="ecosystem"
      style={{ backgroundImage: `url(${current.bgImage})` }}
    >
      <div className="ecosystem__overlay">
        <div className="ecosystem__top">
          <h2 className="ecosystem__title">{current.title}</h2>
          <p className="ecosystem__subtitle">{current.subtitle}</p>
          <p className="ecosystem__desc">{current.description}</p>
          <button type="button" className="ecosystem__cta">
            {current.buttonText}
          </button>
        </div>

        <div className="ecosystem__phone-frame" aria-hidden="true">
          <div className="ecosystem__phone-controls">
            <span className="ecosystem__circle ecosystem__circle--active">+</span>
            <span className="ecosystem__circle">→</span>
            <span className="ecosystem__circle">−</span>
          </div>
        </div>

        <div className="ecosystem__tabs">
          {ecosystemTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`ecosystem__tab ${
                tab.id === activeTab ? "is-active" : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}