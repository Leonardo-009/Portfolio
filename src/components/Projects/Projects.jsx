import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import EmConstrucao from "../../Assets/Projects/2.jpg";


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
