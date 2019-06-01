import cssVar from "../variables";

import { css } from "@emotion/core";
const separator = css`
  .separator {
    background-color: ${cssVar.blue};
    padding: 0.5em 0;
    font-size: ${cssVar.fsSmall};
    border-radius: 8px;
    margin: 4px 0;
    color: ${cssVar.black};
  }
`;

export default separator;
