import React from "react";
import logo from "../../assets/img/logo.svg";
import photo1 from "../../assets/img/photographer-1.jpg";
import "./hero.scss";

export default function hero() {
  return (
    <div className="hero-container">
      <div className="hero-container__info">
        <img src={logo} alt="" className="logo" />
        <h1>Clara Luz</h1>
        <h5>Photographer</h5>

        <button className="see-my-work">Veja meu trabalho</button>
      </div>
      <div className="hero-container__photo">
        <img src={photo1} alt="" className="photo" />
      </div>
    </div>
  );
}
