let number = 5;

function factorialFinder (n1) {
    let sum = 1;
    for (let i = 1; i <= n1; i++) {
        sum = sum * i;
    }
    return sum;
}

sum = factorialFinder(number);
console.log("Хараал идсэн хар факториал нь: " + sum);