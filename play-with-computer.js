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
  showResult.innerHTML += `Computer's choice is ${option[randomChoice]}<br>`;
  return option[randomChoice];
}

function playGame(choice) {
  const HUMAN_CHOICE = choice;
  const COMPUTER_CHOICE = getComputerChoice();
  showResult.innerHTML += `Your choice is ${choice}<br>`;

  if (HUMAN_CHOICE === COMPUTER_CHOICE) {
    showResult.innerHTML += `It's a tie!<br>`;
  } else if (
    (HUMAN_CHOICE === "Rock" && COMPUTER_CHOICE === "Scissor") ||
    (HUMAN_CHOICE === "Paper" && COMPUTER_CHOICE === "Rock") ||
    (HUMAN_CHOICE === "Scissor" && COMPUTER_CHOICE === "Paper")
  ) {
    showResult.innerHTML += `Congratulations. You won!<br>`;

    humanScore++;
  } else {
    showResult.innerHTML += `Oops. you lost! ${COMPUTER_CHOICE} beats<br>`;

    computerScore++;
  }
  showResult.innerHTML += `Your Score: ${humanScore} and Computer Score: ${computerScore}<br>`;
}

function playRound(choice) {
  if (round === 0) {
    showResult.innerHTML += `***Round 1***<br>`;
  } else {
    showResult.innerHTML += `***Round ${round + 1}***<br>`;
  }
  playGame(choice);
  round++;
  displayResult();
}

function displayResult() {
  if (round === 5) {
    if (humanScore == computerScore) {
      showResult.innerHTML += `Final Result : It's a tie! ${humanScore} by ${computerScore}<br>`;
    } else if (humanScore > computerScore) {
      showResult.innerHTML += `Final Result : Congratulations. You won! ${humanScore} by ${computerScore}<br>`;
    } else {
      showResult.innerHTML += `Final Result : Oops. you lost! ${humanScore} by ${computerScore}<br>`;
    }
    showResult.innerHTML += `Thank you for playing!<br>`;
  }
}
