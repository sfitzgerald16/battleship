var isSunk = false;

function hitExists(guess) {
  for (let i = 0; i < hits.length; i++) {
    if (hits[i] == guess) {
      return true;
    }
  }
}

// if (confirm('Would you like to play battleship?')) {
//   playBattleship();
// }

function playBattleship() {
  var location1 = Math.floor(Math.random() * 5);
  console.log(location1);
  var location2 = location1 + 1;
  console.log(location2);
  var location3 = location2 + 1;
  console.log(location3);

  var guess;
  var hits = [];
  console.log('hits' + hits);
  var guesses = 0;

  function hitExists(guess) {
    for (let i = 0; i < hits.length; i++) {
      if (hits[i] == guess) {
        return true;
      }
    }
  }


  while (isSunk == false) {
    guess = prompt('Guess a number between 0 and 7');
    if (guess < 0 || guess > 7) {
      alert('That was not a valid number. Please try again.');
      guesses+=1;
    }
    if (hitExists(guess)) {
      alert('A hit was already made there. Try another location.');
      guesses+=1;
    }
    else {
      guesses +=1;
      if (guess == location1 || guess == location2 || guess == location3) {
        alert('Hit!');
        hits.push(guess);
        console.log('hits is now ' + hits);
        if (hits.length == 3) {
          isSunk = true;
          alert('You sank my battleship!');
        }
      }
      else {
        alert('Miss!');
      }
    }
  }
  var accuracy = Math.trunc(100 * (3/guesses));
  alert('You took ' + guesses + ' tries to sink the battleship, which means your shooting accuracy was ' + accuracy + '%');
  if (confirm('Play again?') == true) {
    isSunk = false;
    playBattleship();
  }
}
