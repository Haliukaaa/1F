let month = window.prompt("Сарыг цагт хөрвүүлэх гэж байна.\nТа 'сар'-ын утга оруулна уу:");

function ToYearCalc(n1) {
  let months = Math.floor(n1 /12);
  let resultM = (n1%12);
  return {
    months: months,
    resultM: resultM,
  };
}

let result = ToYearCalc(month);

console.log(result.months + " жил, " + result.resultM + " сар");
