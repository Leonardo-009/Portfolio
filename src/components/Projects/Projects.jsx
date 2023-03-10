import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import EmConstrucao from "../../Assets/Projects/2.jpg";
import pok from "../../Assets/Projects/pok.jpeg";
import crud from "../../Assets/Projects/Crud.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        Meus Projetos <strong className="priwinkle">Recentes </strong>
        </h1>
        <p style={{ color: "white" }}>
        Aqui estão alguns projetos que Estou fazendo.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pok}
              isBlog={false}
              title="Em Construcao"
              description="Um mini-jogo utilizando JS, CSS e HTML. A ideia do jogo é fazer com que você pule a Pokebola. O objetivo do projeto é demonstrar um pouco do meu conhecimento em CSS e JS."
              ghLink="https://github.com/Leonardo-009"
              demoLink="https://leonardo-009.github.io/Mini-game-Pokemon/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crud}
              isBlog={false}
              title="Crud-de-usuario"
              description= "O projeto Crud de usuário utiliza JavaScript, React e Node.js para desenvolvimento do front-end e back-end, com MySQL como banco de dados para armazenamento de dados dos usuários. O sistema utiliza Express, Styled Components, Axios e outras bibliotecas para implementação de funcionalidades, e HTML/CSS para construção da interface do usuário."
              ghLink="https://github.com/Leonardo-009/Crud-de-usuario"
              demoLink="https://github.com/Leonardo-009"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EmConstrucao}
              isBlog={false}
              title="Em Construcao"
              description="No momento estou planejando alguns projetos"
              ghLink="https://github.com/Leonardo-009"
              demoLink="https://github.com/Leonardo-009"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EmConstrucao}
              isBlog={false}
              title="Em Construcao"
              description="No momento estou planejando alguns projetos"
              ghLink="https://github.com/Leonardo-009"
              demoLink="https://github.com/Leonardo-009"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EmConstrucao}
              isBlog={false}
              title="Em Construcao"
              description="No momento estou planejando alguns projetos"
              ghLink="https://github.com/Leonardo-009"
             demoLink="https://github.com/Leonardo-009"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EmConstrucao}
              isBlog={false}
              title="Em Construcao"
              description="No momento estou planejando alguns projetos"
              ghLink="https://github.com/Leonardo-009"
              demoLink="https://github.com/Leonardo-009"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
