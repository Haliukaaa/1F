function drag(ev) {
  const task = ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drop(ev) {
  ev.preventDefault();
  const taskID = ev.dataTransfer.getData("text");
  const task = document.getElementById(taskID);
  ev.target.appendChild(task);
}

let element = document.getElementById("task1");

let container = document.querySelector(".container");

let titles = ["In Progress", "Stuck", "Done"];

for (let i = 0; i < 3; i++) {
  const clone = element.cloneNode(true);
  clone.id = "task" + (i + 1);
  let title = clone.querySelector(".title-hero");
  title.textContent = titles[i];
  container.appendChild(clone);
}

const displayVisible = () => {
  let addCardContainer = document.getElementById("add-card-container");
  addCardContainer.classList.add("display-show");
};

// let addCardContainer = document.getElementById("add-card-container");
// addCardContainer.addEventListener("click", () => {
//   addCardContainer.classList.remove("display-show");
// });



 let addToDo = () => {
  const titleInputValue = document.getElementById('title').value;
  console.log(titleInputValue);
  const descriptionInputValue = document.getElementById("description").value;
  const statusInputValue = document.getElementById("status").value;
  const priorityInputValue = document.getElementById("priority").value;
 }