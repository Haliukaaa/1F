let alphabet = window.prompt("Та дурын жижиг үсэг оруулна уу. Том үсгээр сольё:");

let toUpperCase = (letter) => {
    let upperCase = letter.replace(letter[0], letter[0].toUpperCase());
    return upperCase;
}

console.log(toUpperCase(alphabet));