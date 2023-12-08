let number1 = Number(window.prompt("Та дурын тоо оруулна уу: "));

function moreThan10(number1) {
  if (number1 >= 10) {
    return console.log("YES");
  } else {
    return console.log("NO");
  }
}

sum = moreThan10(number1);

console.log(sum);
