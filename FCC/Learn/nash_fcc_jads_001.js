// nash_fcc_jads_001.js
// Author: Stewart Nash (nash_)
// Website: freeCodeCamp (fcc_)
// Series: JavaScript Algorithms and Data Structures (jads_)
// Assignment: Basic JavaScript - Counting Cards (001)
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/counting-cards

let count = 0;

function cc(card) {
  // Only change code below this line
  if (typeof(card) == "number") {
    if (card > 1 && card < 7) {
      count += 1;
    } else if (card < 10) {
      count += 0;
    } else if (card == 10) {
      count += -1;
    }
  } else {
    switch(card) {
      case 'J':
      case 'Q':
      case 'K':
      case 'A':
        count += -1;
        break;
    }
  }

  if (count > 0) {
    return (count + " " + "Bet");
  } else {
    return (count + " " + "Hold");
  }
  // Only change code above this line
}

console.log(cc(2));
console.log(cc(3));
console.log(cc(4));
console.log(cc(5));
console.log(cc(6));
