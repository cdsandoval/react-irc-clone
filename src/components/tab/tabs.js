/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import tabsCss from "./tabs-css";

function Tabs() {
  return (
    <section css={tabsCss}>
      <ul id="list-user-channels" className="list">
        <li data-name="general" className="channel item -active">
          general
        </li>
      </ul>
    </section>
  );
}

export default Tabs;
