import React from "react";
import devLogo from "../../assets/img/dark mode logo.png";
import "./footer.scss";

export default function Footer() {
  return (
    <div className="footer-container">
      <p>developed by:</p>
      <a href="https://marcellevargas.bio/portfolio">
        <img src={devLogo}/>
      </a>
    </div>
  );
}
