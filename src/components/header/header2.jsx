import React from "react";
import "./header2.css";

export default function Header2() {
  return (
    <div className="top-info-bar">
      <div className="top-info-container">
        <a href="#investor-relations" className="info-item">
          <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="9" cy="10" r="3" />
            <path d="M4 19c0-2.8 2.2-5 5-5s5 2.2 5 5" />
            <path d="M15 7v3M18 5v5M21 8v2" strokeLinecap="round" />
          </svg>
          <span>Investor Relations</span>
        </a>

        <a href="#about" className="info-item">
          <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M4 20h16M6 20V6a1 1 0 011-1h6a1 1 0 011 1v14M14 11h4a1 1 0 011 1v8" />
            <path d="M9 9h1M9 12h1M9 15h1M11 9h1M11 12h1M11 15h1" strokeLinecap="round" />
          </svg>
          <span>Բանկի մասին</span>
        </a>

        <a href="tel:+37410561111" className="info-item">
          <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
          </svg>
          <span>+374 10 56 11 11</span>
        </a>

        <a href="#branches" className="info-item">
          <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M12 21s-6-5.33-6-10a6 6 0 1112 0c0 4.67-6 10-6 10z" />
            <circle cx="12" cy="11" r="2" />
          </svg>
          <span>Մասնաճյուղեր</span>
        </a>

        <button type="button" className="search-btn" aria-label="Որոնում">
          <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
          </svg>
        </button>

        <button type="button" className="lang-btn">
          <span>ՀԱՅ</span>
          <span className="lang-arrow">▼</span>
        </button>
      </div>
    </div>
  );
}