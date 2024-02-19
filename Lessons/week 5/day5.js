// let numbersObject = {
//   a: 5,
//   b: 10,
//   c: 3,
// };

// let arr = Object.keys(numbersObject);
// console.log(arr);
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//   result += numbersObject[arr[i]];
// }

// console.log(result);

// let stringObject = {
//   name: "john",
//   age: 25,
//   city: "example",
// };

// let values = Object.values(stringObject);
// let name = values[0].toString("");
// let city = values[2].toString("");

// name = name.replace(name[0], name[0].toUpperCase());
// city = city.replace(city[0], city[0].toUpperCase());

// let update = {
//   name: name,
//   city: city,
// };

// let newObject = Object.assign(stringObject, update);
// console.log(newObject);

// let multiplyObject = {
//   a: 2, //4
//   b: 3, //6
//   c: 5, //10
// };

// let factor = 2;
// let result2 = 1;
// let values2 = Object.values(multiplyObject);

// function multiply(n1) {
//   let sum = [];
//   for (let i = 0; i < values2.length; i++) {
//     sum.push(values2[i] * factor);
//   }
//   return sum;
// }

// result2 = multiply(multiplyObject);

// console.log(result2);

const mockObject = {
  name: "Bat",
  age: 42,
  fullName: ["Sondor", "Gerlee"],
  address: { BZD: "16r horoolol" },
  isMarried: true,
};
let result = "";

function assignValuesToPreviousValue(obj) {
  let keys = Object.keys(obj);
  let firstValue = obj[keys[0]];
  for (let i = 0; i < keys.length -1; i++) {
    obj[keys[i]] = obj[keys[i + 1]];
  }
  obj[keys[keys.length -1]] = firstValue;
  return obj;
}

result = assignValuesToPreviousValue(mockObject);
console.log(result);
