import React from "react";
import { ArrowRight } from "lucide-react";
import "./SpecialOffers.css";

const specialOffers = [
  {
    id: 1,
    title: "Բեր գույքի գրավով վարկ...",
    description: "Նվազեցրու գույքի գրավով վարկիդ տոկոսը",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    link: "#property-loan",
  },
  {
    id: 2,
    title: "Քո նոր մեքենան 0%...",
    description:
      "Արի mycar.am, ընտրիր քո մեքենան առաջնային շուկայից և ձևակերպիր օնլայն ավտովարկ 0% կանխավճարով ու ավելի ցածր ...",
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80",
    link: "#auto-loan",
  },
  {
    id: 3,
    title: "Amazon-ի 115 նվեր քարտ",
    description:
      "Միջազգային օնլայն ու օֆլայն գործարքներդ կատարիր քո Mastercard քարտով",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    link: "#amazon-gift-card",
  },
];

export default function SpecialOffers() {
  return (
    <section className="special-offers">
      <h2 className="special-offers__heading">Գործող հատուկ առաջարկներ</h2>

      <div className="special-offers__grid">
        {specialOffers.map((offer) => (
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