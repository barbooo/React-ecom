//import express from "express";
import http from "http";
//import socketio from "socket.io";
const app = express();
const hp = http.Server(app);
const io = require('socket.io')(hp);
//const io = socketio(hp);
app.get('/',(req, res)=>{
	res.sendFile(__dirname + '/index.html');
})

io.on('connection',sock=>{
	console.log("new cluent");
})

hp.listen(6000);