import React from "react";
import { render } from "react-dom";
import Home from "./home";

const $root = document.getElementById("root");
render(<Home url="ws://localhost:4000" />, $root);
