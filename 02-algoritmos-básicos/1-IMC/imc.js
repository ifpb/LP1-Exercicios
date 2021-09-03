let peso = 60;
let altura = 1.65;
let resultado = "";
let imc = peso / altura ** 2;

if (imc < 18.5) {
  resultado = "Abaixo do peso";
} else if (imc < 25) {
  resultado = "Peso normal";
} else if (bmi < 30) {
  result = "Acima do peso";
} else {
  result = "Obesidade";
}

console.log(resultado)