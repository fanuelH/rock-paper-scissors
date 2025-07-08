function getPlayerChoice(player) {
  let choice = prompt(
    `${player} Please Enter R for "Rock" or P  for "Paper" or S for "Scissor"`
  );

  if (!choice) {
    console.log("Invalid Input. Please Try Again!");
    return getPlayerChoice(player);
  }

  choice = choice.trim().toUpperCase();

  if (!["R", "P", "S"].includes(choice)) {
    console.log("Invalid Input please. Try Again!");
    return getPlayerChoice(player);
  }

  /*const readableChoice = { R: "Rock", P: "Paper", S: "Scissors" };
    console.log(`${player}'s choice is ${readableChoice[choice]}!`);
    return choice;*/

  switch (choice) {
    case "R":
      console.log(`${player}'s Choice is Rock!`);
      break;
    case "P":
      console.log(`${player}'s Choice is Paper!`);
      break;
    case "S":
      console.log(`${player}'s Choice is Scissors!`);
      break;
    default:
      console.log(
        'Please Enter Correct letter "R for "Rock" or P  for "Paper" or S for "Scissors""'
      );
  }
  return choice;
}

// for playing with your buddy
function multiPlayer() {
  let player1 = getPlayerChoice("Player1");
  let player2 = getPlayerChoice("Player2");
  playGame(player1, player2);
}

// for playing with computer
function getComputerChoice() {
  let choices = ["R", "P", "S"];
  let randomChoice = Math.floor(Math.random() * 3);
  let player1 = getPlayerChoice("player1");
  let computer = choices[randomChoice];
  playGame(player1, computer);
}

/*function playGame(choice1, choice2) {
  if (choice1 === choice2) {
    console.log("It's a tie!");
  } else if (
    (choice1 === "R" && choice2 === "S") ||
    (choice1 === "P" && choice2 === "R") ||
    (choice1 === "S" && choice2 === "P")
  ) {
    console.log("🎉 Congratulations, Player 1 wins!");
  } else {
    console.log("🎉 Congratulations, Player 2 wins!");
  }

  userMenu();
}*/

function playGame(choice1, choice2) {
  if (choice1 === "R" && choice2 === "P") {
    console.log("congratulations Player2 is the winner!");
  } else if (choice1 === "R" && choice2 === "S") {
    console.log("congratulations Player1 is the winner!");
  } else if (choice1 === "P" && choice2 === "R") {
    console.log("congratulations Player1 is the winner!");
  } else if (choice1 === "S" && choice2 === "R") {
    console.log("congratulations Player2 is the winner!");
  } else if (choice1 === "S" && choice2 === "P") {
    console.log("congratulations Player1 is the winner!");
  } else if (choice1 === "P" && choice2 === "S") {
    console.log("congratulations Player2 is the winner!");
  } else {
    console.log("It's a tie!");
  }
  userMenu();
}

function userMenu() {
  let menu = prompt(
    `Menu \n 1. Press "C" to Play with Computer \n 2. Press "M" to Play with Multiplayer or to continue \n 3. Press "Q" or Any Key to quit!`
  );

  if (!menu) {
    console.log("Invalid Input. Please Try Again!");
    userMenu();
  }

  menu = menu.trim().toUpperCase();

  if (menu === null) {
    console.log("Thank for playing. GoodBye!");
  } else if (menu === "M" || menu === "Y") {
    multiPlayer();
  } else if (menu === "C") {
    getComputerChoice();
  } else {
    // window.close();
    console.log("Thank for playing. GoodBye!");
  }
}

userMenu();
