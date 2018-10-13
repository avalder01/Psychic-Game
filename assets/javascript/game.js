
alert("welcome, would you like to play a game?")


var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var loses = 0;
var remainingGuess;
var guessedLetters;
var computerChoice;


resetGame();
display();


document.onkeyup = function(event) {
  var guess = event.key;
  if (guess === computerChoice) {
    win();
  } else if (remainingGuess - 1 === 0) {
    lost();
  } else {
    fail(guess);
  }

  display();
}

function display() {
  var winsP = document.getElementById("wins");
  var losesP = document.getElementById("loses");
  var guessLeft = document.getElementById("guessesLeft");
  var letterGuessed = document.getElementById("guessedSoFar");
  winsP.innerHTML = wins;
  losesP.innerHTML = loses;
  guessLeft.innerHTML = remainingGuess;
  letterGuessed.innerHTML = guessedLetters.join(',');
}

function win() {
  wins++;
  resetGame();
}

function lost() {
  loses++;
  resetGame();
}

function fail(letter) {
  remainingGuess--;
  guessedLetters.push(letter);
}

function resetGame() {
  remainingGuess = 15;
  guessedLetters = [];
  computerChoice = letters[Math.floor(Math.random() * letters.length)];
  console.log("Letter to guess: " + computerChoice);
}

