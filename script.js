let form = document.querySelector(".form-todo");
let inputValue = document.querySelector(".todoinput");
const todoItems = document.querySelector(".todo--items");
const todoLength = document.querySelector(".todo-length span");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let todoListItemsValue = inputValue.value;
  console.log(todoListItemsValue);

  todoItems.innerHTML += `
    <li> 
      <input type = "checkbox" id = "${todoListItemsValue}" />
      <label for = "${todoListItemsValue}">
      ${todoListItemsValue} 
      </label>
     
     </li>
  `;
  inputValue.value = "";

  //   console.log(document.querySelectorAll(".todo--items li").length);
  const todoListLength = document.querySelectorAll(".todo--items li").length;
  todoLength.innerHTML = todoListLength;
});
