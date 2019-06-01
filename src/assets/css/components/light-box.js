import { css } from "@emotion/core";
const lightBox = css`
  .light-box {
    background-color: rgba(255, 255, 255, 0.75);
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
    display: none;
  }

  .light-box.-active {
    display: flex;
  }
`;

export default lightBox;
