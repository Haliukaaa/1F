let taskArray = [];

function countChildElement() {
  const container = document.getElementById("todo-contents");
  let inProgressContents = document.getElementById("inprogress-contents");
  let stuckContents = document.getElementById("stuck-contents");
  let doneContents = document.getElementById("done-contents");

  const count = container.childElementCount;
  const count2 = inProgressContents.childElementCount;
  const count3 = stuckContents.childElementCount;
  const count4 = doneContents.childElementCount;

  let titleNumber = document.querySelector(".title-number");
  let titleNumber2 = document.querySelector(".title-number2");
  let titleNumber3 = document.querySelector(".title-number3");
  let titleNumber4 = document.querySelector(".title-number4");
  titleNumber.textContent = count;
  titleNumber2.textContent = count2;
  titleNumber3.textContent = count3;
  titleNumber4.textContent = count4;
}

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
  let target = ev.target;
  while (target && !target.classList.contains("contents")) {
    target = target.parentElement;
  }
  if (target && target.classList.contains("contents")) {
    target.appendChild(task);
    for (let i = 0; i < taskArray.length; i++) {
      if (taskArray[i].title + i === taskID) {
        const status = target.id.replace("-contents", "");
        taskArray[i].status = status;
        break;
      }
    }
  }
  countChildElement();
}

let container = document.querySelector(".container");

const displayVisible = (status) => {
  let addCardContainer = document.getElementById("add-card-container");
  addCardContainer.classList.add("display-show");

  document.getElementById("status").value = status;
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

const emptyTask = () => {
  let cardTitle = document.getElementById("title");
  let cardDescription = document.getElementById("description");
  cardTitle.value = "";
  cardDescription.value = "";
};

const closeTask = () => {
  const container = document.getElementById("add-card-container");
  container.classList.add("display-none");
  container.classList.remove("display-show");
};

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
              id="${el.title + i}"
              class="content flex-row space-between bg-white radius-5 padding-4 gap-8"
              draggable="true"
              ondragstart="drag(event)"
            >
              <!-- CONTENT ICON is here -->
              <div class="content-icon">
                <div class="circle-border flex flex-center width-height-24" id="check-to-done" onclick="toDone(event)">
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
                  onclick="editWindow(event)"
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

function addToDo() {
  const titleInputValue = document.getElementById("title").value;
  const descriptionInputValue = document.getElementById("description").value;

  const titleInput = document.getElementById("title");
  const button = document.getElementById('add-task');

  if (titleInputValue.trim() === "" || descriptionInputValue.trim() === "") {
    alert("Title and description are required!");
    // button.disabled = true;

    return;
  }
  const statusInputValue = document.getElementById("status").value;
  const priorityInputValue = document.getElementById("priority").value;

  const inputObj = {
    title: titleInputValue,
    description: descriptionInputValue,
    status: statusInputValue,
    priority: priorityInputValue,
  };
  taskArray.push(inputObj);
  render();
  emptyTask();
  closeTask();
}

const deleteWindow = (event) => {
  const xButton = event.currentTarget;
  const contentDiv = xButton.parentElement.parentElement;

  for (let i = 0; i < taskArray.length; i++) {
    const taskId = `${taskArray[i].title + i}`;

    if (taskId === contentDiv.id) {
      taskArray.splice(i, 1);
      break;
    }
  }

  contentDiv.remove();
  countChildElement();
  render();
};

const toDone = (event) => {
  const yesButton = event.currentTarget;
  const contentDiv = yesButton.parentElement.parentElement;
  const done = document.getElementById("done-contents");
  done.appendChild(contentDiv);
  for (let i = 0; i < taskArray.length; i++) {
    if (taskArray[i].title + i === contentDiv.id) {
      taskArray[i].status = "done";
      break;
    }
  }
  countChildElement();
};

// const editWindow = (event) => {
//   const editButton = event.currentTarget;
//   const contentDiv = editButton.parentElement.parentElement;
//   console.log("Edit window enabled");

//   for (let i = 0; i < taskArray.length; i++) {
//     const taskId = `${taskArray[i].title + i}`;

//     if (taskId === contentDiv.id) {
//       const editTitleInput = document.getElementById("edit-title");
//       const editDescriptionInput = document.getElementById("edit-description");
//       const editStatusInput = document.getElementById("edit-status");
//       const editPriorityInput = document.getElementById("edit-priority");

//       editTitleInput.value = taskArray[i].title;
//       editDescriptionInput.value = taskArray[i].description;
//       editStatusInput.value = taskArray[i].status;
//       editPriorityInput.value = taskArray[i].priority;

//       displayEdit();

//       const updateButton = document.getElementById("update-task");
//       console.log("update buttton working");
//       updateButton.addEventListener("click", () => {
//         taskArray[i].title = editTitleInput.value;
//         taskArray[i].description = editDescriptionInput.value;
//         taskArray[i].status = editStatusInput.value;
//         taskArray[i].priority = editPriorityInput.value;

//         closeEdit();
//         render();
//       });

//       console.log(editTitleInput.value);
//     }
//   }

//   countChildElement();
// };


// function displayEdit() {
//   let editCardContainer = document.getElementById("edit-card-container");
//   editCardContainer.classList.add("display-show");
// }

// function closeEdit() {
//   let editCardContainer = document.getElementById("edit-card-container");
//   editCardContainer.classList.remove("display-show");
// }



const setStatus = (status) => {
  document.getElementById("status").value = status;
};

document.getElementById("add-todo").addEventListener("click", () => {
  setStatus("todo");
});

document.getElementById("add-inprogress").addEventListener("click", () => {
  setStatus("inprogress");
});

document.getElementById("add-stuck").addEventListener("click", () => {
  setStatus("stuck");
});

document.getElementById("add-done").addEventListener("click", () => {
  setStatus("done");
});
