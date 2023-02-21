import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Eu sou um desenvolvedor FullStack com habilidades em Front-end, Back-end e Salesforce.",
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
