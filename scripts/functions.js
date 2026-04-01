function startGame(data) {
  // Initialize game state
  displayedLetters = [];
  guessedLetters = [];

  enableButtons();

  // choose the word and hint from the data
  randomNumber = Math.floor(Math.random() * maxWords);
  word = data[randomNumber].word;
  hint = data[randomNumber].hint;
  letterArray = word.split("");

  // display the dashes for each letter in the word
  for (let i = 0; i < word.length; i++) {
    displayedLetters.push("-");
    $letters.append('<div class="letter">' + displayedLetters[i] + "</div>");
  }

  $guessesLeft.text("Guesses left: " + userGuessesLeft);
}

function submitGuess(event) {
  event.preventDefault();

  const guess = $guessInput.val().toUpperCase();
  // clear the input field
  $guessInput.val("");

  // check if the letter has already been guessed
  if (guessedLetters.includes(guess)) {
    //.log("You already guessed that letter!");
    return;
  } else {
    guessedLetters.push(guess);
    $(`#btn-${guess.toLowerCase()}`).prop("disabled", true);

    // check if the guess is correct
    let correctGuess = false;
    for (let i = 0; i < letterArray.length; i++) {
      if (letterArray[i] === guess) {
        displayedLetters[i] = guess;
        correctGuess = true;
      }
    }
    if (correctGuess) {
      //console.log("Correct guess!");
      // display the blank spaces for the word
      for (let i = 0; i < word.length; i++) {
        $letters.children().eq(i).text(displayedLetters[i]);
      }
    } else {
      //console.log("Wrong guess!");
      userGuessesLeft--;
      $guessesLeft.text("Guesses left: " + userGuessesLeft);
    }

    // check if player has won
    if (displayedLetters.includes("-") === false) {
      disableButtons();
      $resultTitle.text("You Win!");
      $resultsMessage.text(
        `You guessed the word ${word} with ${userGuessesLeft} guesses left!`,
      );
      $resultsPopUp.show();
    }

    // check if player has lost
    if (userGuessesLeft === 0) {
      disableButtons();

      $resultTitle.text("You Lose!");
      $resultsMessage.text(
        `The correct word is ${word}. Would you like to try again?`,
      );
      $resultsPopUp.show();
    }
  }
}

function disableButtons() {
  $keyButtons.each(function () {
    $(this).prop("disabled", true);
  });

  $guessButton.prop("disabled", true);
  $hintButton.prop("disabled", true);
  $resetButton.prop("disabled", true);
  $quitButton.prop("disabled", true);
}

function enableButtons() {
  $keyButtons.each(function () {
    $(this).prop("disabled", false);
  });

  $guessButton.prop("disabled", false);
  $hintButton.prop("disabled", false);
  $resetButton.prop("disabled", false);
  $quitButton.prop("disabled", false);
}
