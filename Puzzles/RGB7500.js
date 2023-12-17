let massive = parseInt(window.prompt("Та бүхэл тоон дарааллын гишүүдийн тоог оруулна уу:"));
let numbers = [];

for (let i = 0; i < massive; i++) {
  let num = parseFloat(window.prompt("Та дараалсан тоон утга оруулна уу: " + (i + 1)));
  numbers.push(num);
}

let sum = (n1, n2, n3, n4) => {
    if (massive > numbers.length) {
        return console.log("Уучлаарай, таны оруулсан тоонууд хангалтгүй байна");
    } else {
        let sum = 0;
        for (let i = 0; i < massive; i++) {
            sum += numbers[i];
        }
        return console.log("Таны оруулсан тоонуудын нийлбэр: " + sum);
    }
}

sum(numbers)