import React from "react";
import "./bank4.css";

export default function Bank4() {
  return (
    <section className="planet-banner-wrapper">
      <div className="planet-banner">
        <div className="planet-banner-text">
          <h2 className="planet-banner-title">
            Մոլորա՞կ, թե՞ պլաստիկ
            <br />
            Ընտրիր մոլորակը
          </h2>
          <p className="planet-banner-desc">
            Դարձիր ճանաչվող և ապահովիր Visa Digital անվճար քարտ, ստացիր 2000Դ քարտի...
          </p>
        </div>

        <div className="planet-banner-art">
          <img
            src="https://placehold.co/300x140/35688f/ffffff?text=Planet+Graphic"
            alt="Ընտրիր մոլորակը"
            className="planet-banner-img"
          />
        </div>
      </div>

      <div className="floating-help-box">Հարցեր ունե՞ս</div>
      <button type="button" className="floating-chat-btn" aria-label="Chat">
        💬
      </button>
    </section>
  );
}