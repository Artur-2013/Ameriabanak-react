import React from 'react';
import './DigitalHero.css';

function DigitalHero() {
  return (
    <section className="digital-hero">
      {/* Ձախ եզրի ուղղահայաց նարնջագույն կոճակ */}
      <button className="feedback-side-btn">
        Ասա կարծիքդ
      </button>

      <div className="digital-hero-container">
        {/* Ձախ կողմի տեքստային հատված */}
        <div className="digital-hero-text">
          <h1 className="digital-hero-title">Իմ թվային Ամերիան</h1>
          <p className="digital-hero-subtitle">
            Ավելին, քան բանկինգ․ քո թվային էկոհամակարգը
          </p>
        </div>

        {/* Աջ կողմի նկարը */}
        <div className="digital-hero-image">
          <img 
            src="https://ameriabank.am/Portals/0/Images/campaigns/mycampaigns/digital-ameria-web.png" 
            alt="Իմ թվային Ամերիան" 
          />
        </div>
      </div>

      {/* Ներքևի աջ անկյան կոճակ */}
      <button className="questions-floating-btn">
        Հարցեր ունե՞ս
      </button>
    </section>
  );
}

export default DigitalHero;