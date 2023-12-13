let number = Number(window.prompt("Та дурыын тоогоо оруулна уу:"));
let result = "";
let i = 0;
function repeat (n1) {
    for (let i = 0; i < n1; i++) {
        return result += n1;
    }
    return result;
}

result = repeat(number);
console.log(result);