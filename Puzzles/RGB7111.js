let n1 = Number(window.prompt("11-д хуваагддаггүй тоонуудын нийлбэрийг олъё.\nТа дурын 4 тоо оруулна уу: "));
let n2 = Number(window.prompt("Та дурын 4 тоо оруулна уу: "));
let n3 = Number(window.prompt("Та дурын 4 тоо оруулна уу: "));
let n4 = Number(window.prompt("Та дурын 4 тоо оруулна уу: "));

function addNumbersNotDivisbleBy11(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 11 !== 0) {
      sum += numbers[i];
    }
  }
  return sum;
}

sum = addNumbersNotDivisbleBy11([n1, n2, n3, n4]);

console.log(
  "11-д хуваагддаггүй тоонуудын нийлбэр: " + sum);
