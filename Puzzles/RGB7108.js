let n1 = Number(window.prompt("Сондгой тоонуудын үржвэрийг олъё.\nТа дурын 3 тоо оруулна уу: "));
let n2 = Number(window.prompt("Та дурын 3 тоо оруулна уу: "));
let n3 = Number(window.prompt("Та дурын 3 тоо оруулна уу: "));

let i = 0;

function multiplyOddNumbers(numbers) {
  let sum = 1;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      sum *= numbers[i];
    }
  }
  return sum;
}

sum = multiplyOddNumbers([n1, n2, n3]);

console.log("Сондгой тооны үржвэр нь: " + sum);

