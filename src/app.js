import React from "react";

function App({ url }) {
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
      <h1>App</h1>
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

export default App;
