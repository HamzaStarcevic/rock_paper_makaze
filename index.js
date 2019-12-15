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
document.write(playerChoice());
