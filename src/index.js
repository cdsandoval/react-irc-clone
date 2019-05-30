import React from "react";
import { render } from "react-dom";

function Codeable() {
  return <h1>Codeable</h1>;
}

const $root = document.getElementById("root");
render(<Codeable />, $root);
