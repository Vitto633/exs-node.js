let valorArray = require("./array.js");
let somaPares = function (a){
  let soma = 0;
  for(let i = 0; i< a.length; i++){
    if(a[i] % 2 === 0){
      soma += a[i];
    }
  }
  return soma;
}

module.exports = somaPares(valorArray);