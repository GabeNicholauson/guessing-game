'use strict';

let guess = document.querySelector('.guess');
let guessButton = document.querySelector('.enter-guess');
let result = document.querySelector('.result');
let totalGuesses = document.querySelector('.total-guesses');
let guessCount = 0;
let number = getRandomNum();


/***************************
    Inputs
***************************/

guessButton.addEventListener('click', () => {
    countGuess();
    checkGuess(guess.value.trim());
});
console.log(number);
/***************************
    Functions
***************************/

function getRandomNum() {
    return Math.trunc(Math.random() * 50 + 1);
}

function countGuess() {
    guessCount++;
    totalGuesses.innerHTML = `Guesses: ${guessCount}`;
}

function checkGuess(playerGuess) {
    if (playerGuess === '') {
        result.value = 'Please enter a guess';
    } else if (isNaN(playerGuess)) {
        result.value = 'Please enter a number';
    } else if (playerGuess > number) {
        result.value = 'Too high';
    } else if (playerGuess < number) {
        result.value = 'Too low'
    } else if (Number(playerGuess) === number) {
        result.value = `You guessed the number in ${guessCount} tries!`;
    }
}