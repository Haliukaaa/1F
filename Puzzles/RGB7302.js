let number = Number(window.prompt("Та дурын 3 оронтой тоо оруулна уу:"));

function digitAddition (n1) {
    let firstDigit = Math.floor(n1 / 100) % 10;
    let secondDigit = Math.floor(n1 / 10) % 10;
    let thirdDigit = n1 % 10;
    let digitAdded = firstDigit + secondDigit + thirdDigit;
    return {
        digitAdded
    }
}

let result = digitAddition(number);
console.log(result);