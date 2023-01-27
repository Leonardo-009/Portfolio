import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiNodejs,
  DiMongodb,
} from "react-icons/di";
import {
  SiMysql,
  SiExpress
} from "react-icons/si";

function Backend() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
      </Col>
    </Row>
  );
}

export default Backend;
