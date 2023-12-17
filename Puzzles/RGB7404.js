let number = 5;

function printUntilTheNumber(n1) {
  for (let i = n1; i > 0; i--) {
    let line = "";
    for (let j = n1; j >= i; j--) {
      line += j;
    }
    console.log(line);
  }
}

printUntilTheNumber(number);
