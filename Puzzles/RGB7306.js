let number = window.prompt("Та дурын тоогоо оруулна уу.\nТооны хамгийн их цифрийг олж үзүүлье:");

function findTheLargestDigit (n1) {
    let digits = n1.toString().split("");
    let max = Math.max(...digits);
    return max;
}

let result = findTheLargestDigit(number);
console.log(result);
