let n1 = Number(window.prompt("Та дурын тоо оруулна уу: "));
let n2 = Number(window.prompt("Та дурын тоо оруулна уу: "));
let n3 = Number(window.prompt("Та дурын тоо оруулна уу: "));
sum = 0;

function findEvenNumbers(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      sum = sum + console.log("YES");
    } else {
      sum = sum + console.log("NO");
    }
  }
}

findEvenNumbers([n1, n2, n3]);
