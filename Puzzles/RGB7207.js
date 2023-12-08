let number1 = Number(window.prompt("Та дурын тоо оруулна уу: "));
let number2 = Number(window.prompt("Та дурын тоо оруулна уу: "));

function multiplyByNTimes(n1, n2) {
    let sum = 0;
    for (i = 0; i <= n2; i++) {
        sum = Number(n1) * Number(i);
    }
    return sum;
}

sum = multiplyByNTimes(number1, number2);
console.log(number1 + " * " + number2 + " = " + sum);
