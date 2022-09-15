var randomNumber = Math.floor(Math.random() * 10) + 1;

var guesses = 0;

var correctGuess = false;

var guess = 0;

while (!correctGuess && guesses < 9) {
  guess = prompt("I'm thinking of a number between 1 and 10. What is it?");

  guesses++;

  if (parseInt(guess) === randomNumber) {
    correctGuess = true;
  }
}

if (correctGuess) {
  alert(
    "You guessed the number! It took you " +
      guesses +
      " guesses to get the number " +
      randomNumber
  );


} else {
  alert("Sorry. You didn't guess the number. The number was " + randomNumber);
}
