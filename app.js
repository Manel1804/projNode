var express= require("express")
var http=require("http")
var bodyParser=require("body-parser")
var indexRouter=require('./Routes/index')
var mongo=require("mongoose")
var path=require("path")
var config=require("./Config/db.json")
mongo.connect(config.url)
.then(()=>console.log("database connected"))
.catch(()=>console.log("database not connected"))

var app=express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "twig");

app.use(bodyParser.json())
app.use("/index", indexRouter)
const server = http.createServer(app, console.log("server run"))
const io=require("socket.io")(server)
io.on("connection",(socket)=>{
    console.log('user connected');
    socket.on("disconnect", () => {
        console.log ("disconnected")
});
});
server.listen(3000);

module.export=app;