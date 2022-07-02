const quotes = [
  {
    quote:
      "지금 공부 안 하면 더울 때 더운 데서 일하고 추울 때 추운 데서 일한다.",
  },
  {
    quote: "늦었다고 생각할 때가 늦었다",
  },
  {
    quote: "“내 너 그럴 줄 알았다” 알았으면 제발 미리 말 해줘라",
  },
  {
    quote: "어려운 길은 길이 아니다",
  },
  {
    quote: "즐길 수 없으면 피하라",
  },
  {
    quote: "성공은 1% 재능과 99%의 빽",
  },
  {
    quote: "내일도 할 수 있는 일을 굳이 오늘 할 필요 없다 ",
  },
  {
    quote: "가는 말이 고우면 얕본다",
  },
  { quote: "고생 끝에 골병 난다" },
  {
    quote: "티끌 모아 티끌",
  },
  {
    quote: "한 번 누우면 끝. 지금 많이 사랑하라",
  },
  {
    quote: "결혼은 좋은 짝을 만나는 게 아니라 좋은 짝이 되어주는 거다",
  },
];



function quoteChenage() {
  const quote = document.querySelector(".quote span");

  const newQuote = quotes[Math.floor(Math.random() * quotes.length)];

  quote.innerText = newQuote.quote;
}