let number = 3;
let i = 0;
let exponent = 0;

if (number <= 1000 && number > 1) {
  while (exponent <= 1000) {
    exponent = number ** i;
    if (exponent > 1000) {
      console.log(number + " тооны " + i + " зэрэг нь 1000-аас их байна: " + exponent);
      break;
    }
    i++;
  }
} else {
  console.log("Sorry, invalid number");
}
