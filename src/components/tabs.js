/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

function Tabs() {
  return (
    <section className="tabs">
      <ul id="list-user-channels" className="list">
        <li data-name="general" className="channel item -active">
          general
        </li>
      </ul>
    </section>
  );
}

export default Tabs;
