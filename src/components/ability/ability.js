import React from "react";
import "./ability.scss";
import camera from "../../assets/img/camera.jpg";

export default function Ability() {
  return (
    <div className="ability-container">
      <div className="ability-container__content">
        <h1>Habilidades e serviços</h1>
        <div className="ability-container__content-list">
          <div className="ability-container__content-list-item">
            <h5>Habilidades</h5>
            <ul>
              <li>Composição Fotográfica e Enquadramento</li>
              <li>Edição e Retoque de Imagens</li>
              <li>Desenvolvimento de Portfólio Fotográfico</li>
              <li>Gerenciamento de Agendas e Prazos</li>
              <li>Solução Criativa de Desafios em Fotografia</li>
            </ul>
          </div>

          <div className="ability-container__content-list-item">
            <h5>Serviços</h5>
            <ul>
              <li>Sessões de Fotografia de Retrato</li>
              <li>Cobertura Fotográfica de Eventos</li>
              <li>Fotografia de Produto e Publicidade para Negócios</li>
              <li>Fotografia de Moda e Editoriais</li>
              <li>Workshops e Cursos de Fotografia Digital</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="ability-container__image">
        <img src={camera} alt="photographer" />
      </div>
    </div>
  );
}
