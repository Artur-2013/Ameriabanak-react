import React, { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import "./SpecialOffers.css";

const allSpecialOffers = [
  {
    id: 1,
    title: "Բեր գույքի գրավով վարկ...",
    description: "Նվազեցրու գույքի գրավով վարկիդ տոկոսը",
    image:"https://ameriabank.am/Portals/0/Images/special-offers/refinance-arm.png",
    link: "#property-loan",
  },
  {
    id: 2,
    title: "Քո նոր մեքենան 0%...",
    description:
      "Արի mycar.am, ընտրիր քո մեքենան առաջնային շուկայից և ձևակերպիր օնլայն ավտովարկ 0% կանխավճարով ու ավելի ցածր ...",
    image:
      "https://ameriabank.am/Portals/0/Images/special-offers/car-down-payment-offer-arm.png",
    link: "#auto-loan",
  },
  {
    id: 3,
    title: "Amazon-ի 115 նվեր քարտ",
    description:
      "Միջազգային օնլայն ու օֆլայն գործարքներդ կատարիր քո Mastercard քարտով",
    image:
      "https://ameriabank.am/Portals/0/Images/campaigns/amazon-gift-card/amazon-special-offer-arm.png",
    link: "#amazon-gift-card",
  },
  {
    id: 4,
    title: "Բեր վարկերդ Ամերիա",
    description:"Ունեցիր 1 անգրավ վարկ՝ մինչև 20,000,000 ֏ սահմանաչափով։ Տեղափոխիր վարկերդ Ամերիա և ունեցիր ցածր տոկոսադրույք՝ 15% ...",
    image:"https://ameriabank.am/Portals/0/Images/special-offers/refinancing-loan-offer-arm.png",
    link: "#transfer-loans",
  },
  {
    id: 5,
    title: "Անվճար ArCa Classic քարտ",
    description:"2% քեշբեք քո վճարումներից։ Պատվիրիր Ամերիաբանկի ArCa անվճար քարտ և ամեն ամիս ստացիր մինչև 60 000 դրամ քեշբե...",
    image:"https://ameriabank.am/Portals/0/Images/special-offers/arca-offer.png",
    link: "#arca-classic",
  },
//   {
//     id: 6,
//     title: "Ճամփորդիր անհոգ",
//     description:
//       "Գնիր ճամփորդական փաթեթ MyPay-ով և ստացիր անվճար Fast Track և մուտք lounge սրահ Զվարթնոցում",
//     image:
//       "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
//     link: "#travel-carefree",
//   },
//   {
//     id: 7,
//     title: "200 կրթաթոշակ լավագու...",
//     description: "Ամսական 50,000 հազար ՀՀ դրամ 4 ամիս շարունակ",
//     image:
//       "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
//     link: "#scholarships",
//   },
//   {
//     id: 8,
//     title: "Ավելի բարձր %-ով ավանդ",
//     description:
//       "Բացիր ԱՄՆ դոլարով կուտակային ավանդ տարեկան մինչև 4,35%-ով և թող գումարդ ինքն իրեն ավելանա",
//     image:
//       "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
//     link: "#higher-deposit",
//   },
//   {
//     id: 9,
//     title: "Ամերիան արդեն Նորք-...",
//     description:
//       "Դարձիր Ամերիայի հաճախորդ նոր մասնաճյուղում մինչև 04.01.27թ. և օգտվիր հատուկ առաջարկից",
//     image:
//       "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
//     link: "#nork-branch",
//   },
//   {
//     id: 10,
//     title: "Student վարկ",
//     description:
//       "Ստացիր Student վարկ, ինքնուրույն վճարիր քո ուսման վարձը և սկսիր կառուցել քո մեծ ապագան",
//     image:
//       "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
//     link: "#student-loan",
//   },
//   {
//     id: 11,
//     title: "Դեպի Փարիզ Ամերիայի...",
//     description:
//       "Բացահայտիր Փարիզը Ամերիայի Visa քարտով․ ստացիր զեղչեր ու VIP ծառայություններ ռեստորանների, տեսարժան ...",
//     image:
//       "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
//     link: "#visa-paris",
//   },
//   {
//     id: 12,
//     title: "Դեպի Լոնդոն Ամերիայի...",
//     description:
//       "Բացահայտիր Լոնդոնը Ամերիայի Visa քարտով․ ստացիր զեղչեր ռեստորանների, տեսարժան վայրերի և ժամանցի համար",
//     image:
//       "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
//     link: "#visa-london",
//   },
];

const VISIBLE_COUNT = 3;

export default function SpecialOffers() {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev === 0 ? allSpecialOffers.length - VISIBLE_COUNT : prev - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      prev >= allSpecialOffers.length - VISIBLE_COUNT ? 0 : prev + 1
    );
  };

  const visibleOffers = allSpecialOffers.slice(
    startIndex,
    startIndex + VISIBLE_COUNT
  );

  return (
    <section className="special-offers">
      <div className="special-offers__header">
        <h2 className="special-offers__heading">Գործող հատուկ առաջարկներ</h2>

        <div className="special-offers__controls">
          <button
            type="button"
            className="special-offers__nav-btn"
            onClick={handlePrev}
            aria-label="Նախորդ առաջարկները"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            className="special-offers__nav-btn"
            onClick={handleNext}
            aria-label="Հաջորդ առաջարկները"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="special-offers__grid">
        {visibleOffers.map((offer) => (
          <article key={offer.id} className="special-offers__card">
            <div className="special-offers__img-wrap">
              <img
                src={offer.image}
                alt={offer.title}
                className="special-offers__img"
              />
            </div>

            <div className="special-offers__body">
              <a href={offer.link} className="special-offers__title-row">
                <h3 className="special-offers__title">{offer.title}</h3>
                <ArrowRight
                  size={18}
                  className="special-offers__arrow"
                  strokeWidth={2}
                />
              </a>

              <p className="special-offers__desc">{offer.description}</p>

              <a href={offer.link} className="special-offers__btn">
                Իմանալ ավելին
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}