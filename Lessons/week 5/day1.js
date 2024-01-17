let str = "baasan dashnyam";
let split = str.split(" ");
let firstName = split[0];
let lastName = split[1];
firstName = upperCase(firstName);
lastName = upperCaseName(lastName);

console.log(firstName + ". " + lastName);

function upperCase(n1) {
  return (n1 = n1.replace(n1, n1[0].toUpperCase()));
}

function upperCaseName(n1) {
  return (n1 = n1.replace(n1[0], n1[0].toUpperCase()));
}

let person = {
  name: "Khaliun",
  lastName: "Bayandalai",
  age: 25,
  employed: "Unemployed",
};

console.log(Object.keys(person));
console.log(Object.values(person));
