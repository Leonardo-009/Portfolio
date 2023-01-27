import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaSalesforce,
} from "react-icons/fa";


function Salesforce() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaSalesforce />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h1/>Apex
      </Col>
    </Row>
  );
}

export default Salesforce;
