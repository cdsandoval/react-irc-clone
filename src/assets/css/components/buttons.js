import cssVar from "../variables";

import { css } from "@emotion/core";
const button = css`
  .button {
    border: 3px solid ${cssVar.black};
    border-radius: 8px;
    display: flex;
    padding: 0.5em 1em;
    justify-content: center;
    font-size: ${cssVar.fsSmall};
    cursor: pointer;
    text-transform: uppercase;
    background-color: ${cssVar.background};
  }

  .button.-dark {
    border: 3px solid ${cssVar.black};
    background-color: ${cssVar.black};
    color: white;
  }

  .button-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
  }
`;

export default button;
