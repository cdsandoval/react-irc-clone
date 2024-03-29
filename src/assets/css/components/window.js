import cssVar from "../variables";

import { css } from "@emotion/core";
const window = css`
  .window {
    border: 3px solid ${cssVar.black};
    border-radius: 16px;
    box-shadow: 6px 6px 0 ${cssVar.black};
    overflow: hidden;
  }

  .window-dots {
    position: relative;
  }

  .window-dots:before,
  .window-dots:after {
    content: "";
    position: absolute;
    left: 8px;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 3px solid ${cssVar.black};
  }

  .window-dots:after {
    left: 38px;
  }

  @media screen and (max-width: 480px) {
    .window-dots:before,
    .window-dots:after {
      content: none;
    }
  }
`;

export default window;
