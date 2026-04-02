/* 
add event listeners to buttons and key buttons
*/

$playButton.on("click", function () {
  // hide the play button
  $playButton.hide();

  /* Start the game by fetching the word JSON file */
  fetch(wordFileURL)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
    })
    .then(function (data) {
      $guessInput.focus();
      startGame(data);
    });
});

$guessButton.on("click", submitGuess);

$hintButton.on("click", function () {
  $("#hint").text("Hint: " + hint);
});

$resetButton.on("click", function () {
  location.reload();
});

$quitButton.on("click", function () {
  location.href = "game-over.html";
});

$playAgainButton.on("click", function () {
  location.href = "#hangman";
  location.reload();
});

$quitGameButton.on("click", function () {
  $resultsPopUp.hide();
  location.href = "game-over.html";
});

/* Initial Setup */

// disable the buttons until the game starts
disableButtons();
