'use strict';
/*

// To get an element from the html 'document.querySelector('.class' or '#id')'
console.log(document.querySelector('.message'));

// To get the text of an element from the html
console.log(document.querySelector('.message').textContent);

// DOM is document object model. It allows JavaScript to access html elements and styles to manipulate them.

// We can change any element in our page using the DOM
document.querySelector('.message').textContent = 'Correct Number! 🎉';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// To get/set the value of an input we use .value
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/

// We need an event listener to handle click events

// In the first element of addEventListener it goes the type of event, in the sencond argument we pass a function
let secretNumber = generateSecretNumber();
console.log(secretNumber);
let score = 20;
let highscore = 0;

function generateSecretNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const changeBodyBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const changeNumberWidth = function (widthSize) {
  document.querySelector('.number').style.width = widthSize;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // No input
  if (!guess) {
    displayMessage('⛔ No number!');
    // Correct answer
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    // Modifying CSS styles with DOM
    // Since body has no class selector we just write the name of the label
    changeBodyBackgroundColor('#60b347');
    changeNumberWidth('30rem');

    displayNumber(secretNumber);
    // Show the high score.
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // Guess is different from secret number
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('😭 You lost the game!');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = generateSecretNumber();
  displayMessage('Start guessing...');
  displayScore(score);
  displayNumber('?');
  document.querySelector('.guess').value = '';
  changeBodyBackgroundColor('#222');
  changeNumberWidth('15rem');
});
