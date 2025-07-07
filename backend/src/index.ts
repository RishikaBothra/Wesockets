import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port:8080});

//basics:
// wss.on("connection",function(socket){
//     console.log("user connected")
//     setInterval(()=>{
//         socket.send("Current price of solana is " + Math.random()* 1000);
//     },5000) // send price every 5 seconds(connection with postman)
-+
//     socket.on("message",(message)=>{
//         console.log("message received from client: " + message);
//         // logging the message received from client
//     })
// })
//--------------------------------------------------------------------------
//ping pong:

wss.on("connection",function(socket){
    console.log("user connected")

    socket.on("message",(message)=>{
        const trimmedMessage = message.toString().trim();

        if(trimmedMessage === "ping"){
            socket.send("pong");
        }
    })
})