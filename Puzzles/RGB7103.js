let n1 = Number(window.prompt("Гурван тооны хамгийн ихийг олъё.\nТа дурын тоо оруулна уу: "));
let n2 = Number(window.prompt("Та дурын тоо оруулна уу: "));
let n3 = Number(window.prompt("Та дурын тоо оруулна уу: "));

function greaterThanCalc(n1, n2, n3) {
  if ((n1 > n2) && (n1 > n3)) {
    console.log("Гурван тооны хамгийн их нь: " + n1);
  } else if ((n2 > n1) && (n2 > n3)) {
    console.log("Гурван тооны хамгийн их нь: " + n2);
  } else if ((n3 > n1) && (n3 > n2)) {
    console.log("Гурван тооны хамгийн их нь: " + n3);
  } else {
    console.log("Таны оруулсан тоонууд хоорондоо тэнцүү байна");
  };
}

let result = greaterThanCalc(n1, n2, n3);