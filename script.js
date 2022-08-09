window.addEventListener("load", () => {
  countElement();
  deleteElement();
  addClass();
  clearCompleted();
  dragElement();
  document.querySelector(".all").classList.add("open");
});

let form = document.querySelector(".form-todo");
let inputValue = document.querySelector(".todoinput");
const todoItemsWrapper = document.querySelector(".todo--items--wrap");
let clearButton = document.querySelector(".clearcomp");
let todoLength = document.querySelector(".todo-length span");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodos();
  addClass();
  deleteElement();
});

function addTodos() {
  let todoListItemsValue = inputValue.value;

  if (todoListItemsValue == "") {
    alert("Please enter something");
    return;
  }
  inputValue.value = "";
  todoItemsWrapper.innerHTML += `
  <div
  class="flex items-center justify-between w-full px-6 py-5 border-b cursor-move border-light-gray todo--list dark:bg-dark-desaturated-blue draggable" draggable = "true"
>
  <div class="flex items-center event cursor-move" >

    <span
      class="check w-6 h-6 items-center justify-center inline-flex rounded-full mr-5 bg-black"
    >
      <img src="./images/icon-check.svg" alt="Checkmark" />
    </span>
    <p>${todoListItemsValue}</p>
  </div>

  <button class="cross">
    <img src="./images/icon-cross.svg" alt="" />
  </button>
</div>
  `;
  countElement();
  dragElement();
}

//addtodos
function deleteElement() {
  const deleteButtons = document.querySelectorAll(".cross");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const parentDiv = button.parentNode;
      parentDiv.remove();
      countElement();
    });
  });
}

function countElement() {
  todoLength.innerHTML = document.querySelectorAll(".todo--list:not(.completed)").length;
}

function addClass() {
  let todoItems = document.querySelectorAll(".todo--list .event");
  todoItems.forEach((singleTodo) => {
    singleTodo.addEventListener("click", () => {
      singleTodo.classList.toggle("line-through");
      singleTodo.parentNode.classList.toggle("completed");
      countElement();
    });
  });
}

function clearCompleted() {
  clearButton.addEventListener("click", () => {
    let todoItems = document.querySelectorAll(".todo--list .event");
    todoItems.forEach((singleTodo) => {
      if (singleTodo.classList.contains("line-through")) {
        singleTodo.parentNode.remove();
        countElement();
      }
    });
  });
}

//filterbuttons
let filterButtonContainer = document.querySelector(".filter-buttons");
let filterButtons = document.querySelectorAll(".filter-buttons a");

filterButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    removeOpenClass();
    button.classList.add("open");
    if (e.target.classList.contains("completed")) {
      let todoItems = document.querySelectorAll(".todo--list .event");
      todoItems.forEach((singleTodo) => {
        if (!singleTodo.classList.contains("line-through")) {
          singleTodo.parentNode.style.display = "none";
        } else {
          singleTodo.parentNode.style.display = "flex";
        }
      });
    } else if (e.target.classList.contains("active")) {
      let todoItems = document.querySelectorAll(".todo--list .event");
      todoItems.forEach((singleTodo) => {
        if (singleTodo.classList.contains("line-through")) {
          singleTodo.parentNode.style.display = "none";
        } else {
          singleTodo.parentNode.style.display = "flex";
        }
      });
    } else {
      let todoItems = document.querySelectorAll(".todo--list .event");
      todoItems.forEach((singleTodo) => {
        singleTodo.parentNode.style.display = "flex";
      });
    }
  });
});

function removeOpenClass() {
  filterButtons.forEach((button) => {
    button.classList.remove("open");
  });
}

//sortable
function dragElement() {
  const draggable = document.querySelectorAll(".todo--list");
  const container = document.querySelector(".todo--items--wrap");
  draggable.forEach((draggable) => {
    draggable.addEventListener("dragstart", () => {
      draggable.classList.add("dragging");
    });

    draggable.addEventListener("dragend", () => {
      draggable.classList.remove("dragging");
    });

    container.addEventListener("dragover", (e) => {
      e.preventDefault();
      const afterElement = getDragAfterElement(container, e.clientY);
      const draggable = document.querySelector(".dragging");
      if (afterElement == null) {
        container.appendChild(draggable);
      } else {
        container.insertBefore(draggable, afterElement);
      }
    });
  });
}

function getDragAfterElement(container, y) {
  const draggableElements = [
    ...container.querySelectorAll(".draggable:not(.dragging)"),
  ];
  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}

//darkmodetoggle

const themeSwitcher = document.querySelector(".mode-switcher");
const header = document.querySelector(".site-header");

themeSwitcher.addEventListener("click", () => {
  if (document.documentElement.classList.contains("dark")) {
    header.style.backgroundImage = "url('../images/bg-desktop-dark.jpg')";
    document.documentElement.classList.toggle("dark");
  } else {
    document.documentElement.classList.toggle("dark");
    header.style.backgroundImage = "url('../images/bg-desktop-light.jpg')";
  }
});
