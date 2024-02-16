const express = require('express');
const server = express();

server.get("/", function(req, res){
  res.send("<h1 style='text-align:center'>Selecione a rota nome e insira seu nome, cargo e cor favorita como parametro</h1>")
})

server.get("/nome/:nome/:cargo/:cor", function(req, res){
  res.send("<h1 style='text-align:center'>Ola "+ req.params.nome + "</h1><br>" + "<h2 style='text-align:center'>Seu cargo eh: "+ req.params.cargo + "</h2><br>" + "<h3 style='text-align:center'> Sua cor favorita eh:" + req.params.cor + "</h3>");
})

server.listen(8080, function(req, res){
  console.log('Servidor rodando...')
})