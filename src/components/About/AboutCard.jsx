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
            <br/>Meu objetivo de carreira é se tornar uma referencia na área de desenvolvimento Salesforce altamente qualificado e experiente. Quero usar minhas habilidades técnicas e minha paixão por tecnologia para construir soluções personalizadas e eficientes para clientes, ajudando-os a maximizar o valor de sua plataforma Salesforce. Além disso, quero continuar aprendendo e me desenvolvendo em minha carreira, sempre buscando maneiras de melhorar minhas habilidades e conhecimentos para atender às necessidades crescentes do mercado.
            <br/>
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
