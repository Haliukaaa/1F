let number = Number(window.prompt("Та дурыын тоогоо оруулна уу:"));
let result = "";

function untilNumberFinder (n1) {
    for (let i = 0; i < number; i++) {
        result += i + " ";
    }
    return result
}

result = untilNumberFinder(number);
console.log(result);