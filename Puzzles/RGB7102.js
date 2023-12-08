let number1 = 45;
let number2 = 34;

function lesserThanCalc(n1, n2) {
  if (n1 < n2) {
    console.log("Хоёр тооны хамгийн бага нь: " + n1);
  } else if (n2 < n1) {
    console.log("Хоёр тооны хамгийн бага нь: " + n2);
  } else {
    console.log("Таны оруулсан тоонууд хоорондоо тэнцүү байна");
  }
}

let result = lesserThanCalc(number1, number2);
console.log(result);
