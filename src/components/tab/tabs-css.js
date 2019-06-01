/** @jsx jsx */
import { css } from "@emotion/core";
import cssVar from "../../assets/css/variables";

const tabsCss = css`
  & {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  & .list {
    display: flex;
    padding: 0 16px;
    padding-left: 19px;
    box-sizing: border-box;
    border-bottom: 3px solid ${cssVar.black};
  }

  & .item {
    border-radius: 8px 8px 0 0;
    border: 3px solid ${cssVar.black};
    border-bottom: 0;
    margin-left: -3px;
    padding: 0.4em 0.7em;
    position: relative;
    transition: all 0.25s;
    cursor: pointer;
  }

  & .item:hover {
    background-color: ${cssVar.green};
  }

  & .item.-active {
    font-family: ${cssVar.ffBold};
  }

  & .item.-active:after {
    content: "";
    height: 5px;
    bottom: -4px;
    left: 0;
    right: 0;
    position: absolute;
    background-color: ${cssVar.background};
  }

  & .item.-active:hover {
    background-color: transparent;
  }

  & .item.-alert {
    animation: blink-red 1s infinite;
  }

  @keyframes blink-red {
    0%,
    49% {
      background-color: transparent;
    }
    50%,
    100% {
      background-color: ${cssVar.red};
    }
  }

  @media screen and (max-width: 480px) {
    & .list {
      padding: 0 8px;
      padding-left: 11px;
    }
  }
`;

export default tabsCss;
