const btnContainer = document.querySelector(".btn-container");
const showResult = document.querySelector(".display-result");

let humanScore = 0;
let computerScore = 0;
let round = 0;

btnContainer.addEventListener("click", (e) => {
  let choice = "";
  switch (e.target.id) {
    case "rock-btn":
      choice = "Rock";
      playRound(choice);
      break;
    case "paper-btn":
      choice = "Paper";
      playRound(choice);
      break;
    case "scissors-btn":
      choice = "Scissor";
      playRound(choice);
      break;
  }
});

function getComputerChoice() {
  let option = ["Rock", "Paper", "Scissor"];
  let randomChoice = Math.floor(Math.random() * 3);
  console.log(`Computer's choice is ${option[randomChoice]}`);
  return option[randomChoice];
}

function playGame(choice) {
  const HUMAN_CHOICE = choice;
  const COMPUTER_CHOICE = getComputerChoice();
  console.log(`Your choice is ${choice}`);

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
  console.log(`Your Score: ${humanScore} and Computer Score: ${computerScore}`);
}

function playRound(choice) {
  if (round === 0) {
    console.log(`***Round 1***`);
  } else {
    console.log(`***Round ${round + 1}***`);
  }
  playGame(choice);
  round++;
  displayResult();
}

function displayResult() {
  if (round === 5) {
    if (humanScore == computerScore) {
      console.log(
        `Final Result : It's a tie! ${humanScore} by ${computerScore}`
      );
      console.log("Thank you for playing!");
    } else if (humanScore > computerScore) {
      console.log(
        `Final Result : Congratulations. You won! ${humanScore} by ${computerScore}`
      );
      console.log("Thank you for playing!");
    } else {
      console.log(
        `Final Result : Oops. you lost! ${humanScore} by ${computerScore}`
      );
      console.log("Thank you for playing!");
    }
  }
}
