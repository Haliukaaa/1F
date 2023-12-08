let hour = window.prompt("Секундруу хөрвүүлэгч:\nТа 'цаг' оруулна уу:");
let minute = window.prompt("Та минутын утга оруулна уу:");
let second = window.prompt("та секундийн утга оруулна уу:");

function hoursToSeconds(n1, n2, n3) {
  let minutes = Number(n1 * 60) + Number(n2);
  let seconds = minutes * 60 + Number(n3);
  return {
    minutes: minutes,
    seconds: seconds,
  };
}

let result = hoursToSeconds(hour, minute, second);

console.log(result.seconds + " секунд");
