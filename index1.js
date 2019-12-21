var a,
  b = 0;
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
    a++;
    return `The computer chose ${ch2} so you win, ${ch1} beats ${ch2}`;
  } else {
    b++;
    return `The computer chose ${ch2} so you lose, ${ch2} beats ${ch1}`;
  }
}
while (a < 3 || b < 3) {
  game();
  if (a == 3) {
    document.writeln("You win");
  }
  if (b == 3) {
    document.writeln("The computer wins");
  }
}
