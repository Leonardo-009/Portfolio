import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
      Dias que eu <strong className="priwinkle">codifico</strong>
      </h1>
      <GitHubCalendar
        username="Leonardo-009"
        blockSize={15}
        blockMargin={5}
        color="#61dafb"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
