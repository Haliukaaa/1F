let number = 5;

function printUntilTheNumber(n1) {
  let line = "";
  for (let i = n1; i > 0; i--) {
    for (let j = i; j > 0; j--) {
      line += j + " ";
    }
    console.log(line.trim());
    line = "";
  }
}

let result = printUntilTheNumber(number);
