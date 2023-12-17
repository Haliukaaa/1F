let massive = parseInt(window.prompt("Та массивын гишүүдийн тоог оруулна уу:"));;
let numbers = [];

for (let i = 0; i < massive; i++) {
  let num = parseFloat(
    window.prompt("Та тоон утга оруулна уу: " + (i + 1))
  );
  numbers.push(num);
}

let sum = (numbers) => {
    let result = 0;
    for (let i = 0; i < massive; i++) {
        result += numbers[i];
    }
    return result;
}

console.log("Таны оруулсан тоонуудын нийлбэр: " + sum(numbers));