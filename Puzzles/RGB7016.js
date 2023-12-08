let day = window.prompt("хоногийг цагт хөрвүүлэх гэж байна.\nТа 'хоног'-ийн утга оруулна уу:");
let hour = window.prompt("Та 'цаг'-ийн утга оруулна уу:");

function ToHoursCalc(n1, n2) {
    let days = n1*24;
    let hours = Number(n2) + Number(days);
    return {
        days: days,
        hours: hours,
    }
};

let result = ToHoursCalc(day, hour)

console.log(result.hours + " цаг");
