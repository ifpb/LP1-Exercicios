let result = '';

let number = 0;
while (number <= 99) {
  const whiteSpace = number % 10 === 9 ? '\n' : ' ';
  const value = number < 10 ? `0${number}` : number;
  result += value + whiteSpace;
  number++;
}

console.log(result);