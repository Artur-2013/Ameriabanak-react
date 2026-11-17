import React, { useState, useEffect } from 'react';
import './DigitalCards.css';

function DigitalCards() {
  const words = ['Home', 'Car', 'Invest', 'Business'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="digital-cards-section">
      <div className="digital-cards-container">
        {/* Ձախ քարտը վիդեոյով (առանց ավելորդ տեքստի) */}
        <a href="#mypay" className="promo-card mypay-card">
          <video
            className="mypay-bg-video"
            src="https://ameriabank.am/Portals/0/Images/campaigns/mycampaigns/video-mycampaigns.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </a>

        {/* Աջ քարտը (My Home / My Car) */}
        <a href="#myecosystem" className="promo-card my-dynamic-card">
          <div className="my-dynamic-content">
            <span className="my-static-word">My</span>
            <div className="my-rolling-wrapper">
              <div
                className="my-rolling-list"
                style={{ transform: `translateY(-${index * 48}px)` }}
              >
                {words.map((word, i) => (
                  <span key={i} className="my-green-word">
                    {word}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

export default DigitalCards;