import "./PromoCards.css";

const card = {
  title: "Օնլայն վարկեր",
  text: "Նոր հնարավորություններ քո նոր գաղափարների համար",
  btn: "Իմանալ ավելին",
  image: "https://ameriabank.am/Portals/0/Images/calculators/computer.png", // լափթոփի նկարի հասցե կամ import
};

function PromoCards() {
  return (
    <section className="promo">
      <div className="promo__card">
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
    </section>
  );
}

export default PromoCards;