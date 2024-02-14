const express = require('express');
const server = express();

server.get("/", function(req, res){
  res.send("Rota principal")
})

server.get("/secundaria", function(req, res){
  res.send("Rota secundaria")
})

server.listen(8080, function(){
  console.log("Server loading...")
})