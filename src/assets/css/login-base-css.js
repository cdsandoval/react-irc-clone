/** @jsx jsx */
import { css } from "@emotion/core";
import cssVar from "./variables";

const loginBaseCss = css`
  /* Reset */
  body {
    margin: 0;
  }

  ul {
    padding: 0;
    list-style-type: none;
    margin: 0;
  }

  p {
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 1em;
    margin: 0;
    font-weight: normal;
  }

  select:focus,
  input:focus {
    outline: 0;
  }

  /* Headdings */
  .heading-1 {
    font-family: var(--ff-bold);
    font-size: var(--fs-bigger);
    margin-bottom: 0.5em;
  }

  .heading-2 {
    font-family: var(--ff-bold);
    font-size: var(--fs-big);
    margin-bottom: 0.5em;
  }
  .heading-3 {
    font-size: var(--fs-regular);
    font-family: var(--ff-bold);
    margin-bottom: 0.5em;
  }

  /* Global */
  body {
    background-color: white;
    background-image: linear-gradient(
        45deg,
        ${cssVar.gray} 25%,
        transparent 25%,
        transparent 75%,
        ${cssVar.gray} 75%,
        ${cssVar.gray}
      ),
      linear-gradient(
        -45deg,
        ${cssVar.gray} 25%,
        transparent 25%,
        transparent 75%,
        ${cssVar.gray} 75%,
        ${cssVar.gray}
      );
    background-size: 24px 24px;
    background-position: 0 0;
    animation: slide 60s infinite linear;
  }

  @keyframes slide {
    from {
      background-position: 0 0;
    }

    to {
      background-position: -1200px 600px;
    }
  }

  /* Helpers */
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .none {
    display: none;
  }

  .relative {
    position: relative;
  }

  /* security-space */
  .padding16 {
    padding: 16px;
  }
  .padding24 {
    padding: 24px;
  }
  .padding48 {
    padding: 48px;
  }

  @media screen and (max-width: 480px) {
    .padding48 {
      padding: 24px;
    }
    .padding24 {
      padding: 16px;
    }
  }

  .window {
    border: 3px solid ${cssVar.black};
    border-radius: 16px;
    box-shadow: 6px 6px 0 ${cssVar.black};
    overflow: hidden;
  }

  .window-dots {
    position: relative;
  }

  .button {
    border: 3px solid ${cssVar.black};
    border-radius: 8px;
    display: flex;
    padding: 0.5em 1em;
    justify-content: center;
    font-size: var(--fs-small);
    cursor: pointer;
    text-transform: uppercase;
    background-color: ${cssVar.baackground};
  }

  .button.-dark {
    border: 3px solid ${cssVar.black};
    background-color: ${cssVar.black};
    color: white;
  }

  @media screen and (max-width: 768px) {
    .window.login {
      height: 100vh;
      width: 100vw;
      display: grid;
    }
  }
`;

export default loginBaseCss;
