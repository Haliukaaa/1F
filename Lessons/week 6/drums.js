const box1 = document.getElementsByClassName("box")[0];
const box2 = document.getElementsByClassName("box")[1];
const box3 = document.getElementsByClassName("box")[2];
const box4 = document.getElementsByClassName("box")[3];
const box5 = document.getElementsByClassName("box")[4];
const box6 = document.getElementsByClassName("box")[5];
const box7 = document.getElementsByClassName("box")[6];

const sounds = () => {
  const audio1 = new Audio("./project-01/project-01/sounds/crash.mp3");
  const audio2 = new Audio("./project-01/project-01/sounds/kick-bass.mp3");
  const audio3 = new Audio("./project-01/project-01/sounds/snare.mp3");
  const audio4 = new Audio("./project-01/project-01/sounds/tom-1.mp3");
  const audio5 = new Audio("./project-01/project-01/sounds/tom-2.mp3");
  const audio6 = new Audio("./project-01/project-01/sounds/tom-3.mp3");
  const audio7 = new Audio("./project-01/project-01/sounds/tom-4.mp3");
  
  switch (event.key) {
    case "q":
      audio1.play();
      break;
    case "w":
      audio2.play();
      break;
    case "e":
      audio3.play();
      break;
    case "r":
      audio4.play();
      break;
    case "t":
      audio5.play();
      break;
    case "y":
      audio6.play();
      break;
    case "g":
      audio7.play();
      break;
  }
};

document.addEventListener("keydown", sounds);
