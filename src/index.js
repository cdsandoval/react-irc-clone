/** @jsx jsx */
// eslint-disable-next-line
import React from "react";
import { render } from "react-dom";
import { jsx } from "@emotion/core";
import ListMessages from "./components/listMessages/listMessages";

function Codeable() {
  return (
    <div>
      <ListMessages message={message} />
    </div>
  );
}

const $root = document.getElementById("root");
render(<Codeable />, $root);
