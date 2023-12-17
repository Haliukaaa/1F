let massive = parseInt(window.prompt("Та массив дахь элементийн тоог оруулна уу:"));
let numbers = [];

for (let i = 0; i < massive; i++) {
  let num = parseFloat(window.prompt("Та массив дахь тоог оруулна уу: " + (i + 1)));
  numbers.push(num);
}

let greatestNumberCounter = (numbers) => {
    let max = numbers[0];
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (max < numbers[i]) {
            max = numbers[i];
        } else if (numbers[i] === max) {
            sum++;
        }
    }
    return {
        max: max,
        sum: sum,
    }
}

console.log(greatestNumberCounter(numbers));