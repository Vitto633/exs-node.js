//Primeiro contato com o express

const express = require('express');
const app = express();

app.get("/", function(req, res){
  res.send("Minha primeira rota criada")
})

app.listen(8081, function(){
  console.log("Servidor rodando na url http://localhost:8081");
});
  