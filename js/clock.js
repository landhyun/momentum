const today = document.querySelector("h2#today");
const clock = document.querySelector("h2#clock");

function getToday() {
    const date = new Date();
    const year = String(date.getFullYear());
    const month = String(1 + date.getMonth()).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    today.innerText = `${year}년 ${month}월 ${day}일`;
}

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

getToday();
getClock();
setInterval(getClock, 1000);