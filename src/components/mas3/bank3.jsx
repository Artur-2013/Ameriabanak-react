import React from "react";
import "./bank3.css";

export default function Bank3() {
  return (
    <section className="hero-cards-section">
      <div className="feedback-tab">Ասա կարծիքդ</div>

      <div className="hero-cards-container">
        <div className="hero-cards-content">
          <h1 className="hero-cards-title">Վճարային քարտեր</h1>
          <p className="hero-cards-desc">
            Դիմիր առցանց, ստացիր անվճար Arca Classic, Visa Classic կամ Mastercard Standard քարտ
          </p>
          <a href="#apply" className="hero-cards-btn">
            Դիմիր հիմա
          </a>
        </div>

        <div className="hero-cards-visual">
          <img
            src="https://placehold.co/520x360/eef2f5/555555?text=Card+Holder+Image"
            alt="Վճարային քարտեր"
            className="hero-cards-img"
          />
        </div>
      </div>
    </section>
  );
}