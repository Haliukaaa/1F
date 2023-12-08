let floors = Number(window.prompt("Та давхрын тоог оруулна уу."));
let doors = Number(window.prompt("Та нэг давхарт оногдох хаалганы тоог оруулна уу."));
let number = Number(window.prompt("Та хаалганы тоотыг оруулна уу"));

function doorNumberFinder(doors, number) {
  let floorNumber = Math.ceil(number / doors);
  let doorNumber = number % doors;
  doorNumber = doorNumber === 0 ? doors : doorNumber;

  if (floorNumber > 10) {
    console.log("Уучлаарай, та зөвхөн 1-10 хүртэл оруулна уу.");
  } else {
    console.log(
      number + " тоот нь: \n" + floorNumber + " давхрын " + doorNumber + " тоот"
    );
  }
}

doorNumberFinder(doors, number);