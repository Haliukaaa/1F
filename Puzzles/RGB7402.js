let number = 5;
let sum = "";

function printUntilTheNumber (n1) {
    for (let i = 1; i <= number; i++) {
        sum+= i;
        console.log(sum);
    }
    return sum;
}

let result = printUntilTheNumber(number);