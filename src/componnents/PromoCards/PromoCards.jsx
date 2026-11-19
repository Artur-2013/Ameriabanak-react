import "./PromoCards.css";

const cards = [
  {
    id: 1,
    title: "Օնլայն վարկեր",
    text: "Նոր հնարավորություններ քո նոր գաղափարների համար",
    btn: "Իմանալ ավելին",
    variant: "green",
    image: "https://ameriabank.am/Portals/0/Images/calculators/computer.png", // նկարի հասցե կամ import
  },
  {
    id: 2,
    title: "Stop գործիքներ",
    text: "Քո ֆինանսների անվտանգության համար",
    btn: "Իմանալ ավելին",
    variant: "blue",
    image: "https://ameriabank.am/Portals/0/Images/contact-us/stop.png",
  },
];

function PromoCards() {
  return (
    <section className="promo">
      {cards.map((card) => (
        <div key={card.id} className={`promo__card promo__card--${card.variant}`}>
          <div className="promo__content">
            <h3 className="promo__title">{card.title}</h3>
            <p className="promo__text">{card.text}</p>
            <a href="#" className="promo__btn">
              {card.btn}
            </a>
          </div>

          {card.image && (
            <img className="promo__image" src={card.image} alt={card.title} />
          )}
        </div>
      ))}
    </section>
  );
}

export default PromoCards;