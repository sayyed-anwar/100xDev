"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 1010 });
//event handlers
wss.on("connection", (socket) => {
    console.log("socket connected");
    socket.send("Hey Champ!!");
    // setInterval(()=>{
    //   socket.send("current price of mazdoc is :" + Math.random());
    // },500)
    socket.on("error", console.error);
    socket.on("message", (data) => {
        console.log("received message:  ", data.toString());
        if (data.toString() === "ping") {
            socket.send("pong");
            console.log("send message: " + "pong");
        }
    });
});
