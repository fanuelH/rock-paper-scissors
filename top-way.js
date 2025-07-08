let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let option = ["Rock", "Paper", "Scissor"];
  let randomChoice = Math.floor(Math.random() * 3);
  console.log(`Computer's choice is ${option[randomChoice]}`);
  return option[randomChoice];
}

function getHumanChoice() {
  let option = { R: "Rock", P: "Paper", S: "Scissor" };
  let humanChoice = prompt(
    `Please Enter "R" for "Rock" or "P" for "Paper" or "S": "Scissor" `
  );

  if (humanChoice === null) return null;

  humanChoice = humanChoice.trim().toUpperCase();

  if (["R", "P", "S"].includes(humanChoice)) {
    console.log(`Your choice is ${option[humanChoice]}`);
    return option[humanChoice];
  } else {
    console.log("invalid Input. Please try Again!");
    return getHumanChoice();
  }
}

function playRound() {
  const HUMAN_CHOICE = getHumanChoice();

  if (!HUMAN_CHOICE) {
    console.log("Game Cancelled!");
    return;
  }

  const COMPUTER_CHOICE = getComputerChoice();

  if (HUMAN_CHOICE === COMPUTER_CHOICE) {
    console.log("It's a tie!");
  } else if (
    (HUMAN_CHOICE === "Rock" && COMPUTER_CHOICE === "Scissor") ||
    (HUMAN_CHOICE === "Paper" && COMPUTER_CHOICE === "Rock") ||
    (HUMAN_CHOICE === "Scissor" && COMPUTER_CHOICE === "Paper")
  ) {
    console.log("Congratulations. You won!");
    humanScore++;
  } else {
    console.log(`Oops. you lost! ${COMPUTER_CHOICE} beats`);
    computerScore++;
  }
  console.log(`Your Score: ${humanScore} and Computer ${computerScore}`);
}

while (true) {
  playRound();
  if (!confirm("Do you went to continue playing?")) {
    break;
  }
}
console.log("Thank you for playing!");
