// h = 1/1 + 1/2 + ... + 1/n

const tamanho = 10;
let soma = 0;

for (let i = 1; i <= tamanho; i += 1) {
  soma += 1 / i;
}

console.log(`h(10): ${soma}`);