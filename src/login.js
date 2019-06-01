/** @jsx jsx */
import React from "react";
import { Global } from "@emotion/core";
import { jsx } from "@emotion/core";

import loginBaseCss from "./assets/css/login-base-css";
import loginCss from "./assets/css/login-css";

function Login({ setIsLogged }) {
  function handleLoginSubmit(event) {
    event.preventDefault();
    const username = event.target.elements.username.value;

    if (username) {
      let newDataUser = {
        user: username,
        userChannels: ["general"],
        ircChannels: ["general"],
        activeChannel: "general",
        ircMessages: {
          general: {
            messages: []
          }
        }
      };
      localStorage.setItem("data", JSON.stringify(newDataUser));
      setIsLogged(true);
    }
  }

  return (
    <>
      <Global styles={loginBaseCss} />

      <div css={loginCss}>
        <div className="window login">
          <h2 className="heading-2 window-dots center title">
            Welcome to IRC
            <span className="blink" />
          </h2>
          <div className="padding24">
            <form onSubmit={handleLoginSubmit} autoComplete="off">
              <label htmlFor="js-input-username">
                Please, enter you username
              </label>
              <input id="js-input-username" autoFocus name="username" />
              <button id="js-button-loggin" className="button -dark">
                Enter
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
