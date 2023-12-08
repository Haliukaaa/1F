let number = Number(window.prompt("Та 2-5 хүртэл тоо оруулна уу: "));

function failOrPass(n1) {
  if (number <= 1 || number > 5) {
    console.log("Уучлаарай, та 2-5 хүртэлх тоо оруулна уу.");
  } else if (number === 3) {
    console.log("Тэнцсэн");
  } else {
    console.log("Тэнцээгүй");
  }
}

let sum = failOrPass(number);
