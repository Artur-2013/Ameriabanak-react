const logo="https://ameriabank.am/Portals/0/Logo/Ameriabank%20green.svg?ver=2020-06-23-132200-427"

function MainHeader() {
  return (
    <div className="main-header">
      <a href="#" className="main-header__logo">
        <img src={logo} alt="Ameriabank" />
      </a>
    </div>
  );
}

export default MainHeader;