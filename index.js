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

const displayVisible = () => {
  let addCardContainer = document.getElementById("add-card-container");
  addCardContainer.classList.add("display-show");
};

const displayNone = () => {
  let addCardContainer = document.getElementById("add-card-container");

  window.onclick = function close(event) {
    if (event.target == addCardContainer) {
      addCardContainer.classList.remove("display-show");
    }
  };
};

displayNone();

function countChildElement () {
  const container = document.getElementById("todo-contents");
  const count = container.childElementCount;
  const titleNumber = document.querySelector("title-number");
  titleNumber.textContent = count;
};
taskArray = [];

const render = () => {
  let toDoContents = document.getElementById("todo-contents");
  let inProgressContents = document.getElementById("inprogress-contents");
  let stuckContents = document.getElementById("stuck-contents");
  let doneContents = document.getElementById("done-contents");

  toDoContents.innerHTML = "";
  inProgressContents.innerHTML = "";
  stuckContents.innerHTML = "";
  doneContents.innerHTML = "";

  taskArray.forEach((el, i) => {
    let taskString = `<div
              id="todo-${el.title + i}"
              class="content flex-row space-between bg-white radius-5 padding-4 gap-8"
              draggable="true"
              ondragstart="drag(event)"
            >
              <!-- CONTENT ICON is here -->
              <div class="content-icon">
                <div class="circle-border flex flex-center width-height-24" id="check-to-done" onclick="toDone()">
                  <i class="fa-solid fa-check"></i>
                </div>
              </div>
              <!-- CONTENT TEXT is here -->
              <div class="content-text gap-10 flex-column">
                <div class="content-title bold">${el.title}</div>
                <div class="content-p">${el.description}</div>
                <div
                  class="content-button radius-7 width-35 grey-border text-center"
                >
                  ${el.priority}
                </div>
              </div>
              <!-- CONTENT BUTTONS are here -->
              <div class="content-buttons gap-8 flex-column">
                <div
                  class="x-button circle-border flex flex-center width-height-24"
                  onclick="deleteWindow(event)"
                >
                  <i class="fa-solid fa-x"></i>
                </div>
                <div
                  class="edit-button circle-border flex-center width-height-24 flex"
                >
                  <i class="fa-regular fa-pen-to-square"></i>
                </div>
              </div></div>`;
    switch (el.status) {
      case "todo":
        toDoContents.innerHTML += taskString;
        break;
      case "inprogress":
        inProgressContents.innerHTML += taskString;
        break;
      case "stuck":
        stuckContents.innerHTML += taskString;
        break;
      case "done":
        doneContents.innerHTML += taskString;
        break;
    }
  });
  countChildElement();
};

render();

let addToDo = () => {
  const titleInputValue = document.getElementById("title").value;
  const descriptionInputValue = document.getElementById("description").value;
  const statusInputValue = document.getElementById("status").value;
  const priorityInputValue = document.getElementById("priority").value;

  const contents = document.getElementById("todo-contents");

  const inputObj = {
    title: titleInputValue,
    description: descriptionInputValue,
    status: statusInputValue,
    priority: priorityInputValue,
  };
  taskArray.push(inputObj);
  render();
};

const deleteWindow = (event) => {
  const xButton = event.currentTarget;
  const contentDiv = xButton.parentElement.parentElement;
  contentDiv.style.display = "none";
};

const toDone = () => {
  const yesButton = document.getElementById("check-to-done");
  const contentDiv = yesButton.parentElement.parentElement;
  const done = document.getElementById("done-contents");
  done.appendChild(contentDiv);
};
