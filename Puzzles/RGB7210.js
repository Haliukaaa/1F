let number = Number(window.prompt("Та 1-10 хүртэл тоо оруулна уу: "));
let sum = 0;

function multiplicationTable (n1) {
    if (n1 < 1 || n1 > 10) {
        console.log("Уучлаарай, та зөвхөн 1-10 хүртэл тоо оруулна уу.");
    } else {
        for (let i = 0; i<= 10; i++) {
            sum = n1 * i;
            console.log(n1 + " x " + i + " = " + sum);
        }
    }
    return sum;
}

sum = multiplicationTable(number);
