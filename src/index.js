/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import { render } from "react-dom";
import Tabs from "./components/tabs";

function Codeable() {
  let globalCss = css`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    grid-area: tabs;
    & .list {
      display: flex;
      padding: 0 16px;
      padding-left: 19px;
      box-sizing: border-box;
      border-bottom: 3px solid black;
    }

    & .item {
      border-radius: 8px 8px 0 0;
      border: 3px solid var(--c-black);
      border-bottom: 0;
      margin-left: -3px;
      padding: 0.4em 0.7em;
      position: relative;
      transition: all 0.25s;
      cursor: pointer;
    }
  `;

  return (
    <>
      <Tabs />
      <h1>Codeable</h1>
    </>
  );
}

const $root = document.getElementById("root");
render(<Codeable />, $root);
