let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log(SOMA);

/* 
O loop vai "RODAR" enquanto K < 13, ou seja até K for 12. 
E a cada vez que ele "RODAR", é incrementado a variável soma o valor de K.
Por isso No último ciclo, K se torna 13 e SOMA se torna a soma de todos os números de 1 a 13.
RESULTADO FINAL DA VARIÁVEL SOMA TERÁ QUE SER 91
*/