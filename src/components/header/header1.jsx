import React from "react";
import "./header1.css";

export default function Header1() {
  return (
    <div className="top-bar">
      <div className="top-bar-container">
        <nav className="top-bar-nav">
          <a href="#individuals" className="top-bar-link active">ԱՆՀԱՏՆԵՐԻՆ</a>
          <a href="#business" className="top-bar-link">ԲԻԶՆԵՍԻՆ</a>
          <a href="#investment" className="top-bar-link">ՆԵՐԴՐՈՒՄԱՅԻՆ</a>
        </nav>
      </div>
    </div>
  );
}