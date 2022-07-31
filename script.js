window.addEventListener("load", () => {
  countElement();
  deleteElement();
});

let form = document.querySelector(".form-todo");
let inputValue = document.querySelector(".todoinput");
const todoItemsWrapper = document.querySelector(".todo--items--wrap");
let todoLength = document.querySelector(".todo-length span");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodos();
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
  <div class="flex items-center justify-center">
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
