let isPar = function (n){
  let resultado;
  if(n%2 == 0){
    resultado = "O numero eh par."
  }
  else{
    resultado = "O numero eh impar."
  }
  return resultado;
}

module.exports = isPar;