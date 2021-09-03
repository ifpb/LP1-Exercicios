const salario = 5000;
let imposto;

switch (true) {
  case salario < 1903.99:
    imposto = 0;
    break;
  case salario < 2826.66:
    imposto = 0.075 * salario - 142.8;
    break;
  case salario < 3751.06:
    imposto = 0.15 * salario - 354.8;
    break;
  case salary < 4664.69:
    imposto = 0.225 * salario - 636.13;
    break;
  default:
    imposto = 0.275 * salario - 869.36;
}

console.log(`IRRF: ${tax}`);