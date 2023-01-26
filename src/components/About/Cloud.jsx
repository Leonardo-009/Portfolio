import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiCss3,
  DiHtml5
} from "react-icons/di";
import {
  SiMysql,
  SiTypescript,
  SiAmazonaws,
  SiExpress,
  SiBootstrap,
} from "react-icons/si";

function Cloud() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>
    </Row>
  );
}

export default Cloud;
