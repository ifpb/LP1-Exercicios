let result = '';

let number = 0;
do {
  const whiteSpace = number % 10 === 9 ? '\n' : ' ';
  const value = number < 10 ? `0${number}` : number;
  result += value + whiteSpace;
  number++;
} while (number <= 99);

console.log(result);