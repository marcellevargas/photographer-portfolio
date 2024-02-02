import React from "react";
import "./testimony.scss"

export default function Testimony() {
  return (
    <div className="testimony-container">
      <div className="testimony-header">
        <h1>Depoimentos dos clientes</h1>
      </div>
      <div className="testimony-main-content">
        <h2>
          "Clara capturou a essência do nosso casamento de maneira tão mágica
          que cada foto nos faz reviver aquele dia especial com a mesma
          intensidade."
        </h2>
        <p>-- Carlos Almeida</p>
      </div>
      <div className="testimony-footer">
        <div className="testimony-footer-content">
          <h4>Marina Ferreira</h4>
          <p>
            "A habilidade da Clara em transformar momentos comuns em fotografias
            extraordinárias é simplesmente impressionante."
          </p>
        </div>
        <div className="testimony-footer-content">
          <h4>Roberto Sousa</h4>
          <p>
            "As fotos de produto da Samira elevaram o perfil da minha marca,
            capturando a qualidade e o detalhe de cada item de forma incrível."
          </p>
        </div>
      </div>
    </div>
  );
}
