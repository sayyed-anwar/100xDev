import { WebSocketServer, WebSocket } from "ws";
const wss = new WebSocketServer({ port: 1012 });

interface User {
    socket : WebSocket,
    room  : string ;
}


let allSockets: User [] = [];

wss.on("connection", (socket) => {
  allSockets.push(socket);
  console.log("Client connected");
  socket.send("client connected");
  socket.on("message", (message) => {
    const parsedMessages = JSON.parse(message as unknown as string);
    if (parsedMessages.type === "join") {
        allSockets.push({
            socket,
            room: parsedMessages.payload.room ;
        });
    }
    allSockets.forEach((sock) => {
      sock.send(message.toLocaleString());
    });
    console.log("received message: " + message.toString());
  });
  socket.on("disconnect", () => {
    allSockets = allSockets.filter((sock) => sock !== socket);
    console.log("Client disconnected");
  });
});
