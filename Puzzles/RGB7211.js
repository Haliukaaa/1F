let number = 3;
let exponent = 5;
let sum = 0;

function exponentCalc (n1, n2) {
    if ((n1 > 10 && n1 < 0) || (n2 > 10 && n2 < 0)) {
        console.log("Уучлаарай, та зөвхөн 1-10 хүртэл тоо оруулна уу.");
    } else {
        for (let i = 0; i <= n2; i++) {
            sum = n1**i;
            console.log(n1 + "^" + i + " = " + sum);
        }
    }
    return sum;
}

sum = exponentCalc(number, exponent);