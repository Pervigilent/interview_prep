// nash_fcc_cip_alg_005.js
// Author: Stewart Nash (nash_)
// Website: freeCodeCamp (fcc_)
// Series: Coding Interview Prep (cip_)
// Subseries: Algorithms (alg_)
// Assignment: Implement Bubble Sort (005)
// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-bubble-sort

// WARNING: Remove header before submission.

function bubbleSort(array) {
  // Only change code below this line
  var isSorted = false;
  var length = array.length;
  
  do {
  	isSorted = true;
  	for (let i = 0; i < length; i++) {
  		if (i < length - 1) {
  			if (array[i] > array[i + 1]) {
  				isSorted = false;
  				let temporary = array[i];
  				array[i] = array[i + 1];
  				array[i + 1] = temporary;  			
  			}
  		}  	
  	}  
  } while (!isSorted);
  
  return array;
  // Only change code above this line
}

// WARNING: Remove footer before submission.

//output = bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]);
//console.log(output);
