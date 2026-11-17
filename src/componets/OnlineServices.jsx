import React, { useState } from 'react';
import './OnlineServices.css';

function OnlineServices() {
  const slides = [
    {
      id: 1,
      title: 'Ստեղծիր հաշիվ ու պատվիրիր քարտ՝ օնլայն',
      description:
        'Բացիր օնլայն հաշիվ և պատվիրիր անվճար քարտ րոպեների ընթացքում՝ առանց տնից դուրս գալու',
      linkText: 'Իմանալ ավելին',
      linkUrl: '#online-account',
    },
    {
      id: 2,
      title: 'Օնլայն վարկեր',
      description:
        'Ստացիր 100,000 ՀՀ դրամից մինչև 20 մլն ՀՀ դրամի վարկ՝ մի քանի րոպեում',
      linkText: 'Իմանալ ավելին',
      linkUrl: '#online-loans',
    },
    {
      id: 3,
      title: 'Օնլայն ապառիկ',
      description:
        'Կատարիր 50,000-ից մինչև 1,000,000 դրամի օնլայն գնումներ և ձևակերպիր օնլայն ապառիկ հաշված րոպեների ընթացքում։',
      linkText: 'Իմանալ ավելին',
      linkUrl: '#online-installment',
    },
    {
      id: 4,
      title: 'Օնլայն ավանդ',
      description:
        'Ձևակերպիր ավանդ օնլայն MyAmeria հավելվածով և ստացիր ավելի բարձր տոկոսադրույք',
      linkText: 'Իմանալ ավելին',
      linkUrl: '#online-deposit',
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + visibleCount < slides.length ? prev + 1 : prev
    );
  };

  const visibleSlides = slides.slice(startIndex, startIndex + visibleCount);

  return (
    <section className="online-services-section">
      <div className="online-services-container">
        <h2 className="online-main-title">Էլ ի՞նչ կարող ես անել օնլայն</h2>

        <div className="online-green-banner">
          <h3 className="online-banner-title">Թվային բանկինգ ու շատ ավելին</h3>

          <div className="online-slider-wrapper">
            <button
              type="button"
              className={`slider-arrow prev-arrow ${startIndex === 0 ? 'disabled' : ''}`}
              onClick={handlePrev}
              disabled={startIndex === 0}
              aria-label="Նախորդը"
            >
              ‹
            </button>

            <div className="online-cards-grid">
              {visibleSlides.map((card) => (
                <div key={card.id} className="online-white-card">
                  <div className="online-card-top">
                    <h4 className="online-card-title">{card.title}</h4>
                    <p className="online-card-desc">{card.description}</p>
                  </div>
                  <div className="online-card-bottom">
                    <a href={card.linkUrl} className="online-card-link">
                      {card.linkText}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              className={`slider-arrow next-arrow ${
                startIndex + visibleCount >= slides.length ? 'disabled' : ''
              }`}
              onClick={handleNext}
              disabled={startIndex + visibleCount >= slides.length}
              aria-label="Հաջորդը"
            >
              ›
            </button>
          </div>
        </div>

        <p className="online-updated-date">
          Թարմացված է <strong>01.04.2026 10:31</strong>
        </p>
      </div>
    </section>
  );
}

export default OnlineServices;