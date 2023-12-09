let a = window.prompt("Та дурын тоогоо оруулна уу.\nАравтын орныг олж үзүүлье");

function tensPlaceFinder(n1) {
  if (n1 >= 10) {
    let tensPlace = Math.floor(n1 / 10) % 10;
    return tensPlace;
  } else {
    console.log("Уучлаарай, та 2-оос дээш оронтой тоо оруулна уу.");
  }
};

let result = tensPlaceFinder(a);
console.log("Таны оруулсан тооны аравтын орон бол: " + result);
