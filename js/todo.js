const todoForm = document.querySelector("#todoForm");
const todoInput = todoForm.querySelector("#todoForm input");
const todoList = document.querySelector("#todoList");

let toDos = [];

const TODOS_KEY = "todos";

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleDeleteBtn(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveTodos();
}

function handleHeartBtn(event) {
    const checkHeart = event.currentTarget;
    if(checkHeart.innerText === "🤍"){
        checkHeart.innerText = "❤️";
    } else {
        checkHeart.innerText = "🤍";
    }
}

function paintTodo(newTodo) {
    const list = document.createElement("li");
    const span = document.createElement("span");
    const btn = document.createElement("button");
    const heart = document.createElement("button");

    span.innerText = newTodo.text;
    list.id = newTodo.id;
    heart.innerHTML = "🤍";
    heart.addEventListener("click", handleHeartBtn);
    btn.innerHTML = "삭제";
    btn.addEventListener("click", handleDeleteBtn);
    list.appendChild(heart);
    list.appendChild(span);
    list.appendChild(btn);
    todoList.appendChild(list);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newToDoObj = {
        text: newTodo,
        id: Date.now()
    };
    toDos.push(newToDoObj);
    paintTodo(newToDoObj);
    saveTodos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

// array처럼 보이는 string 형태
const savedToDos = localStorage.getItem(TODOS_KEY);

// string을 array로 변경
if (savedToDos !== null) {
    const parseToDos = JSON.parse(savedToDos);
    toDos = parseToDos;
    parseToDos.forEach(paintTodo);
}
