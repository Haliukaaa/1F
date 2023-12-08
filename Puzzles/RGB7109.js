let n1 = Number(window.prompt("Та дурын тоо оруулна уу: "));
let n2 = Number(window.prompt("Та дурын тоо оруулна уу: "));
let n3 = Number(window.prompt("Та дурын тоо оруулна уу: "));

function find5(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 5) {
      sum++;
    }
  }
  return sum;
}

sum = find5([n1, n2, n3]);

console.log("Тавтай тэнцүү нийт " + sum + "ш тоо байна.");

