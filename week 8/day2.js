let array = [1, -2, 3, 4, -1, 2, 1, 4];
let maxSum = [];
let sum = 0;

for (let i = 0; i <= array.length; i++) {
  if (array[i] > array[i + 1]) {
    maxSum.push(array[i]);
    sum += array[i];
  }
}

console.log(maxSum, sum);
