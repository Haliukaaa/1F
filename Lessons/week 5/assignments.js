let number =  [1, 3, 5, 22, 89, 46, 17, 31, 59];
let result = 0;

function findMinMax (n1) {
    result = Math.min(...number) + " " + Math.max(...number);
    return result;
}

result = findMinMax(number);
console.log(result);

// let number = [5, 1, 3, 2, 4];

// function sortToLargest(n1) {
//   let result = n1.sort(function (a, b) {
//     return a - b;
//   });
//   return result;
// }

// result = sortToLargest(number);
// console.log(result);
