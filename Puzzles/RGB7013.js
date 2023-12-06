let minute = window.prompt("Секундруу хөрвүүлэгч:\nТа минутын утга оруулна уу:");
let second = window.prompt("та секундийн утга оруулна уу:");

function minutesToSeconds(n1, n2) {
  let seconds = Number(n1 * 60) + Number(n2);
  return seconds;
}

let result = minutesToSeconds(minute, second);

console.log(result + " секунд");
