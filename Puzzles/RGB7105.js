let number1 = Number(window.prompt("80-аас их тоонуудын нийлбэрийг олъё.\nТа дурын тоогоо оруулна уу:"));
let number2 = Number(window.prompt("Та дурын тоогоо оруулна уу:"));
let number3 = Number(window.prompt("Та дурын тоогоо оруулна уу:"));
let number4 = Number(window.prompt("Та дурын тоогоо оруулна уу:"));

function addMoreThan80(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 80) {
      sum += numbers[i];
    }
  }
  return sum;
}

let sum = addMoreThan80([number1, number2, number3, number4]);
console.log(sum);
