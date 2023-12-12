let number = 81;

function exponentOfTwo(n1) {
  while (n1 > 1) {
    if (n1 % 2 !== 0) {
      return console.log("NO");
    }
    n1 = n1 / 2;
  }
  return console.log("YES");
}

let result = exponentOfTwo(number);
