'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const currentScore0El = document.querySelector('#score--0');
const currentScore1El = document.querySelector('#score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

let currentScore = 0;
//Starting conditions

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Rolling dice functionality

btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // 2. Display the dice

  diceEl.src = `dice-${dice}.png`;
  diceEl.classList.remove('hidden');
  // 3.Check for rolled 1: if true, switch to next player

  if (dice !== 1) {
    // Add the value to the current score
    currentScore += dice;
    currentScore0El.textContent = currentScore;
    current0El.textContent = currentScore;
  } else {
    // Switch to next player
  }
});
