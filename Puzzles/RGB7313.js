let number = window.prompt("Та 2 натурал тоог зай аван оруулна уу.\nХИЕХ-г олъё: ");
let split = number.split(" ");
let n1 = parseInt(split[0]);
let n2 = parseInt(split[1]);

function greatestCommonFactor (n1, n2) {
    let gcf = 1;
    for (let i = 2; i <= Math.min(n1, n2); i++) {
      if (n1 % i === 0 && n2 % i === 0) {
        gcf *= i;
      }
    }
    return gcf;
}


let result = greatestCommonFactor(n1, n2);
console.log("ХИЕХ (" + n1+ ", " + n2 + ") = " + result);
