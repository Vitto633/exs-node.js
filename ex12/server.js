const express = require("express");
const server = express();

server.get("/", function(req, res){
  res.sendFile(__dirname + "/html/index.html")
})

server.get("/sobre", function(req, res){
  res.sendFile(__dirname + "/html/sobre.html" ); 
});

server.get("/cores", function(req, res){
  res.sendFile(__dirname + "/html/cores.html");
})

server.listen(8081, function(){console.log("Server loading...")})