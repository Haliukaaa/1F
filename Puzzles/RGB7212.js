let number = parseInt(window.prompt("Та бүхэл тоо оруулна уу. Тухайн тоо хүртэлх тоонуудын факториалыг олъё:"));

let factorialsUntil = (number) => {
    sum = 1;
    for (let i = 1; i <= number; i++) {
        sum *= i;
        console.log(i + "! = " + sum);
    }
    return sum;
}

factorialsUntil(number);