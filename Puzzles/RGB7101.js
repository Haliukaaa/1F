let number1 = 45;
let number2 = 34;

function greaterThanCalc (n1, n2) {
    if (n1 > n2) {
        console.log("Хоёр тооны хамгийн их нь: " + n1);
    } else if (n2 > n1) {
        console.log("Хоёр тооны хамгийн их нь: " + n2);
    } else {
        console.log("таны оруулсан тоонууд хоорондоо тэнцүү байна");
    };
    
}

let result = greaterThanCalc(number1, number2)
console.log(result);
