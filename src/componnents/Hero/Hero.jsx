import { useState, useEffect, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./Hero.css";

const slides = [
  {
    id: 1,
    title: "AMP",
    text: "Քո վճարումների նոր արժույթը և մեր շնորհակալությունը քեզ: Կուտակիր AMP-եր քո ամենօրյա վճարումներից և կատարիր գնումներ AMP-երով",
    primaryBtn: "Ինչքա՞ն AMP ունեմ",
    secondaryBtn: "Իմանալ ավելին",
    image: "https://ameriabank.am/Portals/0/Images/mypoints/ameria-mypoint-arm.png",
  },
  {
    id: 3,
    title: "Անվճար քարտ՝ առանց բանկ գալու",
    text: "Դիմիր օնլայն, ստացիր անվճար Visa Classic կամ MasterCard Standard քարտ, բանկային հաշիվ և MyAmeria օնլայն/մոբայլ բանկինգ",
    primaryBtn: "Դիմել օնլայն",
    secondaryBtn: "Իմանալ ավելին",
    image: "https://ameriabank.am/Portals/0/Images/New-home/card-banner.png",
  },
  {
    id: 2,
    title: "MyAmeria Star",
    text: "Ստեղծիր քո աստղը։ Սկսիր քո գումարից և քո որոշումներից։ Բանկային քարտ և հավելված 6-18 տարեկանների համար",
    primaryBtn: "Ներբեռնել",
    secondaryBtn: "Իմանալ ավելին",
    image: "https://ameriabank.am/Portals/0/Images/myameria-kids/mystar-girls.png",
  },
];

function Hero() {
  const [current, setCurrent] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);

  const total = slides.length;
  const next = () => setCurrent((p) => (p + 1) % total);
  const prev = () => setCurrent((p) => (p - 1 + total) % total);


  useEffect(() => {
    if (dragging) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [current, dragging]);


  const handleStart = (clientX) => {
    setDragging(true);
    startX.current = clientX;
  };

  const handleMove = (clientX) => {
    if (!dragging) return;
    setDragX(clientX - startX.current);
  };

  const handleEnd = () => {
    if (!dragging) return;
    if (dragX < -80) next();       // քարշ ձախ → հաջորդ
    else if (dragX > 80) prev();   // քարշ աջ → նախորդ
    setDragging(false);
    setDragX(0);
  };

  return (
    <section
      className={`hero ${dragging ? "is-dragging" : ""}`}
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseMove={(e) => handleMove(e.clientX)}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onTouchEnd={handleEnd}
    >
      <div
        className="hero__track"
        style={{
          transform: `translateX(calc(${-current * 100}% + ${dragX}px))`,
          transition: dragging ? "none" : "transform 0.5s ease",
        }}
      >
        {slides.map((slide) => (
          <div className="hero__slide" key={slide.id}>
            <div className="hero__inner">
              <div className="hero__content">
                <h1 className="hero__title">{slide.title}</h1>
                <p className="hero__text">{slide.text}</p>
                <div className="hero__buttons">
                  <button className="hero__btn hero__btn--primary">
                    {slide.primaryBtn}
                  </button>
                  <button className="hero__btn hero__btn--secondary">
                    {slide.secondaryBtn}
                  </button>
                </div>
              </div>

              {slide.image && (
                <img
                  className="hero__image"
                  src={slide.image}
                  alt={slide.title}
                  draggable="false"
                />
              )}
            </div>
          </div>
        ))}
      </div>

      <button className="hero__arrow hero__arrow--left" onClick={prev} aria-label="Previous">
        <FiChevronLeft size={28} />
      </button>
      <button className="hero__arrow hero__arrow--right" onClick={next} aria-label="Next">
        <FiChevronRight size={28} />
      </button>

      <div className="hero__dots">
        {slides.map((s, index) => (
          <button
            key={s.id}
            className={`hero__dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;