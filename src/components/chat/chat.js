/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import ListMessages from "../listMessages/listMessages";

function Chat() {
  const [listMessage, setListMessage] = React.useState([]);
  const [text, setText] = React.useState("");

  function addMessage(event) {
    event.preventDefault();
    setListMessage([
      ...listMessage,
      { Author: "Carlos", text: text, date: new Date() }
    ]);
    setText("");
  }

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <section id="js-messages-list" className="chat padding24">
      <ListMessages message={listMessage} />

      <form className="send-message">
        <input
          type="text"
          value={text}
          onChange={handleChange}
          id="js-input-user-message"
          aria-label="Chat here"
          className="input-text"
          placeholder="Chat here..."
          autoComplete="off"
          autoFocus
        />
        <button
          id="js-add-user-message"
          className="button -dark submit"
          onClick={addMessage}
        >
          Send
        </button>
      </form>
    </section>
  );
}

export default Chat;
