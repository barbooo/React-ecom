//import http from "http";
import express from 'express';
//const express = require('express');
import mongoose from 'mongoose';
import dotenv from "dotenv"
//import { error } from "console";
//import {User} from "./models/user.js";
import router from "./routes/user.js"
import authrouter from "./routes/auth_user.js"
import signroute from "./routes/auth_user.js"
import cookieParser from 'cookie-parser';
dotenv.config();
const app = express();
const conect =  ()=>{

	mongoose.connect(process.env.DB).then(()=>{
		console.log("conxion to DB");
	}).catch(err=>{
		throw err;
	})

}
app.use(express.json());
app.use(cookieParser());
 app.use("/api/user",router);
app.use("/api/signin",signroute);
app.use("/api/auth",authrouter);
// app.use("api/auth",()=>{console.log('hello')});

app.use((err,req,res,next)=>{
	const status = err.status || 500
	const mesage = err.mesage || "Something wrong";
	return (res.status(status).json({
		success:false,
		status,
		mesage,
	}))
})
app.listen(3002,()=>{
	conect();
	console.log("conected jjj");
})

/*const ser = http.createServer((req,res)=>{
	if (req.url === '/'){
		res.write("hy bello");
		res.end();
	}
})

ser.listen(7000);
console.log("hello");

http.get("http://api.open-notify.org/astros.json",resp => {
	let data ="";
	resp.on('data',ch =>{
		data += ch;
	});

	resp.on("end",()=>{
		let dt = JSON.parse(data);
		console.log(dt)
	});
})
	.on("error",() => {
		console.log("Eror: ");
	});*/