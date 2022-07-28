window.addEventListener("load", () => {
    const todoListLength = document.querySelectorAll(".todo--items li").length;
    todoLength.innerHTML = todoListLength;
})

let form = document.querySelector(".form-todo");
let inputValue = document.querySelector(".todoinput");
const todoItems = document.querySelector(".todo--items");
const todoLength = document.querySelector(".todo-length span");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let todoListItemsValue = inputValue.value;
  if (todoListItemsValue == "") {
    alert("Please enter something");
    return;
  }
  console.log(todoListItemsValue);

  todoItems.innerHTML += `
    <li> 
      <input type = "checkbox" id = "${todoListItemsValue}" class = "custom-checkbox"/>
      <label for = "${todoListItemsValue}">
      ${todoListItemsValue} 
      </label>
     
     </li>
  `;
  inputValue.value = "";

  const todoListLength = document.querySelectorAll(".todo--items li").length;
  todoLength.innerHTML = todoListLength;

  
});
