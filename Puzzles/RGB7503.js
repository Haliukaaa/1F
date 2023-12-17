let massive = parseInt(window.prompt("Та массив дахь элементийн тоог оруулна уу:"));
let numbers = [];

for (let i = 0; i < massive; i++) {
  let num = parseFloat(
    window.prompt("Та массив дахь тоог оруулна уу: " + (i + 1))
  );
  numbers.push(num);
}

let oddOrEvenSum = (numbers) => {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            sum1 += numbers[i]
        } else if (numbers[i] % 2 === 0) {
            sum2 += numbers[i];
        }
    }
    if (sum1 > sum2) {
      return console.log("YES");
    } else {
      return console.log("NO");
    }
}
oddOrEvenSum(numbers);