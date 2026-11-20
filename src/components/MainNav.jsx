export default function MainNav({ activeNav, setActiveNav }) {
  const navItems = ["Քարտեր", "Վարկեր", "Հաշիվներ", "Փոխանցումներ", "Խնայողություններ", "Թվային"];
  return (
    <nav className="nav" aria-label="Հիմնական մենյու">
      {navItems.map((item) => (
        <a
          key={item}
          href="#"
          className={`nav__link${item === activeNav ? " is-active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            setActiveNav(item);
          }}
        >
          {item}
        </a>
      ))}
    </nav>
  );
}   