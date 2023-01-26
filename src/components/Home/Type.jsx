import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Eu sou um desenvolvedor Salesforce com habilidades de front-end e conhecimento de back-end.",
          "E sou Apaixonado por tecnologia",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
