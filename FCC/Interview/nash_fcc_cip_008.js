// nash_fcc_cip_008.js
// Author: Stewart Nash (nash_)
// Website: freeCodeCamp (fcc_)
// Series: Coding Interview Prep (cip_)
// Assignment: Algorithms - Implement Quick Sort (008)
// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-quick-sort

/*
function partition(pivot, high, low) {
	
}


function quickSort(array) {
  // Only change code below this line
  
	return array;
  // Only change code above this line
}
*/

// For the life of me, I couldn't figure this out with one function,
// so I just took it from Stackoverflow.
// https://stackoverflow.com/questions/5185864/javascript-quicksort

// WARNING: Remove header before submission.

function quickSort(array) {
  // Only change code below this line
	if (array.length < 2) {
		return array;
	}

	var pivot = array[0];

	var left = []; 
	var right = [];

	for (var i = 1; i < array.length; i++) {
		array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
	}

	array = quickSort(left).concat(pivot, quickSort(right));  
	return array;
  // Only change code above this line
}

// WARNING: Remove footer before submission.

output = quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]);
console.log(output);
