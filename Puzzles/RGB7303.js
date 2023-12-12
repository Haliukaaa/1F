let number = 34567;
let sum;

function evenDigitAddition (n1) {
    sum = 0;
    let numString = n1.toString();
    for (let i = 0; i <= numString.length; i++) {
        if (Number(numString[i]) % 2 === 0) {
            sum += Number(numString[i]);
        }
    }
    return sum;
}

let result = evenDigitAddition(number)
console.log("Таны оруулсан тооны тэгш цифрүүдийн нийлбэр: " + result);
