let floors = 5;
let tunnel = 3;
let doors = 3;
let number = 32;

function doorNumberFinder(n1, n2, n3, n4) {
  let doorsInTunnel = n1 * n3;
  let tunnelNumber = Math.ceil(n4 / doorsInTunnel);
  let remainingDoor = n4 % n2;
  let floorNumber = Math.ceil(remainingDoor / n3);
  let doorNumber = remainingDoor % n3;
  if (floorNumber > 10) {
    console.log("Уучлаарай, та зөвхөн 1-10 хүртэл оруулна уу.");
  } else {
    console.log(number + " тоот нь: \n" + tunnelNumber +" орцны " +floorNumber +" давхрын " +doorNumber +" тоот");
  }
  return {
    doorsInTunnel: doorsInTunnel,
    tunnelNumber: tunnelNumber,
    remainingDoor: remainingDoor,
    floorNumber: floorNumber,
    doorNumber: doorNumber,
  };
}

doorNumberFinder(floors, tunnel, doors, number);
