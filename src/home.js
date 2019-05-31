import React from "react";
import { Global, css } from "@emotion/core";
import JaldiRegularWoff2 from "./assets/fonts/jaldi-regular-webfont.woff2";
import JaldiRegularWoff from "./assets/fonts/jaldi-regular-webfont.woff";
import JaldiBoldWoff2 from "./assets/fonts/jaldi-bold-webfont.woff2";
import JaldiBoldWoff from "./assets/fonts/jaldi-bold-webfont.woff";

function Home({ url }) {
  const ws = React.useRef(null);

  const [listMessage, setListMessage] = React.useState([]);
  const [content, setContent] = React.useState("");
  const [connected, setConnected] = React.useState(false);

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
        setListMessage(state => state.concat(JSON.parse(data)));
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
      <Global
        styles={css`
          @font-face {
            font-family: "jaldibold";
            src: url("${JaldiBoldWoff2}") format("woff2"),
              url("${JaldiBoldWoff}") format("woff");
            font-weight: normal;
            font-style: normal;
          }

          @font-face {
            font-family: "jaldiregular";
            src: url("${JaldiRegularWoff2}")
                format("woff2"),
              url("${JaldiRegularWoff}") format("woff");
            font-weight: normal;
            font-style: normal;
          }

          body {
            height: 100vh;
            margin: 0;
            overflow: hidden;
            font-family: "jaldiregular";
            font-size: 18px;
            line-height: 1.2;
            background-color: #f5f5f5;
            margin: 0
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

          ::selection {
            background-color: #34332f;
            color: white;
          }

          a {
            color: #4e72cd;
          }

          input[type="text"] {
            border: 3px solid #34332F;
            box-sizing: border-box;
            border-radius: 0.5em;
            height: 2.8em;
            padding: 0 1em;
            width: 100%;
            font-size: 1rem;
          }
        `}
      />

      <ul>
        {listMessage.map(message => (
          <li key={message.id}>{message.content}</li>
        ))}
      </ul>
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
          <sections id="channel-list" className="channels padding16 relative">
            <div className="list-channels">
              <div id="js-close-channels" className="button-icon close">
                <svg width="16" height="16" viewBox="0 0 348.333 348.334">
                  <path
                    d="M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85
                c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563
                c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85
                l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554
                L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"
                  />
                </svg>
              </div>

              <div id="js-open-menu" className="hamburguer" />
              <h3 className="heading-2 title">Channels</h3>
              <ul id="irc-channels" />
              <span id="js-open-lb" className="button -dark new-channel">
                New channel
              </span>
            </div>

            <footer className="footer">
              <p>
                With love by
                <a href="#">@lian</a>
                <a href="#">@cristian</a>
                <a href="#">@mayra</a>
                <a href="#">@carlos</a>
                <a href="#">@yummta</a>
              </p>
            </footer>
          </sections>

          <sections className="tabs">
            <ul id="list-user-channels" className="list" />
          </sections>
          <sections id="js-messages-list" className="chat padding24">
            <ul id="js-messages-view" className="list-messages" />
            <form className="send-message">
              <input
                type="text"
                id="js-input-user-message"
                aria-label="Chat here"
                className="input-text"
                placeholder="Chat here..."
                autocomplete="off"
                autofocus
              />
              <button id="js-add-user-message" className="button -dark submit">
                Send
              </button>
            </form>
          </sections>
        </div>
        <div id="js-light-box" className="light-box">
          <form action="createChannel" className="window form-new-channel">
            <label
              for="channels"
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
