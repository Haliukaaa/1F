let a = window.prompt("Та секундын тоо оруулна уу: ");

function secondConverter(n1) {
    let minute = Math.floor(n1/60);
    let second = n1%60;
    let secondToMinutes = (minute + " минут, " + second + " секунд");
    return secondToMinutes;
};

let result = secondConverter(a);

console.log(a + " секунд нь: " + result);