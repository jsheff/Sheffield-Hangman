/* DOM Elements */

const $playButton = $("#play-button");
const $guessButton = $("#guess-button");
const $hintButton = $("#hint-button");
const $resetButton = $("#reset-button");
const $quitButton = $("#quit-button");
const $keyButtons = $(".key-button");

const $resultsPopUp = $("#results-pop-up");
const $playAgainButton = $("#play-again-button");
const $quitGameButton = $("#quit-game-button");

const $resultTitle = $("#result-title");
const $resultsMessage = $("#results-message");

const $letters = $("#letter-container");
const $guessesLeft = $("#guesses-left");
const $hint = $("#hint");
const $hangmanImageContainer = $("#hangman-image-container");

const $guessInput = $("#guess-input");

/* Constants */

const wordFileURL = "data/words.json";
const maxGuesses = 6;
const maxWords = 100;

/* Variables */

let wordList;
let userGuesses = 0;
let word = "";
let hint = "";
let letterArray = [];
let displayedLetters = [];
let guessedLetters = [];
let randomNumber;
