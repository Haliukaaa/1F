let number = 5;

function printUntilTheNumber(n1) {
  for (let i = n1; i > 0; i--) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += j;
    }
    console.log(line);
  }
}

let result = printUntilTheNumber(number);
