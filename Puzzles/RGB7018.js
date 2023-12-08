let year = window.prompt("Та 'жил'-ийн утгыг оруулна уу:");
let month = window.prompt("та 'сар'-ын утгыг оруулна уу:");

function toMonthsCalc(n1, n2) {
  let months = Number(n1 * 12) + Number(n2);
  return months;
}

let result = toMonthsCalc(year, month);

console.log(result + " сар");
