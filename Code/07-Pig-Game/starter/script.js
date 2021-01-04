'use strict';

// Selecting elements

// We are using '#' because they are id not classes.
const score0El = document.querySelector('#score--0');
// We also can use getelementById. It is a little bit faster than querySelector.
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling dice functionality

btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice rooll
  const diceNumber = Math.trunc(Math.random() * 6) + 1;
  console.log(diceNumber);
  // 2. Display the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${diceNumber}.png`;
  // 3. Check for rolled 1
  if (diceNumber !== 1) {
    // Add the dice to the current score.
    currentScore += diceNumber;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    // If true, switch to next player.
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    // Togle method it will add a class if it's not there and it will remove it if it is already there.
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
