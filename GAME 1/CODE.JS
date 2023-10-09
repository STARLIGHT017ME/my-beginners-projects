const computerdisplay = document.getElementById("com-input");
const playerdisplay = document.getElementById("p1-input");
const resultdisplay = document.getElementById("result-input");
const choices = document.querySelectorAll("button");

let player;
let computer;
let result;

choices.forEach((choice) =>
  choice.addEventListener("click", () => {
    player = choice.innerText;
    playerdisplay.innerHTML = player;
    computerchoice();
    resultdisplay.innerHTML = checkwinner();
  })
);
computerchoice = () => {
  const randomnumber = Math.floor(Math.random() * choices.length) + 1;
  switch (randomnumber) {
    case 1:
      computer = "ROCK";
      break;
    case 2:
      computer = "SCISSORS";
      break;
    case 3:
      computer = "PAPER";
      break;
    default:
      break;
  }
  computerdisplay.innerHTML = computer;
};
checkwinner = () => {
  if (computer === player) return "DRAW";
  else if (computer === "ROCK")
    return player === "SCISSORS" ? "YOU LOSE!!" : "YOU WIN";
  else if (computer === "SCISSORS")
    return player === "PAPER" ? "YOU LOSE!!" : "YOU WIN";
  else if (computer === "PAPER")
    return player === "ROCK" ? "YOU LOSE!!" : "YOU WIN";
};
