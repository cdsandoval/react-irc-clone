import cssVar from "../variables";

import { css } from "@emotion/core";
const message = css`
  .message {
    margin-bottom: 4px;
  }

  .message .username {
    background-color: ${cssVar.blue};
    padding: 2px 4px;
    display: inline-block;
    border-radius: 4px;
  }

  .message.look-disabled {
    opacity: 0.55;
  }
`;

export default message;
