let floors = Number(window.prompt("Та 1-10 хүртэл ддавхрын тоог оруулна уу."));
let doors = Number(window.prompt("Та 1-4 хүртэл хаалганы тоо оруулна уу."));
let number = Number(window.prompt("Та хаалганы тоог оруулуна уу:"));

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
