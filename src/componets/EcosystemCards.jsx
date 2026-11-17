import React from 'react';
import './EcosystemCards.css';

function EcosystemCards() {
  const items = [
    {
      id: 'myameria',
      img: 'https://ameriabank.am/Portals/0/Images/campaigns/mycampaigns/myameria.png',
      alt: 'MYAMERIA',
      text: 'Բանկային ու ոչ բանկային գործարքներ կատարելու քո հավելվածը',
      primaryBtn: 'Մուտք MyAmeria',
      secondaryBtn: 'Իմանալ ավելին',
      primaryLink: '#myameria-login',
      secondaryLink: '#myameria-info',
    },
    {
      id: 'myhome',
      img: 'https://ameriabank.am/Portals/0/Images/campaigns/mycampaigns/home.png',
      alt: 'MYHOME',
      text: 'Տուն գնելու, վաճառելու և վարձակալելու քո օնլայն հարթակը',
      primaryBtn: 'Դիմել օնլայն',
      secondaryBtn: 'Իմանալ ավելին',
      primaryLink: '#myhome-apply',
      secondaryLink: '#myhome-info',
    },
    {
      id: 'mycar',
      img: 'https://ameriabank.am/Portals/0/Images/campaigns/mycampaigns/car.png',
      alt: 'MYCAR',
      text: 'Մեքենա գնելու և վաճառելու քո օնլայն հարթակը',
      primaryBtn: 'Դիմել օնլայն',
      secondaryBtn: 'Իմանալ ավելին',
      primaryLink: '#mycar-apply',
      secondaryLink: '#mycar-info',
    },
  ];

  return (
    <section className="ecosystem-section">
      <div className="ecosystem-container">
        {items.map((item) => (
          <div key={item.id} className="ecosystem-card">
            {/* Նկարի հատված */}
            <div className="ecosystem-img-box">
              <img src={item.img} alt={item.alt} />
            </div>

            {/* Նկարագրության տեքստ */}
            <p className="ecosystem-description">{item.text}</p>

            {/* Կոճակների հատված */}
            <div className="ecosystem-actions">
              <a href={item.primaryLink} className="eco-btn eco-btn-green">
                {item.primaryBtn}
              </a>
              <a href={item.secondaryLink} className="eco-btn eco-btn-outline">
                {item.secondaryBtn}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EcosystemCards;