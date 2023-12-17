let number = window.prompt("Та дурын тоо оруулна уу. \nСондгой цифрүүдийн тоог олъё:");
let sum;

function oddDigitFinder (n1) {
    sum = 0;
    numStr = n1.toString();
    for (let i = 0; i < numStr.length; i++) {
        if(numStr[i] % 2 !== 0) {
            sum++;
        }
    }
    return sum;
}

let result = oddDigitFinder(number);
console.log("Таны оруулсан тооны сондгой цифрүүдийн тоо: " + result);