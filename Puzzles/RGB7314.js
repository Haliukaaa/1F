let number = "9 15";
let split = number.split(" ");
let n1 = parseInt(split[0]);
let n2 = parseInt(split[1]);

function leastCommonMultiple(n1, n2) {
  let lcm = 1;
  for (let i = 2; i <= Math.min(n1, n2); i++) {
    if (n1 % i === 0 && n2 % i === 0) {
      gcf *= i;
    }
  }
  return gcf;
}

let result = greatestCommonMultiple(n1, n2);
console.log("ХИЕХ (" + n1 + ", " + n2 + ") = " + result);
