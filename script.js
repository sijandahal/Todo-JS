window.addEventListener("load", () => {
  countElement();
  deleteElement();
  addClass();
  clearCompleted();
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
  class="todo--list w-full px-6 py-5 rounded-md bg-dark-desaturated-blue flex items-center justify-between"
>
  <div class="flex items-center event flex-1">
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
  todoLength.innerHTML = document.querySelectorAll(".todo--list").length;
}

function addClass() {
  let todoItems = document.querySelectorAll(".todo--list .event");
  todoItems.forEach((singleTodo) => {
    singleTodo.addEventListener("click", () => {
      singleTodo.classList.toggle("line-through");
    });
  });
}

function clearCompleted() {
  clearButton.addEventListener("click", function () {
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

let filterButtons = document.querySelector(".filter-buttons");

filterButtons.addEventListener("click", (e) => {
  if (e.target.classList.contains("completed")) {
    let todoItems = document.querySelectorAll(".todo--list .event");
    todoItems.forEach((singleTodo) => {
      if (!singleTodo.classList.contains("line-through")) {
        singleTodo.parentNode.style.display = "none";
      }
      else {
        singleTodo.parentNode.style.display = "flex";
      }
    });
  }

  else if (e.target.classList.contains("active")) {
    console.log("hello");
    let todoItems = document.querySelectorAll(".todo--list .event");
    todoItems.forEach((singleTodo) => {
      if (singleTodo.classList.contains("line-through")) {
        singleTodo.parentNode.style.display = "none";
      }
      else {
        singleTodo.parentNode.style.display = "flex";
      }
    });
  }

  else {
    let todoItems = document.querySelectorAll(".todo--list .event");
    todoItems.forEach((singleTodo) => {
      singleTodo.parentNode.style.display = "flex";
    });
  }
});
