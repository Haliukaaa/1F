let number = 13;

function toSeasonConverter(n1) {
  if (number > 12) {
    console.log("Та зөвхөн 1-12 хүртэлх тоо оруулна уу.");
  } else if (number >= 3 && number <= 5) {
    console.log("Хавар");
  } else if (number >= 6 && number <= 8) {
    console.log("Зун");
  } else if (number >= 9 && number <= 11) {
    console.log("Намар");
  } else if (number === 12 || number >= 1) {
    console.log("Өвөл");
  } else {
    console.log("Та зөвхөн 1-12 хүртэлх тоо оруулна уу.");
  }
}

let result = toSeasonConverter(number);
