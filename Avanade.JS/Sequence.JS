// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

//let lines = gets().split("\n");
let n = 5 // parseInt(lines.shift());

//TODO: Complete os espaços em branco com uma possível solução para o desafio

for (let i = 1; i <= n; i++) {
  console.log(`${i} ${i ** 2} ${i ** 3}`);
  console.log(`${i} ${i ** 2 + 1 } ${i ** 3 + 1 }`);
}