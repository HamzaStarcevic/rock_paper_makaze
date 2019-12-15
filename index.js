function computerPlay() {
  let choices = ["ROCK", "PAPER", "SCISSORS"];
  let choice = choices[Math.floor(Math.random() * 3)];

  return choice;
}

function playerChoice() {
  let pchoice = prompt("Rock, paper or scissors?");
  let choice = pchoice.toUpperCase();
  return choice;
}
function game() {
  let ch1, ch2;
  ch2 = computerPlay();
  ch1 = playerChoice();
  if (ch1 === ch2) {
    return "You both chose the same, it's a draw";
  } else if (
    (ch1 === "ROCK" && ch2 === "SCISSORS") ||
    (ch1 === "PAPER" && ch2 === "ROCK") ||
    (ch1 === "SCISSORS" && ch2 === "PAPER")
  ) {
    return `The computer chose ${ch2} so you win, ${ch1} beats ${ch2}`;
  } else {
    return `The computer chose ${ch2} so you lose, ${ch2} beats ${ch1}`;
  }
}
document.write(game());
