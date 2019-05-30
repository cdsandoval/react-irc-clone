// index.js
import React from "react";
import { render } from "react-dom";

import App from "./app";

const $root = document.getElementById("root");
render(<App url="ws://localhost:4000" />, $root);
