let randomNumber = Math.floor(Math.random() * 100 + 1);
let tries = 10;
const triess = document.querySelector(".Tries-output");

triess.textContent = `Number of Tries: ${tries}`;
let runGame = true;
function guessNumber() {
  if (!runGame) return;
  //Collect input from the user
  tries--;
  let guess = document.querySelector(".inputs-Values").value;
  let outPut = document.querySelector(".final-output");
  triess.textContent = `Number of Tries: ${tries}`;
  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  if (tries > 0) {
    if (guess > 100 || guess < 0 || guess === "") {
      return (outPut.textContent = "Please enter a number between 1 and 100");
    } else if (guess == randomNumber) {
      //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
      outPut.textContent = `${randomNumber} is correct, You Win!!!`;
      triess.textContent = `It took you ${10 - tries} tries`;
      runGame = false;
    } else if (guess > randomNumber) {
      //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
      outPut.textContent = "Number is too high, try again";
    } else if (guess < randomNumber) {
      //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
      outPut.textContent = "Number is too low, try again";
    }
  } else {
    outPut.textContent = "You Lose, the number was " + randomNumber;
    runGame = false;
  }
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Reset randomNumber
  randomNumber = Math.floor(Math.random() * 100 + 1);
  //Reset users input field
  input = document.querySelector(".inputs-Values").value = "";
  outPut = document.querySelector(".final-output").textContent =
    "Guess a number between 1 and 100";

  //Reset tries, and triesTaken by the user
  tries = 10;
  triess.textContent = `Number of Tries: ${tries}`;
  runGame = true;
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.querySelector(".btnNewGame").addEventListener("click", newGame);
