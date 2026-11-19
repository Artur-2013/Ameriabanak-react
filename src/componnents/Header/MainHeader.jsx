const logo =
  "https://ameriabank.am/Portals/0/Logo/Ameriabank%20green.svg?ver=2020-06-23-132200-427";

function MainHeader() {
  const menu = [
    "Քարտեր",
    "Վարկեր",
    "Հաշիվներ",
    "Փոխանցումներ",
    "Խնայողություններ",
    "Թվային",
  ];

  return (
    <div className="main-header">
      <a href="#" className="main-header__logo">
        <img src={logo} alt="Ameriabank" />
      </a>

      <nav className="main-header__menu">
        {menu.map((item) => (
          <a key={item} href="#" className="main-header__item">
            {item}
          </a>
        ))}
      </nav>
    </div>
  );
}

export default MainHeader;