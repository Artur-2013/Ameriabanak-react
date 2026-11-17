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
    {
      id: 'myinvest',
      img: 'https://ameriabank.am/Portals/0/Images/campaigns/mycampaigns/invest.png',
      alt: 'MYINVEST',
      text: 'Ներդրումներ կատարելու քո օնլայն հարթակը',
      primaryBtn: 'Բացել հիմա',
      secondaryBtn: 'Իմանալ ավելին',
      primaryLink: '#myinvest-open',
      secondaryLink: '#myinvest-info',
    },
    {
      id: 'mybusiness',
      img: 'https://ameriabank.am/Portals/0/Images/campaigns/mycampaigns/business.png',
      alt: 'MYBUSINESS',
      text: 'Բիզնեսը կառավարելու քո օնլայն հարթակը',
      primaryBtn: 'Դիմել հիմա',
      secondaryBtn: 'Իմանալ ավելին',
      primaryLink: '#mybusiness-apply',
      secondaryLink: '#mybusiness-info',
    },
    {
      id: 'myameriastar',
      img: 'https://ameriabank.am/Portals/0/Images/campaigns/mycampaigns/star.png',
      alt: 'MYAMERIA STAR',
      text: 'Գումարը կառավարելու երեխաների հավելվածը',
      primaryBtn: 'Դիմել օնլայն',
      secondaryBtn: 'Իմանալ ավելին',
      primaryLink: '#myameriastar-apply',
      secondaryLink: '#myameriastar-info',
    },
    {
      id: 'mypay',
      img: 'https://ameriabank.am/Portals/0/Images/campaigns/mycampaigns/pay.png',
      alt: 'MYPAY',
      text: 'Գնելու և մաս-մաս վճարելու քո օնլայն գործիքը',
      primaryBtn: 'Դիմել հիմա',
      secondaryBtn: 'Իմանալ ավելին',
      primaryLink: '#mypay-apply',
      secondaryLink: '#mypay-info',
    },
    {
      id: 'myeventhub',
      img: 'https://ameriabank.am/Portals/0/Images/campaigns/mycampaigns/myeventhub.png',
      alt: 'MYEVENTHUB',
      text: 'Քո սիրելի միջոցառումներին և փորձառություններին միանալու օնլայն հարթակը',
      primaryBtn: 'Գնել տոմս',
      secondaryBtn: 'Իմանալ ավելին',
      primaryLink: '#myeventhub-buy',
      secondaryLink: '#myeventhub-info',
    },
    {
      id: 'mytour',
      img: 'https://ameriabank.am/Portals/0/Images/campaigns/mycampaigns/mytour.png',
      alt: 'MYTOUR',
      text: 'Ուղևորությունդ պլանավորելու քո օնլայն հարթակը',
      primaryBtn: 'Ամրագրել օնլայն',
      secondaryBtn: 'Իմանալ ավելին',
      primaryLink: '#mytour-book',
      secondaryLink: '#mytour-info',
    },
  ];

  return (
    <section className="ecosystem-section">
      <div className="ecosystem-container">
        {items.map((item) => (
          <div key={item.id} className="ecosystem-card">
            <div className="ecosystem-img-box">
              <img src={item.img} alt={item.alt} />
            </div>
            <p className="ecosystem-description">{item.text}</p>
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