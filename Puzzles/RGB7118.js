let number = Number(window.prompt("Та 1-7 хүртэлх тоо оруулна уу: "));
let dayName;

function weekDayConverter (n1) {
    switch (n1) {
      case 1:
        dayName = "Monday";
        break;
      case 2:
        dayName = "Tuesday";
        break;
      case 3:
        dayName = "Wednesday";
        break;
      case 4:
        dayName = "Thursday";
        break;
      case 5:
        dayName = "Friday";
        break;
      case 6:
        dayName = "Saturday";
        break;
      case 7:
        dayName = "Sunday";
        break;
      default:
        dayName = "Зөвхөн 1-7 гээд байгааан бишшүүүүү!!!!!";
    }
    return dayName;
}

dayName = weekDayConverter(number);
console.log(dayName);