'use strict';

let guess = document.querySelector('.guess');
let guessButton = document.querySelector('.enter-guess');
let result = document.querySelector('.result');
let totalGuesses = document.querySelector('.total-guesses');
let restart = document.querySelector('.restart');
let guessCount = 0;
let number = getRandomNum();


/***************************
    Inputs
***************************/

guessButton.addEventListener('click', () => {
    countGuess();
    checkGuess(guess.value.trim());
});

restart.addEventListener('click', () => {
    reset();
});
/***************************
    Functions
***************************/

function getRandomNum() {
    return Math.floor(Math.random() * 50 + 1);
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
        if (guessCount === 1) {
            result.value = `You guessed the number on your first try!`;
        } else {
            result.value = `You guessed the number in ${guessCount} tries!`;
        }
    }
}

function reset() {
    number = getRandomNum();
    guessCount = 0;
    totalGuesses.innerHTML = `Guesses: ${guessCount}`;
    result.value = '';
    guess.value = '';
}