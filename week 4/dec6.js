let randomNumber = 56; // Set this to any number you want
let i = 0;

if (randomNumber > 100) {
  console.log("Sorry, insert a number lesser than 100");
} else {
  while (i <= randomNumber) {
    if (i === randomNumber) {
      console.log("Found the number: " + i);
    }
    i++;
  }
}
