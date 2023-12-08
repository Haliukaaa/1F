let n1 = Number(window.prompt("Та дурын тоо оруулна уу: "));
let n2 = Number(window.prompt("Та дурын тоо оруулна уу: "));
let n3 = Number(window.prompt("Та дурын тоо оруулна уу: "));
let n4 = Number(window.prompt("Та дурын тоо оруулна уу: "));

function findDivisbleBy3(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if ((numbers[i] % 3) === 0) {
      sum++;
    }
  }
  return sum;
}

sum = findDivisbleBy3([n1, n2, n3, n4]);

console.log("Таны оруулсан тоонуудаас 3-д хуваагдах нийт " + sum + "ш тоо байна.");
