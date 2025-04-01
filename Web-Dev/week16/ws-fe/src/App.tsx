// import { useEffect, useRef, useState } from "react";

import { useEffect, useState } from "react";
import "./App.css";

// function App() {
//   const [socket, setSocket] = useState();

//   const inputRef = useRef();

//   const sendMessage = () => {
//     if (!socket) {
//       return;
//     } else {
//       //@ts-ignore
//       const messages=  inputRef.current.value ;
//       socket.send(messages);
//     }
//   };

//   useEffect(() => {
//     const ws = new WebSocket("ws://localhost:1010");
//     setSocket(ws);

//     ws.onmessage = (event) => {
//       console.log(`Received fe: ${event.data}`);
      
//       alert(`Received: ${event.data}`);
//     };
//     ws.onopen = () => {
//       console.log("Connected to server.");
//     };
//     ws.onclose = (event) => {
//       console.log(`Disconnected from server. Code: ${event.code}`);
//     };
//   }, []);

//   return (
//     <>
//       <div>
//         <h1>Hi there, let's have some ping-pong</h1>
//         <input ref={inputRef} type="text" placeholder="send messages...." />
//         <button onClick={sendMessage}>send</button>
//       </div>
//     </>
//   );
// }

// export default App;





const App = () => {
const [messages, setMessages] =useState([]) ;
const [input, setInput] = useState('');

useEffect(()=>{
  const socket = new WebSocket("ws://localhost:1012");

  socket.onopen = () => {
    console.log("Connected to server.");
  };

  socket.onmessage = (event) => {
    setMessages((prevMessages) => [...prevMessages, event.data]);
  };

  socket.onclose = (event) => {
    console.log(`Disconnected from server. Code: ${event.code}`);
  };

  return () => {
    socket.close();
  };
},[])

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      <h1 className="text-3xl font-semibold mb-4">Chat App</h1>

    {/* Chat Box */}
    <div className="w-full max-w-lg h-96 border border-white/20 rounded-lg p-4 overflow-y-auto bg-white/10">
        {messages.length > 0 ? (
          messages.map((message, index) => (
            <div key={index} className={`p-2 text-sm ${message.startsWith("You") ? "text-right" : "text-left"}`}>
              <span className={`inline-block px-3 py-2 rounded-lg ${message.startsWith("You") ? "bg-white text-black" : "bg-black text-white border border-white/30"}`}>
                {message}
              </span>
            </div>
          ))
        ) : (
          <div className="p-4 text-sm text-gray-400 text-center">No messages yet...</div>
        )}
      </div>
      {/* Input Box */}
      <div className="flex mt-4 w-full max-w-lg">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 p-3 text-white bg-black border border-white/20 rounded-l-lg outline-none placeholder-gray-400"
        />
        <button className="px-5 bg-white text-black rounded-r-lg font-semibold">Send</button>
      </div>
    </div>
  );
};

export default App;
