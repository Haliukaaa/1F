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

let Nas = 21;
let message = Nas >= 18 ? "You are of legal age" : "You are a minor";

console.log(message);

let isApproved = Nas >= 21 ? true : false;

console.log("Is approved for drinking: " + isApproved);

let year = 2024;
let leapYear = year%4===0 ? true:false;
switch (year) {
  case 900:
  case 1900:
  case 2900:
  case 3900:
  case 4900:
  case 5900:
  case 6900:
  case 7900:
  case 8900:
  case 9900:
    leapYear = year % 4 === 0 && year % 400 === 0;
    break;
  default:
    false;
}
console.log(leapYear);

let a1 = 2;
let a2 = 8;
let a3 = 16;
let a4 = 94;

if (a1 > a2 && a1 > a3 && a1 > a4) {
  console.log("The largest number is: " + a1);
} else if (a2 > a1 && a2 > a3 && a2 > a4) {
  console.log("The largest number is: " + a2);
} else if (a3 > a1 && a3 > a2 && a2 > a4) {
  console.log("The largest number is: " + a3);
} else if (a4 > a1 && a4 > a2 && a4 > a3) {
  console.log("The largest number is: " + a4);
} else {
  console.log("Two out of the three numbers are equal");
}


let scoreOneA = 96;
let scoreTwoA = 108;
let scoreThreeA = 89;
let teamA = (scoreOneA + scoreTwoA + scoreThreeA) / 3;

let scoreOneB = 176;
let scoreTwoB = 108;
let scoreThreeB = 99;
let teamB = (scoreOneB + scoreTwoB + scoreThreeB) / 3;



// "Currency converter";
// "ehleed ymar temdegtes hedig hurvuuleh gdg ni orno araas ni MNT, USD, RUB, CNY ymar mungun temdegt hurvuulne hariug gargana uu? ";
// "10 USD-g MNT hurvuul gevel 34600MNT bollo geh met"`Unuudrin hansh
// USD 3450
// MNT 1
// CNY 380
// RUB 38
// `;
// 500 usd => MNT => "180000MNT bolloo"
let balance = 0;
let currencyFrom = window.prompt(
 "End temdegt oruulna uu ? \n1. USD\n2. MNT\n3. CNY\n4 .RUB"
);
switch (currencyFrom) {
 case "1":
 currencyFrom = 3450;
 break;
 case "2":
 currencyFrom = 1;
 break;
 case "3":
 currencyFrom = 480;
 break;
 case "4":
 currencyFrom = 38;
 break;
 default:
 console.log("Buruu orolt");
}
let value = window.prompt("End toon utga oruulna uu ?");
let currencyTo = window.prompt(
 "End temdegt oruulna uu ? \n1. USD\n2. MNT\n3. CNY\n4 .RUB"
);
switch (currencyTo) {
 case "1":
 currencyTo = 3450;
 break;
 case "2":
 currencyTo = 1;
 break;
 case "3":
 currencyTo = 480;
 break;
 case "4":
 currencyTo = 38;
 break;
 default:
 console.log("Buruu orolt");
}
window.alert((currencyFrom * value) / currencyTo);