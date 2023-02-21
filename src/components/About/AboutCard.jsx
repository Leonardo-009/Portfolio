import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá a todos, eu me chamo <span className="priwinkle">Leonardo. </span>
            <br/>
            <br/>Meu objetivo de carreira é me tornar um desenvolvedor altamente qualificado e experiente. Pretendo utilizar minhas habilidades técnicas e minha paixão por tecnologia para construir soluções personalizadas e eficientes para clientes, contribuindo para o sucesso de seus projetos de desenvolvimento de software. Além disso, busco continuamente aprender e evoluir minha carreira, sempre em busca de aprimorar minhas habilidades e conhecimentos para atender às demandas do mercado.
            <br/>Além da codificação, algumas outras atividades que adoro fazer!</p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jogar com os amigos
            </li>
            <li className="about-activity">
              <ImPointRight /> Joga basquete
            </li>
            <li className="about-activity">
              <ImPointRight /> Estudar tecnologia
            </li>
          </ul>
          <p style={{ color: " #61dafb" }}>
            "Busque aprender algo novo todos os dias para melhorar sua vida!"{" "}
          </p>
          <footer className="blockquote-footer">Leonardo</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
