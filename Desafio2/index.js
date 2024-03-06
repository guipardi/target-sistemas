// Função que calcula a sequência de Fibonacci até um determinado número, no caso oque a pessoa escolher para verificar
function fibonacciSequence(num) {
  let fib = [0, 1];
  let i = 2;
  
  while (fib[i - 1] + fib[i - 2] <= num) {
    fib.push(fib[i - 1] + fib[i - 2]);
    i++;
  }
  
  return fib;
}

// Função que verifica se um número pertence à sequência de Fibonacci
function checkFibonacci(num) {
  const fib = fibonacciSequence(num);
  
  if (fib.includes(num)) {
    return `O número ${num} pertence à sequência de Fibonacci.`;
  } else {
    return `O número ${num} não pertence à sequência de Fibonacci.`;
  }
}

// Número a ser verificado
const number = 3; // Você pode alterar este número para testar diferentes casos

// Verifica se o número pertence à sequência de Fibonacci e imprime o resultado
console.log(checkFibonacci(number));