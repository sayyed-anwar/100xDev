import { WebSocketServer, WebSocket } from "ws";
const wss = new WebSocketServer({ port: 1012 });

interface User {
  socket: WebSocket;
  room: string;
}

let allSockets: User[] = [];

wss.on("connection", (socket) => {
  socket.on("message", (message) => {
    //@ts-ignore
    const parsedMessages = JSON.parse(message);
    if(parsedMessages.type === "join"){
      allSockets.push({
        socket,
        room: parsedMessages.room.roomId,
      });
    }
    if(parsedMessages.type === "chat"){
      
    }
  });
});
