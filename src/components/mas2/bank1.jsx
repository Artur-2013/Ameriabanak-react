import React from "react";
import "./bank1.css";

export default function Bank1() {
  return (
    <div className="main-nav-left">
      <a href="#home" className="brand-logo">
        <span className="logo-icon">Λ</span>
        <span className="logo-text">
          <span className="logo-green">ΛMERIΛ</span>
          <span className="logo-black">BΛNK</span>
        </span>
      </a>

      <nav className="main-links">
        <a href="#cards" className="main-link-item">Քարտեր</a>
        <a href="#loans" className="main-link-item">Վարկեր</a>
        <a href="#accounts" className="main-link-item">Հաշիվներ</a>
        <a href="#transfers" className="main-link-item">Փոխանցումներ</a>
        <a href="#savings" className="main-link-item">Խնայողություններ</a>
        <a href="#digital" className="main-link-item">Թվային</a>
      </nav>
    </div>
  );
}