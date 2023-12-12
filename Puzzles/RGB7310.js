let number = 16;

function exponentOfTwo(n1) {
  while (n1 > 1) {
    if (n1 % 2 !== 0) {
      console.log("NO");
      return false;
    }
    n1 = n1 / 2;
  }
  console.log("YES");
  return true;
}

let result = exponentOfTwo(number);
