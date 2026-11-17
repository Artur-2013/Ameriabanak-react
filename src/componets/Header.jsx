import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="main-header">
      <div className="header-container">
        {/* Ամերիաբանկի լոգո */}
        <div className="logo-wrapper">
          <Link to="/" className="logo-link">
            <div className="logo-icon">
              <span>∧</span>
            </div>
            <span className="logo-text">AMERIA<span className="logo-bold">BANK</span></span>
          </Link>
        </div>

        {/* Մենյուի հղումներ */}
        <nav className="nav-menu">
          <Link to="/cards" className="nav-item">Քարտեր</Link>
          <Link to="/loans" className="nav-item">Վարկեր</Link>
          <Link to="/accounts" className="nav-item">Հաշիվներ</Link>
          <Link to="/transfers" className="nav-item">Փոխանցումներ</Link>
          <Link to="/savings" className="nav-item">Խնայողություններ</Link>
          <Link to="/digital" className="nav-item digital-link">Թվային</Link>
        </nav>

        {/* Օնլայն բանկինգ կոճակ */}
        <div className="header-action">
          <a href="#online-banking" className="online-banking-btn">
            <span>Օնլայն բանկինգ</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;