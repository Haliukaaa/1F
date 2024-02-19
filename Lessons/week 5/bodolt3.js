let arr = [2, 3, 5, 1, 8];
let target = 10;

for (let i = 0; i <= arr.length; i++) {
  for (let j = i + 1; j <= arr.length - 1; j++) {
    if (arr[i] + arr[j] === target) {
      console.log("We found it: " + "[" + arr[i] + "," + arr[j] + "]");
    }
  }
}
