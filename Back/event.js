const dotenv = require('dotenv');

const express = require('express');
const cors = require("cors");
const connect = require("./db");
const app = express();
dotenv.config();
//databaseconnection
connect();


//milddware

app.use(express.jsom());
app.use(cors());

const port = process.dotenv.PORT || 8080;
app.listen(port, ()=>console.log("port running"));