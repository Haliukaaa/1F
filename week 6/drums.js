const box1 = document.getElementsByClassName("box")[0];
const box2 = document.getElementsByClassName("box")[1];
const box3 = document.getElementsByClassName("box")[2];
const box4 = document.getElementsByClassName("box")[3];
const box5 = document.getElementsByClassName("box")[4];
const box6 = document.getElementsByClassName("box")[5];
const box7 = document.getElementsByClassName("box")[6];

const crash = () => {
    const audio1 = new Audio("./project-01/project-01/sounds/crash.mp3");
    audio1.play();
}
const kickBass = () => {
  const audio1 = new Audio(
    "./project-01/project-01/sounds/kick-bass.mp3"
  );
  audio1.play();
};
const snare = () => {
  const audio1 = new Audio("./project-01/project-01/sounds/snare.mp3");
  audio1.play();
};
const tom1 = () => {
  const audio1 = new Audio("./project-01/project-01/sounds/tom-1.mp3");
  audio1.play();
};
const tom2 = () => {
  const audio1 = new Audio("./project-01/project-01/sounds/tom-2.mp3");
  audio1.play();
};
const tom3 = () => {
  const audio1 = new Audio("./project-01/project-01/sounds/tom-3.mp3");
  audio1.play();
};
const tom4 = () => {
  const audio1 = new Audio("./project-01/project-01/sounds/tom-4.mp3");
  audio1.play();
};



box1.addEventListener("click", crash);
box2.addEventListener("click", kickBass);
box3.addEventListener("click", snare);
box4.addEventListener("click", tom1);
box5.addEventListener("click", tom2);
box6.addEventListener("click", tom3);
box7.addEventListener("click", tom4);