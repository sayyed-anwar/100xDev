import { useEffect, useRef, useState } from "react";

import "./App.css";

function App() {
  const [socket, setSocket] = useState();

  const inputRef = useRef();

  const sendMessage = () => {
    if (!socket) {
      return;
    } else {
      //@ts-ignore
      const messages=  inputRef.current.value ;
      socket.send(messages);
    }
  };

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:1010");
    setSocket(ws);

    ws.onmessage = (event) => {
      console.log(`Received fe: ${event.data}`);
      
      alert(`Received: ${event.data}`);
    };
    ws.onopen = () => {
      console.log("Connected to server.");
    };
    ws.onclose = (event) => {
      console.log(`Disconnected from server. Code: ${event.code}`);
    };
  }, []);

  return (
    <>
      <div>
        <h1>Hi there, let's have some ping-pong</h1>
        <input ref={inputRef} type="text" placeholder="send messages...." />
        <button onClick={sendMessage}>send</button>
      </div>
    </>
  );
}

export default App;
