import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Eu sou um",
          "Desevolvedor", 
          "Apaixonado por",
          // "DevOps",
          "Segurança Da Informação",
          "e tecnologia",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
