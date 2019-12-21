var a = 0,
  b = 0;
var ch1;
document.getElementById("start").onclick = () => {
  start();
};
document.getElementById("rock").onclick = () => {
  rock();
};

document.getElementById("paper").onclick = () => {
  paper();
};
document.getElementById("scissors").onclick = () => {
  scissors();
};
rock = () => {
  ch1 = "ROCK";
  game();
};
paper = () => {
  ch1 = "PAPER";
  game();
};
scissors = () => {
  ch1 = "SCISSORS";
  game();
};
function start() {
  document.getElementById("row").style.display = "flex";
}
function computerPlay() {
  let choices = ["ROCK", "PAPER", "SCISSORS"];
  let choice = choices[Math.floor(Math.random() * 3)];

  return choice;
}
function game() {
  let ch2;
  ch2 = computerPlay();

  if (ch1 === ch2) {
    document.getElementById(
      "result"
    ).innerText = `You both chose ${ch1}, this round is a draw`;
  } else if (
    (ch1 === "ROCK" && ch2 === "SCISSORS") ||
    (ch1 === "PAPER" && ch2 === "ROCK") ||
    (ch1 === "SCISSORS" && ch2 === "PAPER")
  ) {
    a++;
    document.getElementById("pr").innerHTML = Number(a);
    document.getElementById(
      "result"
    ).innerText = `The computer chose ${ch2} so you win, ${ch1} beats ${ch2}`;
  } else {
    b++;
    document.getElementById("cr").innerHTML = Number(b);
    document.getElementById(
      "result"
    ).innerText = `The computer chose ${ch2} so you lose, ${ch2} beats ${ch1}`;
  }
  if (a == 3) {
    document.getElementById("result").innerText = " ";
    document.getElementById("rule").innerText = "You won!";
    document.getElementById("start").style.display = "none";
    document.getElementById("row").style.display = "none";
  }
  if (b == 3) {
    document.getElementById("result").innerText = " ";
    document.getElementById("rule").innerText = "The computer won!";
    document.getElementById("start").style.display = "none";
    document.getElementById("row").style.display = "none";
  }
}
