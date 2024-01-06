
const app = require("express")();
const path = require('node:path'); 
/*
var cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
};
app.use(cors(corsOptions));

app.use(cors());
*/

var http = require("http").createServer(app);
import { io } from "https://cdn.socket.io/4.7.2/socket.io.esm.min.js";

const socket = io();

socket.connect('https://test-igrica.onrender.com/')

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './', 'display.html'));
});

http.listen(8000);
