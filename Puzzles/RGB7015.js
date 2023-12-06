let hour = 44;

function hourToDaysCalc(n1) {
    let days = Math.floor(n1/24);
    let hours = n1 % 24;
    return {
        days: days,
        hours: hours,
    }
}

result = hourToDaysCalc(hour)

console.log(result.days + " хоног " + result.hours + " цаг");