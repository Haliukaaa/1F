let number = Number(window.prompt("Та дурын тоо оруулна уу: "));

function exponentCalc(n1) {
  let sum = 1;
  for (let i = 0; i < n1; i++) {
    sum = sum * 2;
  }
  return sum;
}

sum = exponentCalc(number);
console.log(sum);
