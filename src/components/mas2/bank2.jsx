import React from "react";
import "./bank2.css";

export default function Bank2() {
  return (
    <div className="main-nav-right">
      <a href="#online-banking" className="online-banking-btn">
        <span>Օնլայն բանկինգ</span>
        <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  );
}