const images = [
    "3.jpeg",
    "고먐미.png",
    "도로.jpeg",
    "마을.jpg",
    "굿데이.jpg",
    "무지개.jpg",
    "안녕히계세요.jpg",
    "쿠로미.png",
    "파도.jpg",
    "파도2.png",
    "sky.jpeg",
    "toystory.jpg"
];

const imgdiv = document.querySelector(".imgdiv");
const chosenImg = images[Math.floor(Math.random() * images.length)];
const bgImg = document.createElement("img");

bgImg.src = `img/${chosenImg}`;

imgdiv.appendChild(bgImg);



