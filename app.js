
const app = require("express")();
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
  res.sendFile('/home/ema/Desktop/social_game_ifc/code/test-mobile-controller/display.html');
});

http.listen(8000);