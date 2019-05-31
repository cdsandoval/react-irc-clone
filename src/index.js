/** @jsx jsx */
import React from "react";
import { Global, css, jsx } from "@emotion/core";
import { render } from "react-dom";

// import Tabs from "./components/tabs";
import Home from "./home";

const $root = document.getElementById("root");
render(<Home url="ws://localhost:4000" />, $root);
