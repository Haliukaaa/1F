let number = 7;

function numbersUntil(n1) {
  let sum = "";
  for (let i = 1; i <= n1; i++) {
    sum += " " + i;
  }
  for (let j = 1; j <= n1; j++) {
    console.log(sum);
  }
  return sum;
}
let result = numbersUntil(number);