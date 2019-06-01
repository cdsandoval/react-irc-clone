/** @jsx jsx */
import { css } from "@emotion/core";
import cssVar from "./variables";

const loginCss = css`
  & {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  & .login {
    background-color: ${cssVar.background};
  }

  & .title {
    height: 42px;
    border-bottom: 3px solid black;
    background-color: ${cssVar.green};
  }

  & form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & form input {
    width: 65%;
    font-size: 2em;
    text-align: center;
    padding: 0.2em 0.4em;
    margin-bottom: 25px;
    border-radius: 5px;
    border: 3px solid #000;
  }
`;

export default loginCss;
