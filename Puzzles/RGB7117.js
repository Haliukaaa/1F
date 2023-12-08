let score = 50;

function gradeCalc(n1) {
  if (n1 >= 90 && n1 <= 100) {
    console.log("A");
  } else if (n1 >= 80 && n1 < 90) {
    console.log("B");
  } else if (n1 >= 70 && n1 < 80) {
    console.log("C");
  } else if (n1 >= 60 && n1 < 70) {
    console.log("D");
  } else {
    console.log("F");
  }
}

let result = gradeCalc(score);
