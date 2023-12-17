let massive = parseInt(window.prompt("Та массив дахь элементийн тоог оруулна уу:"));
let numbers = [];

for (let i = 0; i < massive; i++) {
    let num = parseFloat(window.prompt("Та массив дахь тоог оруулна уу: " + (i + 1)));
    numbers.push(num);
}

let greatestNumberFinder = (numbers) => {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (max < numbers[i]) {
            max = numbers[i];
        }
    }
    return max;
}

console.log(greatestNumberFinder(numbers));