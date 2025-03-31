"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 1012 });
let allSockets = [];
wss.on("connection", (socket) => {
    allSockets.push(socket);
    console.log("Client connected");
    socket.send("client connected");
    socket.on("message", (message) => {
        allSockets.forEach((sock) => {
            sock.send(message.toLocaleString());
        });
        console.log("received message: " + message.toString());
    });
});
