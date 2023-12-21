const button = document.getElementById("button");
const button2 = document.getElementById("button2");
const body = document.getElementsByTagName("body")[0];
const hero = document.querySelector("#hero");
const paragraph = document.querySelector("#paragraph");
const text = document.querySelector(".text");
let inputOne = document.querySelector(".input-one");
let inputTwo = document.querySelector(".input-two");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const three = document.getElementsByTagName("section")[1];
const yesButton = document.querySelector(".yes");
const noButton = document.querySelector(".no");
const button5 = document.querySelector("#button5");
const number = document.querySelector(".number");
const circleContainer = document.querySelector(".circle-container");


const randomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};

const bgChanger = () => {
  body.style.backgroundColor = randomColor();
};

const textChange = () => {
  hero.innerText = "Pinecone";
  paragraph.innerText = "Did you see the text change? It's magic ✨";
  text.style.backgroundColor = randomColor();
};

const check = () => {
  let answer = document.querySelector(".input-three");

  if (Number(inputOne.value) + Number(inputTwo.value) === Number(answer.value)) {
    alert("Та зөв бодлоо");
    renew();
    answer.value = "";
  } else {
    alert("Уучлаарай, таны бодолт буруу байна");
  }
};

const renew = () => {
  let max = Math.floor(999);
  let min = Math.ceil(100);
  inputOne.value = Math.floor(Math.random() * (max - min) + min);
  inputTwo.value = Math.floor(Math.random() * (max - min) + min);
};

const run = () => {
  let max2 = 90;
  let min2 = 0;
  three.style.top = `${Math.floor(Math.random() * (max2 - min2) + min2)}%`;
  three.style.left = `${Math.floor(Math.random() * (max2 - min2) + min2)}%`;
  three.style.backgroundColor = randomColor();
};

const no = () => {
  alert("medsiimaa");
}

const addCircle = () => {
  circleContainer.innerHTML = "";
  for (let i = 0; i <= Number(number.value); i++) {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circleContainer.appendChild(circle);
    circle.style.backgroundColor = `rgb(100, ${i + 200}, ${20*i})`;
  }
};

renew();

button2.addEventListener("click", textChange);
button.addEventListener("click", bgChanger);
button3.addEventListener("click", check);
button4.addEventListener("click", renew);
yesButton.addEventListener("mouseenter", run);
noButton.addEventListener("click", no);
button5.addEventListener("click", addCircle);
