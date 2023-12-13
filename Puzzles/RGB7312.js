let number = Number(window.prompt("Та дурын тоогоо оруулна уу.\nФакториал эсэхийг шалгая: "));

function factorialPrint (n1) {
    let i = 1;
    let ans = 0;
    while (n1 > 1) {
        ans = n1 /= i;
        i++;
    }
    if (ans === 1) {
        return console.log(i -1);
    } else {
        return console.log("NO");
    }
}


let result = factorialPrint(number);