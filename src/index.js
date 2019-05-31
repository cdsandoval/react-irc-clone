/** @jsx jsx */
import React from "react";
import { render } from "react-dom";
import { jsx } from "@emotion/core";
import ListMessages from "./components/listMessages.jsx";

function Codeable() {
  let message = [
    {
      key: 1,
      Author: "Carlos",
      date: "01/01/1111",
      text: "Hola"
    },
    {
      key: 2,
      Author: "Daniel",
      date: "01/01/1111",
      text: "Hola"
    },
    {
      key: 3,
      Author: "Carlos",
      date: "01/01/1111",
      text: "Como estas"
    },
    {
      key: 4,
      Author: "Daniel",
      date: "01/01/1111",
      text: "Bien"
    }
  ];
  return (
    <div>
      <ListMessages message={message} />
    </div>
  );
}

const $root = document.getElementById("root");
render(<Codeable />, $root);
