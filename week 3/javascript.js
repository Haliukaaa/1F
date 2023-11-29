const name = "Haliuka";
let age = 25;
let hobby = "Learning languages";
const gender = "Female";
let employedStatus = "Unemployed";
let hungerLevel = "Starving";
let mood = "bored";
console.log("Name: " + name);
console.log("Age: " + age);
console.log("Hobby: " + hobby);
console.log("Gender: " + gender);
console.log("Employment Status: " + employedStatus);
console.log("Hunger Level: " + hungerLevel + " 💀❗️");
console.log("Please take a break, I wanna eat something!!");
console.log("Mood: Bored " + "(" + (mood === "bored") + ")");
console.log("Imagining myself eating something...");
console.log("om nom nom nom 🍛 eating..");
hungerLevel = "Full";
console.log("Hunger Level: " + hungerLevel);
mood = "Happy";
console.log("Mood: " + mood);
console.log(mood !== "bored");
console.log("-------------------------------");
console.log("Basghiin ugsun daalgavar");
const car = "car";
const twelve = 12;
const boolean = true;
const notCar = true;
const notTwelve = true;

let number = 234;
let firstDigit = Math.floor(number / 100);
let secondDigit = Math.floor((number / 10) % 10);
let thirdDigit = number % 10;
console.log(firstDigit + secondDigit + thirdDigit);

console.log("-------------------------------");
console.log("TUESDAY LESSON");

let isRaining = true;
if (isRaining) {
  console.log("gertee baina");
} else {
  console.log("gaduur garna");
}

let numbers = 99;
let bolTegsh = numbers % 2 === 0;

if (bolTegsh) {
  console.log("This number is even");
} else {
  console.log("This number is odd");
}

let n = 61;
let lessThanTen = n > 10;
let isEven = n % 2 === 0;

if (lessThanTen && isEven) {
  console.log("This number is greater than 10 and is even");
} else if (lessThanTen && !isEven) {
  console.log("This number is greater than 10 and is odd");
} else if (!lessThanTen && isEven) {
  console.log("This number is less than 10 and is even");
} else if (!lessThanTen && !isEven) {
  console.log("This number is less than 10 and is odd");
}

let score = 79;

if (score >= 90 && score <= 100) {
  console.log("A");
} else if (score >= 80 && score < 90) {
  console.log("B");
} else if (score >= 70 && score < 80) {
  console.log("C");
} else if (score >= 60 && score < 70) {
  console.log("D");
} else if (score < 60 && score < 60) {
  console.log("F");
} else {
  console.log("Grading invalid");
}

let weekDay = 7;
let dayName;

switch (weekDay) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Yo, write between 1-7 only";
}
console.log(dayName);

if (weekDay === 1) {
  console.log("Monday");
} else if (weekDay === 2) {
  console.log("Tuesday");
} else if (weekDay === 3) {
  console.log("Wednesday");
} else if (weekDay === 4) {
  console.log("Thursday");
} else if (weekDay === 5) {
  console.log("Friday");
} else if (weekDay === 6) {
  console.log("Saturday");
} else if (weekDay === 7) {
  console.log("Sunday");
} else {
  console.log("Yo, please write between 1-7 only");
}

console.log("-------------------------------");
console.log("WEDNESDAY IN-CLASS");

let givenNumber = 50;

if (givenNumber > 0) {
  console.log("This number is positive");
} else {
  console.log("This number is negative");
}

let n1 = 40;
let n2 = 58;
let n3 = 96;

if (n1 > n2 && n1 > n3) {
  console.log("The largest number is: " + n1);
} else if (n2 > n1 && n2 > n3) {
  console.log("The largest number is: " + n2);
} else if (n3 > n1 && n3 > n2) {
  console.log("The largest number is: " + n3);
} else {
  console.log("Two out of the three numbers are equal");
}

let weight = 51;
let height = 153;
let bmi = weight / (height / 100) ** 2;
console.log(bmi);

if (bmi <= 18.5) {
  console.log("Underweight");
} else if (bmi > 18.5 && bmi < 24.9) {
  console.log("Normal weight");
} else if (bmi > 24.9 && bmi < 30) {
  console.log("Overweight");
} else if (bmi > 30) {
  console.log("Obese");
}

let person = "Baldan";
let clockedIn;

switch (person) {
  case "Naraa":
    clockedIn = " Naraa irsen";
    break;
  case "Dulmaa":
    clockedIn = "Dulmaa irsen";
    break;
  case "Baldan":
    clockedIn = "Baldan irsen";
    break;
  case "Galt":
    clockedIn = "Galt irsen";
    break;
  case "Goldon":
    clockedIn = "Goldon irsen";
    break;
  default:
    clockedIn = "Iim hun bhgue, hugshuuuun ZAAAIIILLLL";
    break;
};

console.log(clockedIn);

