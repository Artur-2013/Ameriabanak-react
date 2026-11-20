import React from "react";
import "./bank5.css";

export default function Bank5() {
  return (
    <div className="pension-card-box">
      <div className="pension-card-left">
        <div className="pension-card-header">
          <span className="pension-badge">Նորույթ</span>
          <h2 className="pension-title">Ամերիա կենսաթոշակային քարտ</h2>
          <span className="pension-system">arca</span>
        </div>

        <p className="pension-description">
          Տրամադրվում է թոշակառուներին: Նախատեսված է անկանխիկ վճարումներ, կանխիկացում կատարելու համար Arca վճարային համակարգում: Տրամադրվում է միայն ՀՀ դրամով:
        </p>

        <div className="pension-stats">
          <div className="pension-stat-item">
            <div className="pension-stat-value">10 տարի</div>
            <div className="pension-stat-label">Գործողության ժամկետ</div>
          </div>

          <div className="pension-stat-item">
            <div className="pension-stat-value">0%</div>
            <div className="pension-stat-label">Կանխիկացում Բանկի բանկոմատներում</div>
          </div>

          <div className="pension-stat-item">
            <div className="pension-stat-value">ՀՀ դրամով</div>
            <div className="pension-stat-label">Արժույթ</div>
          </div>
        </div>

        <div className="pension-actions">
          <a href="#order" className="btn-order">Պատվիրիր մասնաճյուղում</a>
          <a href="#more" className="btn-more">Իմացիր ավելին</a>
        </div>
      </div>

      <div className="pension-card-right">
        <div className="visual-card">
          <div className="visual-card-top">
            <span className="visual-brand">Λ AMERIABANK</span>
            <span className="visual-contactless">)))</span>
          </div>
          <div className="visual-chip"></div>
          <span className="visual-side-text">bank about you</span>
          <span className="visual-arca">arca</span>
        </div>
      </div>
    </div>
  );
}