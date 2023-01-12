import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
import me from "../../Assets/eu.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Um <span className="priwinkle"> resumo </span> sobre mim
            </h1>
            <p className="home-about-body">
              Eu me chamo Leonardo, um desenvolvedor apaixonado por{" "}
              <b className="priwinkle">tecnologia</b> e{" "}
              <b className="priwinkle">cibersegurança</b>. Atualmente, estou
              adquirindo e aprimorando minhas habilidades e conhecimentos na
              área. Busco constantemente desafios para me desenvolver e alcançar
              meu objetivo de me tornar uma referência na indústria da
              tecnologia.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={me} alt="home pic"
                className="img-fluid rounded-circle home-logo"
                style={{ maxHeight: "450px" }} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Venha me conhecer</h1>
            <p>
              Sinta-se livre para <span className="priwinkle">conectar </span>comigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Leonardo-009"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/leonardoapelanda/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
