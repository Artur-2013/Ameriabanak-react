export default function NavbarLogo() {
  return (
    <a href="#" className="logo" aria-label="Գլխավոր էջ">
      <span className="logo__mark">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M5 20L12 5l7 15" />
        </svg>
      </span>
      <span className="logo__text">
        <span className="logo__green">AMERIA</span>BANK
      </span>
    </a>
  );
}