import React from "react";
import { Global } from "@emotion/core";
import Tabs from "./components/tab/tabs";
import SendMessage from "./components/sendMessage/sendMessage";
import ListMessages from "./components/listMessages/listMessages";
import ListChannels from "./components/list-channels/list-channels";

import base from "./assets/css/base";
import layout from "./assets/css/layout";
import button from "./assets/css/components/buttons";
import inputs from "./assets/css/components/inputs";
import window from "./assets/css/components/window";
import lightBox from "./assets/css/components/light-box";
import separator from "./assets/css/components/separator";
import home from "./assets/css/pages/home";
import message from "./components/listMessages/helpers/testData.jsx"; // Test Data to Messages

function Home({ url }) {
  const ws = React.useRef(null);

  const [listMessage, setListMessage] = React.useState([]);
  const [content, setContent] = React.useState("");
  const [connected, setConnected] = React.useState(false);

  function addMessage(event) {
    event.preventDefault();
    setListMessage([
      ...listMessage,
      { Author: "Carlos", text: "Hola", date: new Date() }
    ]);
  }

  React.useEffect(() => {
    const server = new WebSocket(url);
    ws.current = server;
    return () => {
      ws.current = null;
      server.close();
    };
  }, [url]);

  React.useEffect(() => {
    if (ws.current) {
      ws.current.onopen = () => {
        console.log("open");
        setConnected(true);
      };
      ws.current.onclose = () => {
        console.log("close");
        setConnected(false);
      };
      ws.current.onmessage = ({ data }) => {
        console.log(data);
      };
    }
  }, [ws.current]);

  function handleSubmit(event) {
    event.preventDefault();
    ws.current.send(
      JSON.stringify({
        id: Date.now(),
        content
      })
    );
    setContent("");
  }

  return (
    <>
      <Global styles={base} />
      <Global styles={layout} />
      <Global styles={button} />
      <Global styles={inputs} />
      <Global styles={window} />
      <Global styles={lightBox} />
      <Global styles={message} />
      <Global styles={separator} />
      <Global styles={home} />
      <div className="center">
        <div className="wrapper-app window main-grid">
          <header id="user-header" className="header center window-dots">
            <div id="js-open-channels" className="button-icon hamburguer">
              <svg viewBox="0 0 469.333 469.333" width="16" height="16">
                <path
                  d="M53.333,106.667H416c29.417,0,53.333-23.927,53.333-53.333S445.417,0,416,0H53.333C23.917,0,0,23.927,0,53.333
              S23.917,106.667,53.333,106.667z"
                />
                <path
                  d="M416,181.333H53.333C23.917,181.333,0,205.26,0,234.667S23.917,288,53.333,288H416c29.417,0,53.333-23.927,53.333-53.333
              S445.417,181.333,416,181.333z"
                />
                <path
                  d="M416,362.667H53.333C23.917,362.667,0,386.594,0,416s23.917,53.333,53.333,53.333H416
              c29.417,0,53.333-23.927,53.333-53.333S445.417,362.667,416,362.667z"
                />
              </svg>
            </div>
            <h1 className="title">IRC - Welcome @</h1>
            <button
              className="button"
              tpe="button"
              id="clear-data"
              aria-label="Exit Chat"
              title="Remove all data Stored on Web Browser"
            >
              X
            </button>
            <button
              className="button"
              type="button"
              id="allow-notifications"
              alt="Enable Notifications"
              title="Notifications can be enable or disable here"
            >
              N
            </button>
          </header>
          <ListChannels />
          <Tabs />
          <section id="js-messages-list" className="chat padding24">
            <ListMessages message={listMessage} />

            <form className="send-message">
              <input
                type="text"
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
        </div>
        <div id="js-light-box" className="light-box">
          <form action="createChannel" className="window form-new-channel">
            <label
              // for="channels"
              className="heading-2 center title window-dots"
            >
              Create a new Channel
            </label>
            <div className="padding48">
              <input
                className="name-channel"
                id="js-input-channel"
                type="text"
                placeholder="Name channel"
              />
              <div className="actions">
                <button id="js-button-create-channel" className="button-dark">
                  Create Channel
                </button>
                <button id="js-close-lb" className="button cancel">
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Home;
