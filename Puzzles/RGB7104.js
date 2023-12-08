let number1 = 45;
let number2 = 34;
let number3 = 45;
let number4 = 1;

function lesserThanCalc(n1, n2, n3, n4) {
  if ((n1 < n2) && (n1 < n3) && (n1 < n4)) {
    console.log("Дөрвөн тооны хамгийн бага нь: " + n1);
  } else if ((n2 < n1) && (n2 < n3) && (n2 < n4)) {
    console.log("Дөрвөн тооны хамгийн бага нь: " + n2);
  } else if ((n3 < n1) && (n3 < n2) && (n3 < n4)) {
    console.log("Дөрвөн тооны хамгийн бага нь: " + n3);
  } else if ((n4 < n1) && (n4 < n2) && (n4 < n3)) {
    console.log("Дөрвөн тооны хамгийн бага нь: " + n4);
  } else {
    console.log("Таны оруулсан тоонууд хоорондоо тэнцүү байна");
}
}

let result = lesserThanCalc(number1, number2, number3, number4);
