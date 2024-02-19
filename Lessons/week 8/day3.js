let object = { a: 1, d: 4, c: 3, b: 5 };

const sortInAscendingOrder = (obj) => {
  let sortedArray = Object.entries(obj).sort();
  return Object.fromEntries(sortedArray);
};

console.log(sortInAscendingOrder(object));

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array);
let reversedArray = [];

const reverseArray = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  return reversedArray;
};
console.log(reverseArray(array));

let string = array.toString("");
let split = string.replaceAll(",", "");
console.log(split);
