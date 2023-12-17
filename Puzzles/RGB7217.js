let number = 6;

let oddOrEvenMultiplier = (number) => {
  let sum = 1;
  if (number % 2 === 0) {
    for (let i = 2; i <= number; i += 2) {
        sum *= i;
    }
  } else if (number % 2 !== 0) {
    for (let i = 1; i <= number; i += 2) {
        sum*= i;
    }
  }
  return sum;
};

console.log(oddOrEvenMultiplier(number));
