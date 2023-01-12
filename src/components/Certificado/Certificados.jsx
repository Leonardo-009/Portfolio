import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificadoCards from "./CertificadoCards";
import Particle from "../Particle";
import BPC from "../../Assets/Certificados/BPC.jpeg";
import CertiProf from "../../Assets/Certificados/CertiProf.jpeg";
import Geek from "../../Assets/Certificados/Geek.jpeg";
import Pen from "../../Assets/Certificados/Pen.jpeg";
import SegurançaDaInformaciones from "../../Assets/Certificados/Segurança Da Informação.jpg";
import FC from "../../Assets/Certificados/FC.jpeg";


function Certificados() {
  return (
    <Container fluid className="Certificado-section">
      <Particle />
      <Container>
        <h1 className="Certificado-heading">
        Meus Certificados
        </h1>
        <p style={{ color: "white" }}>
        Aqui estão alguns Certificados que tenho.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="Certificado-card">
            <CertificadoCards
              imgPath={BPC}
              isBlog={false}
              title="Boas Práticas de Cibersegurança(Cybersecurity Awareness)"
              description="IBSEC - Instituto Brasileiro de Cibersegurança"
            />
          </Col>
          <Col md={4} className="Certificado-card">
            <CertificadoCards
              imgPath={CertiProf}
              isBlog={false}
              title="Fundamentos Na Lei Geral De Proteção de Dados LGPDF"
              description="CertiProf"
            />
          </Col>
          <Col md={4} className="Certificado-card">
            <CertificadoCards
              imgPath={Geek}
              isBlog={false}
              title="Algoritmos e Lógica de Programação"
              description="Udemy"
            />
          </Col>
          <Col md={4} className="Certificado-card">
            <CertificadoCards
              imgPath={Pen}
              isBlog={false}
              title="Introdulção ao Hacking e pentest"
              description="solyd"
            />
          </Col>
          <Col md={4} className="Certificado-card">
            <CertificadoCards
              imgPath={SegurançaDaInformaciones}
              isBlog={false}
              title="ISO 27001: Construindo Políticas de Segurança da Informação"
              description="Udemy"
            />
          </Col>
          <Col md={4} className="Certificado-card">
            <CertificadoCards
              imgPath={FC}
              isBlog={false}
              title="Fundamentos em Cibersegurança"
              description="IBSEC - Instituto Brasileiro de Cibersegurança"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certificados;
