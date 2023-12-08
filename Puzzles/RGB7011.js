let a = window.prompt("Та секундын тоо оруулна уу: ");

function secondConverter(n1) {
    minute = Math.floor(n1/60);
    second = n1%60;
    secondToMinutes = (minute + " минут, " + second + " секунд");
    return secondToMinutes;
};

secondConverter(a);

console.log(secondToMinutes);