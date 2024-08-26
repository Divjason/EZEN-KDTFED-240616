const form = document.querySelector("form");
const todoItem = document.querySelector("#todoItem");
const todos = document.querySelector(".todos");

const getLocal = () => {
  let todosContainer;

  if (localStorage.getItem("todos") === null) todosContainer = [];
  else todosContainer = JSON.parse(localStorage.getItem("todos"));

  console.log(todosContainer);

  todosContainer.forEach((todo) => {
    const newLi = document.createElement("li");
    newLi.className = "todo";

    const newSpan = document.createElement("span");
    newSpan.className = "todoContent";
    newSpan.innerText = todo;

    const completeBtn = document.createElement("button");
    completeBtn.className = "completeBtn";
    completeBtn.innerText = "완료";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn";
    deleteBtn.innerText = "삭제";

    newLi.append(newSpan, completeBtn, deleteBtn);
    todos.appendChild(newLi);
    todoItem.value = "";
  });
};

document.addEventListener("DOMContentLoaded", getLocal);

const saveLocal = (todo) => {
  let todos;

  if (localStorage.getItem("todos") === null) todos = [];
  else todos = JSON.parse(localStorage.getItem("todos"));

  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
};

const addTodo = (e) => {
  e.preventDefault();

  if (todoItem.value !== "") {
    const newLi = document.createElement("li");
    newLi.className = "todo";

    const newSpan = document.createElement("span");
    newSpan.className = "todoContent";
    newSpan.innerText = todoItem.value;

    const completeBtn = document.createElement("button");
    completeBtn.className = "completeBtn";
    completeBtn.innerText = "완료";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn";
    deleteBtn.innerText = "삭제";

    newLi.append(newSpan, completeBtn, deleteBtn);
    saveLocal(todoItem.value);
    todos.appendChild(newLi);
    todoItem.value = "";
  }
};

const removeLocal = (todo) => {
  let todosItem;
  if (localStorage.getItem("todos") === null) todosItem = [];
  else todosItem = JSON.parse(localStorage.getItem("todos"));

  const index = todosItem.indexOf(todo.children[0].innerText);
  todosItem.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todosItem));
};

const manageTodo = (e) => {
  const whichButton = e.target.classList[0];
  if (whichButton === "completeBtn") {
    const todoItem = e.target.parentElement;
    todoItem.children[0].classList.toggle("completed");
  } else if (whichButton === "deleteBtn") {
    const todoItem = e.target.parentElement;
    removeLocal(todoItem);
    todoItem.remove();
  }
};

todos.addEventListener("click", manageTodo);

form.addEventListener("submit", addTodo);
