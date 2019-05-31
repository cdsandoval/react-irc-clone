/** @jsx jsx */
import { Global, css } from "@emotion/core";

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
    border-bottom: 3px solid var(--c-black);
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

  & .item:hover {
    background-color: var(--c-green);
  }

  & .item.-active {
    font-family: var(--ff-bold);
  }

  & .item.-active:after {
    content: "";
    height: 5px;
    bottom: -4px;
    left: 0;
    right: 0;
    position: absolute;
    background-color: var(--c-background);
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
      background-color: var(--c-red);
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
