/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import sendMessageCss from "./sendMessageCss";

function SendMessage() {
  return (
    <form css={sendMessageCss} className="send-message">
      <input
        type="text"
        aria-label="Chat here"
        className="input-text"
        placeholder="Chat here..."
        autocomplete="off"
        autofocus
      />
      <button className="button -dark submit">Send</button>
    </form>
  );
}

export default SendMessage;
