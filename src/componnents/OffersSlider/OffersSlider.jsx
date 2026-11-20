import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./OffersSlider.css";

const offersData = [
  {
    title: "Ամերիան առաջինն է",
    description:
      "Միացի՛ր Ամերիա Սերունդ ծրագրին, ստացի՛ր եռամսյա վճարովի ուսուցում և հնարավորություն՝ սկսելու քո կարիերան Ամերիայում:",
    primaryBtn: "Դիմել հիմա",
    secondaryBtn: "Իմանալ ավելին",
    image: "https://ameriabank.am/Portals/0/Images/generation/gen-a-23/special.jpg",
  },
  {
    title: "Մոլորա՛կ, թե՛ պլաստիկ. Ընտրիր մոլորակը",
    description:
      "Դարձի՛ր հաճախորդ և պատվիրի՛ր Visa Digital անվճար քարտ, ստացի՛ր 2000Դ քարտի տպագրման գումարը քո քարտին",
    primaryBtn: "Պատվիրել Visa Digital",
    secondaryBtn: "Իմանալ ավելին",
    image: "https://ameriabank.am/Portals/0/Images/home-campaigns/eco-digital-cards-arm.png",
  },
  {
    title: "Օնլայն ապառիկ",
    description:
      "Ընտրի՛ր կահույք, տեխնիկա կամ շինանյութ Vega, Vesta, VLV, Zigzag, REDstore և այլ խանութների կայքերից և ձևակերպի՛ր Ամերիա օնլայն ապառիկ ավելի ցածր 17%-ով:",
    secondaryBtn: "Իմանալ ավելին",
    image: "https://ameriabank.am/Portals/0/Images/home-campaigns/online-consumer-loan.png",
  },
  {
    title: "UBPay արագ դրամական փոխանցումներ",
    description:
      "Հեռավորությունն այլևս խնդիր չէ. ստացի՛ր ու ուղարկի՛ր փոխանցումներ դեպի ՌԴ, Կիպրոս, Հունաստան, Ղազախստան, Ուզբեկստան և Իսրայել ու հակառակ ուղղությամբ:",
    secondaryBtn: "Իմանալ ավելին",
    image: "https://ameriabank.am/Portals/0/Images/home-campaigns/ubpay-arm.png",
  },
  {
    title: "Ամերիա Մանկական ավանդ",
    description:
      "ԱՎԱՆԴույթ դարձրու լավ պահերն ու ակնթարթները կուտակելն ու երեխաներիդ փոխանցելը",
    primaryBtn: "Դառնալ հաճախորդ",
    secondaryBtn: "Իմանալ ավելին",
    image: "https://ameriabank.am/Portals/0/Images/home-campaigns/grandad.png",
  },
  {
    title: "Քո քարտերի բոլոր արտոնությունները",
    description:
      "Զգա՛ քեզ ապահով ու հոգատար ձեռքերում աշխարհի որ անկյունում էլ լինես",
    primaryBtn: "Դիմել օնլայն",
    secondaryBtn: "Իմանալ ավելին",
    image: "https://ameriabank.am/Portals/0/Images/home-campaigns/cardbenefits.png",
  },
];

export default function OffersSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? offersData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === offersData.length - 1 ? 0 : prev + 1));
  };

  const item = offersData[currentIndex];

  return (
    <section className="offers-slider">
      <div className="offers-slider__box">
        <button
          type="button"
          className="offers-slider__nav offers-slider__nav--prev"
          onClick={handlePrev}
          aria-label="Նախորդը"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="offers-slider__text">
          <h2 className="offers-slider__title">{item.title}</h2>
          <p className="offers-slider__desc">{item.description}</p>
          <div className="offers-slider__btns">
            {item.primaryBtn && (
              <button type="button" className="offers-slider__btn offers-slider__btn--green">
                {item.primaryBtn}
              </button>
            )}
            {item.secondaryBtn && (
              <button type="button" className="offers-slider__btn offers-slider__btn--outline">
                {item.secondaryBtn}
              </button>
            )}
          </div>
        </div>

        <div className="offers-slider__visual">
          <img src={item.image} alt={item.title} className="offers-slider__img" />
        </div>

        <button
          type="button"
          className="offers-slider__nav offers-slider__nav--next"
          onClick={handleNext}
          aria-label="Հաջորդը"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="offers-slider__dots">
        {offersData.map((offer, idx) => (
          <button
            key={offer.image}
            type="button"
            className={`offers-slider__dot ${idx === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Սլայդ ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}