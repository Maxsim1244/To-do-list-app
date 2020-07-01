const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", addToDo);

function addToDo(e) {
  e.preventDefault();

  const toDoDiv = document.createElement("div");
  toDoDiv.classList.add("todo");

  const newToDo = document.createElement("li");
  newToDo.innerText = "adsadsadsad";
  newToDo.classList.add("todo-item");
  toDoDiv.appendChild(newToDo);

  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class = "fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  toDoDiv.appendChild(completedButton);

  const dltdButton = document.createElement("button");
  dltdButton.innerHTML = '<i class = "fas fa-trash"></i>';
  dltdButton.classList.add("complete-btn");
  toDoDiv.appendChild(dltdButton);

  todoList.appendChild(toDoDiv);
}
