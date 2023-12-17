let number = 5;

function printUntilTheNumber(n1) {
  for (let i = n1; i > 0; i--) {
    let line = "";
    for (let j = i; j > 0; j--) {
        line += j + " ";
    }
    console.log(line.trim());
  }
}

let result = printUntilTheNumber(number);
