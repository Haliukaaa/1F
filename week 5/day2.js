let fruits = [
  "Banana",
  "Strawberry",
  "Blueberry",
  "Avocado",
  "Grapes",
  "Pear",
  "Cherry",
  "Peach",
  "Watermelon",
];

let index = 0;
let fruit = "Pear";

function findIndex(fruit, fruits) {
  for (let i = 0; i <= fruits.length; i++) {
    if (fruit === fruits[i]) {
        return i;
    }
  }
}

let result = findIndex(fruit, fruits);
console.log(result);


let joins = "";
let or = "and"
function join (n1, n2) {
    let i = 0;
    while (i < n1.length) {
        joins += n1[i];
        if (i < n1.length - 1) {                                                               
            joins += " " + `${n2}` + " ";
        }
        i++
    }
    return joins
}

let results = join(fruits, or);
console.log(results);

let resultss = "";
function toString (n1) {
    for (let i = 0; i< n1.length; i++) {
        resultss += `${n1[i]}` + " ";
    }
    return resultss
}

let result2 = toString(fruits);
console.log(result2);


let search = "Pear";
let isAvailable;

function includes (n1, n2) {
    for (let i = 0; i < n1.length; i++) {
        if (n1[i] === n2) {
            isAvailable  = true;
        }
    }
    return isAvailable;
}

let idk = includes(fruits, search);
console.log(idk);