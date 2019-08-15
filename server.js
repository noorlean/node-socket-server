var express = require("express");
var socket = require("socket.io");

var app = express();

var server = app.listen(7070,function () {
    console.log("Running on port 7070");
});

app.use(express.static("public"));

var io = socket(server);
io.on("connection",function (socket) {
    console.log("connected to socket");
    socket.on("chat",function(data){
        io.sockets.emit("chat", data);
    });
})