// nash_fcc_cip_alg_006.js
// Author: Stewart Nash (nash_)
// Website: freeCodeCamp (fcc_)
// Series: Coding Interview Prep (cip_)
// Subseries: Algorithms (alg_)
// Assignment: Implement Selection Sort (006)
// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-selection-sort

// WARNING: Remove header before submission.

function selectionSort(array) {
  // Only change code below this line
	var length = array.length;

	for (let i = 0; i < length; i++) {
		let index = i;
		for (let j = i + 1; j < length; j++) {
				if (array[j] < array[index]) {
					index = j;				
				}		
		}
		if (index != i) { // Not strictly necessary
			let temporary = array[i];
			array[i] = array[index];
			array[index] = temporary;		
		}
	}

	return array;
  // Only change code above this line
}

// WARNING: Remove footer before submission.

output = selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]);
console.log(output);
