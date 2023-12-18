const button = document.getElementById("button");
const body = document.getElementsByTagName("body")[0];

const randomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};


const bgChanger = () => {
    body.style.backgroundColor = randomColor();
}

button.addEventListener("click", bgChanger);
