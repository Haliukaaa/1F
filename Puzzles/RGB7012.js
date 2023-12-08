let second = window.prompt("Цаг, минут, секундыг бодож олъё. \nТа секундээ оруулна уу:");

function hourMinuteSecondCalc(n1) {
    let hours = Math.floor((n1/60)/60);
    let minutes = Math.floor(hours/60);
    let seconds = n1 % 60;
    return {
        hours: hours,
        minutes: minutes,
        seconds: seconds,
    }
    
};

let result = hourMinuteSecondCalc(second);

console.log(result.hours + " цаг " + result.minutes + " минут " + result.seconds + " секунд");