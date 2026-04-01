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
  let html =
    '<h2 class="large-heading">Game Over</h2><p>Thank you for playing!</p>';
  $hangmanContainer.html(html);
});

$playAgainButton.on("click", function () {
  location.href = "#hangman";
  location.reload();
});

$quitGameButton.on("click", function () {
  html = '<h2 class="large-heading">Game Over</h2>';
  html += "<p>Thank you for playing!</p>";
  $hangmanContainer.html(html);
  $resultsPopUp.hide();
  location.href = "#hangman";
});

/* Initial Setup */

// hide the results pop-up
$resultsPopUp.hide();

// disable the buttons until the game starts
disableButtons();
