import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá a todos, eu sou <span className="priwinkle">Leonardo </span>
            do <span className="priwinkle">Brasil, Ceara.</span>
            <br />Eu sou um desenvolvedor, busco constantemente adquirir e aperfeiçoar minhas habilidades e conhecimentos. Possuo uma paixão por tecnologia, especialmente na área de segurança cibernética. Com ambição e determinação, me esforço para me tornar uma referência na minha área de atuação. Sempre estou procurando novos desafios e oportunidades para crescer e desenvolver minhas habilidades.
            <br />
            <br />
            Além da codificação, algumas outras atividades que adoro fazer!</p>
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
