
let n1 = 5;
let n2 = 20;

function soma(a, b){
  return a + b;
}

function subtracao(a, b){
  return a - b;
}

function multiplicacao(a, b){
  return a *b;
}

function divisao(a, b){
  return a/b;
}

console.log('A soma de %d e %d eh igual a %d',n1, n2, soma(n1, n2)); 
console.log('A subtracao de %d e %d eh igual a %d', n1, n2 , subtracao(n1, n2));
console.log('A multiplicacao de %d vezes %d eh igual a %d', n1, n2, multiplicacao(n1, n2));
console.log('A divisao de %d e %d eh igual a %f', n1, n2, divisao(n1, n2));
