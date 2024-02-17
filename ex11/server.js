const express = require('express');
const server = express();

server.get("/", function(req, res){
  res.send("Hello!");
})

server.get("/sobre", function(req, res){
  res.send("Bem vindos a minha pagina sobre");
})

server.get("/blog", function(req, res){
  res.send("Bem vindo ao meu blog!");
})

server.get("/ola/:cargo/:nome/:cor", function(req, res){
  res.send("Ola " + req.params.nome + " o seu cargo eh " + req.params.cargo + " sua cor favorita eh " + req.params.cor)
})

server.listen(8080, function(req, res){console.log('Server loading...')})