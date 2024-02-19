const arr = [1, 2, 3, 4, 5];

let oddArr = arr.filter((el) => el % 2 !== 0);
console.log(oddArr);

let square = arr.map((el) => {
    return Math.pow(el, 2)
});
console.log(square);


const fruits = ['apple', 'banana', 'cherry'];
let upperCase = fruits.map((el)=> el.toUpperCase());

console.log(upperCase);

const animals = ['cat', 'dog', 'elephant', 'lion'];
let length4 = animals.filter((el)=> el.length >= 4);
console.log(length4);

const names = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];
let onlyNames = names.map((el)=> el.name);
console.log(onlyNames);


const namesAndNumbers = [1, "apple", true, 42, "banana"];
let filterString = namesAndNumbers.filter((el)=> typeof el ==='string');
console.log(filterString);

const array = [2, 4, 6];
let squared = array.map((el)=> Math.pow(el, 2));
console.log(squared);

const values = [1, 2, 2, 3, 4, 4, 5];
let uniqueValueFilter = values.filter((el, i)=> el !== values[i+1])
console.log(uniqueValueFilter);

const arr1= ['a', 'b', 'c']; 
const arr2=[1, 2, 3];
let combine = arr1.map((el, i)=> el + "-" + arr2[i]);
console.log(combine);