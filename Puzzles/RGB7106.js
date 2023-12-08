let number1 = Number(window.prompt("Та дурын тоогоо оруулна уу:"));
let number2 = Number(window.prompt("Та дурын тоогоо оруулна уу:"));
let number3 = Number(window.prompt("Та дурын тоогоо оруулна уу:"));
let number4 = Number(window.prompt("Та дурын тоогоо оруулна уу:"));

function multiplyMoreThan5(numbers) {
  let sum = 1;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 5) {
      sum = sum * numbers[i];
    }
  }
  return sum;
}

let sum = multiplyMoreThan5([number1, number2, number3, number4]);
console.log(sum);
