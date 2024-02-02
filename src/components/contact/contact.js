import React from "react";
import "./contact.scss";
import planner from "../../assets/img/planner.jpg"

export default function contact() {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Entre em contato.</h1>
        <p>Envie uma mensagem e vamos registrar momentos incríveis!</p>
        <a href="tel:+">(12) 3456-7890</a>
        <a href="mailto:marcellecode@gmail.com">ola@grandesite.com.br</a>
      </div>
      <div className="contact-image">
        <img src={planner} alt="planner image" />
      </div>
    </div>
  );
}
