let a = window.prompt("2 оронтой тооны цифрүүдийн үржвэрийг олъё.\nДурын 2 оронтой тоогоо оруулна уу:");

function digitMultiplier(n1) {
    if (n1 >= 10 && n1 < 100) {
        firstDigit = Math.floor(n1 / 10) % 10;
        secondDigit = n1 % 10;
        digitMultiplied = firstDigit * secondDigit;
        return digitMultiplied;
    } else {
        console.log("Та зөвхөн 2 оронтой тоо оруулна уу.");
    }
};

digitMultiplier(a);
console.log(digitMultiplied);