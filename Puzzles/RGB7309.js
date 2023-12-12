let number = window.prompt("Та дурын тоо оруулна уу.\nПалиндром эсэхийг шалгая:");

function palindromeCalc (n1) {
    n1 = n1.toString().split("");
    if (n1 === n1.reverse()) {
        return console.log("YES");
    } else {
        return console.log("NO");
    }
}


let result = palindromeCalc(number);