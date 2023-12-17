let number = parseInt(window.prompt("Та дурын тоо оруулна уу. Тухайн тоо хүртэлх факториалуудын нийлбэрийг олъё:"));

let factorialSum = (number) => {
    let result = 0;
    let sum = 1;
    for (let i = 1; i <= number; i++) {
        sum *= i;
        result += sum;
    }
    return result;
}

console.log(factorialSum(number));