
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


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './', 'display.html'));
});

http.listen(8000);
