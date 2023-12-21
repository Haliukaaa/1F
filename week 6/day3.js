const box = document.getElementsByClassName("box")[0];
const timer = document.getElementsByClassName("timer")[0];
const start = document.getElementsByClassName("start")[0];
const pause = document.getElementsByClassName("pause")[0];
const renew = document.getElementsByClassName("reset")[0];
const confirm = () => {
  window.confirm("Та үргэлжлүүлэхдээ итгэлтэй байна уу")
    ? console.log("Та үргэлжлүүллээ")
    : console.log("Та үргэлжлүүлсэнгүй");
}

let settimer = "";
const counter = () => {
  let i = 1; 
  settimer = setInterval(() =>{
    timer.innerText = `${i++}`;
  }, 100);
  return settimer
}

const pauser = () => {
   clearInterval(settimer);
}

const renewal = () => {
    timer.innerText = "0";
}

renew.addEventListener("click", renewal);
pause.addEventListener("click", pauser);
start.addEventListener("click", counter);
box.addEventListener("click", confirm);
