let numberOfStudents = parseInt(window.prompt("Та сурагчдын тоог оруулна уу:"));
let grades = [];

for (let i = 0; i < numberOfStudents; i++) {
    let grade = parseFloat(window.prompt("Та сурагчдын дүнг оруулна уу: " + (i + 1)));
    grades.push(grade);
}

let failedStudents = (grades) => {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
      if (grades[i] < 60) {
        sum += i;
      }
    }
    return console.log("Тэнцээгүй сурагчдын тоо: " + sum);
}

console.log(failedStudents(grades));