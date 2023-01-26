import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
// habilidades
import Backend from "./Backend";
import Frontend from "./Frontend";
import Ferramentas from "./Ferramentas";
import Cloud from "./Cloud";

import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/programador.gif";
// import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Saiba quem <strong className="priwinkle">eu sou</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg}
              alt="about"
              className="img-fluid rounded-circle home-logo"
              style={{ maxHeight: "450px" }}
            />
          </Col>
        </Row>
        <h1 className="project-heading">Conjunto de habilidades
        </h1>
        <h1 className="project-heading">
        Front-end
        </h1>
        <Frontend />
        <h1 className="project-heading">
        Back-end
        </h1>
        <Backend />
        <h1 className="project-heading">
        Ferramentas
        </h1>
        <Ferramentas />
        <h1 className="project-heading">
        Cloud
        </h1>
        <Cloud />
        <Github />
      </Container>
    </Container>
  );
}

export default About;
