// nash_fcc_cip_003.js
// Author: Stewart Nash (nash_)
// Website: freeCodeCamp (fcc_)
// Series: Coding Interview Prep (cip_)
// Assignment: No Repeats Please (003)
// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/no-repeats-please

/*
// WARNING: The platform is broken. Therefore, I used the provided solution instead of my own.
// The provided solution follows:

function permAlone(str) {
  // Create a regex to match repeated consecutive characters.
  var regex = /(.)\1+/;

  // Split the string into an array of characters.
  var arr = str.split("");
  var permutations = [];
  var tmp;

  // Return 0 if str contains same character.
  if (str.match(regex) !== null && str.match(regex)[0] === str) return 0;

  // Function to swap variables' content.
  function swap(index1, index2) {
    tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
  }

  // Generate arrays of permutations using the algorithm.
  function generate(int) {
    if (int === 1) {
      // Make sure to join the characters as we create  the permutation arrays
      permutations.push(arr.join(""));
    } else {
      for (var i = 0; i != int; ++i) {
        generate(int - 1);
        swap(int % 2 ? 0 : i, int - 1);
      }
    }
  }

  generate(arr.length);

  // Filter the array of repeated permutations.
  var filtered = permutations.filter(function(string) {
    return !string.match(regex);
  });

  // Return how many have no repetitions.
  return filtered.length;
}

// Test here.
permAlone("aab");
*/

var count = 0;

function createArray(str) {
	let output = [];
	
	for (let i = 0; i < str.length; i++) {
		output.push(str[i]);
	}
	
	return output;
}

function hasRepeat(str) {
	let isRepeated = false;
	let previous = "";
	
	for (let i = 0; i < str.length; i++) {
		if (i == 0) {
			previous = str[0];
		} else {
			if (previous == str[i]) {
				isRepeated = true;
				break;
			}
		}
		previous = str[i];
	}
	
	return isRepeated;
}

function recursivePermutation(agglomeration, set) {
	let length = set.length;
	
	if (length == 1) {
		agglomeration.push(set[0]);
		if (!hasRepeat(agglomeration)) {
			count++;
		}			
	} else {
		for (let i = 0; i < length; i++) {
			let item = set[i];
			let nextSet = set.slice();
			nextSet.splice(i, 1);
			let temporary = agglomeration.slice();
			temporary.push(item);
			recursivePermutation(temporary, nextSet);
		}		
	}
}

function permAlone(str) {
	count = 0;
	agglomeration = [];
	recursivePermutation(agglomeration, createArray(str));
	
	//return str;
	return count;
}

/*
let number = permAlone("aab");
console.log(number);
number = permAlone("aaa");
console.log(number);
number = permAlone("aabb");
console.log(number);
number = permAlone("abcdefa");
console.log(number);
*/