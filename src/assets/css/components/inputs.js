import cssVar from "../variables";

import { css } from "@emotion/core";
const inputs = css`
  input[type="text"] {
    border: 3px solid ${cssVar.black};
    box-sizing: border-box;
    border-radius: 0.5em;
    height: 2.8em;
    padding: 0 1em;
    width: 100%;
    font-size: ${cssVar.fsRegular};
  }
`;

export default inputs;
