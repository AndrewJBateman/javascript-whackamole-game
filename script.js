const holes = document.querySelectorAll('.hole'); //node list, contains 6 holes
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

// give a random length of time between min and max
function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min); 
}

// select a hole at random, return hole number until hole number is the same
function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole){
    console.log('same hole');
    return randomHole(holes);  //recursion
  }
  lastHole = hole;
  return hole;
}

// function to make random mole pop up (css class change) for random time between 0.2 and 1s
function peep() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) peep();
  }, time);
}

// reset scoreboard, timeUp boolean, reset score, run mole pop function, limit to 10sec
function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => timeUp = true, 10000)
}

// function to hit mole and remove up class if hit so mole stays hidden.
// mouseclick event isTrusted means it is a real click.
// increment score and show on scoreboard using textContent
function bonk(e) {
 if(!e.isTrusted) return;
  score++;
  this.classList.remove('up');
  scoreBoard.textContent = score;
}

// add event listener for all mole to run bonk function if hit
moles.forEach(mole => mole.addEventListener('click', bonk));
