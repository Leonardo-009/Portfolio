import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiGit,
  DiGithubBadge
} from "react-icons/di";
import {
  SiVisualstudiocode
} from "react-icons/si";

function Ferramentas() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithubBadge />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
    </Row>
  );
}

export default Ferramentas;
