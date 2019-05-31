import React from "react";
import { Global, css } from "@emotion/core";
import JaldiRegularWoff2 from "./assets/fonts/jaldi-regular-webfont.woff2";
import JaldiRegularWoff from "./assets/fonts/jaldi-regular-webfont.woff";
import JaldiBoldWoff2 from "./assets/fonts/jaldi-bold-webfont.woff2";
import JaldiBoldWoff from "./assets/fonts/jaldi-bold-webfont.woff";

function Home({ url }) {
  console.log(url);
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

          body {
            height: 100vh;
            margin: 0;
            overflow: hidden;
            font-family: "jaldiregular";
            font-size: 18px;
            line-height: 1.2;
            background-color: #f5f5f5;
          }

          ::selection {
            background-color: #34332f;
            color: white;
          }

          a {
            color: #4e72cd;
          }
        `}
      />
      <h1>Home</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="message">Message</label>
        <input
          type="text"
          name="message"
          id="message"
          disabled={!connected}
          value={content}
          onChange={event => setContent(event.target.value)}
        />
        <button>Send</button>
      </form>
      <ul>
        {listMessage.map(message => (
          <li key={message.id}>{message.content}</li>
        ))}
      </ul>
    </>
  );
}

export default Home;
