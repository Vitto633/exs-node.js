let somaFunc = require("./funcoes/soma.js");
let subFunc = require("./funcoes/subtracao.js");
let multFunc = require("./funcoes/multiplicacao.js");
let divFunc = require("./funcoes/divisao.js");

let n1 = 4;
let n2 = 5;

console.log("A soma de %d e %d eh igual a %d",n1, n2, somaFunc(n1, n2));
console.log("A subtracao de %d e %d eh igual a %d", n1, n2, subFunc(n1, n2));
console.log("A multiplicacaode %d por %d eh igual a %d", n1, n2, multFunc(n1, n2));
console.log("A divisao de %d por %d eh igual a %d", n1, n2, divFunc(n1, n2));