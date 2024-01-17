// let arr = [2, 3, 5, 4, 7];

// let newArr = [];
// let max = arr[0];
// let sum = 0;
// let result = 0;

// BODOLT #1

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
//   result = sum / arr.length;
// }

// console.log(result2);
// BODOLT #2
// let max = arr[0];
// let arr = [2, 3, 5, 4, 7];

// for (let i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }

// console.log(max);

// END BODOLT #3
// let arr = [2, 3, 5, 4, 7];
// let temp = 0;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//   }
// }

// console.log(arr);

// ENF BODOLT #4

// for (let i = 0; i < arr.length; i++) {
//   newArr += " " + Math.pow(arr[i], 2);
// }
// console.log(newArr);

// END BODOLT # 5
let arr2 = [1, 2, 2, 3, 3, 4, 5, 1];
let newArr = [];

for (let i = 0; i < arr2.length; i++) {
    if (newArr.includes(arr2[i])) {
    } else {
        newArr.push(arr2[i])
    }
}

console.log(newArr);
