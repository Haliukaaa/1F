let number = String(window.prompt("Та дурын тоо оруулна уу: "));
let firstDigit;

if (number > Math.pow(10, 6)) {
    console.log("Уучлаарай, та бага тоо оруулна уу.");
    debugger
} else {
    console.log(number + " тооны ахмад орны цифр нь " + number[0]);
}

console.log(firstDigit);