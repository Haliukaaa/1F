let students = [
  {
    name: "Сэд-Эрдэнэ",
    age: 19,
    gender: "male",
  },
  {
    name: "Индра",
    age: 19,
    gender: "female",
  },
  {
    name: "Хатнаа ",
    age: 21,
    gender: "male",
  },
  {
    name: "Тэмүүлэн",
    age: 24,
    gender: "male",
  },
  {
    name: "Намуун",
    age: 23,
    gender: "female",
  },
];

let femaleSum = 0;
let maleSum = 0;
let avg = 0;
let sum = 0;

const genderCount = (arr) => {
  let obj = {};
  arr.forEach((el) => {
    if (obj[el.gender]) {
      obj[el.gender]++;
    } else {
      obj[el.gender] = 1;
    }
  });
  return obj;
};

console.log(genderCount(students));

const ageAverage = (obj) => {
  for (let i = 0; i < obj.length; i++) {
    sum += obj[i].age;
  }
  avg = sum / obj.length;
};

ageAverage(students);
console.log("The average of students' age: " + avg);

const sameAgeFinder = (arr) => {
  let sameAge = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].age == arr[j].age) {
        sameAge.push(arr[i].name, arr[j].name);
      }
    }
  }
  return sameAge;
};
console.log(sameAgeFinder(students));

const insertLastName = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = { ...array[i], lastName: "Hello" };
  }
  return array;
};
console.log(insertLastName(students));
