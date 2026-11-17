import React from 'react';
import './TopBar.css';

function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-container">
        {/* Ձախ կողմի բաժիններ */}
        <div className="top-bar-left">
          <span className="top-link active">ԱՆՀԱՏՆԵՐԻՆ</span>
          <span className="top-link">ԲԻԶՆԵՍԻՆ</span>
          <span className="top-link">ՆԵՐԴՐՈՒՄԱՅԻՆ</span>
        </div>

        {/* Աջ կողմի հղումներ և տեղեկություններ */}
        <div className="top-bar-right">
          <a href="#ir" className="top-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="9" cy="7" r="3" />
              <path d="M4 19v-1a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1" />
              <line x1="17" y1="8" x2="17" y2="11" />
              <line x1="20" y1="6" x2="20" y2="11" />
              <line x1="23" y1="9" x2="23" y2="11" />
            </svg>
            <span>IR</span>
          </a>

          <a href="#about" className="top-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="4" y="3" width="10" height="18" rx="1" />
              <rect x="14" y="8" width="6" height="13" rx="1" />
              <line x1="7" y1="7" x2="7.01" y2="7" />
              <line x1="11" y1="7" x2="11.01" y2="7" />
              <line x1="7" y1="11" x2="7.01" y2="11" />
              <line x1="11" y1="11" x2="11.01" y2="11" />
              <line x1="7" y1="15" x2="7.01" y2="15" />
              <line x1="11" y1="15" x2="11.01" y2="15" />
            </svg>
            <span>Բանկի մասին</span>
          </a>

          <a href="tel:+37410561111" className="top-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>+374 10 56 11 11</span>
          </a>

          <a href="#branches" className="top-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>Մասնաճյուղեր</span>
          </a>

          <button className="top-icon-btn" aria-label="Որոնել">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="11" cy="11" r="7" />
              <line x1="20" y1="20" x2="16.2" y2="16.2" />
            </svg>
          </button>

          <div className="language-selector">
            <span>ՀԱՅ</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="#68b742">
              <polygon points="4 8 20 8 12 17" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;