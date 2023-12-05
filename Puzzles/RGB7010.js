let a = window.prompt("3 оронтой тооны цифрүүдийн нийлбэрийг олъё.\nТа дурын 3 оронтой тоогоо оруулна уу:");

function threeDigitMultiplier(n1) {
    firstDigit = Math.floor(n1/100)%10;
    secondDigit = Math.floor(n1/10)%10;
    thirdDigit = n1%10;
    return firstDigit + secondDigit + thirdDigit;
};

let digitsMultiplied = threeDigitMultiplier(a);

console.log("Цифрүүдийн нийлбэр бол: " + digitsMultiplied);