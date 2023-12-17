let number = 7;
let sum = "";

function numbersUntilReversed(n1) {
  for (let i = n1; i > 0; i--) {
    sum += " " + i;
  }
  for (let j = 0; j < n1; j++) {
    console.log(sum);
  }
  return sum;
}
let result = numbersUntilReversed(number);
