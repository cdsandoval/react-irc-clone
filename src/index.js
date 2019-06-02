/** @jsx jsx */

import React from "react";
import { Global, css, jsx } from "@emotion/core";
import { render } from "react-dom";
import Home from "./home";
import Login from "./login";

function Root() {
  const [isLogged, setIsLogged] = React.useState(
    !!localStorage.getItem("data")
  );

  let result;

  function isInPath(param) {
    return window.location.pathname === param;
  }

  if (isLogged && isInPath("/")) {
    result = <Home url="ws://localhost:4000" />;
  } else {
    result = <Login setIsLogged={setIsLogged} />;
  }

  return result;
}

const $root = document.getElementById("root");
render(<Root />, $root);
