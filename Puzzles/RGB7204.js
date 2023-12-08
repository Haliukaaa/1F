let number = 5;
let sum = 0;

function addUntilNumber(n1) {
    for (let i = 0; i <= n1; i++) {
        sum += i;
    }
    return sum;
}

sum = addUntilNumber(number)
console.log(number + " хүртэлх тооны нийлбэр: " + sum);