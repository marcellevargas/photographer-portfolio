import React from "react";
import "./about-me.scss";
import photo2 from "../../assets/img/photographer-2.jpg";

export default function AboutMe() {
  return (
    <div className="aboutMe-container">
      <div className="aboutMe-container__image">
        <img src={photo2} alt="photographer" />
      </div>
      <div className="aboutMe-container__content">
        <h1>Sobre mim</h1>
        <p>
          Olá, eu sou a Clara. Ajudo clientes a transformar suas memórias em
          arte visual, capturando momentos únicos através da fotografia e
          criando conteúdo digital que eterniza suas experiências.
        </p>
      </div>
    </div>
  );
}
