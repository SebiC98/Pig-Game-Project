'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const totalScore0El = document.querySelector('#score--0');
const totalScore1El = document.querySelector('#score--1');

const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  totalScore0El.textContent = 0;
  totalScore1El.textContent = 0;
  player0El.classList.add('player-active');
  player1El.classList.remove('player-active');
  currentScore1El.textContent = 0;
  currentScore0El.textContent = 0;
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
//Starting conditions

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Rolling dice functionality

btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. Display the dice

    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove('hidden');
    // 3.Check for rolled 1: if true, switch to next player

    if (dice !== 1) {
      // Add the value to the current score
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    if (currentScore != 0) {
      // 1. Add current score to active player's score
      scores[activePlayer] += currentScore;

      document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer];
      // 2. Check if player's socre is >= 100
      if (scores[activePlayer] >= 100) {
        // Finish the game
        playing = false;
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.add('player--winner');
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.remove('player--active');
        diceEl.classList.add('hidden');
      } else {
        //Switch to the next player
        switchPlayer();
      }
    }
  }
});

btnNew.addEventListener('click', init);
