let floors = Number(window.prompt("Та давхрын тоог оруулна уу."));
let orts = Number(window.prompt("Та орцны тоог оруулна уу."));
let doors = Number(window.prompt("Та нэг давхарт оногдох хаалганы тоог оруулна уу."));
let number = Number(window.prompt("Та хаалганы тоотыг оруулна уу"));

function doorNumberFinder(doors, number) {
  let floorNumber = Math.ceil((number / doors));
  let doorNumber = number % doors;
  let ortsNumber = number % orts;
  doorNumber = doorNumber === 0 ? doors : doorNumber;

  if (floorNumber > 10) {
    console.log("Уучлаарай, та зөвхөн 1-10 хүртэл оруулна уу.");
  } else {
    console.log(
      number + " тоот нь: \n" + ortsNumber + " орцны " + floorNumber + " давхрын " + doorNumber + " тоот"
    );
  }
}

doorNumberFinder(doors, number);
