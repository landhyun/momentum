const loginForm = document.querySelector("#loginForm");
const logInput = document.querySelector(".nameInput");
const logButton = document.querySelector("button");
const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function pageTurn() {
    window.location.href = "main.html";
}

function handleLoginBtn(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = logInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    paintGreetings(userName);
}

function paintGreetings(userName) {
  greeting.innerText = `${userName}님, 안녕하세요😊`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);


if (savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", handleLoginBtn);
} else {
    paintGreetings(savedUserName);
}

function reset() {
    confirm("모든 데이터가 삭제되어 이전 화면으로 이동합니다."); {
        localStorage.clear();
        window.location.href = "index.html";
    }
}
